export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/fd29a7e1-6622-4931-84f3-3a2ed16e7079/files/86579538-ec4f-461a-b2fe-5c6364f81f35.jpg"
          alt="Красивый маникюр"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Наши услуги</h3>
        <div className="mb-8 flex flex-col gap-4">
          <div className="flex justify-between items-center border-b border-neutral-200 pb-4">
            <span className="text-xl lg:text-2xl text-neutral-900">Маникюр</span>
            <span className="text-xl lg:text-2xl font-bold text-neutral-900">1 300 ₽</span>
          </div>
          <div className="flex justify-between items-center border-b border-neutral-200 pb-4">
            <span className="text-xl lg:text-2xl text-neutral-900">Наращивание</span>
            <span className="text-xl lg:text-2xl font-bold text-neutral-900">1 800 ₽</span>
          </div>
          <div className="flex justify-between items-center border-b border-neutral-200 pb-4">
            <span className="text-xl lg:text-2xl text-neutral-900">Маникюр без покрытия</span>
            <span className="text-xl lg:text-2xl font-bold text-neutral-900">500 ₽</span>
          </div>
        </div>
        <a
          href="https://t.me/Ccrystal_baby"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide inline-block"
        >
          Записаться на маникюр
        </a>
      </div>
    </div>
  );
}