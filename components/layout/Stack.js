import Vue from 'vue'

import Divider from './Divider.vue'

// const validStackElements = ['div', 'ol', 'ul']
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

// interface StackProps {
//     element?: typeof validStackElements[number]
//     space: 'none' | keyof typeof spaceClassNames
//     dividers?: boolean
// }

export default Vue.component({
    props: {
        space: {
            type: String,
            default: 'none',
        },
        dividers: Boolean,
    },

    render(createElement) {
        let stackNodes =
            (this.$slots.default &&
                this.$slots.default.filter((child) => child.tag)) ||
            []
        let spaceClass =
            this.space !== 'none' ? spaceClassNames[this.space] : null
        let offsetClass = spaceClass
            ? `before:block before:empty-content ${spaceClass.offset}`
            : null

        return createElement(
            'div',
            { class: offsetClass },
            stackNodes.map((node, index) =>
                createElement(
                    'div',
                    { class: spaceClass?.space },
                    this.dividers && index > 0
                        ? [
                              createElement(Divider),
                              createElement(
                                  'div',
                                  { class: spaceClass?.space },
                                  [node],
                              ),
                          ]
                        : [node],
                ),
            ),
        )
    },
})
