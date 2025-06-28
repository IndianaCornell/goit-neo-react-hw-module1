# Завдання 1. Профіль соціальної мережі

Необхідно створити компонент `<Profile>`, за допомогою якого ми могли б відображати інформацію про користувача соціальної мережі.

## Пропси компонента:

- `name` — ім'я користувача
- `tag` — тег у соціальній мережі без @
- `location` — місто і країна
- `image` — посилання на зображення
- `stats` — об'єкт з інформацією про активність

## Приклад розмітки:

```html
<div>
  <div>
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
    />
    <p>Petra Marica</p>
    <p>@pmarica</p>
    <p>Salvador, Brasil</p>
  </div>

  <ul>
    <li>
      <span>Followers</span>
      <span>1000</span>
    </li>
    <li>
      <span>Views</span>
      <span>2000</span>
    </li>
    <li>
      <span>Likes</span>
      <span>3000</span>
    </li>
  </ul>
</div>
```

## Приклад використання:

```jsx
import userData from "../userData.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};
```

# Завдання 2. Список друзів

Необхідно створити компонент `<FriendList>` для відображення друзів користувача.

## Пропси компонента `<FriendList>`:

- `friends` — масив об’єктів з даними про друзів

## Розмітка:

```html
<ul>
  <li>
    <FriendListItem />
  </li>
</ul>
```

## Пропси компонента `<FriendListItem>`:

- `avatar`
- `name`
- `isOnline`

## Приклад розмітки:

```html
<div>
  <img src="" alt="Avatar" width="48" />
  <p>Friend name</p>
  <p>Friend status</p>
</div>
```

*Статус Online — зелений, Offline — червоний.*

## Приклад використання:

```jsx
import friends from "../friends.json";

const App = () => {
  return (
    <>
      <FriendList friends={friends} />
    </>
  );
};
```

# Завдання 3. Історія транзакцій

Необхідно створити компонент `<TransactionHistory>` для відображення списку транзакцій.

## Пропси компонента:

- `items` — масив об’єктів транзакцій

## Приклад розмітки:

```html
<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>
```

## Приклад використання:

```jsx
import transactions from "../transactions.json";

const App = () => {
  return (
    <>
      <TransactionHistory items={transactions} />
    </>
  );
};
```

## Повний імпорт у App:

```jsx
import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
```
