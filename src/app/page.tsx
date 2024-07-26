import CompIcon from "@/assets/icons/Comp";
import Header from "@/components/header";
import { Button } from "@/components/ui/Button";
import { benefitsList } from "@/config";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh]  bg-mainbg ">
      <main className="flex flex-col items-center max-w-[1920px] w-full shadow-2xl  bg-cover bg-top bg-[url('/images/background.png')] bg-no-repeat">
        <div className="p-7 md:p-[100px] pt-[10%] ">
          <Header />
          <div className="w-full lg:max-w-[50%] text-[13px] sm:text-[24px] mb-[70px]">
            <p> Якість трафіку</p> - це наше кермо, що керує напрямком,
            <p> швидкість у всіх процесах</p> - це двигун, що прискорює наш
            прогрес, а <p>аналітика</p> - це мапа, яка допомагає нам зрозуміти,
            як досягти найвищих вершин.
          </div>
          <div className="flex w-full 
          lg:w-[93%] mb-10 items-end justify-end flex-col 
          bg-left-bottom bg-contain bg-no-repeat text-primary 
          text-[40px] md:text-[95px]  bg-[url('/images/mountain.png')] 
          h-full md:h-screen max-h-[419px] ">
            <h1>ХТО</h1>
            <h1>
              МИ
              <span className="text-[#F05262]">?</span>
            </h1>
          </div>
          <div className="w-full lg:max-w-[55%] text-[20px] md:text-[24px]   mb-[60px] xl:mb-[120px] leading-7">
            Ми - медіабаїнгова команда, яка за рік свого існування на ринку
            збудувала з нуля всі процеси та, створивши простір з усім необхідним
            для розвитку, масштабування й підкорення нових висот, стрімко вийшла
            на <p>високі показники. </p>
          </div>
          <div className="flex flex-col-reverse justify-between w-full gap-10 items-center mb-10 md:mb-[100px] lg:flex-row md">
            <div className="flex flex-2 w-full justify-center items-center">
              <Button>Приєднатися</Button>
            </div>

            <div className="flex-3 text-[20px] md:text-[24px] leading-7">
              Виходити за рамки дозволеного, аналізувати, тестувати. Наша мета -
              підривати індустрію своїми результатами, рухаючись до своїх цілей
              зі швидкістю світла!
            </div>
          </div>
          <div className="flex flex-col w-full justify-between xl:flex-row">
            <div className="flex-1 text-[35px] md:text-[60px] leading-tight relative">
              <h1>
                Що ти отримаєш, ставши частиною нашого <p>community:</p>
              </h1>
              <img
                src="/images/hand.png"
                alt="hand image"
                className=" left-[-150px] top-[150px] absolute hidden xl:inline"
              />
            </div>
            <div className="flex-1">
              <ul className="mt-[60px] xl:mt-[200px]">
                {benefitsList.map((item) => (
                  <li className="flex gap-[70px] items-center mb-[70px] justify-start">
                    <i className="w-5">{item.icon}</i>
                    <h2 className="text-md md:text-3xl">{item.text}</h2>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full h-full  flex flex-col justify-center text-[#17152D]  bg-[url('/images/values.png')] bg-cover bg-left-top  bg-no-repeat ">
          <h1 className=" text-[25px] lg:text-[50px] mb-[5%]">Наші цінності:</h1>
          <div className="flex flex-col  text-[28px]">
            <div>Якість над усе</div>
            <div>Досягнення результату важливіше процесу</div>
            <div>Аналітика – це головний ключ до успіху</div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4 lg:flex-row md:px-[40px] xl:px-[150px] my-[80px] justify-between text-[15px] md:text-[23px]">
          <div className=" px-7 py-5 flex justify-center items-center bg-top bg-[url('/images/border-box.png')] bg-cover bg-no-repeat h-fit">
            Динамічна тіма, яка завжди на хвилі передових технологій та
            тенденцій в affiliate-індустрії
          </div>
          <div className="p-5 flex justify-center items-center bg-top bg-[url('/images/border-box.png')] bg-contain bg-no-repeat ">
            Потужні джерела трафіку
          </div>
          <div className=" p-5 flex justify-center items-center bg-top bg-[url('/images/border-box.png')] bg-contain bg-no-repeat   ">
            Тіммейти з великим досвідом, в оточенні яких постійно примножуються
            цінні знання
          </div>
        </div>

        <div className="w-full h-screen max-h-[310px] bg-top  bg-[url('/images/vacancy.png')] bg-contain bg-no-repeat mb-[200px]" />

        <div className="flex flex-col gap-5 items-center p-10 h-[60vh]">
          <p className="text-center uppercase  text-[30px] lg:text-[85px]">
            Приєднуйся до команди
          </p>
          <h2 className="text-[20px] md:text-[35px] mb-5">
            Тут можеш залишити своє CV
          </h2>

          <a href="tg://resolve?domain=hrm_yana" className="rounded-full border-2 border-[#84F5B1] text-[#84F5B1] text-xl md:text-2xl px-8 py-2 hover:bg-[#84F5B1] transition-all hover:text-gray-700 active:bg-[#84F5B1]">Надіслати CV</a>
        </div>
      </main>
    </div>
  );
}
