import {} from "react";

const Client = () => {
  return (
    <>
      <div className="Client">
        <div className="row">
          <div className="col-12">
            <div className="cl_name">Список клиентов</div>
          </div>
          <div className="col-12">
            <div className="cl_box_1">
              <div className="cl_1_main">
                <div className="cl_1_name">Общая квадрат</div>
                <div className="cl_1_name">Общая сумма клиентов</div>
                <div className="cl_1_name">Общая приход сумма</div>
                <div className="cl_1_name">Общая остаток сумма</div>
                <div className="cl_1_name">Общая кеш сумма</div>
                <div className="cl_1_name">Берилган Кеш Бек</div>
                <div className="cl_1_name">Остаток бериш керак</div>
              </div>
              <div className="cl_1_main">
                <div className="cl_1_name">312</div>
                <div className="cl_1_num_box">
                  <div className="cl_1_num_main active">
                    <div className="cl_1_num_name">312 312 312 232 3223</div>
                    <div className="cl_1_num_name active_1">312 312 312</div>
                    <div className="cl_1_num_name active_2">312 312 312</div>
                    <div className="cl_1_num_name">312 312 312</div>
                    <div className="cl_1_num_name active_1">312 312 312</div>
                    <div className="cl_1_num_name active_2">312 312 312</div>
                  </div>
                  <div className="cl_1_num_main">
                    <div className="cl_1_num_name">312 312 312</div>
                    <div className="cl_1_num_name active_1">312 312 312</div>
                    <div className="cl_1_num_name active_2">312 312 312</div>
                    <div className="cl_1_num_name">312 312 312</div>
                    <div className="cl_1_num_name active_1">312 312 312</div>
                    <div className="cl_1_num_name active_2">312 312 312</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 overflow-auto d-flex">
            <div className="cl_box_2">
              <div className="cl_2_main">
                <div className="cl_2_name_2">Контракт</div>
                <div className="cl_2_name_2">Дом</div>
                <div className="cl_2_name">Ф.И.О</div>
                <div className="cl_2_name_2">Тип оплаты</div>
                <div className="cl_2_name_2">
                  Балкон <br /> Квадрат{" "}
                </div>
                <div className="cl_2_name">
                  Балкон <br /> Цена за Квадрат
                </div>
                <div className="cl_2_name_2">Квадрат</div>
                <div className="cl_2_name">Цена за Квадрат</div>
                <div className="cl_2_name">Балкон</div>
                <div className="cl_2_name">Обшая Сумма</div>
                <div className="cl_2_name_2">Курс</div>
                <div className="cl_2_name">Приход Сумма</div>
                <div className="cl_2_name">Менеджер продаж</div>
                <div className="cl_2_name">
                  1000 <br /> Кеш бек
                </div>
                <div className="cl_2_name">Кеш бек</div>
                <div className="cl_2_name">Приз</div>
              </div>
              <div className="cl_2_main">
                <div className="cl_2_name_2">S-1</div>
                <div className="cl_2_name_2">1</div>
                <div className="cl_2_name">Илон Маск</div>
                <div className="cl_2_name_2 active_2">Расрочка</div>
                <div className="cl_2_name_2">18,5</div>
                <div className="cl_2_name">3700000</div>
                <div className="cl_2_name_2">92</div>
                <div className="cl_2_name">8200000</div>
                <div className="cl_2_name">55500000</div>
                <div className="cl_2_name">80900000</div>
                <div className="cl_2_name_2">12250</div>
                <div className="cl_2_name">31433335</div>
                <div className="cl_2_name">Джораев Фаррух</div>
                <div className="cl_2_name">198000</div>
                <div className="cl_2_name">198000</div>
                <div className="cl_2_name">Холодилник</div>
              </div>
              <div className="cl_2_main">
                <div className="cl_2_name_2">S-1</div>
                <div className="cl_2_name_2">1</div>
                <div className="cl_2_name">Илон Маск</div>
                <div className="cl_2_name_2 active_1">Наличка</div>
                <div className="cl_2_name_2">18,5</div>
                <div className="cl_2_name">3700000</div>
                <div className="cl_2_name_2">92</div>
                <div className="cl_2_name">8200000</div>
                <div className="cl_2_name">55500000</div>
                <div className="cl_2_name">80900000</div>
                <div className="cl_2_name_2">12250</div>
                <div className="cl_2_name">31433335</div>
                <div className="cl_2_name">Джораев Фаррух</div>
                <div className="cl_2_name">198000</div>
                <div className="cl_2_name">198000</div>
                <div className="cl_2_name">Холодилник</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
