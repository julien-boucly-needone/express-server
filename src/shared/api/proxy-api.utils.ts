import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const proxyHandler = (): ProxyHandler<any> => ({
    get(target: any, propKey: any): any {
        const origMethod = target[propKey];
        return (...args: any): any => {
            const that: any = this;
            const result: Observable<any> = origMethod.apply(that, args).pipe(
                catchError((error) => {
                    console.error(error);

                    return throwError({
                        ...error,
                    });
                })
            );
            return result;
        };
    },
});
