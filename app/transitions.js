export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('coming-soon'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('reviews'),
    this.use('fade'),
    this.reverse('crossFade')
  );
}
