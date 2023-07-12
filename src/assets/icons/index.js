import Arr from './arr.svg'
import Drawer from './drawer.svg'
import Search from './search.svg'
import Filter from './filter.svg'
import Heart from './heart.svg'
import Star from './star.svg'
import HomeBar from './homeBar.svg'





export const MyIcon = (props) => {
    const { name, ...svgProps } = props;

    const Icons = {
        arr: <Arr {...svgProps} />,
        drawer: <Drawer {...svgProps} />,
        search: <Search {...svgProps} />,
        filter: <Filter {...svgProps} />,
        heart: <Heart {...svgProps} />,
        star: <Star {...svgProps} />,
        homeBar: <HomeBar {...svgProps} />
    }
    return Icons[name];
};