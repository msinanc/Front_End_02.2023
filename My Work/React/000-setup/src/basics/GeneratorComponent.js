// default bu dosyanın temel fonksiyonu budur demek, main gibi. 
export default function GeneratorComponent({company, department}){
    const generateContent = (input) => {
        return (
            <div>
                Burası kuşatıldı<strong><em> {input}</em></strong>
            </div>
        )
    }
    return (
        <div>
            Burası bileşen <br/>
            {generateContent('Godoro')}<br/>
            {company}<br/>
            {department}<br/>
        </div>
    )
}