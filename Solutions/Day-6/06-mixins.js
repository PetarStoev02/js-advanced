/*
  Day 6 - Solution: Mixins
*/

function mixin(BaseClass, ...mixins) {
  class MixedClass extends BaseClass {}
  
  for (const mixin of mixins) {
    Object.getOwnPropertyNames(mixin).forEach(name => {
      if (name !== 'constructor') {
        Object.defineProperty(
          MixedClass.prototype,
          name,
          Object.getOwnPropertyDescriptor(mixin, name)
        );
      }
    });
  }
  
  return MixedClass;
}

const Serializable = {
  toJSON() {
    return JSON.stringify(this);
  }
};

const Timestamped = {
  _initTimestamp() {
    if (!this.createdAt) {
      this.createdAt = new Date();
      this.updatedAt = new Date();
    }
  },
  touch() {
    this.updatedAt = new Date();
  }
};

const Comparable = {
  compareTo(other) {
    return this.id - other.id;
  },
  equals(other) {
    return this.id === other.id;
  }
};

const EventEmitterMixin = {
  _events: null,
  _getEvents() {
    if (!this._events) this._events = new Map();
    return this._events;
  },
  on(event, cb) {
    const events = this._getEvents();
    if (!events.has(event)) events.set(event, []);
    events.get(event).push(cb);
  },
  emit(event, ...args) {
    const events = this._getEvents();
    if (events.has(event)) {
      events.get(event).forEach(cb => cb(...args));
    }
  }
};

// Test
class Entity {
  constructor(id) {
    this.id = id;
  }
}

const EnhancedEntity = mixin(Entity, Serializable, Comparable);

class User extends EnhancedEntity {
  constructor(id, name) {
    super(id);
    this.name = name;
  }
}

const user = new User(1, 'Alice');
console.log(user.toJSON());
console.log(user.compareTo(new User(2, 'Bob'))); // -1
