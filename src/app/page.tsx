import CompIcon from "@/assets/icons/Comp";
import Header from "@/components/header";
import { Button } from "@/components/ui/Button";
import Circle from "@/components/ui/Circle";
import { benefitsList, hrLink } from "@/config";
import logo from '../../public/images/logo.png'
import background from './../../public/images/background.png'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh]  bg-mainbg ">
      <main 
      style={{backgroundImage:background}}
      
      className="flex flex-col items-center max-w-[1920px] w-full shadow-2xl  bg-cover bg-top bg-[url('/xcelerate/images/background.png')] bg-no-repeat overflow-hidden">
        <div className="p-7 md:p-[100px] pt-[10%] ">
          <Header />
          <div className="w-full lg:max-w-[50%] text-[17px] sm:text-[28px] mb-[70px]">
            <p> Якість трафіку</p> - це наше кермо, що керує напрямком,
            <p> швидкість у всіх процесах</p> - це двигун, що прискорює наш
            прогрес, а <p>аналітика</p> - це мапа, яка допомагає нам зрозуміти,
            як досягти найвищих вершин.
          </div>
          <div
            className="flex w-full 
          sm:w-full mb-10 items-end justify-end flex-col 
          bg-left-bottom bg-contain bg-no-repeat text-primary 
          text-[50px] md:text-[95px]  bg-[url('/xcelerate/images/mountain.png')] 
          h-full sm:h-screen max-h-[419px] "
          >
            <h1>ХТО</h1>
            <h1>
              МИ
              <span className="text-[#F05262]">?</span>
            </h1>
          </div>
          <div className="w-full lg:max-w-[55%] text-[20px] md:text-[28px]   mb-[60px] xl:mb-[120px] leading-9">
            Ми - медіабаїнгова команда, яка за рік свого існування на ринку
            збудувала з нуля всі процеси та, створивши простір з усім необхідним
            для розвитку, масштабування й підкорення нових висот, стрімко вийшла
            на <p>високі показники. </p>
          </div>
          <div className="flex flex-col-reverse justify-between w-full gap-10 items-center mb-10 md:mb-[100px] lg:flex-row md">
            <div className="flex flex-2 w-full justify-center items-center">
              <a href={hrLink}>
                <Button>Приєднатися</Button>
              </a>
            </div>

            <div className="flex-3 text-[20px] md:text-[28px] leading-9">
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
                src="./images/hand.png"
                alt="hand image"
                className=" left-[-150px] top-[150px] absolute hidden xl:inline"
              />
            </div>
            <div className="flex-1">
              <ul className="mt-[60px] xl:mt-[200px]">
                {benefitsList.map((item) => (
                  <li
                    key={item.text}
                    className="flex gap-[70px] items-center mb-[70px] justify-start"
                  >
                    <i className=" lg:w-5">{item.icon}</i>
                    <h2 className="text-md md:text-3xl">{item.text}</h2>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full h-[340px] lg:h-[800px]  bg-[#84F5B1] flex flex-col items-center text-[#17152D] relative ">
          <h1 className="mt-12 xl:mr-80 lg:mt-[100px] text-[28px] lg:text-[50px] z-10">
            Наші цінності:
          </h1>
          <div className="flex w-full flex-col h-full lg:ml-32 text-[20px] justify-between lg:text-[35px]  z-10 p-4 sm:p-10 max-h-[500px]">
            <div className="ml-0 sm:ml-20 flex gap-10 items-center ">
              <Circle /> <span>Якість над усе</span>
            </div>
            <div className="mr-[300px] flex gap-10 items-center w-full">
              <Circle /> <span>Досягнення результату важливіше процесу</span>
            </div>
            <div className="ml-0 sm:ml-28 flex gap-10 items-center ">
              <Circle />
              <span> Аналітика – це головний ключ до успіху</span>
            </div>
          </div>

          <img
            src="./images/mol.png"
            alt="mol"
            className="absolute right-[-50px] h-[340px] lg:h-[800px] -z-2"
          />
          <img
            src="./images/money.png"
            alt="money"
            className="absolute  left-[2%] lg:left-[10%] top-[-80px] h-[180px] lg:h-[290px] -z-2"
          />
        </div>

        <div className="p-1 sm:p-3 w-full flex flex-col gap-7 lg:flex-row md:px-[40px] text-center lg:text-left xl:px-[150px] mt-[60px] justify-between text-[13px] sm:text-[15px] md:text-[20px] items-center lg:items-start ">
          <div className="lg:order-1 px-6 py-4 flex justify-center items-center bg-top bg-[url('/xcelerate/images/border-box.png')] bg-cover lg:bg-contain bg-no-repeat  h-auto max-w-[80%] lg:w-full lg:max-w-[400px] ">
            Динамічна тіма, яка завжди на хвилі передових технологій та
            тенденцій в affiliate-індустрії
          </div>
          <div className="order-3 lg:order-2 px-6 py-4 flex justify-center items-center bg-top bg-[url('/xcelerate/images/border-box.png')]  bg-contain bg-no-repeat w-full lg:max-w-[400px]">
            Потужні джерела трафіку
          </div>
          <div className="lg:order-3 px-6 py-4  flex justify-center items-center bg-top bg-[url('/xcelerate/images/border-box.png')]  bg-cover lg:bg-contain bg-no-repeat h-auto   w-[70%] lg:w-full  lg:max-w-[400px] ">
            Тіммейти з великим досвідом, в оточенні яких постійно примножуються
            цінні знання
          </div>
        </div>

        <div className="w-screen h-screen max-h-[160px] lg:max-h-[310px]  bg-[url('/xcelerate/images/vacancy.png')] bg-bottom bg-contain bg-no-repeat  " />
        <div className="h-[2px]   line w-full my-5 "></div>

        <div className="flex flex-col gap-5 items-center px-10 lg:mt-10 h-[60vh]">
          <p className="text-center uppercase  text-[30px] lg:text-[80px]">
            Приєднуйся до команди
          </p>
          <h2 className="text-[20px] md:text-[35px] mb-5">
            Тут можеш залишити своє CV
          </h2>

          <a
            href={hrLink}
            className="rounded-full border-2 border-[#84F5B1] text-[#84F5B1] text-xl md:text-2xl px-8 py-2 hover:bg-[#84F5B1] transition-all hover:text-gray-700 active:bg-[#84F5B1]"
          >
            Надіслати CV
          </a>
        </div>
      </main>
    </div>
  );
}
