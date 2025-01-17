import "../styles/FrontPage.css"
export const FrontPage = () => {
    const handleParticle = (e: React.MouseEvent<HTMLElement>) => {
        const frontPage = e.target as HTMLElement;
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${e.clientX- 80}px`;
        particle.style.top = `${e.clientY - 100}px`;
        frontPage.appendChild(particle);
        setTimeout(() => {
            particle.remove();
        }, 500);
        // Puedes agregar lógica adicional aquí, como navegar a otra página o cambiar el estado.
    }
    
    return (    
        <section onMouseMove={handleParticle} className="w-screen h-screen bg-gray-900 flex justify-center items-center frontPage" >
            <div className="text-gray-100 cursor-default">
                <p className="text-4xl font-bold text-center">
                    Tomy Ivan Bautista    
                </p>
                <p className="text-xl font-semibold text-center ">
                    <span className="hover:bg-cyan-900 rounded-lg ">Full Stack Developer</span> apasionado por el desarrollo de aplicaciones web
                </p>
            </div>
        </section>
    )
}
