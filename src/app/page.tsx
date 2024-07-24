import CompIcon from "@/assets/icons/Comp";
import { Button } from "@/components/ui/Button";
import { benefitsList } from "@/config";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen overflow-auto bg-mainbg ">
      <main className="flex flex-col items-center max-w-[1920px] w-auto shadow-2xl min-h-[100dvh] bg-cover bg-top bg-[url('/images/background.png')] bg-no-repeat bordered">
        <div className="p-10 md:pb-0 md:p-[100px] pt-[120px] ">
          <header className="flex justify-center items-center  text-[30px] gap-8  lg:text-[81px] mb-[60px] xl:mb-[200px] lg:pl-[200px]">
            <img
              src="/images/logo.png"
              alt="xcelerate_logo"
              className="max-h-[40px] lg:max-h-[85px] h-full w-auto"
            />
            <h1>
              {" "}
              <span className="text-primary">-</span> ЦЕ ПРО
            </h1>

            <div className="lg:h-[300px] flex items-end border-b-2 lg:max-w-[350px] lg:w-full">
              <h1>
                {"РУХ"}
                <span className="text-[#F05262]">.</span>
              </h1>
            </div>
          </header>
          <div className="w-full lg:max-w-[50%] text-[26px] mb-[70px]">
            <p> Якість трафіку</p> - це наше кермо, що керує напрямком,
            <p> швидкість у всіх процесах</p> - це двигун, що прискорює наш
            прогрес, а <p>аналітика</p> - це мапа, яка допомагає нам зрозуміти,
            як досягти найвищих вершин.
          </div>
          <div className="flex w-full lg:w-[93%] mb-10 items-end justify-end flex-col bg-left-bottom bg-contain bg-no-repeat text-primary text-[95px]  bg-[url('/images/mountain.png')]  h-screen max-h-[419px] ">
            <h1>ХТО</h1>
            <h1>
              МИ
              <span className="text-[#F05262]">?</span>
            </h1>
          </div>
          <div className="w-full lg:max-w-[55%] text-[24px] mb-[60px] xl:mb-[120px] leading-7">
            Ми - медіабаїнгова команда, яка за рік свого існування на ринку
            збудувала з нуля всі процеси та, створивши простір з усім необхідним
            для розвитку, масштабування й підкорення нових висот, стрімко вийшла
            на <p>високі показники. </p>
          </div>
          <div className="flex flex-col-reverse justify-between w-full gap-10 items-center mb-[100px] lg:flex-row md">
            <div className="flex flex-2 w-full justify-center items-center">
              <Button>Приєднатися</Button>
            </div>

            <div className="flex-3 text-[24px] leading-7">
              Виходити за рамки дозволеного, аналізувати, тестувати. Наша мета -
              підривати індустрію своїми результатами, рухаючись до своїх цілей
              зі швидкістю світла!
            </div>
          </div>
          <div className="flex flex-col w-full justify-between xl:flex-row">
            <div className="flex-1 text-[60px] leading-tight relative">
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
                    <h2 className="text-3xl">{item.text}</h2>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center text-[#17152D]  bg-[url('/images/values.png')] bg-cover bg-top h-[870px] bg-no-repeat ">
          <h1 className="text-[50px] mb-[100px]">Наші цінності:</h1>
          <div className="flex flex-col gap-[80px] text-[28px]">
            <div>Якість над усе</div>
            <div>Досягнення результату важливіше процесу</div>
            <div>Аналітика – це головний ключ до успіху</div>
          </div>
        </div>

        <div className="w-full flex px-[150px] my-[80px] justify-between text-[23px] gap-10">
          <div className=" p-5 flex justify-center items-center bg-top bg-[url('/images/border-box.png')] bg-contain bg-no-repeat    max-h-[170px]">
            Динамічна тіма, яка завжди на хвилі передових технологій та
            тенденцій в affiliate-індустрії
          </div>
          <div className="p-5 flex justify-center items-center bg-top bg-[url('/images/border-box.png')] bg-contain bg-no-repeat   w-auto max-h-[170px]">
            Потужні джерела трафіку
          </div>
          <div className=" p-5 flex justify-center items-center bg-top bg-[url('/images/border-box.png')] bg-contain bg-no-repeat   max-h-[170px]">
            Тіммейти з великим досвідом, в оточенні яких постійно примножуються
            цінні знання
          </div>
        </div>

        <div className="w-full h-[310px]   bg-[url('/images/vacancy.png')] bg-center bg-contain bg-no-repeat mb-[200px]" />

        <div className="flex flex-col gap-5 items-center p-10 h-[60vh]">
          <p className="text-center uppercase text-[85px]">
            Приєднуйся до команди
          </p>
          <h2 className="text-[35px]">Тут можеш залишити своє CV</h2>
        </div>
      </main>
    </div>
  );
}
