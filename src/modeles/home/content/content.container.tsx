import dynamic from 'next/dynamic'

const ComponentContent = dynamic((() =>
    import('./content.component').then(
        component => component.ContentComponent
    )) as any)

export const Content = () => {
    return <ComponentContent />
}
