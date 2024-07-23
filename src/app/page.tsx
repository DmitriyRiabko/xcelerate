import CompIcon from "@/assets/icons/Comp";
import { Button } from "@/components/ui/Button";
import { benefitsList } from "@/config";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen overflow-auto bg-mainbg ">
      <main className="flex flex-col items-center max-w-[1920px] w-screen min-h-[100dvh] bg-cover bg-top bg-[url('/images/background.png')] bg-no-repeat">
        <div className="p-[150px] pt-[120px]">
          <header className="flex justify-center items-center text-[81px] gap-8 mb-[200px]">
            <img
              src="/images/logo.png"
              alt="xcelerate_logo"
              className="h-[85px] w-auto"
            />
            <h1>
              {" "}
              <span className="text-primary">-</span> ЦЕ ПРО
            </h1>

            <div className="h-[300px] flex items-end border-b-2 max-w-[350px] w-full">
              <h1>
                {"РУХ"}
                <span className="text-[#F05262]">.</span>
              </h1>
            </div>
          </header>
          <div className="max-w-[50%] text-[26px] mb-[190px]">
            <p> Якість трафіку</p> - це наше кермо, що керує напрямком,
            <p> швидкість у всіх процесах</p> - це двигун, що прискорює наш
            прогрес, а <p>аналітика</p> - це мапа, яка допомагає нам зрозуміти,
            як досягти найвищих вершин.
          </div>
          <div className="flex flex-col items-end text-primary pr-10 text-[95px]">
            <h1>ХТО</h1>
            <h1>
              МИ
              <span className="text-[#F05262]">?</span>
            </h1>
          </div>
          <div className="w-full lg:max-w-[55%] text-[24px] mb-[120px] leading-7">
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
          <div className="flex flex-col w-full justify-between lg:flex-row">
            <div className="flex-1 text-[60px] leading-tight">
              <h1>
                Що ти отримаєш, ставши частиною нашого <p>community:</p>
              </h1>
            </div>
            <div className="flex-1">
              <ul className="mt-[200px]">
                {benefitsList.map((item) => (
                  <li className="flex gap-[70px] items-center mb-[70px] justify-start">
                    <i className="w-5">{item.icon}</i>
                    <h2 className="text-3xl">{item.text}</h2>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full bg-[url('/images/values.png')] h-full max-h-[880px]"></div>
        </div>
      </main>
    </div>
  );
}
