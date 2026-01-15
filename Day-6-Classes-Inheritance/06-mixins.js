/*
  Day 6 - Classes & Inheritance
  Exercise: Mixins (Multiple Inheritance Pattern)
  
  JavaScript doesn't support multiple inheritance, but we can achieve
  similar functionality using mixins. Implement a mixin system.
  
  Requirements:
  1. Create a `mixin` function that applies mixins to a class
  2. Mixins should be able to add methods and properties
  3. Later mixins override earlier ones (last wins)
  4. Implement these mixins:
     - Serializable: toJSON(), fromJSON()
     - Comparable: compareTo(), equals()
     - Timestamped: createdAt, updatedAt, touch()
     - EventEmitter: on(), off(), emit()
  
  Example:
    const SerializableTimestamped = mixin(
      class Base {},
      Serializable,
      Timestamped
    );
    
    class User extends SerializableTimestamped {
      constructor(name) {
        super();
        this.name = name;
      }
    }
    
    const user = new User('John');
    console.log(user.toJSON());     // From Serializable
    console.log(user.createdAt);    // From Timestamped
*/

// Mixin applicator function
function mixin(BaseClass, ...mixins) {
  // Your implementation here
}

// Alternative: Object-based mixins
const Serializable = {
  // Your implementation here
};

const Comparable = {
  // Your implementation here
};

const Timestamped = {
  // Your implementation here
};

const EventEmitterMixin = {
  // Your implementation here
};

// Test: Create a class with multiple mixins
class Entity {
  constructor(id) {
    this.id = id;
  }
}

// Apply mixins to Entity
const EnhancedEntity = mixin(Entity, Serializable, Timestamped, Comparable);

class User extends EnhancedEntity {
  constructor(id, name, age) {
    super(id);
    this.name = name;
    this.age = age;
  }
}

// Test cases
console.log('--- Serializable Mixin ---');
const user1 = new User(1, 'Alice', 30);
console.log('toJSON:', user1.toJSON());

const user2 = User.fromJSON ? User.fromJSON('{"id":2,"name":"Bob","age":25}') : 'fromJSON not implemented';
console.log('fromJSON:', user2);

console.log('\n--- Timestamped Mixin ---');
console.log('Created at:', user1.createdAt);
setTimeout(() => {
  user1.touch && user1.touch();
  console.log('Updated at:', user1.updatedAt);
}, 100);

console.log('\n--- Comparable Mixin ---');
const user3 = new User(3, 'Charlie', 35);
if (user1.compareTo) {
  console.log('user1 vs user3:', user1.compareTo(user3)); // Compare by id
  console.log('user1 equals user1:', user1.equals(user1)); // true
  console.log('user1 equals user3:', user1.equals(user3)); // false
}

// Test with EventEmitter mixin
console.log('\n--- EventEmitter Mixin ---');
const EventfulEntity = mixin(Entity, EventEmitterMixin);

class Button extends EventfulEntity {
  constructor(label) {
    super(Math.random());
    this.label = label;
  }
  
  click() {
    this.emit && this.emit('click', { button: this.label });
  }
}

const btn = new Button('Submit');
if (btn.on) {
  btn.on('click', (data) => console.log('Button clicked:', data));
  btn.click();
}

// Verify prototype chain
console.log('\n--- Inheritance Check ---');
console.log('user1 instanceof User:', user1 instanceof User);
console.log('user1 instanceof Entity:', user1 instanceof Entity);
