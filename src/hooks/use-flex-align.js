const justifyClassMap = {
	left: 'justify-start',
	center: 'justify-center',
	right: 'justify-end',
}

const itemsClassMap = {
	top: 'items-start',
	center: 'items-center',
	bottom: 'items-end',
}

// Export type AlignX = 'left' | 'center' | 'right'
// export type AlignY = 'top' | 'center' | 'bottom'

// interface UseFlexAlignProps {
//     align?: AlignX
//     alignY?: AlignY
// }

// type UseFlexAlignReturn = Record<string, string | undefined>

export function useFlexAlign({ align, alignY }) {
	return {
		alignClass: align ? justifyClassMap[align] : undefined,
		justifyClass: alignY ? itemsClassMap[alignY] : undefined,
	}
}
