import { FunctionComponent } from 'react'
import dynamic from 'next/dynamic'

const ContentComponent = dynamic((() =>
    import('./content').then(component => component.Content)) as any)

export function Home() {
    return (
        <>
            <ContentComponent />
        </>
    )
}
