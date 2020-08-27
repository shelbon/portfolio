import React from "react"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import { FaHome, FaBriefcase, FaAddressCard } from "react-icons/fa"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles({
  root: {
    width: "100%",
    background: "#11223e",
  },

  selected: {
    color: "white",
  },

  wrapper: {
    color: "#3f51b5",
  },
})
const BottomNav = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        classes={{
          selected: classes.selected,
          wrapper: classes.wrapper,
          label: classes.label,
        }}
        label="Accueil"
        icon={<FaHome />}
      />
      <BottomNavigationAction
        classes={{
          selected: classes.selected,
          wrapper: classes.wrapper,
          label: classes.label,
        }}
        label="Work"
        icon={<FaBriefcase />}
      />
      <BottomNavigationAction
        classes={{
          selected: classes.selected,
          wrapper: classes.wrapper,
          label: classes.label,
        }}
        label="Contact"
        icon={<FaAddressCard />}
      />
    </BottomNavigation>
  )
}
export default BottomNav
