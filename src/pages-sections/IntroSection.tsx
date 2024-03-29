import {makeStyles} from '@material-ui/core/styles';

// @material-ui/icons
// core components
import styles from '@/styles/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js';
import YouTube from 'react-youtube';
import Divider from '../components/IntroSectionComponents/Divider';
import IntroHeader from '../components/IntroSectionComponents/IntroHeader';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles(styles);

export default function IntroSection() {
  const classes = useStyles();

  const opts = {
    height: '535',
    width: '950',
  };

  return(
    <div className={classes.introSection}>
      <IntroHeader/>
      <div className="flex flex-row">

        <div className="flex flex-col w-full bg-main-blue items-center pt-4">
          <button
            onClick={() => {
              window.scrollTo({
                top: 700,
                behavior: 'smooth',
              });
            }}
            className="bg-white rounded-full hover:ring-8 hover:ring-white hover:text-2xl 2xl:hover:text-4xl 2xl:text-3xl xl:text-xl lg:text-md md:text-xs sm:text-xs content-center justify-items-center font-bold h-auto w-auto m-5 p-2 text-main-blue">
            <text className="m-10">MAKE YOUR OWN MACHINE LEARNING MODEL!</text>
          </button>

          <div className="w-full px-16 py-14">
            <Divider/>
          </div>

          <button className="rounded-full 2xl:text-3xl xl:text-xl lg:text-lg md:text-md sm:text-xs  content-center font-bold h-28 p-2 text-white">
            <text className="hover:text-2xl">IMPORT A MODEL</text>
          </button>

        </div>
        <div className="w-full">
          <YouTube className="float-right" opts={opts}
            videoId={'QghjaS0WQQU'}/>
        </div>
      </div>
    </div>

  );
}
