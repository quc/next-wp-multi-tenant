import themes, { ThemeKey } from ".";

export function resolveTheme(input?: string): (typeof themes)[ThemeKey] {
    const key = (input && input in themes ? input : 'tubemagnet') as ThemeKey;
    return themes[key];
}