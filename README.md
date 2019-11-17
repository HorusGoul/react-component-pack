# React Component Pack · [![npm version](https://img.shields.io/npm/v/react-component-pack.svg)](https://www.npmjs.com/package/react-component-pack) [![license](https://img.shields.io/npm/l/react-component-pack.svg?color=blue)](./LICENSE)

Say goodbye to provider hell with react-component-pack, a utility that allows you to group multiple components into a single one

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
