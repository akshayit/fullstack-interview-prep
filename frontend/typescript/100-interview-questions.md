# TypeScript: 100 Interview Questions With Small Examples

Practice in: [TypeScript Playground](https://www.typescriptlang.org/play)

1. **What is TypeScript?** JavaScript with static types. Example: `let id: string = "u1";`
2. **Why use TypeScript?** Catch mistakes before runtime. Example: `pay(100)` not `pay("100")`.
3. **What is type annotation?** Explicit type. Example: `const total: number = 99;`
4. **What is type inference?** TS guesses type. Example: `const name = "A";`
5. **What is `string`?** Text type. Example: `let email: string;`
6. **What is `number`?** Numeric type. Example: `let price: number = 1000;`
7. **What is `boolean`?** true/false type. Example: `let isPaid: boolean = false;`
8. **What is array type?** List of same type. Example: `const ids: string[] = [];`
9. **What is tuple?** Fixed-position array. Example: `const point: [number, number] = [1,2];`
10. **What is object type?** Shape of object. Example: `{ id: string; name: string }`
11. **What is optional property?** May be missing. Example: `{ avatarUrl?: string }`
12. **What is readonly?** Cannot mutate property. Example: `readonly id: string`
13. **What is union?** One of many types. Example: `status: "paid" | "failed"`
14. **What is literal type?** Exact value type. Example: `type Role = "admin";`
15. **What is type alias?** Name for a type. Example: `type UserId = string;`
16. **What is interface?** Object contract. Example: `interface User { id: string }`
17. **Type vs interface?** Both model shapes; interfaces merge. Example: `interface Props {}`
18. **What is `any`?** Turns off checking. Example: `let data: any;`
19. **Why avoid `any`?** Hides bugs. Example: `data.total.toFixed()` may crash.
20. **What is `unknown`?** Safer unknown value. Example: `if(typeof x==="string") x.toUpperCase();`
21. **What is `never`?** Value that cannot happen. Example: exhaustive switch.
22. **What is `void`?** Function returns nothing. Example: `function log(): void {}`
23. **What is null checking?** Handle missing values. Example: `user?.name`
24. **What is non-null assertion?** Force not null. Example: `input!.value`
25. **Why be careful with `!`?** It can hide runtime null bugs. Example: missing DOM element.
26. **What is enum?** Named constants. Example: `enum Status { Paid }`
27. **Union vs enum?** Union is lighter for string states. Example: `"paid" | "failed"`
28. **What is generic?** Reusable type variable. Example: `function first<T>(items:T[]):T`
29. **Generic API response?** Shared wrapper. Example: `type ApiResponse<T> = { data: T }`
30. **What is constraint?** Limit generic shape. Example: `<T extends {id:string}>`
31. **What is keyof?** Keys of a type. Example: `keyof User`
32. **What is typeof in types?** Derive type from value. Example: `type Config = typeof config`
33. **What is indexed access?** Get property type. Example: `User["id"]`
34. **What is mapped type?** Transform properties. Example: `{ [K in keyof T]?: T[K] }`
35. **What is `Partial`?** Make fields optional. Example: `Partial<User>`
36. **What is `Required`?** Make fields required. Example: `Required<Form>`
37. **What is `Pick`?** Select fields. Example: `Pick<User, "id" | "name">`
38. **What is `Omit`?** Remove fields. Example: `Omit<User, "password">`
39. **What is `Record`?** Key-value object. Example: `Record<string, number>`
40. **What is `ReturnType`?** Function return type. Example: `ReturnType<typeof getUser>`
41. **What is `Parameters`?** Function args type. Example: `Parameters<typeof pay>`
42. **What is discriminated union?** Union with tag field. Example: `{type:"success", data:T}`
43. **Why use discriminated union?** Model UI states safely. Example: loading/success/error.
44. **What is exhaustive switch?** Handle all cases. Example: `const _x: never = state;`
45. **What is type guard?** Runtime check that narrows type. Example: `typeof value === "string"`
46. **Custom type guard?** Function returns `x is T`. Example: `function isUser(x): x is User`
47. **What is narrowing?** TS makes type more specific. Example: `if (user) user.id`
48. **What is assertion function?** Throws if invalid. Example: `assertOrder(order);`
49. **What is DTO?** Typed data transfer object. Example: `CreateOrderDto`
50. **What is domain type?** Business model type. Example: `Order`
51. **DTO vs domain type?** API input can differ from internal model. Example: `priceInPaise`.
52. **How type React props?** Use object type. Example: `type Props = { post: Post }`
53. **How type children?** Use `React.ReactNode`. Example: `{ children: React.ReactNode }`
54. **How type event?** Use React event type. Example: `React.ChangeEvent<HTMLInputElement>`
55. **How type state?** Give generic if needed. Example: `useState<User | null>(null)`
56. **How type reducer?** Use action union. Example: `{ type:"add"; item: Item }`
57. **How type API call?** Return promise. Example: `Promise<Order[]>`
58. **Why validate API response?** TS cannot check runtime JSON. Example: use schema validation.
59. **What is `as` assertion?** Tell compiler a type. Example: `value as User`
60. **Why avoid unsafe assertion?** Can create runtime bugs. Example: wrong API shape.
61. **What is module declaration?** Type untyped modules. Example: `declare module "*.css";`
62. **What is ambient type?** Global type declaration. Example: `declare global {}`
63. **What is tsconfig?** Compiler config. Example: `"strict": true`
64. **What is strict mode?** Enables safer checks. Example: strict null checks.
65. **What is `noImplicitAny`?** Requires known types. Example: function params need type.
66. **What is `strictNullChecks`?** Forces null handling. Example: `User | null`
67. **What is `moduleResolution`?** How imports are found. Example: `node`
68. **What is path alias?** Short imports. Example: `@/components/Button`
69. **What is declaration file?** `.d.ts` type-only file. Example: library types.
70. **What is source map?** Debug TS in browser. Example: original `.ts` line.
71. **How type Express request?** Extend request user. Example: `req.user: AuthUser`
72. **How type environment vars?** Validate then expose typed config. Example: `config.PORT`.
73. **How type money?** Use branded type. Example: `type Paise = number & {__brand:"Paise"}`
74. **What is branded type?** Prevent mixing same primitive meanings. Example: `UserId`.
75. **What is conditional type?** Type depends on condition. Example: `T extends string ? A : B`
76. **What is infer?** Extract type in conditional type. Example: `Promise<infer T>`
77. **What is template literal type?** Build string types. Example: ``type Route = `/users/${string}` ``
78. **What is satisfies?** Check shape without widening too much. Example: `config satisfies Config`
79. **What is const assertion?** Preserve literal values. Example: `as const`
80. **How type status map?** Record union keys. Example: `Record<OrderStatus, string>`
81. **What is excess property check?** TS catches unknown fields in object literal. Example: typo in props.
82. **What is structural typing?** Shape matters, not class name. Example: object with `id`.
83. **What is duck typing?** If shape fits, it works. Example: `{ id:"1" }` as entity.
84. **How handle form types?** Separate raw form and validated payload. Example: `FormValues`.
85. **How handle errors?** Use typed error shape. Example: `{ code:"VALIDATION_ERROR" }`
86. **What is API version type?** Model versioned contract. Example: `V1OrderResponse`.
87. **What is monorepo type sharing?** Shared package for contracts. Example: `@app/contracts`
88. **Risk of shared types?** Frontend may trust backend too much. Example: still validate JSON.
89. **How type WebSocket event?** Discriminated union. Example: `{type:"message.created"}`
90. **How type Redux action?** Action union. Example: `{ type:"cart/add"; payload: Item }`
91. **How type Zustand store?** Store shape and actions. Example: `create<CartStore>()`
92. **How type Next.js params?** Object with route params. Example: `{ params:{id:string} }`
93. **How type middleware context?** Add authenticated user type. Example: `AuthContext`.
94. **What is library type?** Package-provided types. Example: `@types/node`
95. **What is compile-time only?** Types disappear in JS output. Example: `type User`.
96. **Does TS improve runtime performance?** No direct runtime speed. Example: compile removes types.
97. **Does TS replace tests?** No. Example: business rules still need tests.
98. **Does TS replace validation?** No. Example: API response can be invalid.
99. **Best TS interview answer?** Types encode contracts and prevent common bugs. Example: order status union.
100. **Production TS rule?** Use strict types at boundaries. Example: validate payment request before processing.

