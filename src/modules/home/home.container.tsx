import { FunctionComponent } from 'react'
import dynamic from 'next/dynamic'
import { HeaderComponent } from './content/header'

const ContentComponent = dynamic((() =>
    import('./content').then(component => component.Content)) as any)

export function Home() {
    return (
        <>
            <HeaderComponent />
            <ContentComponent />
        </>
    )
}
