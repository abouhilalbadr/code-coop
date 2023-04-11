import Image from 'next/image';

const Home = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background text-white">
            <div className="fixed top-0 left-0 z-10 w-full mx-auto">
                <div className="container">
                    <div className="items-center justify-between text-sm flex p-4">
                        <p className="flex justify-center border-gray-300 p-4 rounded-xl border">
                            Get started by editing&nbsp;
                            <code className="font-mono font-bold">
                                src/app/page.js
                            </code>
                        </p>
                        <div className="flex h-48 items-end justify-center lg:static lg:h-auto w-auto">
                            <a
                                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                                href="https://badrabouhilal.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                By{' '}
                                <Image
                                    src="/ab.svg"
                                    alt="Abouhilal Badr Logo"
                                    className="dark:invert"
                                    width={24}
                                    height={35}
                                    priority
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
            </div>
        </main>
    );
};

export default Home;
