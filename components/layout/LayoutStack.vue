<script>
import LayoutDivider from './LayoutDivider.vue'
const spaceClassNames = {
    2: {
        space: 'pt-2',
        offset: 'before:-mt-2',
    },
    4: {
        space: 'pt-4',
        offset: 'before:-mt-4',
    },
}
export default {
    name: 'LayoutStack',
    functional: true,
    components: {
        LayoutDivider,
    },
    props: {
        space: {
            type: String,
            default: 'none',
        },
        dividers: Boolean,
    },
    render(h, context) {
        let {
            children,
            props: { space, dividers },
        } = context
        let stackNodes =
            (children && children.filter((child) => child.tag)) || []
        let spaceClass = space !== 'none' ? spaceClassNames[space].space : null
        let offsetClass = spaceClass
            ? `before:block before:empty-content ${spaceClass.offset}`
            : null
        return h(
            'div',
            { class: offsetClass },
            stackNodes.map((node, index) => {
                return h(
                    'div',
                    { class: spaceClass },
                    dividers && index > 0
                        ? [
                              h(LayoutDivider),
                              h('div', { class: spaceClass }, [node]),
                          ]
                        : [node],
                )
            }),
        )
    },
}
</script>
