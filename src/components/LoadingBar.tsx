"use client"
import * as React from "react"

import { Progress } from "@/components/ui/progress"

export function LoadingBar() {
    const [progress, setProgress] = React.useState(13)

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(78), 800)
        return () => clearTimeout(timer)
    }, [])

    return <Progress value={progress} className="w-[60%]" />
}
