import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleShowName } from '../../Store/Profile/actions'
import { showNameSelector, nameSelector } from '../../Store/Profile/selectors'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import './Profile.css'
import Accordion from '../../Components/Accordion/Accordion'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },

  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}))

export const Profile = () => {
  const classes = useStyles()
  const showName = useSelector(showNameSelector)
  const name = useSelector(nameSelector)

  const dispatch = useDispatch()

  const setShowName = useCallback(() => {
    dispatch(toggleShowName())
  }, [dispatch])

  return (
    <div className="profile">
      <div>Profile</div>
      <div className="avatar">
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            className={classes.large}
          />
        </ListItemAvatar>
      </div>
      <div>
        <FormGroup className="checkboxes" row>
          <FormControlLabel
            control={
              <Checkbox
                type="checkbox"
                onChange={setShowName}
                checked={showName}
                name="checkedA"
                value={showName}
              />
            }
            label="Texts"
          />
        </FormGroup>
      </div>
      <div>
        <Accordion />
      </div>
      {showName && <div>{name}</div>}
    </div>
  )
}
