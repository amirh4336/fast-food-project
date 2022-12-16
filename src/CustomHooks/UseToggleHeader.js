import {useEffect ,useState, useCallback} from 'react';

export default function useToggleHeader() {
    const [scrollPosition, setSrollPosition] = useState(window.pageYOffset);
    const [headerState, setHeaderState] = useState(true);

    // for changing scrollPosition and set headerState
    const changeScroll = useCallback(() => {
        const position = window.pageYOffset;
        position > scrollPosition ? setHeaderState(false) :  setHeaderState(true)
        setSrollPosition(position);
    }, [scrollPosition]
    )
    // run changeScroll if screen has scroll
    useEffect(() => {
        window.addEventListener('scroll', changeScroll, { passive: true});

        return () => {
        window.removeEventListener('scroll', changeScroll);
        };
    }, [changeScroll]
    )
    return headerState
}