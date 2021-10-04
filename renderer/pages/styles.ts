import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";

export const scrollBarStyle = (width: number = 10, radius: number = 5) => ({
  "&::-webkit-scrollbar": {
    width: width
  },
  "&::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 3px rgba(0,0,0,0.3)",
      borderRadius: radius
  },
  "&::-webkit-scrollbar-thumb": {
      borderRadius: radius,
      "-webkit-box-shadow": "inset 0 0 3px rgba(0,0,0,0.5)",
  }
});

export const useStylesOfHome = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: `calc(100vh - 56px)`,
      padding: theme.spacing(1)
    },
    empty: {
      flex: 1,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    list: {
      width: "100%",
      flex: 1,
      overflowY: "auto",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    scrollbar: scrollBarStyle(10, 0),
    fabs: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "& > *": {
        marginLeft: theme.spacing(2)
      },
      position: "fixed",
      bottom: theme.spacing(1.2),
      right: theme.spacing(2),
      left: theme.spacing(0),
    },
    noShadow: {
      backgroundColor: 'transparent',
      boxShadow: 'none'
    },
    fabPlaceholder: {
      height: theme.spacing(5)
    },
    extendedIcon: {
      marginRight: theme.spacing(1)
    },
    snackbar: {
      marginBottom: theme.spacing(10)
    }
  })
);

export const useStylesOfAbout = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      height: `calc(100vh - 64px)`,
      padding: theme.spacing(2)
    }
  })
);

export const useStylesOfSettings = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: `calc(100vh - 64px)`,
      overflowY: 'scroll',
      padding: theme.spacing(2),
      ...scrollBarStyle(0, 0)
    },
    list: {
      width: "100%"
    },
    textField: {
      marginBottom: theme.spacing(2)
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    margin: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  })
);