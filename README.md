# React Component Pack

```bash
npm install react-component-pack
```

## Usage

With `react-component-pack` you can go from this:

```jsx
function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <AnotherDataProvider>
          <WtfProvider>
            <ThisIsGettingReallyBigProvider>
              <OhMyGodTheresMoreProvider>
                <FinallySomeRealComponents />
              </OhMyGodTheresMoreProvider>
            </ThisIsGettingReallyBigProvider>
          </WtfProvider>
        </AnotherDataProvider>
      </DataProvider>
    </AuthProvider>
  );
}
```

To this:

```jsx
import { createPack } from 'react-component-pack';

const ProviderPack = createPack(
  AuthProvider,
  DataProvider,
  AnotherDataProvider,
  WtfProvider,
  ThisIsGettingReallyBigProvider,
  OhMyGodTheresMoreProvider
);

function App() {
  return (
    <ProviderPack>
      <FinallySomeRealComponents />
    </ProviderPack>
  );
}
```
