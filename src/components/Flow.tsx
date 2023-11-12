import Image from "next/image";
import { FC } from "react";

const Flow: FC = () => {
    return (
        <div id="flow" className="bg-white/50 pt-5 pb-10">
            <div className="flex max-w-5xl mx-auto">
                <div className="mx-auto bg-white/30 backdrop-blur-md bg-opacity-20  p-5 shadow-lg border border-violet-200 rounded-lg">
                <Image src="https://github.com/vrajdesai78/Learning-GIT/assets/43074241/c52f1ee7-dd4c-4e12-8ef0-f66041985850" alt="Flow image" width={500} height={500} />
                </div>
                <div className="mx-auto bg-white/30 backdrop-blur-md bg-opacity-20  p-5 shadow-lg border border-violet-200 rounded-lg">
                <Image src="https://github.com/vrajdesai78/Learning-GIT/assets/43074241/716461d3-3ff0-4256-a8e7-dee8e2e21fb5" alt="Verify" width={300} height={400} className="ml-auto"/>
                </div>
            </div>
        </div>
    )
}

export default Flow;