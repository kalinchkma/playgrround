
export interface NavItem {
    title: string
    href?: string
    active?: boolean
    disabled?: boolean
    external?: boolean
    label?: string,
    icon?: React.ElementType,
    description?: string
}

export type MainNavItem = NavItem