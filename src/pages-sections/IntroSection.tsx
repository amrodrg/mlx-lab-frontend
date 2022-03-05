import {makeStyles} from '@material-ui/core/styles';

// @material-ui/icons
// core components
import styles from '@/styles/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js';
import YouTube from 'react-youtube';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(styles);

export default function IntroSection() {
  const classes = useStyles();

  return(
    <div className={classes.introSection}>
      <div className="flex flex-row ">
        <div className="flex flex-col w-full bg-main-blue">
          <button className=" bg-white rounded-full xl:text-2xl lg:text-xl md:text-lg sm:text-sm  content-center lg:font-bold h-28 m-5 p-2 text-main-blue">
                Build and train your own machine learning model!
          </button>
        </div>
        <div className="w-full">
          <YouTube className="float-right"
            videoId={'QghjaS0WQQU'}/>
        </div>
      </div>
    </div>

  );
}
