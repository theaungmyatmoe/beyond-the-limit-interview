# Architecture

- KISS
- DRY
- Model View Controller
- Data Transfer Objects
- Service Rep Architecture
- Dependency Injection 

# Problems

We need to refactor this code with maintainable and reusable.

```dart
class App {
void login(){}
void logout(){}
void register(){}
void getProfile(){}
void updateProfile(){}
void sendMessage(){}
void getMessages(){}
}
class SecondApp{
void login(){}
}

```

