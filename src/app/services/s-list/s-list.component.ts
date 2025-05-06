import { Component } from '@angular/core';

@Component({
  selector: 's-list',
  templateUrl: './s-list.component.html',
  styleUrls: ['./s-list.component.css']
})
export class SListComponent {
  services = [
    { title: 'Медицинские консультации и оценка стоимости', description: 'Экспертные мнения и оценки стоимости.', icon: 'fas fa-notes-medical' },
    { title: 'Консультации перед поездкой', description: 'Понимание процедуры до поездки.', icon: 'fas fa-comments' },
    { title: 'Помощь с визой', description: 'Полная помощь в оформлении медицинской визы.', icon: 'fas fa-passport' },
    { title: 'Обмен валюты', description: 'Удобные услуги обмена валюты в вашем городе.', icon: 'fas fa-exchange-alt' },
    { title: 'Переводчики и интерпретаторы', description: 'Профессионалы, которые помогут преодолеть языковые барьеры на каждом этапе.', icon: 'fas fa-language' },
    { title: 'Транспортная помощь', description: 'Бесплатные трансферы из аэропорта.', icon: 'fas fa-ambulance' },
    { title: 'Варианты проживания', description: 'Рядом с больницей, соответствующие вашему бюджету и потребностям.', icon: 'fas fa-hotel' },
    { title: 'Приём, запись на приём, фармацевтическая помощь', description: 'Полная координация медицинской логистики.', icon: 'fas fa-calendar-check' },
    // { title: 'Частные медсестры', description: 'Организация частного ухода по мере необходимости.', icon: 'fas fa-user-nurse' },
  ];
}
