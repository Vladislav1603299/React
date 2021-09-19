import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import ImageListItemBar from '@material-ui/core/ImageListItemBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
import CircularProgress from '@material-ui/core/CircularProgress'
import InfoIcon from '@material-ui/icons/Info'
import { itemData } from './Constants'
import { getGistsAction } from '../../Store/Photos/actions'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 800,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}))

const Photos = () => {
  const classes = useStyles()

  const dispatch = useDispatch()

  const { loading, gists, error } = useSelector((state) => state.photos)

  useEffect(() => {
    handleUpdatePage()
  }, [])

  const handleUpdatePage = () => {
    dispatch(getGistsAction())
  }

  if (loading) {
    return (
      <CircularProgress
        style={{
          margin: '0 auto',
          marginTop: '300px',
        }}
      />
    )
  }

  if (error) {
    return (
      <div
        style={{ margin: '0 auto', marginTop: '300px', textAlign: 'center' }}
      >
        <h3>Произошла ошибка</h3>
        <button onClick={handleUpdatePage}>Обновить</button>
      </div>
    )
  }

  return (
    <div className={classes.root}>
      <ImageList rowHeight={180} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${item.title}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}

export default Photos
