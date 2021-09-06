import React from 'react'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Avatar from '@material-ui/core/Avatar'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import { makeStyles } from '@material-ui/core/styles'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {
  accordionSelector,
  showAccordionSelector,
} from '../../store/Profile/selectors'

import { toggleAccordionAction } from '../../store/Profile/actions'
import './Profile.css'

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

const Profile = () => {
  const classes = useStyles()
  const accordion = useSelector(accordionSelector)
  const showAccordion = useSelector(showAccordionSelector)
  const dispatch = useDispatch()
  console.log({ accordion, showAccordion })

  const handleToggleAccordion = useCallback(() => {
    dispatch(toggleAccordionAction(accordion))
  }, [accordion, dispatch])

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  return (
    <div className="profile">
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
                onClick={handleToggleAccordion}
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
              />
            }
            label="Texts"
          />
        </FormGroup>
      </div>
      {showAccordion && <div>{accordion}</div>}
    </div>
  )
}
export default Profile
