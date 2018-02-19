import {Component, ComponentFactoryResolver, ViewContainerRef} from '@angular/core';

/**
 * This is a base class.
 * If you want to have a component that inject dynamically component (one and only one),
 * you can use this.
 */
@Component({template: '<div></div>'})
export class DynamicContainerComponent {

    /**
     * Last component injected
     * @type {any}
     */
    private injectedComponent: any = null;

    /**
     * Call to inject component
     * @param component: component will be injected
     */
    protected injectComponent(component: any) {
        if (null !== this.injectedComponent) {
            this.removeInjectedComponent();
        }
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);   // factory for component
        const ref = this.viewContainerRef.createComponent(factory);                         // injection
        ref.changeDetectorRef.detectChanges();                                              // start ng2 flow
        this.injectedComponent = ref;                                                       // save injected component
    }

    /**
     * Remove injected component.
     * this.injectedComponent.destroy() invocation trigger ngOnDestroy if defined
     * into injected component
     */
    protected removeInjectedComponent() {
        if (null !== this.injectedComponent) {
            this.injectedComponent.destroy();
            this.injectedComponent = null;
        }
    }

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver, // to inject dynamically
        private viewContainerRef: ViewContainerRef                  // refer to this component (child)
    ) {
    }

}