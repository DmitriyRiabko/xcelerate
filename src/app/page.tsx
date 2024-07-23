import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen overflow-auto bg-mainbg ">
      <main className="flex flex-col items-center max-w-[1920px] w-full min-h-[100dvh] bg-cover bg-top bg-[url('/images/background.png')] bg-no-repeat">
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

            <div className="h-[300px] flex items-end border-b-2 w-[350px]">
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
          <div className="max-w-[55%] text-[24px] mb-[200px]">
            Ми - медіабаїнгова команда, яка за рік свого існування на ринку
            збудувала з нуля всі процеси та, створивши простір з усім необхідним
            для розвитку, масштабування й підкорення нових висот, стрімко вийшла
            на <p>високі показники. </p>
          </div>
          <div className="flex justify-between w-full items-center">
            <div className="flex-2 w-full">
              <Button >Приєднатися</Button>
            </div>

            <p className="flex-3">
              Виходити за рамки дозволеного, аналізувати, тестувати. Наша мета -
              підривати індустрію своїми результатами, рухаючись до своїх цілей
              зі швидкістю світла!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
