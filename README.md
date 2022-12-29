# capacitor-openinstall

capacitor-openinstall

## Install

```bash
npm install capacitor-openinstall
npx cap sync
```

## API

<docgen-index>

* [`configure(...)`](#configure)
* [`serialEnabled(...)`](#serialenabled)
* [`clipBoardEnabled(...)`](#clipboardenabled)
* [`init()`](#init)
* [`getInstall()`](#getinstall)
* [`getInstallCanRetry()`](#getinstallcanretry)
* [`reportRegister()`](#reportregister)
* [`reportEffectPoint(...)`](#reporteffectpoint)
* [`addListener('wakeUp', ...)`](#addlistenerwakeup)
* [`removeAllListeners()`](#removealllisteners)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### configure(...)

```typescript
configure(options: ConfigOptions) => Promise<void>
```

| Param         | Type                                                    |
| ------------- | ------------------------------------------------------- |
| **`options`** | <code><a href="#configoptions">ConfigOptions</a></code> |

--------------------


### serialEnabled(...)

```typescript
serialEnabled(options: { enabled: boolean; }) => Promise<void>
```

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

--------------------


### clipBoardEnabled(...)

```typescript
clipBoardEnabled(options: { enabled: boolean; }) => Promise<void>
```

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

--------------------


### init()

```typescript
init() => Promise<void>
```

--------------------


### getInstall()

```typescript
getInstall() => Promise<any>
```

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getInstallCanRetry()

```typescript
getInstallCanRetry() => Promise<any>
```

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### reportRegister()

```typescript
reportRegister() => Promise<void>
```

--------------------


### reportEffectPoint(...)

```typescript
reportEffectPoint(options: { pointId?: string; pointValue?: string; }) => Promise<void>
```

| Param         | Type                                                    |
| ------------- | ------------------------------------------------------- |
| **`options`** | <code>{ pointId?: string; pointValue?: string; }</code> |

--------------------


### addListener('wakeUp', ...)

```typescript
addListener(eventName: 'wakeUp', listenerFunc: WakeUpListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                      |
| ------------------ | --------------------------------------------------------- |
| **`eventName`**    | <code>'wakeUp'</code>                                     |
| **`listenerFunc`** | <code><a href="#wakeuplistener">WakeUpListener</a></code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### removeAllListeners()

```typescript
removeAllListeners() => Promise<void>
```

--------------------


### Interfaces


#### ConfigOptions

| Prop               | Type                 |
| ------------------ | -------------------- |
| **`adEnabled`**    | <code>boolean</code> |
| **`macDisabled`**  | <code>boolean</code> |
| **`imeiDisabled`** | <code>boolean</code> |
| **`gaid`**         | <code>string</code>  |
| **`oaid`**         | <code>string</code>  |


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


### Type Aliases


#### WakeUpListener

<code>(status: any): void</code>

</docgen-api>
