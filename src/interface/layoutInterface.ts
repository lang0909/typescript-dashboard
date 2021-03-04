export interface LeftProps{
    collapsed: boolean
}

export interface TopProps extends LeftProps{
    toggle: React.MouseEventHandler
}