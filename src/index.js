import en from './locale/en';
import fr from './locale/fr';
import de from './locale/de';

export default (editor, opts = {}) => {
    const config = {
        sector: 'dimension',
        property: 'object-fit',
        labelPrefix: 'grapesjs-object-fit',
        default: 'none',
        i18n: {},
        values: [
            { value: 'fill', nameKey: 'fill' },
            { value: 'contain', nameKey: 'contain' },
            { value: 'cover', nameKey: 'cover' },
            { value: 'none', nameKey: 'none' },
            { value: 'scale-down', nameKey: 'scale-down' },
        ],
        components: ['image'],
        ...opts,
    };

    const sm = editor.StyleManager;

    const ensureProperty = () => {
        const sector = sm.getSector(config.sector);
        if (!sector) return;

        const props = sector.get('properties');

        if (!props.some(p => p.get('property') === config.property)) {
            sector.addProperty({
                property: config.property,
                type: 'select',
                defaults: config.default,
                list: config.values.map(({ value, nameKey }) => ({
                    value,
                    name: editor.I18n.t(`${config.labelPrefix}.${nameKey}`),
                })),
            });
        }
    };

    const removeProperty = () => {
        const sector = sm.getSector(config.sector);
        if (!sector) return;
        const props = sector.get('properties');
        const prop = props.find(p => p.get('property') === config.property);
        if (prop) props.remove(prop);
    };

    editor.on('component:selected', comp => {
        if (!comp) return;
        const isValidType = config.components.some(type => comp.is(type));

        if (isValidType) {
            ensureProperty();
        } else {
            removeProperty();
        }
    });

    editor.I18n && editor.I18n.addMessages({
        en,
        fr,
        de,
        ...config.i18n,
    });
};
