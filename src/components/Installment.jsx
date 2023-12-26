import {} from "react";

const Installment = () => {
  return (
    <>
      <div className="Installment">
        <div className="row">
          <div className="col-12">
            <div className="ins_name">
              Договор по курсу долларах или в суммах
            </div>
          </div>

          <div className="col-12">
            <div className="cl_box_1">
              <div className="cl_1_main">
                <div className="cl_1_name">А Блок</div>
                <div className="cl_1_name">Курс</div>
                <div className="cl_1_name">В долларах</div>
                <div className="cl_1_name">Оплата в доллор</div>
                <div className="cl_1_name">Оплачено</div>
                <div className="cl_1_name">Остаток</div>
              </div>
              <div className="cl_1_main">
                <div className="cl_1_name">312</div>
                <div className="cl_1_name">312</div>
                <div className="cl_1_name active_1">5 132</div>
                <div className="cl_1_name active_2">-56 452</div>
                <div className="cl_1_name active_1">312</div>
                <div className="cl_1_name active_1">312</div>
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
                <div className="cl_2_name">Расрочка месец</div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Installment;
