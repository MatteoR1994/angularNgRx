import { createAction } from "@ngrx/store";

export const increment = createAction('[Counter Component] Increment'); // Tra le [] va il componente di riferimento, e dopo è il comando vero e proprio che verrà lanciato.
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');