## تایپ‌اسکریپت چیست؟

**TypeScript** یک زبان برنامه‌نویسی مستقل از جاوااسکریپت نیست؛ بلکه یک **لایه قوی‌تر روی JavaScript** است.

یعنی:

```ts
TypeScript = JavaScript + Type System
```

جاوااسکریپت به‌صورت پیش‌فرض نوع داده‌ها را جدی بررسی نمی‌کند. مثلاً ممکن است یک تابع انتظار عدد داشته باشد، ولی ما به اشتباه رشته به آن بدهیم و خطا فقط زمان اجرای برنامه مشخص شود.

مثال در JavaScript:

```js
function sum(a, b) {
  return a + b;
}

sum(10, "20"); // خروجی: "1020"
```

اینجا برنامه خطا نمی‌دهد، ولی نتیجه از نظر منطقی اشتباه است.

در TypeScript می‌نویسیم:

```ts
function sum(a: number, b: number): number {
  return a + b;
}

sum(10, "20"); // خطا قبل از اجرا
```

اینجا TypeScript قبل از اجرا به ما هشدار می‌دهد که `"20"` رشته است و نباید به تابعی داده شود که عدد می‌خواهد.

---

## TypeScript مستقیماً اجرا می‌شود؟

معمولاً نه.

مرورگر و Node.js در اصل JavaScript را اجرا می‌کنند. پس کد TypeScript باید به JavaScript تبدیل شود. به این فرآیند معمولاً می‌گوییم:

```text
TypeScript Code → Compile / Transpile → JavaScript Code
```

مثلاً این کد:

```ts
const age: number = 25;
```

بعد از تبدیل، تقریباً می‌شود:

```js
const age = 25;
```

یعنی TypeScript بیشتر برای مرحله توسعه است؛ کمک می‌کند کد را امن‌تر، قابل فهم‌تر و قابل نگهداری‌تر بنویسیم.

---

## چرا باید از TypeScript استفاده کنیم؟

### ۱. خطاها را قبل از اجرا پیدا می‌کند

در پروژه‌های واقعی، خیلی از خطاها به خاطر اشتباه در نوع داده‌هاست.

مثلاً:

```ts
type User = {
  id: number;
  name: string;
  email: string;
};

function sendEmail(user: User) {
  console.log(user.email);
}
```

حالا اگر اشتباه بنویسیم:

```ts
sendEmail({
  id: 1,
  name: "Ali"
});
```

TypeScript می‌گوید:

```text
Property 'email' is missing
```

یعنی قبل از اینکه پروژه را اجرا کنیم، خطا مشخص می‌شود.

---

### ۲. کد خواناتر و قابل فهم‌تر می‌شود

وقتی تابعی را می‌بینیم:

```ts
function getProductPrice(productId: number): Promise<number> {
  // ...
}
```

بدون خواندن کل کد می‌فهمیم:

این تابع یک `productId` عددی می‌گیرد و در نهایت یک عدد برمی‌گرداند.

در پروژه‌های بزرگ این موضوع خیلی مهم است، چون برنامه‌نویس همیشه نمی‌تواند کل کد را از اول تا آخر بخواند.

---

### ۳. برای پروژه‌های بزرگ و تیمی عالی است

در پروژه کوچک شاید JavaScript کافی باشد، اما وقتی پروژه بزرگ می‌شود، مثلاً شامل این بخش‌ها باشد:

```text
Frontend
Backend
Admin Panel
Authentication
Payment
Reservation
Order
Microservices
```

دیگر حدس زدن ساختار داده‌ها خطرناک است.

TypeScript کمک می‌کند بین بخش‌های مختلف پروژه قرارداد مشخص داشته باشیم.

مثلاً:

```ts
type CreateOrderDto = {
  userId: number;
  productId: number;
  quantity: number;
};
```

حالا همه می‌دانند برای ساخت سفارش دقیقاً چه داده‌ای لازم است.

---

### ۴. در NestJS تقریباً ضروری است

NestJS از ابتدا با TypeScript طراحی شده است.

مثلاً در Nest ما زیاد با این مفاهیم کار داریم:

```ts
DTO
Interface
Class
Decorator
Service
Controller
Module
Dependency Injection
```

مثال:

```ts
export class CreateUserDto {
  name: string;
  email: string;
  password: string;
}
```

اگر TypeScript را خوب بلد نباشیم، فهم NestJS سخت‌تر می‌شود.

---

### ۵. در React و Next.js کدنویسی را حرفه‌ای‌تر می‌کند

در React و Next.js، TypeScript کمک می‌کند props، state، فرم‌ها، API response و componentها دقیق‌تر تعریف شوند.

مثلاً:

```tsx
type ProductCardProps = {
  title: string;
  price: number;
  imageUrl: string;
};

function ProductCard({ title, price, imageUrl }: ProductCardProps) {
  return (
    <div>
      <img src={imageUrl} />
      <h2>{title}</h2>
      <p>{price} تومان</p>
    </div>
  );
}
```

اینجا مشخص است کامپوننت `ProductCard` دقیقاً چه ورودی‌هایی می‌خواهد.

---

### ۶. autocomplete و refactor بهتر می‌شود

وقتی TypeScript استفاده می‌کنیم، ادیتورهایی مثل VS Code و Cursor خیلی بهتر کمک می‌کنند.

مثلاً وقتی می‌نویسیم:

```ts
user.
```

ادیتور می‌تواند پیشنهاد دهد:

```ts
user.name
user.email
user.id
```

چون ساختار `user` را می‌شناسد.

همچنین اگر اسم یک property را تغییر دهیم، احتمال خراب شدن بخش‌های دیگر پروژه کمتر می‌شود.

---

### ۷. مستندسازی زنده داخل کد است

این کد را ببین:

```ts
type PaymentStatus = "pending" | "paid" | "failed";
```

بدون توضیح اضافه مشخص است وضعیت پرداخت فقط می‌تواند یکی از این سه مقدار باشد.

این یعنی TypeScript خودش تا حد زیادی نقش documentation دارد.

---

## آیا TypeScript جلوی همه خطاها را می‌گیرد؟

نه.

 خطاهای منطقی، امنیتی یا خطاهای دیتابیس را کامل حل نمی‌کند.

مثلاً این کد از نظر TypeScript درست است:

```ts
function calculateDiscount(price: number): number {
  return price * 2;
}
```

ولی از نظر منطق اشتباه است، چون تخفیف نباید قیمت را دو برابر کند.

پس TypeScript بیشتر جلوی خطاهای مربوط به **نوع داده، ساختار داده و اشتباهات رایج برنامه‌نویسی** را می‌گیرد.