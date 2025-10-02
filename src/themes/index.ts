import tubemagnet from './tubemagnet';
import instalever from './instalever';
import xgrowlab from './xgrowlab';
import streameredge from './streameredge';
import bolderbook from './bolderbook';
import omgtok from './omgtok';
import earforge from './earforge';
export * from './utils';

const themes = {
    tubemagnet,
    instalever,
    xgrowlab,
    bolderbook,
    streameredge,
    omgtok,
    earforge
}

export type ThemeKey = keyof typeof themes;
export default themes;