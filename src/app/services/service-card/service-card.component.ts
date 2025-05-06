import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent {
  services = [
    {
      title: 'ОНКОЛОГИЯ',
      description: 'Продвинутые методы лечения рака с доказанными результатами.',
      imageUrl: 'assets/moder_ser/cancer.jpeg',
      price: '$150,000'
    },
    {
      title: 'Трансплантация печени',
      description: 'Услуги трансплантации печени мирового уровня с минимальным временем восстановления.',
      imageUrl: 'assets/moder_ser/liver-Photoroom.jpg',
      price: '$180,000'
    },

    {
      title: 'Трансплантация почки',
      description: 'Экспертное лечение почек и трансплантация.',
      imageUrl: 'assets/moder_ser/kidney.png',
      price: '$150,000'
    },
    {
      title: 'КАРДИОЛОГИЯ',
      description: 'Мировой уровень сердечно-сосудистого ухода для взрослых и детей.',
      imageUrl: 'assets/moder_ser/heart-Photoroom.jpg',
      price: '$150,000'
    },
    {
      title: 'НЕЙРОХИРУРГИЯ',
      description: 'Специализация в области нейрохирургической помощи как для взрослых, так и для детей.',
      imageUrl: 'assets/moder_ser/neuro.jpeg',
      price: '$180,000'
    },
    {
      title: 'Трансплантация волос',
      description: 'Восстановите линию волос с помощью натуральных пересадок.',
      imageUrl: 'assets/service_img/hair_t.jpg',
      price: '$3,000'
    },
    {
      title: 'Дентальные имплантаты',
      description: 'Получите идеальную улыбку с нашими передовыми дентальными имплантами.',
      imageUrl: 'assets/moder_ser/dent-Photoroom.jpg',
      price: '$1,200'
    },
    {
      title: 'Косметическая хирургия',
      description: 'Улучшите свою внешность с помощью экспертов в области косметической хирургии.',
      imageUrl: 'assets/moder_ser/cosm-Photoroom.jpg',
      price: '$2,500'
    },
    {
      title: 'Замена коленного сустава',
      description: 'Верните подвижность с помощью эффективных операций по замене коленного сустава.',
      imageUrl: 'assets/moder_ser/knee-Photoroom.jpg',
      price: '$7,000'
    },
    {
      title: 'Операция на глазах (LASIK)',
      description: 'Получите кристально чистое зрение с помощью передовых процедур LASIK.',
      imageUrl: 'assets/moder_ser/eye-Photoroom.jpg',
      price: '$2,000'
    },
    {
      title: 'Увеличение груди',
      description: 'Достигните желаемого внешнего вида с помощью операции по увеличению груди.',
      imageUrl: 'assets/moder_ser/brest-Photoroom.jpg',
      price: '$5,000'
    },
    {
      title: 'Операция на позвоночнике',
      description: 'Точные операции на позвоночнике для улучшения подвижности.',
      imageUrl: 'assets/moder_ser/spine.jpeg',
      price: '$5,000'
    },
    {
      title: 'ЭКО',
      description: 'Лучшие методы лечения бесплодия с высоким уровнем успеха.',
      imageUrl: 'assets/moder_ser/ivf.jpeg',
      price: '$5,000'
    },
    {
      title: 'Пересадка костного мозга',
      description: 'Варианты пересадки костного мозга для подходящих и неподходящих доноров.',
      imageUrl: 'assets/moder_ser/bone.jpg',
      price: '$5,000'
    },
    {
      title: 'Гинекология',
      description: 'Специализированные услуги в области женского здоровья.',
      imageUrl: 'assets/moder_ser/gync.jpeg',
      price: '$5,000'
    },
    {
      title: 'Потеря веса',
      description: 'Эффективные варианты бариатрической хирургии.',
      imageUrl: 'assets/moder_ser/weight.jpeg',
      price: '$5,000'
    }
  ];
}
