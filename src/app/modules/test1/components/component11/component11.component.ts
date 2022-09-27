import {
  ChangeDetectionStrategy,
  Component, ComponentFactory, ComponentFactoryResolver,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {Test1ApiService} from "../../services/test1-api.service";
import {async, Observable} from "rxjs";
import {pluck, tap, filter, map} from 'rxjs/operators';
import {PopupComponent} from "../../../shared/components/popup/popup.component";
import {AllData, Product} from '../../../shared/constant/product';

@Component({
  selector: 'app-component11',
  templateUrl: './component11.component.html',
  styleUrls: ['./component11.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Component11Component implements OnInit {
  getAll$: Observable<AllData> | undefined;
  productList$: Observable<Product[]> | undefined;
  singleProduct$: Observable<Product> | undefined;
  // check!: number;
  @ViewChild('content', {read: TemplateRef}) content: ElementRef | undefined;

  constructor(private dataService: Test1ApiService, private vc: ViewContainerRef, private cfr: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    this.productsDetails();
    this.productsList();
    // this.check = null;
  }

  productsDetails() {
    this.getAll$ = this.dataService.getAll();
  }

  productsList() {
    this.productList$ = this.getAll$?.pipe(
      tap((item: any) => {
        // console.log(item);
      }),
      // pluck('products'), //pluck is deprecated so use map instead. //pluck use map function in background
      map(item =>  item['products'])
    );
  }

  getProductsDetails(id: number) {
    // this.singleProduct$ = this.dataService.getProduct(id); // you can directly hit single product API

    this.singleProduct$ = this.productList$?.pipe(
      map( products => products.filter((product: Product) => product.id == id) ),
      pluck(0),
      // tap(item =>
      //   console.log(item)
      // ),
    );

    const cardFactory: ComponentFactory<PopupComponent> = this.cfr.resolveComponentFactory(PopupComponent);
    const componentRef = this.vc.createComponent<PopupComponent>( cardFactory, undefined, undefined, [this.content?.nativeElement],undefined );
    componentRef.instance.onDestroy.subscribe(next => componentRef.destroy() );
    console.log(componentRef);
  }

}
