var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const t = 2e3, s = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let i = 1234567;
const e = Math.PI / 180, a = 180 / Math.PI;
function n(t2, s2, i2) {
  return Math.max(s2, Math.min(i2, t2));
}
function r(t2, s2) {
  return (t2 % s2 + s2) % s2;
}
function h(t2, s2, i2) {
  return (1 - i2) * t2 + i2 * s2;
}
const o = { DEG2RAD: e, RAD2DEG: a, generateUUID: function() {
  const t2 = 4294967295 * Math.random() | 0, i2 = 4294967295 * Math.random() | 0, e2 = 4294967295 * Math.random() | 0, a2 = 4294967295 * Math.random() | 0;
  return (s[255 & t2] + s[t2 >> 8 & 255] + s[t2 >> 16 & 255] + s[t2 >> 24 & 255] + "-" + s[255 & i2] + s[i2 >> 8 & 255] + "-" + s[i2 >> 16 & 15 | 64] + s[i2 >> 24 & 255] + "-" + s[63 & e2 | 128] + s[e2 >> 8 & 255] + "-" + s[e2 >> 16 & 255] + s[e2 >> 24 & 255] + s[255 & a2] + s[a2 >> 8 & 255] + s[a2 >> 16 & 255] + s[a2 >> 24 & 255]).toLowerCase();
}, clamp: n, euclideanModulo: r, mapLinear: function(t2, s2, i2, e2, a2) {
  return e2 + (t2 - s2) * (a2 - e2) / (i2 - s2);
}, inverseLerp: function(t2, s2, i2) {
  return t2 !== s2 ? (i2 - t2) / (s2 - t2) : 0;
}, lerp: h, damp: function(t2, s2, i2, e2) {
  return h(t2, s2, 1 - Math.exp(-i2 * e2));
}, pingpong: function(t2, s2 = 1) {
  return s2 - Math.abs(r(t2, 2 * s2) - s2);
}, smoothstep: function(t2, s2, i2) {
  return t2 <= s2 ? 0 : t2 >= i2 ? 1 : (t2 = (t2 - s2) / (i2 - s2)) * t2 * (3 - 2 * t2);
}, smootherstep: function(t2, s2, i2) {
  return t2 <= s2 ? 0 : t2 >= i2 ? 1 : (t2 = (t2 - s2) / (i2 - s2)) * t2 * t2 * (t2 * (6 * t2 - 15) + 10);
}, randInt: function(t2, s2) {
  return t2 + Math.floor(Math.random() * (s2 - t2 + 1));
}, randFloat: function(t2, s2) {
  return t2 + Math.random() * (s2 - t2);
}, randFloatSpread: function(t2) {
  return t2 * (0.5 - Math.random());
}, seededRandom: function(t2) {
  void 0 !== t2 && (i = t2);
  let s2 = i += 1831565813;
  return s2 = Math.imul(s2 ^ s2 >>> 15, 1 | s2), s2 ^= s2 + Math.imul(s2 ^ s2 >>> 7, 61 | s2), ((s2 ^ s2 >>> 14) >>> 0) / 4294967296;
}, degToRad: function(t2) {
  return t2 * e;
}, radToDeg: function(t2) {
  return t2 * a;
}, isPowerOfTwo: function(t2) {
  return !(t2 & t2 - 1) && 0 !== t2;
}, ceilPowerOfTwo: function(t2) {
  return Math.pow(2, Math.ceil(Math.log(t2) / Math.LN2));
}, floorPowerOfTwo: function(t2) {
  return Math.pow(2, Math.floor(Math.log(t2) / Math.LN2));
}, setQuaternionFromProperEuler: function(t2, s2, i2, e2, a2) {
  const n2 = Math.cos, r2 = Math.sin, h2 = n2(i2 / 2), o2 = r2(i2 / 2), c2 = n2((s2 + e2) / 2), l2 = r2((s2 + e2) / 2), u2 = n2((s2 - e2) / 2), d2 = r2((s2 - e2) / 2), m2 = n2((e2 - s2) / 2), _2 = r2((e2 - s2) / 2);
  switch (a2) {
    case "XYX":
      t2.set(h2 * l2, o2 * u2, o2 * d2, h2 * c2);
      break;
    case "YZY":
      t2.set(o2 * d2, h2 * l2, o2 * u2, h2 * c2);
      break;
    case "ZXZ":
      t2.set(o2 * u2, o2 * d2, h2 * l2, h2 * c2);
      break;
    case "XZX":
      t2.set(h2 * l2, o2 * _2, o2 * m2, h2 * c2);
      break;
    case "YXY":
      t2.set(o2 * m2, h2 * l2, o2 * _2, h2 * c2);
      break;
    case "ZYZ":
      t2.set(o2 * _2, o2 * m2, h2 * l2, h2 * c2);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + a2);
  }
}, normalize: function(t2, s2) {
  switch (s2.constructor) {
    case Float32Array:
      return t2;
    case Uint32Array:
      return Math.round(4294967295 * t2);
    case Uint16Array:
      return Math.round(65535 * t2);
    case Uint8Array:
      return Math.round(255 * t2);
    case Int32Array:
      return Math.round(2147483647 * t2);
    case Int16Array:
      return Math.round(32767 * t2);
    case Int8Array:
      return Math.round(127 * t2);
    default:
      throw new Error("Invalid component type.");
  }
}, denormalize: function(t2, s2) {
  switch (s2.constructor) {
    case Float32Array:
      return t2;
    case Uint32Array:
      return t2 / 4294967295;
    case Uint16Array:
      return t2 / 65535;
    case Uint8Array:
      return t2 / 255;
    case Int32Array:
      return Math.max(t2 / 2147483647, -1);
    case Int16Array:
      return Math.max(t2 / 32767, -1);
    case Int8Array:
      return Math.max(t2 / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
} };
class c {
  constructor(t2 = 0, s2 = 0) {
    c.prototype.isVector2 = true, this.x = t2, this.y = s2;
  }
  get width() {
    return this.x;
  }
  set width(t2) {
    this.x = t2;
  }
  get height() {
    return this.y;
  }
  set height(t2) {
    this.y = t2;
  }
  set(t2, s2) {
    return this.x = t2, this.y = s2, this;
  }
  setScalar(t2) {
    return this.x = t2, this.y = t2, this;
  }
  setX(t2) {
    return this.x = t2, this;
  }
  setY(t2) {
    return this.y = t2, this;
  }
  setComponent(t2, s2) {
    switch (t2) {
      case 0:
        this.x = s2;
        break;
      case 1:
        this.y = s2;
        break;
      default:
        throw new Error("index is out of range: " + t2);
    }
    return this;
  }
  getComponent(t2) {
    switch (t2) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + t2);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t2) {
    return this.x = t2.x, this.y = t2.y, this;
  }
  add(t2) {
    return this.x += t2.x, this.y += t2.y, this;
  }
  addScalar(t2) {
    return this.x += t2, this.y += t2, this;
  }
  addVectors(t2, s2) {
    return this.x = t2.x + s2.x, this.y = t2.y + s2.y, this;
  }
  addScaledVector(t2, s2) {
    return this.x += t2.x * s2, this.y += t2.y * s2, this;
  }
  sub(t2) {
    return this.x -= t2.x, this.y -= t2.y, this;
  }
  subScalar(t2) {
    return this.x -= t2, this.y -= t2, this;
  }
  subVectors(t2, s2) {
    return this.x = t2.x - s2.x, this.y = t2.y - s2.y, this;
  }
  multiply(t2) {
    return this.x *= t2.x, this.y *= t2.y, this;
  }
  multiplyScalar(t2) {
    return this.x *= t2, this.y *= t2, this;
  }
  divide(t2) {
    return this.x /= t2.x, this.y /= t2.y, this;
  }
  divideScalar(t2) {
    return this.multiplyScalar(1 / t2);
  }
  applyMatrix3(t2) {
    const s2 = this.x, i2 = this.y, e2 = t2.elements;
    return this.x = e2[0] * s2 + e2[3] * i2 + e2[6], this.y = e2[1] * s2 + e2[4] * i2 + e2[7], this;
  }
  min(t2) {
    return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this;
  }
  max(t2) {
    return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this;
  }
  clamp(t2, s2) {
    return this.x = n(this.x, t2.x, s2.x), this.y = n(this.y, t2.y, s2.y), this;
  }
  clampScalar(t2, s2) {
    return this.x = n(this.x, t2, s2), this.y = n(this.y, t2, s2), this;
  }
  clampLength(t2, s2) {
    const i2 = this.length();
    return this.divideScalar(i2 || 1).multiplyScalar(n(i2, t2, s2));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(t2) {
    return this.x * t2.x + this.y * t2.y;
  }
  cross(t2) {
    return this.x * t2.y - this.y * t2.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(t2) {
    const s2 = Math.sqrt(this.lengthSq() * t2.lengthSq());
    if (0 === s2)
      return Math.PI / 2;
    const i2 = this.dot(t2) / s2;
    return Math.acos(n(i2, -1, 1));
  }
  distanceTo(t2) {
    return Math.sqrt(this.distanceToSquared(t2));
  }
  distanceToSquared(t2) {
    const s2 = this.x - t2.x, i2 = this.y - t2.y;
    return s2 * s2 + i2 * i2;
  }
  manhattanDistanceTo(t2) {
    return Math.abs(this.x - t2.x) + Math.abs(this.y - t2.y);
  }
  setLength(t2) {
    return this.normalize().multiplyScalar(t2);
  }
  lerp(t2, s2) {
    return this.x += (t2.x - this.x) * s2, this.y += (t2.y - this.y) * s2, this;
  }
  lerpVectors(t2, s2, i2) {
    return this.x = t2.x + (s2.x - t2.x) * i2, this.y = t2.y + (s2.y - t2.y) * i2, this;
  }
  equals(t2) {
    return t2.x === this.x && t2.y === this.y;
  }
  fromArray(t2, s2 = 0) {
    return this.x = t2[s2], this.y = t2[s2 + 1], this;
  }
  toArray(t2 = [], s2 = 0) {
    return t2[s2] = this.x, t2[s2 + 1] = this.y, t2;
  }
  fromBufferAttribute(t2, s2) {
    return this.x = t2.getX(s2), this.y = t2.getY(s2), this;
  }
  rotateAround(t2, s2) {
    const i2 = Math.cos(s2), e2 = Math.sin(s2), a2 = this.x - t2.x, n2 = this.y - t2.y;
    return this.x = a2 * i2 - n2 * e2 + t2.x, this.y = a2 * e2 + n2 * i2 + t2.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class l {
  constructor(t2 = 0, s2 = 0, i2 = 0, e2 = 1) {
    this.isQuaternion = true, this._x = t2, this._y = s2, this._z = i2, this._w = e2;
  }
  static slerpFlat(t2, s2, i2, e2, a2, n2, r2) {
    let h2 = i2[e2 + 0], o2 = i2[e2 + 1], c2 = i2[e2 + 2], l2 = i2[e2 + 3];
    const u2 = a2[n2 + 0], d2 = a2[n2 + 1], m2 = a2[n2 + 2], _2 = a2[n2 + 3];
    if (0 === r2)
      return t2[s2 + 0] = h2, t2[s2 + 1] = o2, t2[s2 + 2] = c2, void (t2[s2 + 3] = l2);
    if (1 === r2)
      return t2[s2 + 0] = u2, t2[s2 + 1] = d2, t2[s2 + 2] = m2, void (t2[s2 + 3] = _2);
    if (l2 !== _2 || h2 !== u2 || o2 !== d2 || c2 !== m2) {
      let t3 = 1 - r2;
      const s3 = h2 * u2 + o2 * d2 + c2 * m2 + l2 * _2, i3 = s3 >= 0 ? 1 : -1, e3 = 1 - s3 * s3;
      if (e3 > Number.EPSILON) {
        const a4 = Math.sqrt(e3), n3 = Math.atan2(a4, s3 * i3);
        t3 = Math.sin(t3 * n3) / a4, r2 = Math.sin(r2 * n3) / a4;
      }
      const a3 = r2 * i3;
      if (h2 = h2 * t3 + u2 * a3, o2 = o2 * t3 + d2 * a3, c2 = c2 * t3 + m2 * a3, l2 = l2 * t3 + _2 * a3, t3 === 1 - r2) {
        const t4 = 1 / Math.sqrt(h2 * h2 + o2 * o2 + c2 * c2 + l2 * l2);
        h2 *= t4, o2 *= t4, c2 *= t4, l2 *= t4;
      }
    }
    t2[s2] = h2, t2[s2 + 1] = o2, t2[s2 + 2] = c2, t2[s2 + 3] = l2;
  }
  static multiplyQuaternionsFlat(t2, s2, i2, e2, a2, n2) {
    const r2 = i2[e2], h2 = i2[e2 + 1], o2 = i2[e2 + 2], c2 = i2[e2 + 3], l2 = a2[n2], u2 = a2[n2 + 1], d2 = a2[n2 + 2], m2 = a2[n2 + 3];
    return t2[s2] = r2 * m2 + c2 * l2 + h2 * d2 - o2 * u2, t2[s2 + 1] = h2 * m2 + c2 * u2 + o2 * l2 - r2 * d2, t2[s2 + 2] = o2 * m2 + c2 * d2 + r2 * u2 - h2 * l2, t2[s2 + 3] = c2 * m2 - r2 * l2 - h2 * u2 - o2 * d2, t2;
  }
  get x() {
    return this._x;
  }
  set x(t2) {
    this._x = t2, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t2) {
    this._y = t2, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t2) {
    this._z = t2, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(t2) {
    this._w = t2, this._onChangeCallback();
  }
  set(t2, s2, i2, e2) {
    return this._x = t2, this._y = s2, this._z = i2, this._w = e2, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t2) {
    return this._x = t2.x, this._y = t2.y, this._z = t2.z, this._w = t2.w, this._onChangeCallback(), this;
  }
  setFromEuler(t2, s2 = true) {
    const i2 = t2._x, e2 = t2._y, a2 = t2._z, n2 = t2._order, r2 = Math.cos, h2 = Math.sin, o2 = r2(i2 / 2), c2 = r2(e2 / 2), l2 = r2(a2 / 2), u2 = h2(i2 / 2), d2 = h2(e2 / 2), m2 = h2(a2 / 2);
    switch (n2) {
      case "XYZ":
        this._x = u2 * c2 * l2 + o2 * d2 * m2, this._y = o2 * d2 * l2 - u2 * c2 * m2, this._z = o2 * c2 * m2 + u2 * d2 * l2, this._w = o2 * c2 * l2 - u2 * d2 * m2;
        break;
      case "YXZ":
        this._x = u2 * c2 * l2 + o2 * d2 * m2, this._y = o2 * d2 * l2 - u2 * c2 * m2, this._z = o2 * c2 * m2 - u2 * d2 * l2, this._w = o2 * c2 * l2 + u2 * d2 * m2;
        break;
      case "ZXY":
        this._x = u2 * c2 * l2 - o2 * d2 * m2, this._y = o2 * d2 * l2 + u2 * c2 * m2, this._z = o2 * c2 * m2 + u2 * d2 * l2, this._w = o2 * c2 * l2 - u2 * d2 * m2;
        break;
      case "ZYX":
        this._x = u2 * c2 * l2 - o2 * d2 * m2, this._y = o2 * d2 * l2 + u2 * c2 * m2, this._z = o2 * c2 * m2 - u2 * d2 * l2, this._w = o2 * c2 * l2 + u2 * d2 * m2;
        break;
      case "YZX":
        this._x = u2 * c2 * l2 + o2 * d2 * m2, this._y = o2 * d2 * l2 + u2 * c2 * m2, this._z = o2 * c2 * m2 - u2 * d2 * l2, this._w = o2 * c2 * l2 - u2 * d2 * m2;
        break;
      case "XZY":
        this._x = u2 * c2 * l2 - o2 * d2 * m2, this._y = o2 * d2 * l2 - u2 * c2 * m2, this._z = o2 * c2 * m2 + u2 * d2 * l2, this._w = o2 * c2 * l2 + u2 * d2 * m2;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + n2);
    }
    return true === s2 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t2, s2) {
    const i2 = s2 / 2, e2 = Math.sin(i2);
    return this._x = t2.x * e2, this._y = t2.y * e2, this._z = t2.z * e2, this._w = Math.cos(i2), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t2) {
    const s2 = t2.elements, i2 = s2[0], e2 = s2[4], a2 = s2[8], n2 = s2[1], r2 = s2[5], h2 = s2[9], o2 = s2[2], c2 = s2[6], l2 = s2[10], u2 = i2 + r2 + l2;
    if (u2 > 0) {
      const t3 = 0.5 / Math.sqrt(u2 + 1);
      this._w = 0.25 / t3, this._x = (c2 - h2) * t3, this._y = (a2 - o2) * t3, this._z = (n2 - e2) * t3;
    } else if (i2 > r2 && i2 > l2) {
      const t3 = 2 * Math.sqrt(1 + i2 - r2 - l2);
      this._w = (c2 - h2) / t3, this._x = 0.25 * t3, this._y = (e2 + n2) / t3, this._z = (a2 + o2) / t3;
    } else if (r2 > l2) {
      const t3 = 2 * Math.sqrt(1 + r2 - i2 - l2);
      this._w = (a2 - o2) / t3, this._x = (e2 + n2) / t3, this._y = 0.25 * t3, this._z = (h2 + c2) / t3;
    } else {
      const t3 = 2 * Math.sqrt(1 + l2 - i2 - r2);
      this._w = (n2 - e2) / t3, this._x = (a2 + o2) / t3, this._y = (h2 + c2) / t3, this._z = 0.25 * t3;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t2, s2) {
    let i2 = t2.dot(s2) + 1;
    return i2 < 1e-8 ? (i2 = 0, Math.abs(t2.x) > Math.abs(t2.z) ? (this._x = -t2.y, this._y = t2.x, this._z = 0, this._w = i2) : (this._x = 0, this._y = -t2.z, this._z = t2.y, this._w = i2)) : (this._x = t2.y * s2.z - t2.z * s2.y, this._y = t2.z * s2.x - t2.x * s2.z, this._z = t2.x * s2.y - t2.y * s2.x, this._w = i2), this.normalize();
  }
  angleTo(t2) {
    return 2 * Math.acos(Math.abs(n(this.dot(t2), -1, 1)));
  }
  rotateTowards(t2, s2) {
    const i2 = this.angleTo(t2);
    if (0 === i2)
      return this;
    const e2 = Math.min(1, s2 / i2);
    return this.slerp(t2, e2), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(t2) {
    return this._x * t2._x + this._y * t2._y + this._z * t2._z + this._w * t2._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let t2 = this.length();
    return 0 === t2 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t2 = 1 / t2, this._x = this._x * t2, this._y = this._y * t2, this._z = this._z * t2, this._w = this._w * t2), this._onChangeCallback(), this;
  }
  multiply(t2) {
    return this.multiplyQuaternions(this, t2);
  }
  premultiply(t2) {
    return this.multiplyQuaternions(t2, this);
  }
  multiplyQuaternions(t2, s2) {
    const i2 = t2._x, e2 = t2._y, a2 = t2._z, n2 = t2._w, r2 = s2._x, h2 = s2._y, o2 = s2._z, c2 = s2._w;
    return this._x = i2 * c2 + n2 * r2 + e2 * o2 - a2 * h2, this._y = e2 * c2 + n2 * h2 + a2 * r2 - i2 * o2, this._z = a2 * c2 + n2 * o2 + i2 * h2 - e2 * r2, this._w = n2 * c2 - i2 * r2 - e2 * h2 - a2 * o2, this._onChangeCallback(), this;
  }
  slerp(t2, s2) {
    if (0 === s2)
      return this;
    if (1 === s2)
      return this.copy(t2);
    const i2 = this._x, e2 = this._y, a2 = this._z, n2 = this._w;
    let r2 = n2 * t2._w + i2 * t2._x + e2 * t2._y + a2 * t2._z;
    if (r2 < 0 ? (this._w = -t2._w, this._x = -t2._x, this._y = -t2._y, this._z = -t2._z, r2 = -r2) : this.copy(t2), r2 >= 1)
      return this._w = n2, this._x = i2, this._y = e2, this._z = a2, this;
    const h2 = 1 - r2 * r2;
    if (h2 <= Number.EPSILON) {
      const t3 = 1 - s2;
      return this._w = t3 * n2 + s2 * this._w, this._x = t3 * i2 + s2 * this._x, this._y = t3 * e2 + s2 * this._y, this._z = t3 * a2 + s2 * this._z, this.normalize(), this;
    }
    const o2 = Math.sqrt(h2), c2 = Math.atan2(o2, r2), l2 = Math.sin((1 - s2) * c2) / o2, u2 = Math.sin(s2 * c2) / o2;
    return this._w = n2 * l2 + this._w * u2, this._x = i2 * l2 + this._x * u2, this._y = e2 * l2 + this._y * u2, this._z = a2 * l2 + this._z * u2, this._onChangeCallback(), this;
  }
  slerpQuaternions(t2, s2, i2) {
    return this.copy(t2).slerp(s2, i2);
  }
  random() {
    const t2 = 2 * Math.PI * Math.random(), s2 = 2 * Math.PI * Math.random(), i2 = Math.random(), e2 = Math.sqrt(1 - i2), a2 = Math.sqrt(i2);
    return this.set(e2 * Math.sin(t2), e2 * Math.cos(t2), a2 * Math.sin(s2), a2 * Math.cos(s2));
  }
  equals(t2) {
    return t2._x === this._x && t2._y === this._y && t2._z === this._z && t2._w === this._w;
  }
  fromArray(t2, s2 = 0) {
    return this._x = t2[s2], this._y = t2[s2 + 1], this._z = t2[s2 + 2], this._w = t2[s2 + 3], this._onChangeCallback(), this;
  }
  toArray(t2 = [], s2 = 0) {
    return t2[s2] = this._x, t2[s2 + 1] = this._y, t2[s2 + 2] = this._z, t2[s2 + 3] = this._w, t2;
  }
  fromBufferAttribute(t2, s2) {
    return this._x = t2.getX(s2), this._y = t2.getY(s2), this._z = t2.getZ(s2), this._w = t2.getW(s2), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(t2) {
    return this._onChangeCallback = t2, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class u {
  constructor(t2 = 0, s2 = 0, i2 = 0) {
    u.prototype.isVector3 = true, this.x = t2, this.y = s2, this.z = i2;
  }
  set(t2, s2, i2) {
    return void 0 === i2 && (i2 = this.z), this.x = t2, this.y = s2, this.z = i2, this;
  }
  setScalar(t2) {
    return this.x = t2, this.y = t2, this.z = t2, this;
  }
  setX(t2) {
    return this.x = t2, this;
  }
  setY(t2) {
    return this.y = t2, this;
  }
  setZ(t2) {
    return this.z = t2, this;
  }
  setComponent(t2, s2) {
    switch (t2) {
      case 0:
        this.x = s2;
        break;
      case 1:
        this.y = s2;
        break;
      case 2:
        this.z = s2;
        break;
      default:
        throw new Error("index is out of range: " + t2);
    }
    return this;
  }
  getComponent(t2) {
    switch (t2) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t2);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t2) {
    return this.x = t2.x, this.y = t2.y, this.z = t2.z, this;
  }
  add(t2) {
    return this.x += t2.x, this.y += t2.y, this.z += t2.z, this;
  }
  addScalar(t2) {
    return this.x += t2, this.y += t2, this.z += t2, this;
  }
  addVectors(t2, s2) {
    return this.x = t2.x + s2.x, this.y = t2.y + s2.y, this.z = t2.z + s2.z, this;
  }
  addScaledVector(t2, s2) {
    return this.x += t2.x * s2, this.y += t2.y * s2, this.z += t2.z * s2, this;
  }
  sub(t2) {
    return this.x -= t2.x, this.y -= t2.y, this.z -= t2.z, this;
  }
  subScalar(t2) {
    return this.x -= t2, this.y -= t2, this.z -= t2, this;
  }
  subVectors(t2, s2) {
    return this.x = t2.x - s2.x, this.y = t2.y - s2.y, this.z = t2.z - s2.z, this;
  }
  multiply(t2) {
    return this.x *= t2.x, this.y *= t2.y, this.z *= t2.z, this;
  }
  multiplyScalar(t2) {
    return this.x *= t2, this.y *= t2, this.z *= t2, this;
  }
  multiplyVectors(t2, s2) {
    return this.x = t2.x * s2.x, this.y = t2.y * s2.y, this.z = t2.z * s2.z, this;
  }
  applyEuler(t2) {
    return this.applyQuaternion(m.setFromEuler(t2));
  }
  applyAxisAngle(t2, s2) {
    return this.applyQuaternion(m.setFromAxisAngle(t2, s2));
  }
  applyMatrix3(t2) {
    const s2 = this.x, i2 = this.y, e2 = this.z, a2 = t2.elements;
    return this.x = a2[0] * s2 + a2[3] * i2 + a2[6] * e2, this.y = a2[1] * s2 + a2[4] * i2 + a2[7] * e2, this.z = a2[2] * s2 + a2[5] * i2 + a2[8] * e2, this;
  }
  applyNormalMatrix(t2) {
    return this.applyMatrix3(t2).normalize();
  }
  applyMatrix4(t2) {
    const s2 = this.x, i2 = this.y, e2 = this.z, a2 = t2.elements, n2 = 1 / (a2[3] * s2 + a2[7] * i2 + a2[11] * e2 + a2[15]);
    return this.x = (a2[0] * s2 + a2[4] * i2 + a2[8] * e2 + a2[12]) * n2, this.y = (a2[1] * s2 + a2[5] * i2 + a2[9] * e2 + a2[13]) * n2, this.z = (a2[2] * s2 + a2[6] * i2 + a2[10] * e2 + a2[14]) * n2, this;
  }
  applyQuaternion(t2) {
    const s2 = this.x, i2 = this.y, e2 = this.z, a2 = t2.x, n2 = t2.y, r2 = t2.z, h2 = t2.w, o2 = 2 * (n2 * e2 - r2 * i2), c2 = 2 * (r2 * s2 - a2 * e2), l2 = 2 * (a2 * i2 - n2 * s2);
    return this.x = s2 + h2 * o2 + n2 * l2 - r2 * c2, this.y = i2 + h2 * c2 + r2 * o2 - a2 * l2, this.z = e2 + h2 * l2 + a2 * c2 - n2 * o2, this;
  }
  project(t2) {
    return this.applyMatrix4(t2.matrixWorldInverse).applyMatrix4(t2.projectionMatrix);
  }
  unproject(t2) {
    return this.applyMatrix4(t2.projectionMatrixInverse).applyMatrix4(t2.matrixWorld);
  }
  transformDirection(t2) {
    const s2 = this.x, i2 = this.y, e2 = this.z, a2 = t2.elements;
    return this.x = a2[0] * s2 + a2[4] * i2 + a2[8] * e2, this.y = a2[1] * s2 + a2[5] * i2 + a2[9] * e2, this.z = a2[2] * s2 + a2[6] * i2 + a2[10] * e2, this.normalize();
  }
  divide(t2) {
    return this.x /= t2.x, this.y /= t2.y, this.z /= t2.z, this;
  }
  divideScalar(t2) {
    return this.multiplyScalar(1 / t2);
  }
  min(t2) {
    return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this.z = Math.min(this.z, t2.z), this;
  }
  max(t2) {
    return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this.z = Math.max(this.z, t2.z), this;
  }
  clamp(t2, s2) {
    return this.x = n(this.x, t2.x, s2.x), this.y = n(this.y, t2.y, s2.y), this.z = n(this.z, t2.z, s2.z), this;
  }
  clampScalar(t2, s2) {
    return this.x = n(this.x, t2, s2), this.y = n(this.y, t2, s2), this.z = n(this.z, t2, s2), this;
  }
  clampLength(t2, s2) {
    const i2 = this.length();
    return this.divideScalar(i2 || 1).multiplyScalar(n(i2, t2, s2));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(t2) {
    return this.x * t2.x + this.y * t2.y + this.z * t2.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t2) {
    return this.normalize().multiplyScalar(t2);
  }
  lerp(t2, s2) {
    return this.x += (t2.x - this.x) * s2, this.y += (t2.y - this.y) * s2, this.z += (t2.z - this.z) * s2, this;
  }
  lerpVectors(t2, s2, i2) {
    return this.x = t2.x + (s2.x - t2.x) * i2, this.y = t2.y + (s2.y - t2.y) * i2, this.z = t2.z + (s2.z - t2.z) * i2, this;
  }
  cross(t2) {
    return this.crossVectors(this, t2);
  }
  crossVectors(t2, s2) {
    const i2 = t2.x, e2 = t2.y, a2 = t2.z, n2 = s2.x, r2 = s2.y, h2 = s2.z;
    return this.x = e2 * h2 - a2 * r2, this.y = a2 * n2 - i2 * h2, this.z = i2 * r2 - e2 * n2, this;
  }
  projectOnVector(t2) {
    const s2 = t2.lengthSq();
    if (0 === s2)
      return this.set(0, 0, 0);
    const i2 = t2.dot(this) / s2;
    return this.copy(t2).multiplyScalar(i2);
  }
  projectOnPlane(t2) {
    return d.copy(this).projectOnVector(t2), this.sub(d);
  }
  reflect(t2) {
    return this.sub(d.copy(t2).multiplyScalar(2 * this.dot(t2)));
  }
  angleTo(t2) {
    const s2 = Math.sqrt(this.lengthSq() * t2.lengthSq());
    if (0 === s2)
      return Math.PI / 2;
    const i2 = this.dot(t2) / s2;
    return Math.acos(n(i2, -1, 1));
  }
  distanceTo(t2) {
    return Math.sqrt(this.distanceToSquared(t2));
  }
  distanceToSquared(t2) {
    const s2 = this.x - t2.x, i2 = this.y - t2.y, e2 = this.z - t2.z;
    return s2 * s2 + i2 * i2 + e2 * e2;
  }
  manhattanDistanceTo(t2) {
    return Math.abs(this.x - t2.x) + Math.abs(this.y - t2.y) + Math.abs(this.z - t2.z);
  }
  setFromSpherical(t2) {
    return this.setFromSphericalCoords(t2.radius, t2.phi, t2.theta);
  }
  setFromSphericalCoords(t2, s2, i2) {
    const e2 = Math.sin(s2) * t2;
    return this.x = e2 * Math.sin(i2), this.y = Math.cos(s2) * t2, this.z = e2 * Math.cos(i2), this;
  }
  setFromCylindrical(t2) {
    return this.setFromCylindricalCoords(t2.radius, t2.theta, t2.y);
  }
  setFromCylindricalCoords(t2, s2, i2) {
    return this.x = t2 * Math.sin(s2), this.y = i2, this.z = t2 * Math.cos(s2), this;
  }
  setFromMatrixPosition(t2) {
    const s2 = t2.elements;
    return this.x = s2[12], this.y = s2[13], this.z = s2[14], this;
  }
  setFromMatrixScale(t2) {
    const s2 = this.setFromMatrixColumn(t2, 0).length(), i2 = this.setFromMatrixColumn(t2, 1).length(), e2 = this.setFromMatrixColumn(t2, 2).length();
    return this.x = s2, this.y = i2, this.z = e2, this;
  }
  setFromMatrixColumn(t2, s2) {
    return this.fromArray(t2.elements, 4 * s2);
  }
  setFromMatrix3Column(t2, s2) {
    return this.fromArray(t2.elements, 3 * s2);
  }
  setFromEuler(t2) {
    return this.x = t2._x, this.y = t2._y, this.z = t2._z, this;
  }
  setFromColor(t2) {
    return this.x = t2.r, this.y = t2.g, this.z = t2.b, this;
  }
  equals(t2) {
    return t2.x === this.x && t2.y === this.y && t2.z === this.z;
  }
  fromArray(t2, s2 = 0) {
    return this.x = t2[s2], this.y = t2[s2 + 1], this.z = t2[s2 + 2], this;
  }
  toArray(t2 = [], s2 = 0) {
    return t2[s2] = this.x, t2[s2 + 1] = this.y, t2[s2 + 2] = this.z, t2;
  }
  fromBufferAttribute(t2, s2) {
    return this.x = t2.getX(s2), this.y = t2.getY(s2), this.z = t2.getZ(s2), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const t2 = Math.random() * Math.PI * 2, s2 = 2 * Math.random() - 1, i2 = Math.sqrt(1 - s2 * s2);
    return this.x = i2 * Math.cos(t2), this.y = s2, this.z = i2 * Math.sin(t2), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const d = new u(), m = new l();
class _ {
  constructor(t2, s2, i2, e2, a2, n2, r2, h2, o2) {
    _.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], void 0 !== t2 && this.set(t2, s2, i2, e2, a2, n2, r2, h2, o2);
  }
  set(t2, s2, i2, e2, a2, n2, r2, h2, o2) {
    const c2 = this.elements;
    return c2[0] = t2, c2[1] = e2, c2[2] = r2, c2[3] = s2, c2[4] = a2, c2[5] = h2, c2[6] = i2, c2[7] = n2, c2[8] = o2, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(t2) {
    const s2 = this.elements, i2 = t2.elements;
    return s2[0] = i2[0], s2[1] = i2[1], s2[2] = i2[2], s2[3] = i2[3], s2[4] = i2[4], s2[5] = i2[5], s2[6] = i2[6], s2[7] = i2[7], s2[8] = i2[8], this;
  }
  extractBasis(t2, s2, i2) {
    return t2.setFromMatrix3Column(this, 0), s2.setFromMatrix3Column(this, 1), i2.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(t2) {
    const s2 = t2.elements;
    return this.set(s2[0], s2[4], s2[8], s2[1], s2[5], s2[9], s2[2], s2[6], s2[10]), this;
  }
  multiply(t2) {
    return this.multiplyMatrices(this, t2);
  }
  premultiply(t2) {
    return this.multiplyMatrices(t2, this);
  }
  multiplyMatrices(t2, s2) {
    const i2 = t2.elements, e2 = s2.elements, a2 = this.elements, n2 = i2[0], r2 = i2[3], h2 = i2[6], o2 = i2[1], c2 = i2[4], l2 = i2[7], u2 = i2[2], d2 = i2[5], m2 = i2[8], _2 = e2[0], f2 = e2[3], y2 = e2[6], p2 = e2[1], g2 = e2[4], M2 = e2[7], x2 = e2[2], w2 = e2[5], S2 = e2[8];
    return a2[0] = n2 * _2 + r2 * p2 + h2 * x2, a2[3] = n2 * f2 + r2 * g2 + h2 * w2, a2[6] = n2 * y2 + r2 * M2 + h2 * S2, a2[1] = o2 * _2 + c2 * p2 + l2 * x2, a2[4] = o2 * f2 + c2 * g2 + l2 * w2, a2[7] = o2 * y2 + c2 * M2 + l2 * S2, a2[2] = u2 * _2 + d2 * p2 + m2 * x2, a2[5] = u2 * f2 + d2 * g2 + m2 * w2, a2[8] = u2 * y2 + d2 * M2 + m2 * S2, this;
  }
  multiplyScalar(t2) {
    const s2 = this.elements;
    return s2[0] *= t2, s2[3] *= t2, s2[6] *= t2, s2[1] *= t2, s2[4] *= t2, s2[7] *= t2, s2[2] *= t2, s2[5] *= t2, s2[8] *= t2, this;
  }
  determinant() {
    const t2 = this.elements, s2 = t2[0], i2 = t2[1], e2 = t2[2], a2 = t2[3], n2 = t2[4], r2 = t2[5], h2 = t2[6], o2 = t2[7], c2 = t2[8];
    return s2 * n2 * c2 - s2 * r2 * o2 - i2 * a2 * c2 + i2 * r2 * h2 + e2 * a2 * o2 - e2 * n2 * h2;
  }
  invert() {
    const t2 = this.elements, s2 = t2[0], i2 = t2[1], e2 = t2[2], a2 = t2[3], n2 = t2[4], r2 = t2[5], h2 = t2[6], o2 = t2[7], c2 = t2[8], l2 = c2 * n2 - r2 * o2, u2 = r2 * h2 - c2 * a2, d2 = o2 * a2 - n2 * h2, m2 = s2 * l2 + i2 * u2 + e2 * d2;
    if (0 === m2)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _2 = 1 / m2;
    return t2[0] = l2 * _2, t2[1] = (e2 * o2 - c2 * i2) * _2, t2[2] = (r2 * i2 - e2 * n2) * _2, t2[3] = u2 * _2, t2[4] = (c2 * s2 - e2 * h2) * _2, t2[5] = (e2 * a2 - r2 * s2) * _2, t2[6] = d2 * _2, t2[7] = (i2 * h2 - o2 * s2) * _2, t2[8] = (n2 * s2 - i2 * a2) * _2, this;
  }
  transpose() {
    let t2;
    const s2 = this.elements;
    return t2 = s2[1], s2[1] = s2[3], s2[3] = t2, t2 = s2[2], s2[2] = s2[6], s2[6] = t2, t2 = s2[5], s2[5] = s2[7], s2[7] = t2, this;
  }
  getNormalMatrix(t2) {
    return this.setFromMatrix4(t2).invert().transpose();
  }
  transposeIntoArray(t2) {
    const s2 = this.elements;
    return t2[0] = s2[0], t2[1] = s2[3], t2[2] = s2[6], t2[3] = s2[1], t2[4] = s2[4], t2[5] = s2[7], t2[6] = s2[2], t2[7] = s2[5], t2[8] = s2[8], this;
  }
  setUvTransform(t2, s2, i2, e2, a2, n2, r2) {
    const h2 = Math.cos(a2), o2 = Math.sin(a2);
    return this.set(i2 * h2, i2 * o2, -i2 * (h2 * n2 + o2 * r2) + n2 + t2, -e2 * o2, e2 * h2, -e2 * (-o2 * n2 + h2 * r2) + r2 + s2, 0, 0, 1), this;
  }
  scale(t2, s2) {
    return this.premultiply(f.makeScale(t2, s2)), this;
  }
  rotate(t2) {
    return this.premultiply(f.makeRotation(-t2)), this;
  }
  translate(t2, s2) {
    return this.premultiply(f.makeTranslation(t2, s2)), this;
  }
  makeTranslation(t2, s2) {
    return t2.isVector2 ? this.set(1, 0, t2.x, 0, 1, t2.y, 0, 0, 1) : this.set(1, 0, t2, 0, 1, s2, 0, 0, 1), this;
  }
  makeRotation(t2) {
    const s2 = Math.cos(t2), i2 = Math.sin(t2);
    return this.set(s2, -i2, 0, i2, s2, 0, 0, 0, 1), this;
  }
  makeScale(t2, s2) {
    return this.set(t2, 0, 0, 0, s2, 0, 0, 0, 1), this;
  }
  equals(t2) {
    const s2 = this.elements, i2 = t2.elements;
    for (let t3 = 0; t3 < 9; t3++)
      if (s2[t3] !== i2[t3])
        return false;
    return true;
  }
  fromArray(t2, s2 = 0) {
    for (let i2 = 0; i2 < 9; i2++)
      this.elements[i2] = t2[i2 + s2];
    return this;
  }
  toArray(t2 = [], s2 = 0) {
    const i2 = this.elements;
    return t2[s2] = i2[0], t2[s2 + 1] = i2[1], t2[s2 + 2] = i2[2], t2[s2 + 3] = i2[3], t2[s2 + 4] = i2[4], t2[s2 + 5] = i2[5], t2[s2 + 6] = i2[6], t2[s2 + 7] = i2[7], t2[s2 + 8] = i2[8], t2;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const f = new _();
class y {
  constructor(t2 = 0, s2 = 0, i2 = 0, e2 = 1) {
    y.prototype.isVector4 = true, this.x = t2, this.y = s2, this.z = i2, this.w = e2;
  }
  get width() {
    return this.z;
  }
  set width(t2) {
    this.z = t2;
  }
  get height() {
    return this.w;
  }
  set height(t2) {
    this.w = t2;
  }
  set(t2, s2, i2, e2) {
    return this.x = t2, this.y = s2, this.z = i2, this.w = e2, this;
  }
  setScalar(t2) {
    return this.x = t2, this.y = t2, this.z = t2, this.w = t2, this;
  }
  setX(t2) {
    return this.x = t2, this;
  }
  setY(t2) {
    return this.y = t2, this;
  }
  setZ(t2) {
    return this.z = t2, this;
  }
  setW(t2) {
    return this.w = t2, this;
  }
  setComponent(t2, s2) {
    switch (t2) {
      case 0:
        this.x = s2;
        break;
      case 1:
        this.y = s2;
        break;
      case 2:
        this.z = s2;
        break;
      case 3:
        this.w = s2;
        break;
      default:
        throw new Error("index is out of range: " + t2);
    }
    return this;
  }
  getComponent(t2) {
    switch (t2) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + t2);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t2) {
    return this.x = t2.x, this.y = t2.y, this.z = t2.z, this.w = void 0 !== t2.w ? t2.w : 1, this;
  }
  add(t2) {
    return this.x += t2.x, this.y += t2.y, this.z += t2.z, this.w += t2.w, this;
  }
  addScalar(t2) {
    return this.x += t2, this.y += t2, this.z += t2, this.w += t2, this;
  }
  addVectors(t2, s2) {
    return this.x = t2.x + s2.x, this.y = t2.y + s2.y, this.z = t2.z + s2.z, this.w = t2.w + s2.w, this;
  }
  addScaledVector(t2, s2) {
    return this.x += t2.x * s2, this.y += t2.y * s2, this.z += t2.z * s2, this.w += t2.w * s2, this;
  }
  sub(t2) {
    return this.x -= t2.x, this.y -= t2.y, this.z -= t2.z, this.w -= t2.w, this;
  }
  subScalar(t2) {
    return this.x -= t2, this.y -= t2, this.z -= t2, this.w -= t2, this;
  }
  subVectors(t2, s2) {
    return this.x = t2.x - s2.x, this.y = t2.y - s2.y, this.z = t2.z - s2.z, this.w = t2.w - s2.w, this;
  }
  multiply(t2) {
    return this.x *= t2.x, this.y *= t2.y, this.z *= t2.z, this.w *= t2.w, this;
  }
  multiplyScalar(t2) {
    return this.x *= t2, this.y *= t2, this.z *= t2, this.w *= t2, this;
  }
  applyMatrix4(t2) {
    const s2 = this.x, i2 = this.y, e2 = this.z, a2 = this.w, n2 = t2.elements;
    return this.x = n2[0] * s2 + n2[4] * i2 + n2[8] * e2 + n2[12] * a2, this.y = n2[1] * s2 + n2[5] * i2 + n2[9] * e2 + n2[13] * a2, this.z = n2[2] * s2 + n2[6] * i2 + n2[10] * e2 + n2[14] * a2, this.w = n2[3] * s2 + n2[7] * i2 + n2[11] * e2 + n2[15] * a2, this;
  }
  divide(t2) {
    return this.x /= t2.x, this.y /= t2.y, this.z /= t2.z, this.w /= t2.w, this;
  }
  divideScalar(t2) {
    return this.multiplyScalar(1 / t2);
  }
  setAxisAngleFromQuaternion(t2) {
    this.w = 2 * Math.acos(t2.w);
    const s2 = Math.sqrt(1 - t2.w * t2.w);
    return s2 < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t2.x / s2, this.y = t2.y / s2, this.z = t2.z / s2), this;
  }
  setAxisAngleFromRotationMatrix(t2) {
    let s2, i2, e2, a2;
    const n2 = 0.01, r2 = 0.1, h2 = t2.elements, o2 = h2[0], c2 = h2[4], l2 = h2[8], u2 = h2[1], d2 = h2[5], m2 = h2[9], _2 = h2[2], f2 = h2[6], y2 = h2[10];
    if (Math.abs(c2 - u2) < n2 && Math.abs(l2 - _2) < n2 && Math.abs(m2 - f2) < n2) {
      if (Math.abs(c2 + u2) < r2 && Math.abs(l2 + _2) < r2 && Math.abs(m2 + f2) < r2 && Math.abs(o2 + d2 + y2 - 3) < r2)
        return this.set(1, 0, 0, 0), this;
      s2 = Math.PI;
      const t3 = (o2 + 1) / 2, h3 = (d2 + 1) / 2, p3 = (y2 + 1) / 2, g2 = (c2 + u2) / 4, M2 = (l2 + _2) / 4, x2 = (m2 + f2) / 4;
      return t3 > h3 && t3 > p3 ? t3 < n2 ? (i2 = 0, e2 = 0.707106781, a2 = 0.707106781) : (i2 = Math.sqrt(t3), e2 = g2 / i2, a2 = M2 / i2) : h3 > p3 ? h3 < n2 ? (i2 = 0.707106781, e2 = 0, a2 = 0.707106781) : (e2 = Math.sqrt(h3), i2 = g2 / e2, a2 = x2 / e2) : p3 < n2 ? (i2 = 0.707106781, e2 = 0.707106781, a2 = 0) : (a2 = Math.sqrt(p3), i2 = M2 / a2, e2 = x2 / a2), this.set(i2, e2, a2, s2), this;
    }
    let p2 = Math.sqrt((f2 - m2) * (f2 - m2) + (l2 - _2) * (l2 - _2) + (u2 - c2) * (u2 - c2));
    return Math.abs(p2) < 1e-3 && (p2 = 1), this.x = (f2 - m2) / p2, this.y = (l2 - _2) / p2, this.z = (u2 - c2) / p2, this.w = Math.acos((o2 + d2 + y2 - 1) / 2), this;
  }
  setFromMatrixPosition(t2) {
    const s2 = t2.elements;
    return this.x = s2[12], this.y = s2[13], this.z = s2[14], this.w = s2[15], this;
  }
  min(t2) {
    return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this.z = Math.min(this.z, t2.z), this.w = Math.min(this.w, t2.w), this;
  }
  max(t2) {
    return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this.z = Math.max(this.z, t2.z), this.w = Math.max(this.w, t2.w), this;
  }
  clamp(t2, s2) {
    return this.x = n(this.x, t2.x, s2.x), this.y = n(this.y, t2.y, s2.y), this.z = n(this.z, t2.z, s2.z), this.w = n(this.w, t2.w, s2.w), this;
  }
  clampScalar(t2, s2) {
    return this.x = n(this.x, t2, s2), this.y = n(this.y, t2, s2), this.z = n(this.z, t2, s2), this.w = n(this.w, t2, s2), this;
  }
  clampLength(t2, s2) {
    const i2 = this.length();
    return this.divideScalar(i2 || 1).multiplyScalar(n(i2, t2, s2));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(t2) {
    return this.x * t2.x + this.y * t2.y + this.z * t2.z + this.w * t2.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t2) {
    return this.normalize().multiplyScalar(t2);
  }
  lerp(t2, s2) {
    return this.x += (t2.x - this.x) * s2, this.y += (t2.y - this.y) * s2, this.z += (t2.z - this.z) * s2, this.w += (t2.w - this.w) * s2, this;
  }
  lerpVectors(t2, s2, i2) {
    return this.x = t2.x + (s2.x - t2.x) * i2, this.y = t2.y + (s2.y - t2.y) * i2, this.z = t2.z + (s2.z - t2.z) * i2, this.w = t2.w + (s2.w - t2.w) * i2, this;
  }
  equals(t2) {
    return t2.x === this.x && t2.y === this.y && t2.z === this.z && t2.w === this.w;
  }
  fromArray(t2, s2 = 0) {
    return this.x = t2[s2], this.y = t2[s2 + 1], this.z = t2[s2 + 2], this.w = t2[s2 + 3], this;
  }
  toArray(t2 = [], s2 = 0) {
    return t2[s2] = this.x, t2[s2 + 1] = this.y, t2[s2 + 2] = this.z, t2[s2 + 3] = this.w, t2;
  }
  fromBufferAttribute(t2, s2) {
    return this.x = t2.getX(s2), this.y = t2.getY(s2), this.z = t2.getZ(s2), this.w = t2.getW(s2), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class p {
  constructor(t2 = new u(1 / 0, 1 / 0, 1 / 0), s2 = new u(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = t2, this.max = s2;
  }
  set(t2, s2) {
    return this.min.copy(t2), this.max.copy(s2), this;
  }
  setFromArray(t2) {
    this.makeEmpty();
    for (let s2 = 0, i2 = t2.length; s2 < i2; s2 += 3)
      this.expandByPoint(M.fromArray(t2, s2));
    return this;
  }
  setFromBufferAttribute(t2) {
    this.makeEmpty();
    for (let s2 = 0, i2 = t2.count; s2 < i2; s2++)
      this.expandByPoint(M.fromBufferAttribute(t2, s2));
    return this;
  }
  setFromPoints(t2) {
    this.makeEmpty();
    for (let s2 = 0, i2 = t2.length; s2 < i2; s2++)
      this.expandByPoint(t2[s2]);
    return this;
  }
  setFromCenterAndSize(t2, s2) {
    const i2 = M.copy(s2).multiplyScalar(0.5);
    return this.min.copy(t2).sub(i2), this.max.copy(t2).add(i2), this;
  }
  setFromObject(t2, s2 = false) {
    return this.makeEmpty(), this.expandByObject(t2, s2);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t2) {
    return this.min.copy(t2.min), this.max.copy(t2.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(t2) {
    return this.isEmpty() ? t2.set(0, 0, 0) : t2.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t2) {
    return this.isEmpty() ? t2.set(0, 0, 0) : t2.subVectors(this.max, this.min);
  }
  expandByPoint(t2) {
    return this.min.min(t2), this.max.max(t2), this;
  }
  expandByVector(t2) {
    return this.min.sub(t2), this.max.add(t2), this;
  }
  expandByScalar(t2) {
    return this.min.addScalar(-t2), this.max.addScalar(t2), this;
  }
  expandByObject(t2, s2 = false) {
    t2.updateWorldMatrix(false, false);
    const i2 = t2.geometry;
    if (void 0 !== i2) {
      const e3 = i2.getAttribute("position");
      if (true === s2 && void 0 !== e3 && true !== t2.isInstancedMesh)
        for (let s3 = 0, i3 = e3.count; s3 < i3; s3++)
          true === t2.isMesh ? t2.getVertexPosition(s3, M) : M.fromBufferAttribute(e3, s3), M.applyMatrix4(t2.matrixWorld), this.expandByPoint(M);
      else
        void 0 !== t2.boundingBox ? (null === t2.boundingBox && t2.computeBoundingBox(), x.copy(t2.boundingBox)) : (null === i2.boundingBox && i2.computeBoundingBox(), x.copy(i2.boundingBox)), x.applyMatrix4(t2.matrixWorld), this.union(x);
    }
    const e2 = t2.children;
    for (let t3 = 0, i3 = e2.length; t3 < i3; t3++)
      this.expandByObject(e2[t3], s2);
    return this;
  }
  containsPoint(t2) {
    return t2.x >= this.min.x && t2.x <= this.max.x && t2.y >= this.min.y && t2.y <= this.max.y && t2.z >= this.min.z && t2.z <= this.max.z;
  }
  containsBox(t2) {
    return this.min.x <= t2.min.x && t2.max.x <= this.max.x && this.min.y <= t2.min.y && t2.max.y <= this.max.y && this.min.z <= t2.min.z && t2.max.z <= this.max.z;
  }
  getParameter(t2, s2) {
    return s2.set((t2.x - this.min.x) / (this.max.x - this.min.x), (t2.y - this.min.y) / (this.max.y - this.min.y), (t2.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(t2) {
    return t2.max.x >= this.min.x && t2.min.x <= this.max.x && t2.max.y >= this.min.y && t2.min.y <= this.max.y && t2.max.z >= this.min.z && t2.min.z <= this.max.z;
  }
  intersectsSphere(t2) {
    return this.clampPoint(t2.center, M), M.distanceToSquared(t2.center) <= t2.radius * t2.radius;
  }
  intersectsPlane(t2) {
    let s2, i2;
    return t2.normal.x > 0 ? (s2 = t2.normal.x * this.min.x, i2 = t2.normal.x * this.max.x) : (s2 = t2.normal.x * this.max.x, i2 = t2.normal.x * this.min.x), t2.normal.y > 0 ? (s2 += t2.normal.y * this.min.y, i2 += t2.normal.y * this.max.y) : (s2 += t2.normal.y * this.max.y, i2 += t2.normal.y * this.min.y), t2.normal.z > 0 ? (s2 += t2.normal.z * this.min.z, i2 += t2.normal.z * this.max.z) : (s2 += t2.normal.z * this.max.z, i2 += t2.normal.z * this.min.z), s2 <= -t2.constant && i2 >= -t2.constant;
  }
  intersectsTriangle(t2) {
    if (this.isEmpty())
      return false;
    this.getCenter(A), G.subVectors(this.max, A), w.subVectors(t2.a, A), S.subVectors(t2.b, A), E.subVectors(t2.c, A), b.subVectors(S, w), P.subVectors(E, S), v.subVectors(w, E);
    let s2 = [0, -b.z, b.y, 0, -P.z, P.y, 0, -v.z, v.y, b.z, 0, -b.x, P.z, 0, -P.x, v.z, 0, -v.x, -b.y, b.x, 0, -P.y, P.x, 0, -v.y, v.x, 0];
    return !!I(s2, w, S, E, G) && (s2 = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!I(s2, w, S, E, G) && (C.crossVectors(b, P), s2 = [C.x, C.y, C.z], I(s2, w, S, E, G)));
  }
  clampPoint(t2, s2) {
    return s2.copy(t2).clamp(this.min, this.max);
  }
  distanceToPoint(t2) {
    return this.clampPoint(t2, M).distanceTo(t2);
  }
  getBoundingSphere(t2) {
    return this.isEmpty() ? t2.makeEmpty() : (this.getCenter(t2.center), t2.radius = 0.5 * this.getSize(M).length()), t2;
  }
  intersect(t2) {
    return this.min.max(t2.min), this.max.min(t2.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(t2) {
    return this.min.min(t2.min), this.max.max(t2.max), this;
  }
  applyMatrix4(t2) {
    return this.isEmpty() || (g[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t2), g[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t2), g[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t2), g[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t2), g[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t2), g[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t2), g[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t2), g[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t2), this.setFromPoints(g)), this;
  }
  translate(t2) {
    return this.min.add(t2), this.max.add(t2), this;
  }
  equals(t2) {
    return t2.min.equals(this.min) && t2.max.equals(this.max);
  }
  toJSON() {
    return { min: this.min.toArray(), max: this.max.toArray() };
  }
  fromJSON(t2) {
    return this.min.fromArray(t2.min), this.max.fromArray(t2.max), this;
  }
}
const g = [new u(), new u(), new u(), new u(), new u(), new u(), new u(), new u()], M = new u(), x = new p(), w = new u(), S = new u(), E = new u(), b = new u(), P = new u(), v = new u(), A = new u(), G = new u(), C = new u(), N = new u();
function I(t2, s2, i2, e2, a2) {
  for (let n2 = 0, r2 = t2.length - 3; n2 <= r2; n2 += 3) {
    N.fromArray(t2, n2);
    const r3 = a2.x * Math.abs(N.x) + a2.y * Math.abs(N.y) + a2.z * Math.abs(N.z), h2 = s2.dot(N), o2 = i2.dot(N), c2 = e2.dot(N);
    if (Math.max(-Math.max(h2, o2, c2), Math.min(h2, o2, c2)) > r3)
      return false;
  }
  return true;
}
const z = new u(), T = new u(), O = new u(), R = new u(), q = new u(), L = new u(), B = new u();
class k {
  constructor(t2 = new u(), s2 = new u(0, 0, -1)) {
    this.origin = t2, this.direction = s2;
  }
  set(t2, s2) {
    return this.origin.copy(t2), this.direction.copy(s2), this;
  }
  copy(t2) {
    return this.origin.copy(t2.origin), this.direction.copy(t2.direction), this;
  }
  at(t2, s2) {
    return s2.copy(this.origin).addScaledVector(this.direction, t2);
  }
  lookAt(t2) {
    return this.direction.copy(t2).sub(this.origin).normalize(), this;
  }
  recast(t2) {
    return this.origin.copy(this.at(t2, z)), this;
  }
  closestPointToPoint(t2, s2) {
    s2.subVectors(t2, this.origin);
    const i2 = s2.dot(this.direction);
    return i2 < 0 ? s2.copy(this.origin) : s2.copy(this.origin).addScaledVector(this.direction, i2);
  }
  distanceToPoint(t2) {
    return Math.sqrt(this.distanceSqToPoint(t2));
  }
  distanceSqToPoint(t2) {
    const s2 = z.subVectors(t2, this.origin).dot(this.direction);
    return s2 < 0 ? this.origin.distanceToSquared(t2) : (z.copy(this.origin).addScaledVector(this.direction, s2), z.distanceToSquared(t2));
  }
  distanceSqToSegment(t2, s2, i2, e2) {
    T.copy(t2).add(s2).multiplyScalar(0.5), O.copy(s2).sub(t2).normalize(), R.copy(this.origin).sub(T);
    const a2 = 0.5 * t2.distanceTo(s2), n2 = -this.direction.dot(O), r2 = R.dot(this.direction), h2 = -R.dot(O), o2 = R.lengthSq(), c2 = Math.abs(1 - n2 * n2);
    let l2, u2, d2, m2;
    if (c2 > 0)
      if (l2 = n2 * h2 - r2, u2 = n2 * r2 - h2, m2 = a2 * c2, l2 >= 0)
        if (u2 >= -m2)
          if (u2 <= m2) {
            const t3 = 1 / c2;
            l2 *= t3, u2 *= t3, d2 = l2 * (l2 + n2 * u2 + 2 * r2) + u2 * (n2 * l2 + u2 + 2 * h2) + o2;
          } else
            u2 = a2, l2 = Math.max(0, -(n2 * u2 + r2)), d2 = -l2 * l2 + u2 * (u2 + 2 * h2) + o2;
        else
          u2 = -a2, l2 = Math.max(0, -(n2 * u2 + r2)), d2 = -l2 * l2 + u2 * (u2 + 2 * h2) + o2;
      else
        u2 <= -m2 ? (l2 = Math.max(0, -(-n2 * a2 + r2)), u2 = l2 > 0 ? -a2 : Math.min(Math.max(-a2, -h2), a2), d2 = -l2 * l2 + u2 * (u2 + 2 * h2) + o2) : u2 <= m2 ? (l2 = 0, u2 = Math.min(Math.max(-a2, -h2), a2), d2 = u2 * (u2 + 2 * h2) + o2) : (l2 = Math.max(0, -(n2 * a2 + r2)), u2 = l2 > 0 ? a2 : Math.min(Math.max(-a2, -h2), a2), d2 = -l2 * l2 + u2 * (u2 + 2 * h2) + o2);
    else
      u2 = n2 > 0 ? -a2 : a2, l2 = Math.max(0, -(n2 * u2 + r2)), d2 = -l2 * l2 + u2 * (u2 + 2 * h2) + o2;
    return i2 && i2.copy(this.origin).addScaledVector(this.direction, l2), e2 && e2.copy(T).addScaledVector(O, u2), d2;
  }
  intersectSphere(t2, s2) {
    z.subVectors(t2.center, this.origin);
    const i2 = z.dot(this.direction), e2 = z.dot(z) - i2 * i2, a2 = t2.radius * t2.radius;
    if (e2 > a2)
      return null;
    const n2 = Math.sqrt(a2 - e2), r2 = i2 - n2, h2 = i2 + n2;
    return h2 < 0 ? null : r2 < 0 ? this.at(h2, s2) : this.at(r2, s2);
  }
  intersectsSphere(t2) {
    return !(t2.radius < 0) && this.distanceSqToPoint(t2.center) <= t2.radius * t2.radius;
  }
  distanceToPlane(t2) {
    const s2 = t2.normal.dot(this.direction);
    if (0 === s2)
      return 0 === t2.distanceToPoint(this.origin) ? 0 : null;
    const i2 = -(this.origin.dot(t2.normal) + t2.constant) / s2;
    return i2 >= 0 ? i2 : null;
  }
  intersectPlane(t2, s2) {
    const i2 = this.distanceToPlane(t2);
    return null === i2 ? null : this.at(i2, s2);
  }
  intersectsPlane(t2) {
    const s2 = t2.distanceToPoint(this.origin);
    if (0 === s2)
      return true;
    return t2.normal.dot(this.direction) * s2 < 0;
  }
  intersectBox(t2, s2) {
    let i2, e2, a2, n2, r2, h2;
    const o2 = 1 / this.direction.x, c2 = 1 / this.direction.y, l2 = 1 / this.direction.z, u2 = this.origin;
    return o2 >= 0 ? (i2 = (t2.min.x - u2.x) * o2, e2 = (t2.max.x - u2.x) * o2) : (i2 = (t2.max.x - u2.x) * o2, e2 = (t2.min.x - u2.x) * o2), c2 >= 0 ? (a2 = (t2.min.y - u2.y) * c2, n2 = (t2.max.y - u2.y) * c2) : (a2 = (t2.max.y - u2.y) * c2, n2 = (t2.min.y - u2.y) * c2), i2 > n2 || a2 > e2 ? null : ((a2 > i2 || isNaN(i2)) && (i2 = a2), (n2 < e2 || isNaN(e2)) && (e2 = n2), l2 >= 0 ? (r2 = (t2.min.z - u2.z) * l2, h2 = (t2.max.z - u2.z) * l2) : (r2 = (t2.max.z - u2.z) * l2, h2 = (t2.min.z - u2.z) * l2), i2 > h2 || r2 > e2 ? null : ((r2 > i2 || i2 != i2) && (i2 = r2), (h2 < e2 || e2 != e2) && (e2 = h2), e2 < 0 ? null : this.at(i2 >= 0 ? i2 : e2, s2)));
  }
  intersectsBox(t2) {
    return null !== this.intersectBox(t2, z);
  }
  intersectTriangle(t2, s2, i2, e2, a2) {
    q.subVectors(s2, t2), L.subVectors(i2, t2), B.crossVectors(q, L);
    let n2, r2 = this.direction.dot(B);
    if (r2 > 0) {
      if (e2)
        return null;
      n2 = 1;
    } else {
      if (!(r2 < 0))
        return null;
      n2 = -1, r2 = -r2;
    }
    R.subVectors(this.origin, t2);
    const h2 = n2 * this.direction.dot(L.crossVectors(R, L));
    if (h2 < 0)
      return null;
    const o2 = n2 * this.direction.dot(q.cross(R));
    if (o2 < 0)
      return null;
    if (h2 + o2 > r2)
      return null;
    const c2 = -n2 * R.dot(B);
    return c2 < 0 ? null : this.at(c2 / r2, a2);
  }
  applyMatrix4(t2) {
    return this.origin.applyMatrix4(t2), this.direction.transformDirection(t2), this;
  }
  equals(t2) {
    return t2.origin.equals(this.origin) && t2.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class D {
  constructor(t2, s2, i2, e2, a2, n2, r2, h2, o2, c2, l2, u2, d2, m2, _2, f2) {
    D.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], void 0 !== t2 && this.set(t2, s2, i2, e2, a2, n2, r2, h2, o2, c2, l2, u2, d2, m2, _2, f2);
  }
  set(t2, s2, i2, e2, a2, n2, r2, h2, o2, c2, l2, u2, d2, m2, _2, f2) {
    const y2 = this.elements;
    return y2[0] = t2, y2[4] = s2, y2[8] = i2, y2[12] = e2, y2[1] = a2, y2[5] = n2, y2[9] = r2, y2[13] = h2, y2[2] = o2, y2[6] = c2, y2[10] = l2, y2[14] = u2, y2[3] = d2, y2[7] = m2, y2[11] = _2, y2[15] = f2, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new D().fromArray(this.elements);
  }
  copy(t2) {
    const s2 = this.elements, i2 = t2.elements;
    return s2[0] = i2[0], s2[1] = i2[1], s2[2] = i2[2], s2[3] = i2[3], s2[4] = i2[4], s2[5] = i2[5], s2[6] = i2[6], s2[7] = i2[7], s2[8] = i2[8], s2[9] = i2[9], s2[10] = i2[10], s2[11] = i2[11], s2[12] = i2[12], s2[13] = i2[13], s2[14] = i2[14], s2[15] = i2[15], this;
  }
  copyPosition(t2) {
    const s2 = this.elements, i2 = t2.elements;
    return s2[12] = i2[12], s2[13] = i2[13], s2[14] = i2[14], this;
  }
  setFromMatrix3(t2) {
    const s2 = t2.elements;
    return this.set(s2[0], s2[3], s2[6], 0, s2[1], s2[4], s2[7], 0, s2[2], s2[5], s2[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(t2, s2, i2) {
    return t2.setFromMatrixColumn(this, 0), s2.setFromMatrixColumn(this, 1), i2.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(t2, s2, i2) {
    return this.set(t2.x, s2.x, i2.x, 0, t2.y, s2.y, i2.y, 0, t2.z, s2.z, i2.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(t2) {
    const s2 = this.elements, i2 = t2.elements, e2 = 1 / U.setFromMatrixColumn(t2, 0).length(), a2 = 1 / U.setFromMatrixColumn(t2, 1).length(), n2 = 1 / U.setFromMatrixColumn(t2, 2).length();
    return s2[0] = i2[0] * e2, s2[1] = i2[1] * e2, s2[2] = i2[2] * e2, s2[3] = 0, s2[4] = i2[4] * a2, s2[5] = i2[5] * a2, s2[6] = i2[6] * a2, s2[7] = 0, s2[8] = i2[8] * n2, s2[9] = i2[9] * n2, s2[10] = i2[10] * n2, s2[11] = 0, s2[12] = 0, s2[13] = 0, s2[14] = 0, s2[15] = 1, this;
  }
  makeRotationFromEuler(t2) {
    const s2 = this.elements, i2 = t2.x, e2 = t2.y, a2 = t2.z, n2 = Math.cos(i2), r2 = Math.sin(i2), h2 = Math.cos(e2), o2 = Math.sin(e2), c2 = Math.cos(a2), l2 = Math.sin(a2);
    if ("XYZ" === t2.order) {
      const t3 = n2 * c2, i3 = n2 * l2, e3 = r2 * c2, a3 = r2 * l2;
      s2[0] = h2 * c2, s2[4] = -h2 * l2, s2[8] = o2, s2[1] = i3 + e3 * o2, s2[5] = t3 - a3 * o2, s2[9] = -r2 * h2, s2[2] = a3 - t3 * o2, s2[6] = e3 + i3 * o2, s2[10] = n2 * h2;
    } else if ("YXZ" === t2.order) {
      const t3 = h2 * c2, i3 = h2 * l2, e3 = o2 * c2, a3 = o2 * l2;
      s2[0] = t3 + a3 * r2, s2[4] = e3 * r2 - i3, s2[8] = n2 * o2, s2[1] = n2 * l2, s2[5] = n2 * c2, s2[9] = -r2, s2[2] = i3 * r2 - e3, s2[6] = a3 + t3 * r2, s2[10] = n2 * h2;
    } else if ("ZXY" === t2.order) {
      const t3 = h2 * c2, i3 = h2 * l2, e3 = o2 * c2, a3 = o2 * l2;
      s2[0] = t3 - a3 * r2, s2[4] = -n2 * l2, s2[8] = e3 + i3 * r2, s2[1] = i3 + e3 * r2, s2[5] = n2 * c2, s2[9] = a3 - t3 * r2, s2[2] = -n2 * o2, s2[6] = r2, s2[10] = n2 * h2;
    } else if ("ZYX" === t2.order) {
      const t3 = n2 * c2, i3 = n2 * l2, e3 = r2 * c2, a3 = r2 * l2;
      s2[0] = h2 * c2, s2[4] = e3 * o2 - i3, s2[8] = t3 * o2 + a3, s2[1] = h2 * l2, s2[5] = a3 * o2 + t3, s2[9] = i3 * o2 - e3, s2[2] = -o2, s2[6] = r2 * h2, s2[10] = n2 * h2;
    } else if ("YZX" === t2.order) {
      const t3 = n2 * h2, i3 = n2 * o2, e3 = r2 * h2, a3 = r2 * o2;
      s2[0] = h2 * c2, s2[4] = a3 - t3 * l2, s2[8] = e3 * l2 + i3, s2[1] = l2, s2[5] = n2 * c2, s2[9] = -r2 * c2, s2[2] = -o2 * c2, s2[6] = i3 * l2 + e3, s2[10] = t3 - a3 * l2;
    } else if ("XZY" === t2.order) {
      const t3 = n2 * h2, i3 = n2 * o2, e3 = r2 * h2, a3 = r2 * o2;
      s2[0] = h2 * c2, s2[4] = -l2, s2[8] = o2 * c2, s2[1] = t3 * l2 + a3, s2[5] = n2 * c2, s2[9] = i3 * l2 - e3, s2[2] = e3 * l2 - i3, s2[6] = r2 * c2, s2[10] = a3 * l2 + t3;
    }
    return s2[3] = 0, s2[7] = 0, s2[11] = 0, s2[12] = 0, s2[13] = 0, s2[14] = 0, s2[15] = 1, this;
  }
  makeRotationFromQuaternion(t2) {
    return this.compose(F, t2, V);
  }
  lookAt(t2, s2, i2) {
    const e2 = this.elements;
    return X.subVectors(t2, s2), 0 === X.lengthSq() && (X.z = 1), X.normalize(), W.crossVectors(i2, X), 0 === W.lengthSq() && (1 === Math.abs(i2.z) ? X.x += 1e-4 : X.z += 1e-4, X.normalize(), W.crossVectors(i2, X)), W.normalize(), H.crossVectors(X, W), e2[0] = W.x, e2[4] = H.x, e2[8] = X.x, e2[1] = W.y, e2[5] = H.y, e2[9] = X.y, e2[2] = W.z, e2[6] = H.z, e2[10] = X.z, this;
  }
  multiply(t2) {
    return this.multiplyMatrices(this, t2);
  }
  premultiply(t2) {
    return this.multiplyMatrices(t2, this);
  }
  multiplyMatrices(t2, s2) {
    const i2 = t2.elements, e2 = s2.elements, a2 = this.elements, n2 = i2[0], r2 = i2[4], h2 = i2[8], o2 = i2[12], c2 = i2[1], l2 = i2[5], u2 = i2[9], d2 = i2[13], m2 = i2[2], _2 = i2[6], f2 = i2[10], y2 = i2[14], p2 = i2[3], g2 = i2[7], M2 = i2[11], x2 = i2[15], w2 = e2[0], S2 = e2[4], E2 = e2[8], b2 = e2[12], P2 = e2[1], v2 = e2[5], A2 = e2[9], G2 = e2[13], C2 = e2[2], N2 = e2[6], I2 = e2[10], z2 = e2[14], T2 = e2[3], O2 = e2[7], R2 = e2[11], q2 = e2[15];
    return a2[0] = n2 * w2 + r2 * P2 + h2 * C2 + o2 * T2, a2[4] = n2 * S2 + r2 * v2 + h2 * N2 + o2 * O2, a2[8] = n2 * E2 + r2 * A2 + h2 * I2 + o2 * R2, a2[12] = n2 * b2 + r2 * G2 + h2 * z2 + o2 * q2, a2[1] = c2 * w2 + l2 * P2 + u2 * C2 + d2 * T2, a2[5] = c2 * S2 + l2 * v2 + u2 * N2 + d2 * O2, a2[9] = c2 * E2 + l2 * A2 + u2 * I2 + d2 * R2, a2[13] = c2 * b2 + l2 * G2 + u2 * z2 + d2 * q2, a2[2] = m2 * w2 + _2 * P2 + f2 * C2 + y2 * T2, a2[6] = m2 * S2 + _2 * v2 + f2 * N2 + y2 * O2, a2[10] = m2 * E2 + _2 * A2 + f2 * I2 + y2 * R2, a2[14] = m2 * b2 + _2 * G2 + f2 * z2 + y2 * q2, a2[3] = p2 * w2 + g2 * P2 + M2 * C2 + x2 * T2, a2[7] = p2 * S2 + g2 * v2 + M2 * N2 + x2 * O2, a2[11] = p2 * E2 + g2 * A2 + M2 * I2 + x2 * R2, a2[15] = p2 * b2 + g2 * G2 + M2 * z2 + x2 * q2, this;
  }
  multiplyScalar(t2) {
    const s2 = this.elements;
    return s2[0] *= t2, s2[4] *= t2, s2[8] *= t2, s2[12] *= t2, s2[1] *= t2, s2[5] *= t2, s2[9] *= t2, s2[13] *= t2, s2[2] *= t2, s2[6] *= t2, s2[10] *= t2, s2[14] *= t2, s2[3] *= t2, s2[7] *= t2, s2[11] *= t2, s2[15] *= t2, this;
  }
  determinant() {
    const t2 = this.elements, s2 = t2[0], i2 = t2[4], e2 = t2[8], a2 = t2[12], n2 = t2[1], r2 = t2[5], h2 = t2[9], o2 = t2[13], c2 = t2[2], l2 = t2[6], u2 = t2[10], d2 = t2[14];
    return t2[3] * (+a2 * h2 * l2 - e2 * o2 * l2 - a2 * r2 * u2 + i2 * o2 * u2 + e2 * r2 * d2 - i2 * h2 * d2) + t2[7] * (+s2 * h2 * d2 - s2 * o2 * u2 + a2 * n2 * u2 - e2 * n2 * d2 + e2 * o2 * c2 - a2 * h2 * c2) + t2[11] * (+s2 * o2 * l2 - s2 * r2 * d2 - a2 * n2 * l2 + i2 * n2 * d2 + a2 * r2 * c2 - i2 * o2 * c2) + t2[15] * (-e2 * r2 * c2 - s2 * h2 * l2 + s2 * r2 * u2 + e2 * n2 * l2 - i2 * n2 * u2 + i2 * h2 * c2);
  }
  transpose() {
    const t2 = this.elements;
    let s2;
    return s2 = t2[1], t2[1] = t2[4], t2[4] = s2, s2 = t2[2], t2[2] = t2[8], t2[8] = s2, s2 = t2[6], t2[6] = t2[9], t2[9] = s2, s2 = t2[3], t2[3] = t2[12], t2[12] = s2, s2 = t2[7], t2[7] = t2[13], t2[13] = s2, s2 = t2[11], t2[11] = t2[14], t2[14] = s2, this;
  }
  setPosition(t2, s2, i2) {
    const e2 = this.elements;
    return t2.isVector3 ? (e2[12] = t2.x, e2[13] = t2.y, e2[14] = t2.z) : (e2[12] = t2, e2[13] = s2, e2[14] = i2), this;
  }
  invert() {
    const t2 = this.elements, s2 = t2[0], i2 = t2[1], e2 = t2[2], a2 = t2[3], n2 = t2[4], r2 = t2[5], h2 = t2[6], o2 = t2[7], c2 = t2[8], l2 = t2[9], u2 = t2[10], d2 = t2[11], m2 = t2[12], _2 = t2[13], f2 = t2[14], y2 = t2[15], p2 = l2 * f2 * o2 - _2 * u2 * o2 + _2 * h2 * d2 - r2 * f2 * d2 - l2 * h2 * y2 + r2 * u2 * y2, g2 = m2 * u2 * o2 - c2 * f2 * o2 - m2 * h2 * d2 + n2 * f2 * d2 + c2 * h2 * y2 - n2 * u2 * y2, M2 = c2 * _2 * o2 - m2 * l2 * o2 + m2 * r2 * d2 - n2 * _2 * d2 - c2 * r2 * y2 + n2 * l2 * y2, x2 = m2 * l2 * h2 - c2 * _2 * h2 - m2 * r2 * u2 + n2 * _2 * u2 + c2 * r2 * f2 - n2 * l2 * f2, w2 = s2 * p2 + i2 * g2 + e2 * M2 + a2 * x2;
    if (0 === w2)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const S2 = 1 / w2;
    return t2[0] = p2 * S2, t2[1] = (_2 * u2 * a2 - l2 * f2 * a2 - _2 * e2 * d2 + i2 * f2 * d2 + l2 * e2 * y2 - i2 * u2 * y2) * S2, t2[2] = (r2 * f2 * a2 - _2 * h2 * a2 + _2 * e2 * o2 - i2 * f2 * o2 - r2 * e2 * y2 + i2 * h2 * y2) * S2, t2[3] = (l2 * h2 * a2 - r2 * u2 * a2 - l2 * e2 * o2 + i2 * u2 * o2 + r2 * e2 * d2 - i2 * h2 * d2) * S2, t2[4] = g2 * S2, t2[5] = (c2 * f2 * a2 - m2 * u2 * a2 + m2 * e2 * d2 - s2 * f2 * d2 - c2 * e2 * y2 + s2 * u2 * y2) * S2, t2[6] = (m2 * h2 * a2 - n2 * f2 * a2 - m2 * e2 * o2 + s2 * f2 * o2 + n2 * e2 * y2 - s2 * h2 * y2) * S2, t2[7] = (n2 * u2 * a2 - c2 * h2 * a2 + c2 * e2 * o2 - s2 * u2 * o2 - n2 * e2 * d2 + s2 * h2 * d2) * S2, t2[8] = M2 * S2, t2[9] = (m2 * l2 * a2 - c2 * _2 * a2 - m2 * i2 * d2 + s2 * _2 * d2 + c2 * i2 * y2 - s2 * l2 * y2) * S2, t2[10] = (n2 * _2 * a2 - m2 * r2 * a2 + m2 * i2 * o2 - s2 * _2 * o2 - n2 * i2 * y2 + s2 * r2 * y2) * S2, t2[11] = (c2 * r2 * a2 - n2 * l2 * a2 - c2 * i2 * o2 + s2 * l2 * o2 + n2 * i2 * d2 - s2 * r2 * d2) * S2, t2[12] = x2 * S2, t2[13] = (c2 * _2 * e2 - m2 * l2 * e2 + m2 * i2 * u2 - s2 * _2 * u2 - c2 * i2 * f2 + s2 * l2 * f2) * S2, t2[14] = (m2 * r2 * e2 - n2 * _2 * e2 - m2 * i2 * h2 + s2 * _2 * h2 + n2 * i2 * f2 - s2 * r2 * f2) * S2, t2[15] = (n2 * l2 * e2 - c2 * r2 * e2 + c2 * i2 * h2 - s2 * l2 * h2 - n2 * i2 * u2 + s2 * r2 * u2) * S2, this;
  }
  scale(t2) {
    const s2 = this.elements, i2 = t2.x, e2 = t2.y, a2 = t2.z;
    return s2[0] *= i2, s2[4] *= e2, s2[8] *= a2, s2[1] *= i2, s2[5] *= e2, s2[9] *= a2, s2[2] *= i2, s2[6] *= e2, s2[10] *= a2, s2[3] *= i2, s2[7] *= e2, s2[11] *= a2, this;
  }
  getMaxScaleOnAxis() {
    const t2 = this.elements, s2 = t2[0] * t2[0] + t2[1] * t2[1] + t2[2] * t2[2], i2 = t2[4] * t2[4] + t2[5] * t2[5] + t2[6] * t2[6], e2 = t2[8] * t2[8] + t2[9] * t2[9] + t2[10] * t2[10];
    return Math.sqrt(Math.max(s2, i2, e2));
  }
  makeTranslation(t2, s2, i2) {
    return t2.isVector3 ? this.set(1, 0, 0, t2.x, 0, 1, 0, t2.y, 0, 0, 1, t2.z, 0, 0, 0, 1) : this.set(1, 0, 0, t2, 0, 1, 0, s2, 0, 0, 1, i2, 0, 0, 0, 1), this;
  }
  makeRotationX(t2) {
    const s2 = Math.cos(t2), i2 = Math.sin(t2);
    return this.set(1, 0, 0, 0, 0, s2, -i2, 0, 0, i2, s2, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(t2) {
    const s2 = Math.cos(t2), i2 = Math.sin(t2);
    return this.set(s2, 0, i2, 0, 0, 1, 0, 0, -i2, 0, s2, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(t2) {
    const s2 = Math.cos(t2), i2 = Math.sin(t2);
    return this.set(s2, -i2, 0, 0, i2, s2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(t2, s2) {
    const i2 = Math.cos(s2), e2 = Math.sin(s2), a2 = 1 - i2, n2 = t2.x, r2 = t2.y, h2 = t2.z, o2 = a2 * n2, c2 = a2 * r2;
    return this.set(o2 * n2 + i2, o2 * r2 - e2 * h2, o2 * h2 + e2 * r2, 0, o2 * r2 + e2 * h2, c2 * r2 + i2, c2 * h2 - e2 * n2, 0, o2 * h2 - e2 * r2, c2 * h2 + e2 * n2, a2 * h2 * h2 + i2, 0, 0, 0, 0, 1), this;
  }
  makeScale(t2, s2, i2) {
    return this.set(t2, 0, 0, 0, 0, s2, 0, 0, 0, 0, i2, 0, 0, 0, 0, 1), this;
  }
  makeShear(t2, s2, i2, e2, a2, n2) {
    return this.set(1, i2, a2, 0, t2, 1, n2, 0, s2, e2, 1, 0, 0, 0, 0, 1), this;
  }
  compose(t2, s2, i2) {
    const e2 = this.elements, a2 = s2._x, n2 = s2._y, r2 = s2._z, h2 = s2._w, o2 = a2 + a2, c2 = n2 + n2, l2 = r2 + r2, u2 = a2 * o2, d2 = a2 * c2, m2 = a2 * l2, _2 = n2 * c2, f2 = n2 * l2, y2 = r2 * l2, p2 = h2 * o2, g2 = h2 * c2, M2 = h2 * l2, x2 = i2.x, w2 = i2.y, S2 = i2.z;
    return e2[0] = (1 - (_2 + y2)) * x2, e2[1] = (d2 + M2) * x2, e2[2] = (m2 - g2) * x2, e2[3] = 0, e2[4] = (d2 - M2) * w2, e2[5] = (1 - (u2 + y2)) * w2, e2[6] = (f2 + p2) * w2, e2[7] = 0, e2[8] = (m2 + g2) * S2, e2[9] = (f2 - p2) * S2, e2[10] = (1 - (u2 + _2)) * S2, e2[11] = 0, e2[12] = t2.x, e2[13] = t2.y, e2[14] = t2.z, e2[15] = 1, this;
  }
  decompose(t2, s2, i2) {
    const e2 = this.elements;
    let a2 = U.set(e2[0], e2[1], e2[2]).length();
    const n2 = U.set(e2[4], e2[5], e2[6]).length(), r2 = U.set(e2[8], e2[9], e2[10]).length();
    this.determinant() < 0 && (a2 = -a2), t2.x = e2[12], t2.y = e2[13], t2.z = e2[14], j.copy(this);
    const h2 = 1 / a2, o2 = 1 / n2, c2 = 1 / r2;
    return j.elements[0] *= h2, j.elements[1] *= h2, j.elements[2] *= h2, j.elements[4] *= o2, j.elements[5] *= o2, j.elements[6] *= o2, j.elements[8] *= c2, j.elements[9] *= c2, j.elements[10] *= c2, s2.setFromRotationMatrix(j), i2.x = a2, i2.y = n2, i2.z = r2, this;
  }
  makePerspective(s2, i2, e2, a2, n2, r2, h2 = 2e3, o2 = false) {
    const c2 = this.elements, l2 = 2 * n2 / (i2 - s2), u2 = 2 * n2 / (e2 - a2), d2 = (i2 + s2) / (i2 - s2), m2 = (e2 + a2) / (e2 - a2);
    let _2, f2;
    if (o2)
      _2 = n2 / (r2 - n2), f2 = r2 * n2 / (r2 - n2);
    else if (h2 === t)
      _2 = -(r2 + n2) / (r2 - n2), f2 = -2 * r2 * n2 / (r2 - n2);
    else {
      if (2001 !== h2)
        throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + h2);
      _2 = -r2 / (r2 - n2), f2 = -r2 * n2 / (r2 - n2);
    }
    return c2[0] = l2, c2[4] = 0, c2[8] = d2, c2[12] = 0, c2[1] = 0, c2[5] = u2, c2[9] = m2, c2[13] = 0, c2[2] = 0, c2[6] = 0, c2[10] = _2, c2[14] = f2, c2[3] = 0, c2[7] = 0, c2[11] = -1, c2[15] = 0, this;
  }
  makeOrthographic(s2, i2, e2, a2, n2, r2, h2 = 2e3, o2 = false) {
    const c2 = this.elements, l2 = 2 / (i2 - s2), u2 = 2 / (e2 - a2), d2 = -(i2 + s2) / (i2 - s2), m2 = -(e2 + a2) / (e2 - a2);
    let _2, f2;
    if (o2)
      _2 = 1 / (r2 - n2), f2 = r2 / (r2 - n2);
    else if (h2 === t)
      _2 = -2 / (r2 - n2), f2 = -(r2 + n2) / (r2 - n2);
    else {
      if (2001 !== h2)
        throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + h2);
      _2 = -1 / (r2 - n2), f2 = -n2 / (r2 - n2);
    }
    return c2[0] = l2, c2[4] = 0, c2[8] = 0, c2[12] = d2, c2[1] = 0, c2[5] = u2, c2[9] = 0, c2[13] = m2, c2[2] = 0, c2[6] = 0, c2[10] = _2, c2[14] = f2, c2[3] = 0, c2[7] = 0, c2[11] = 0, c2[15] = 1, this;
  }
  equals(t2) {
    const s2 = this.elements, i2 = t2.elements;
    for (let t3 = 0; t3 < 16; t3++)
      if (s2[t3] !== i2[t3])
        return false;
    return true;
  }
  fromArray(t2, s2 = 0) {
    for (let i2 = 0; i2 < 16; i2++)
      this.elements[i2] = t2[i2 + s2];
    return this;
  }
  toArray(t2 = [], s2 = 0) {
    const i2 = this.elements;
    return t2[s2] = i2[0], t2[s2 + 1] = i2[1], t2[s2 + 2] = i2[2], t2[s2 + 3] = i2[3], t2[s2 + 4] = i2[4], t2[s2 + 5] = i2[5], t2[s2 + 6] = i2[6], t2[s2 + 7] = i2[7], t2[s2 + 8] = i2[8], t2[s2 + 9] = i2[9], t2[s2 + 10] = i2[10], t2[s2 + 11] = i2[11], t2[s2 + 12] = i2[12], t2[s2 + 13] = i2[13], t2[s2 + 14] = i2[14], t2[s2 + 15] = i2[15], t2;
  }
}
const U = new u(), j = new D(), F = new u(0, 0, 0), V = new u(1, 1, 1), W = new u(), H = new u(), X = new u(), Y = new u(), Z = new u(), Q = new _();
class K {
  constructor(t2 = new u(1, 0, 0), s2 = 0) {
    this.isPlane = true, this.normal = t2, this.constant = s2;
  }
  set(t2, s2) {
    return this.normal.copy(t2), this.constant = s2, this;
  }
  setComponents(t2, s2, i2, e2) {
    return this.normal.set(t2, s2, i2), this.constant = e2, this;
  }
  setFromNormalAndCoplanarPoint(t2, s2) {
    return this.normal.copy(t2), this.constant = -s2.dot(this.normal), this;
  }
  setFromCoplanarPoints(t2, s2, i2) {
    const e2 = Y.subVectors(i2, s2).cross(Z.subVectors(t2, s2)).normalize();
    return this.setFromNormalAndCoplanarPoint(e2, t2), this;
  }
  copy(t2) {
    return this.normal.copy(t2.normal), this.constant = t2.constant, this;
  }
  normalize() {
    const t2 = 1 / this.normal.length();
    return this.normal.multiplyScalar(t2), this.constant *= t2, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(t2) {
    return this.normal.dot(t2) + this.constant;
  }
  distanceToSphere(t2) {
    return this.distanceToPoint(t2.center) - t2.radius;
  }
  projectPoint(t2, s2) {
    return s2.copy(t2).addScaledVector(this.normal, -this.distanceToPoint(t2));
  }
  intersectLine(t2, s2) {
    const i2 = t2.delta(Y), e2 = this.normal.dot(i2);
    if (0 === e2)
      return 0 === this.distanceToPoint(t2.start) ? s2.copy(t2.start) : null;
    const a2 = -(t2.start.dot(this.normal) + this.constant) / e2;
    return a2 < 0 || a2 > 1 ? null : s2.copy(t2.start).addScaledVector(i2, a2);
  }
  intersectsLine(t2) {
    const s2 = this.distanceToPoint(t2.start), i2 = this.distanceToPoint(t2.end);
    return s2 < 0 && i2 > 0 || i2 < 0 && s2 > 0;
  }
  intersectsBox(t2) {
    return t2.intersectsPlane(this);
  }
  intersectsSphere(t2) {
    return t2.intersectsPlane(this);
  }
  coplanarPoint(t2) {
    return t2.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(t2, s2) {
    const i2 = s2 || Q.getNormalMatrix(t2), e2 = this.coplanarPoint(Y).applyMatrix4(t2), a2 = this.normal.applyMatrix3(i2).normalize();
    return this.constant = -e2.dot(a2), this;
  }
  translate(t2) {
    return this.constant -= t2.dot(this.normal), this;
  }
  equals(t2) {
    return t2.normal.equals(this.normal) && t2.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function J(t2) {
  return null != t2;
}
function $(t2, s2) {
  return null != t2 ? t2 : s2;
}
function tt(t2) {
  let s2;
  this.name = "DeveloperError", this.message = t2;
  try {
    throw new Error();
  } catch (t3) {
    s2 = t3.stack;
  }
  this.stack = s2;
}
"undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "179" } })), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "179"), $.EMPTY_OBJECT = Object.freeze({}), J(Object.create) && (tt.prototype = Object.create(Error.prototype), tt.prototype.constructor = tt), tt.prototype.toString = function() {
  let t2 = this.name + ": " + this.message;
  return J(this.stack) && (t2 += "\n" + this.stack.toString()), t2;
}, tt.throwInstantiationError = function() {
  throw new tt("This function defines an interface and should not be called directly.");
};
const _st = class {
  static equalsEpsilon(t2, s2, i2, e2) {
    i2 = $(i2, 0), e2 = $(e2, i2);
    const a2 = Math.abs(t2 - s2);
    return a2 <= e2 || a2 <= i2 * Math.max(Math.abs(t2), Math.abs(s2));
  }
  static toRadians(t2) {
    return o.degToRad(t2);
  }
  static clamp(t2, s2, i2) {
    return t2 < s2 ? s2 : t2 > i2 ? i2 : t2;
  }
  static acosClamped(t2) {
    return Math.acos(_st.clamp(t2, -1, 1));
  }
  static asinClamped(t2) {
    return Math.asin(_st.clamp(t2, -1, 1));
  }
  static sign(t2) {
    return Math.sign(t2);
  }
  static zeroToTwoPi(t2) {
    if (t2 >= 0 && t2 <= _st.TWO_PI)
      return t2;
    const s2 = _st.mod(t2, _st.TWO_PI);
    return Math.abs(s2) < _st.EPSILON14 && Math.abs(t2) > _st.EPSILON14 ? _st.TWO_PI : s2;
  }
  static mod(t2, s2) {
    return _st.sign(t2) === _st.sign(s2) && Math.abs(t2) < Math.abs(s2) ? t2 : (t2 % s2 + s2) % s2;
  }
  static chordLength(t2, s2) {
    return 2 * s2 * Math.sin(0.5 * t2);
  }
  static negativePiToPi(t2) {
    if (!J(t2))
      throw new tt("angle is required.");
    return t2 >= -_st.PI && t2 <= _st.PI ? t2 : _st.zeroToTwoPi(t2 + _st.PI) - _st.PI;
  }
  static normalize(t2, s2, i2) {
    return 0 === (i2 = Math.max(i2 - s2, 0)) ? 0 : _st.clamp((t2 - s2) / i2, 0, 1);
  }
};
let st = _st;
__publicField(st, "EPSILON1", 0.1);
__publicField(st, "EPSILON2", 0.01);
__publicField(st, "EPSILON3", 1e-3);
__publicField(st, "EPSILON4", 1e-4);
__publicField(st, "EPSILON5", 1e-5);
__publicField(st, "EPSILON6", 1e-6);
__publicField(st, "EPSILON7", 1e-7);
__publicField(st, "EPSILON8", 1e-8);
__publicField(st, "EPSILON9", 1e-9);
__publicField(st, "EPSILON10", 1e-10);
__publicField(st, "EPSILON11", 1e-11);
__publicField(st, "EPSILON12", 1e-12);
__publicField(st, "EPSILON13", 1e-13);
__publicField(st, "EPSILON14", 1e-14);
__publicField(st, "EPSILON15", 1e-15);
__publicField(st, "EPSILON16", 1e-16);
__publicField(st, "EPSILON17", 1e-17);
__publicField(st, "EPSILON18", 1e-18);
__publicField(st, "EPSILON19", 1e-19);
__publicField(st, "EPSILON20", 1e-20);
__publicField(st, "EPSILON21", 1e-21);
__publicField(st, "PI", Math.PI);
__publicField(st, "ONE_OVER_PI", 1 / Math.PI);
__publicField(st, "PI_OVER_TWO", Math.PI / 2);
__publicField(st, "PI_OVER_THREE", Math.PI / 3);
__publicField(st, "PI_OVER_FOUR", Math.PI / 4);
__publicField(st, "PI_OVER_SIX", Math.PI / 6);
__publicField(st, "THREE_PI_OVER_TWO", 3 * Math.PI / 2);
__publicField(st, "TWO_PI", 2 * Math.PI);
__publicField(st, "ONE_OVER_TWO_PI", 1 / (2 * Math.PI));
__publicField(st, "RADIANS_PER_DEGREE", Math.PI / 180);
class it {
  constructor(t2, s2, i2, e2) {
    this.west = t2 || 0, this.south = s2 || 0, this.east = i2 || 0, this.north = e2 || 0;
  }
  get width() {
    return it.computeWidth(this);
  }
  get height() {
    return it.computeHeight(this);
  }
}
it.fromDegrees = function(t2, s2, i2, e2, a2) {
  return t2 = o.degToRad($(t2, 0)), s2 = o.degToRad($(s2, 0)), i2 = o.degToRad($(i2, 0)), e2 = o.degToRad($(e2, 0)), J(a2) ? (a2.west = t2, a2.south = s2, a2.east = i2, a2.north = e2, a2) : new it(t2, s2, i2, e2);
}, it.computeWidth = function(t2) {
  let s2 = t2.east;
  const i2 = t2.west;
  return s2 < i2 && (s2 += st.TWO_PI), s2 - i2;
}, it.computeHeight = function(t2) {
  return t2.north - t2.south;
}, it.clone = function(t2, s2) {
  if (J(t2))
    return J(s2) ? (s2.west = t2.west, s2.south = t2.south, s2.east = t2.east, s2.north = t2.north, s2) : new it(t2.west, t2.south, t2.east, t2.north);
}, it.southwest = function(t2, s2) {
  return J(s2) ? (s2.x = t2.west, s2.y = t2.south, s2.z = 0, s2) : new u(t2.west, t2.south);
}, it.northeast = function(t2, s2) {
  return J(s2) ? (s2.x = t2.east, s2.y = t2.north, s2.z = 0, s2) : new u(t2.east, t2.north);
}, it.southeast = function(t2, s2) {
  return J(s2) ? (s2.x = t2.east, s2.y = t2.south, s2.z = 0, s2) : new u(t2.east, t2.south);
}, it.northwest = function(t2, s2) {
  return J(s2) ? (s2.x = t2.west, s2.y = t2.north, s2.z = 0, s2) : new u(t2.west, t2.north);
}, it.center = function(t2, s2) {
  let i2 = t2.east;
  const e2 = t2.west;
  i2 < e2 && (i2 += st.TWO_PI);
  const a2 = st.negativePiToPi(0.5 * (e2 + i2)), n2 = 0.5 * (t2.south + t2.north);
  return J(s2) ? (s2.x = a2, s2.y = n2, s2.z = 0, s2) : new u(a2, n2);
}, it.contains = function(t2, s2) {
  let i2 = s2.x;
  const e2 = s2.y, a2 = t2.west;
  let n2 = t2.east;
  return n2 < a2 && (n2 += st.TWO_PI, i2 < 0 && (i2 += st.TWO_PI)), (i2 > a2 || st.equalsEpsilon(i2, a2, st.EPSILON14)) && (i2 < n2 || st.equalsEpsilon(i2, n2, st.EPSILON14)) && e2 >= t2.south && e2 <= t2.north;
};
const et = Math.PI + 1e-5, at = -Math.PI - 1e-5, nt = st.PI_OVER_TWO + 1e-5, rt = -st.PI_OVER_TWO - 1e-5;
function ht(t2) {
  return null != t2;
}
it.fromBox = function(t2, s2, i2 = false) {
  const e2 = t2.min, a2 = t2.max;
  let n2 = e2.x / 180 * Math.PI, r2 = e2.y / 180 * Math.PI, h2 = a2.x / 180 * Math.PI, o2 = a2.y / 180 * Math.PI;
  return i2 && (n2 < at && (n2 = -Math.PI), n2 > et && (n2 = Math.PI), r2 < rt && (r2 = -st.PI_OVER_TWO), r2 > nt && (r2 = st.PI_OVER_TWO), h2 > et && (h2 = Math.PI), h2 < at && (h2 = -Math.PI), o2 > nt && (o2 = st.PI_OVER_TWO), o2 < rt && (o2 = -st.PI_OVER_TWO)), J(s2) ? (s2.west = n2, s2.south = r2, s2.east = h2, s2.north = o2, s2) : new it(n2, r2, h2, o2);
}, it.MAX_VALUE = Object.freeze(new it(-Math.PI, -st.PI_OVER_TWO, Math.PI, st.PI_OVER_TWO)), Object.freeze({}), Object.freeze(new D());
const ot = new u();
let ct = new u(), lt = new u();
const ut = new u(40680631590769, 40680631590769, 40408299984661445e-3), dt = new u(), mt = new u();
const __t = class {
  constructor() {
    __publicField(this, "COLUMN0ROW0", 0);
    __publicField(this, "COLUMN0ROW1", 1);
    __publicField(this, "COLUMN0ROW2", 2);
    __publicField(this, "COLUMN1ROW0", 3);
    __publicField(this, "COLUMN1ROW1", 4);
    __publicField(this, "COLUMN1ROW2", 5);
    __publicField(this, "COLUMN2ROW0", 6);
    __publicField(this, "COLUMN2ROW1", 7);
    __publicField(this, "COLUMN2ROW2", 8);
  }
  static clone(t2, s2) {
    if (t2)
      return s2.copy(t2), s2;
  }
  static equals(t2, s2) {
    return !(!J(t2) || !J(s2)) && t2.equals(s2);
  }
  static normalize(t2, s2) {
    return t2 === s2 ? (t2.normalize(), t2) : (s2.copy(t2), s2.normalize(), s2);
  }
  static add(t2, s2, i2) {
    return i2 || (i2 = new u()), i2.addVectors(t2, s2);
  }
  static dot(t2, s2) {
    return t2.dot(s2);
  }
  static cross(t2, s2, i2) {
    return i2 || (i2 = new u()), i2.crossVectors(t2, s2), i2;
  }
  static magnitudeSquared(t2) {
    return t2.lengthSq();
  }
  static multiplyByScalar(t2, s2, i2) {
    return i2 || (i2 = new u()), i2.copy(t2).multiplyScalar(s2), i2;
  }
  static divideByScalar(t2, s2, i2) {
    return i2 || (i2 = new u()), i2.x = t2.x / s2, i2.y = t2.y / s2, i2.z = t2.z / s2, i2;
  }
  static subtract(t2, s2, i2) {
    return i2 || (i2 = new u()), i2.subVectors(t2, s2), i2;
  }
  static distance(t2, s2) {
    return t2.distanceTo(s2);
  }
  static negate(t2, s2) {
    return s2 || (s2 = new u()), s2.copy(t2), s2.negate(), s2;
  }
  static multiplyComponents(t2, s2, i2) {
    return i2 || (i2 = new u()), i2.multiplyVectors(t2, s2), i2;
  }
  static magnitude(t2) {
    return t2.length();
  }
  static equalsEpsilon(t2, s2, i2, e2) {
    return t2 === s2 || J(t2) && J(s2) && st.equalsEpsilon(t2.x, s2.x, i2, e2) && st.equalsEpsilon(t2.y, s2.y, i2, e2) && st.equalsEpsilon(t2.z, s2.z, i2, e2);
  }
  static fromCartesian4(t2, s2) {
    return s2 || (s2 = new u()), s2.set(t2.x, t2.y, t2.z), s2;
  }
  static fromElements(t2, s2, i2, e2) {
    return e2 || (e2 = new u()), e2.set(t2, s2, i2), e2;
  }
  static fromRadians(t2, s2, i2, e2, a2) {
    i2 = $(i2, 0);
    const n2 = J(e2) ? e2.radiiSquared : ut, r2 = Math.cos(s2);
    ct.x = r2 * Math.cos(t2), ct.y = r2 * Math.sin(t2), ct.z = Math.sin(s2), ct = __t.normalize(ct, ct), __t.multiplyComponents(n2, ct, lt);
    const h2 = Math.sqrt(__t.dot(ct, lt));
    return lt = __t.divideByScalar(lt, h2, lt), ct = __t.multiplyByScalar(ct, i2, ct), J(a2) || (a2 = new u()), __t.add(lt, ct, a2);
  }
  static angleBetween(t2, s2) {
    __t.normalize(t2, dt), __t.normalize(s2, mt);
    const i2 = __t.dot(dt, mt), e2 = __t.magnitude(__t.cross(dt, mt, dt));
    return Math.atan2(e2, i2);
  }
  static fromDegrees(t2, s2, i2, e2, a2) {
    return t2 = st.toRadians(t2), s2 = st.toRadians(s2), __t.fromRadians(t2, s2, i2, e2, a2);
  }
};
let _t = __t;
__publicField(_t, "ZERO", Object.freeze(new u()));
__publicField(_t, "UNIT_X", Object.freeze(new u(1, 0, 0)));
__publicField(_t, "UNIT_Y", Object.freeze(new u(0, 1, 0)));
__publicField(_t, "UNIT_Z", Object.freeze(new u(0, 0, 1)));
__publicField(_t, "abs", function(t2, s2) {
  return s2.x = Math.abs(t2.x), s2.y = Math.abs(t2.y), s2.z = Math.abs(t2.z), s2;
});
__publicField(_t, "mostOrthogonalAxis", function(t2, s2) {
  const i2 = __t.normalize(t2, ot);
  return __t.abs(i2, i2), s2 = i2.x <= i2.y ? i2.x <= i2.z ? __t.clone(__t.UNIT_X, s2) : __t.clone(__t.UNIT_Z, s2) : i2.y <= i2.z ? __t.clone(__t.UNIT_Y, s2) : __t.clone(__t.UNIT_Z, s2);
});
const ft = { clipTriangleAtAxisAlignedThreshold: function(t2, s2, i2, e2, a2, n2) {
  if (!ht(t2))
    throw new tt("threshold is required.");
  if (!ht(s2))
    throw new tt("keepAbove is required.");
  if (!ht(i2))
    throw new tt("u0 is required.");
  if (!ht(e2))
    throw new tt("u1 is required.");
  if (!ht(a2))
    throw new tt("u2 is required.");
  let r2, h2, o2;
  ht(n2) ? n2.length = 0 : n2 = [], s2 ? (r2 = i2 < t2, h2 = e2 < t2, o2 = a2 < t2) : (r2 = i2 > t2, h2 = e2 > t2, o2 = a2 > t2);
  const c2 = r2 + h2 + o2;
  let l2, u2, d2, m2, _2, f2;
  return 1 === c2 ? r2 ? (l2 = (t2 - i2) / (e2 - i2), u2 = (t2 - i2) / (a2 - i2), n2.push(1), n2.push(2), 1 !== u2 && (n2.push(-1), n2.push(0), n2.push(2), n2.push(u2)), 1 !== l2 && (n2.push(-1), n2.push(0), n2.push(1), n2.push(l2))) : h2 ? (d2 = (t2 - e2) / (a2 - e2), m2 = (t2 - e2) / (i2 - e2), n2.push(2), n2.push(0), 1 !== m2 && (n2.push(-1), n2.push(1), n2.push(0), n2.push(m2)), 1 !== d2 && (n2.push(-1), n2.push(1), n2.push(2), n2.push(d2))) : o2 && (_2 = (t2 - a2) / (i2 - a2), f2 = (t2 - a2) / (e2 - a2), n2.push(0), n2.push(1), 1 !== f2 && (n2.push(-1), n2.push(2), n2.push(1), n2.push(f2)), 1 !== _2 && (n2.push(-1), n2.push(2), n2.push(0), n2.push(_2))) : 2 === c2 ? r2 || i2 === t2 ? h2 || e2 === t2 ? o2 || a2 === t2 || (u2 = (t2 - i2) / (a2 - i2), d2 = (t2 - e2) / (a2 - e2), n2.push(2), n2.push(-1), n2.push(0), n2.push(2), n2.push(u2), n2.push(-1), n2.push(1), n2.push(2), n2.push(d2)) : (f2 = (t2 - a2) / (e2 - a2), l2 = (t2 - i2) / (e2 - i2), n2.push(1), n2.push(-1), n2.push(2), n2.push(1), n2.push(f2), n2.push(-1), n2.push(0), n2.push(1), n2.push(l2)) : (m2 = (t2 - e2) / (i2 - e2), _2 = (t2 - a2) / (i2 - a2), n2.push(0), n2.push(-1), n2.push(1), n2.push(0), n2.push(m2), n2.push(-1), n2.push(2), n2.push(0), n2.push(_2)) : 3 !== c2 && (n2.push(0), n2.push(1), n2.push(2)), n2;
}, computeBarycentricCoordinates: function(t2, s2, i2, e2, a2, n2, r2, h2, o2) {
  if (!ht(t2))
    throw new tt("x is required.");
  if (!ht(s2))
    throw new tt("y is required.");
  if (!ht(i2))
    throw new tt("x1 is required.");
  if (!ht(e2))
    throw new tt("y1 is required.");
  if (!ht(a2))
    throw new tt("x2 is required.");
  if (!ht(n2))
    throw new tt("y2 is required.");
  if (!ht(r2))
    throw new tt("x3 is required.");
  if (!ht(h2))
    throw new tt("y3 is required.");
  const c2 = i2 - r2, l2 = r2 - a2, d2 = n2 - h2, m2 = e2 - h2, _2 = 1 / (d2 * c2 + l2 * m2), f2 = s2 - h2, y2 = t2 - r2, p2 = (d2 * y2 + l2 * f2) * _2, g2 = (-m2 * y2 + c2 * f2) * _2, M2 = 1 - p2 - g2;
  return ht(o2) ? (o2.x = p2, o2.y = g2, o2.z = M2, o2) : new u(p2, g2, M2);
}, computeLineSegmentLineSegmentIntersection: function(t2, s2, i2, e2, a2, n2, r2, h2, o2) {
  const l2 = (h2 - n2) * (i2 - t2) - (r2 - a2) * (e2 - s2);
  if (0 === l2)
    return;
  const u2 = ((r2 - a2) * (s2 - n2) - (h2 - n2) * (t2 - a2)) / l2, d2 = ((i2 - t2) * (s2 - n2) - (e2 - s2) * (t2 - a2)) / l2;
  return u2 >= 0 && u2 <= 1 && d2 >= 0 && d2 <= 1 ? (ht(o2) || (o2 = new c()), o2.x = t2 + u2 * (i2 - t2), o2.y = s2 + u2 * (e2 - s2), o2) : void 0;
} }, yt = { UNSIGNED_BYTE: 5121, UNSIGNED_SHORT: 5123, UNSIGNED_INT: 5125, getSizeInBytes: function(t2) {
  switch (t2) {
    case yt.UNSIGNED_BYTE:
      return Uint8Array.BYTES_PER_ELEMENT;
    case yt.UNSIGNED_SHORT:
      return Uint16Array.BYTES_PER_ELEMENT;
    case yt.UNSIGNED_INT:
      return Uint32Array.BYTES_PER_ELEMENT;
  }
  throw new tt("indexDatatype is required and must be a valid IndexDatatype constant.");
}, fromSizeInBytes: function(t2) {
  switch (t2) {
    case 2:
      return yt.UNSIGNED_SHORT;
    case 4:
      return yt.UNSIGNED_INT;
    case 1:
      return yt.UNSIGNED_BYTE;
    default:
      throw new tt("Size in bytes cannot be mapped to an IndexDatatype");
  }
}, validate: function(t2) {
  return ht(t2) && (t2 === yt.UNSIGNED_BYTE || t2 === yt.UNSIGNED_SHORT || t2 === yt.UNSIGNED_INT);
}, createTypedArray: function(t2, s2) {
  if (!ht(t2))
    throw new tt("numberOfVertices is required.");
  return t2 >= st.SIXTY_FOUR_KILOBYTES ? new Uint32Array(s2) : new Uint16Array(s2);
}, createTypedArrayFromArrayBuffer: function(t2, s2, i2, e2) {
  if (!ht(t2))
    throw new tt("numberOfVertices is required.");
  if (!ht(s2))
    throw new tt("sourceArray is required.");
  if (!ht(i2))
    throw new tt("byteOffset is required.");
  return t2 >= st.SIXTY_FOUR_KILOBYTES ? new Uint32Array(s2, i2, e2) : new Uint16Array(s2, i2, e2);
}, fromTypedArray: function(t2) {
  if (t2 instanceof Uint8Array)
    return yt.UNSIGNED_BYTE;
  if (t2 instanceof Uint16Array)
    return yt.UNSIGNED_SHORT;
  if (t2 instanceof Uint32Array)
    return yt.UNSIGNED_INT;
  throw new tt("array must be a Uint8Array, Uint16Array, or Uint32Array.");
} };
var pt = Object.freeze(yt);
const gt = "EPSG:4326", Mt = "EPSG:3857", xt = "EPSG:4978", wt = "BD:MERCATOR", St = "SCREEN_PIXEL", Et = new p(new u(-180, -90, -100), new u(180, 90, 100));
Et.isDefault = true, Object.freeze(Et), Object.freeze(Et.min), Object.freeze(Et.max);
const bt = new u(), Pt = new u(), vt = 1, At = 2, Gt = 3;
class Ct {
  constructor() {
    __publicField(this, "isProjection", true);
    __publicField(this, "isGeo", false);
    __publicField(this, "isAxisAligned", false);
    __publicField(this, "projectBoundingBoxMethod", vt);
  }
  projectCoordinate(t2, s2) {
    throw new Error("projectCoordinate() must be implemented in derived classes");
  }
  unprojectCoordinate(t2, s2) {
    throw new Error("unprojectCoordinate() must be implemented in derived classes");
  }
  geoBoxToProjectedBox(t2, s2, i2 = true) {
    if (s2 || (s2 = new p()), this.projectBoundingBoxMethod === vt)
      this.projectCoordinate(t2.min, s2.min, i2), this.projectCoordinate(t2.max, s2.max, i2);
    else if (this.projectBoundingBoxMethod === At || this.projectBoundingBoxMethod === Gt) {
      let { x: e2, y: a2, z: n2 } = t2.min, { x: r2, y: h2, z: o2 } = t2.max;
      bt.set(e2, a2, n2), this.projectCoordinate(bt, Pt, i2), s2.expandByPoint(Pt), bt.set(r2, h2, o2), this.projectCoordinate(bt, Pt, i2), s2.expandByPoint(Pt), bt.set(e2, h2, 0), this.projectCoordinate(bt, Pt, i2), s2.expandByPoint(Pt), bt.set(r2, a2, 0), this.projectCoordinate(bt, Pt, i2), s2.expandByPoint(Pt), this.projectBoundingBoxMethod === Gt && a2 < 0 && h2 > 0 && (bt.set(e2, 0, 0), this.projectCoordinate(bt, Pt, i2), s2.expandByPoint(Pt), bt.set(r2, 0, 0), this.projectCoordinate(bt, Pt, i2), s2.expandByPoint(Pt));
    }
    return s2;
  }
  getGeodeticSurfaceNormal(t2, s2) {
    return s2 || (s2 = new u()), s2.set(0, 0, 1), s2;
  }
  getProjectedSurfaceNormal(t2, s2) {
    return s2 || (s2 = new u()), s2.set(0, 0, 1), s2;
  }
  projectedBoxToGeoBox(t2, s2, i2 = true) {
    return s2 || (s2 = new p()), this.unprojectCoordinate(t2.min, s2.min, i2), this.unprojectCoordinate(t2.max, s2.max, i2), s2;
  }
  equals(t2) {
    return !!t2 && this.name === t2.name;
  }
  localFrameToFixedFrame(t2, s2) {
    return s2 || (s2 = new D()), s2.identity(), s2.setPosition(t2), s2;
  }
  get geoBoundingBox() {
    return this._geoBoundingBox || Et;
  }
  get projectedBoundingBox() {
    if (!this._projectedBoundingBox) {
      const t2 = this.geoBoundingBox;
      this._projectedBoundingBox = this.geoBoxToProjectedBox(t2, null, false);
    }
    return this._projectedBoundingBox;
  }
}
const Nt = (t2, s2, i2, e2, a2 = false) => {
  if (Math.abs(t2) < e2)
    return s2;
  const n2 = t2 > 0 ? 1 : -1;
  if (a2)
    return n2 * i2;
  return n2 * (i2 * (1 + (Math.abs(t2) - e2) / e2));
}, It = (t2, s2, i2, e2, a2 = false) => {
  if (Math.abs(t2) < i2)
    return s2;
  const n2 = t2 > 0 ? 1 : -1;
  if (a2)
    return n2 * e2;
  return n2 * (e2 * (1 + (Math.abs(t2) - i2) / i2));
}, zt = Math.PI / 180, Tt = 6378137, Ot = 20037508, Rt = 180 / Math.PI, qt = 85.0511287798;
const Lt = [0, 0], Bt = [0, 0];
class kt extends Ct {
  constructor() {
    super(...arguments);
    __publicField(this, "name", Mt);
    __publicField(this, "isAxisAligned", true);
  }
  projectCoordinate(t2, s2, i2 = false) {
    Bt[0] = t2.x, Bt[1] = t2.y, i2 || (Bt[0] < -180 && (Bt[0] = -180), Bt[0] > 180 && (Bt[0] = 180), Bt[1] < -85.0511287798 && (Bt[1] = -85.0511287798), Bt[1] > 85.0511287798 && (Bt[1] = 85.0511287798));
    const e2 = function(t3, s3 = null, i3 = false) {
      var e3, a2 = Math.abs(t3[0]) <= 180 ? t3[0] : t3[0] - 360 * ((e3 = t3[0]) < 0 ? -1 : e3 > 0 ? 1 : 0);
      const n2 = s3 || [0, 0];
      return n2[0] = Tt * a2 * zt, n2[1] = Tt * Math.log(Math.tan(0.25 * Math.PI + 0.5 * t3[1] * zt)), i3 ? (n2[0] = It(t3[0], n2[0], 180, Ot), n2[1] = It(t3[1], n2[1], qt, Ot)) : (n2[0] > Ot && (n2[0] = Ot), n2[0] < -20037508 && (n2[0] = -20037508), n2[1] > Ot && (n2[1] = Ot), n2[1] < -20037508 && (n2[1] = -20037508)), n2;
    }(Bt, Lt, i2);
    return s2 || (s2 = new u()), s2.x = e2[0], s2.y = e2[1], s2.z = t2.z, s2;
  }
  unprojectCoordinate(t2, s2, i2 = false) {
    const e2 = function(t3, s3, i3 = false) {
      const e3 = s3 || [0, 0];
      return e3[0] = t3[0] * Rt / Tt, e3[1] = (0.5 * Math.PI - 2 * Math.atan(Math.exp(-t3[1] / Tt))) * Rt, i3 && (e3[0] = Nt(t3[0], e3[0], 180, Ot), e3[1] = Nt(t3[1], e3[1], qt, Ot)), e3;
    }([t2.x, t2.y], Lt, i2);
    return s2 || (s2 = new u()), s2.x = e2[0], s2.y = e2[1], s2.z = t2.z, s2;
  }
}
const Dt = new u(), Ut = new u();
function jt(t2, s2, i2, e2, a2) {
  const n2 = t2.x, r2 = t2.y, h2 = t2.z, o2 = s2.x, c2 = s2.y, l2 = s2.z, d2 = n2 * n2 * o2 * o2, m2 = r2 * r2 * c2 * c2, _2 = h2 * h2 * l2 * l2, f2 = d2 + m2 + _2, y2 = Math.sqrt(1 / f2), p2 = Dt.copy(t2).multiplyScalar(y2);
  if (f2 < e2)
    return a2 || (a2 = new u()), isFinite(y2) ? a2.copy(p2) : void 0;
  const g2 = i2.x, M2 = i2.y, x2 = i2.z, w2 = Ut;
  w2.x = p2.x * g2 * 2, w2.y = p2.y * M2 * 2, w2.z = p2.z * x2 * 2;
  let S2, E2, b2, P2, v2, A2, G2, C2, N2, I2, z2, T2 = (1 - y2) * t2.length() / (0.5 * w2.length()), O2 = 0;
  do {
    T2 -= O2, b2 = 1 / (1 + T2 * g2), P2 = 1 / (1 + T2 * M2), v2 = 1 / (1 + T2 * x2), A2 = b2 * b2, G2 = P2 * P2, C2 = v2 * v2, N2 = A2 * b2, I2 = G2 * P2, z2 = C2 * v2, S2 = d2 * A2 + m2 * G2 + _2 * C2 - 1, E2 = d2 * N2 * g2 + m2 * I2 * M2 + _2 * z2 * x2, O2 = S2 / (-2 * E2);
  } while (Math.abs(S2) > 1e-12);
  return a2 ? (a2.x = n2 * b2, a2.y = r2 * P2, a2.z = h2 * v2, a2) : new u(n2 * b2, r2 * P2, h2 * v2);
}
const Ft = new u(), Vt = new u();
class Wt {
  constructor(t2, s2, i2) {
    this._radii = new u(t2, s2, i2), this._radiiSquared = new u(t2 * t2, s2 * s2, i2 * i2), this._radiiToTheFourth = new u(t2 * t2 * t2 * t2, s2 * s2 * s2 * s2, i2 * i2 * i2 * i2), this._oneOverRadii = new u(0 === t2 ? 0 : 1 / t2, 0 === s2 ? 0 : 1 / s2, 0 === i2 ? 0 : 1 / i2), this._oneOverRadiiSquared = new u(0 === t2 ? 0 : 1 / (t2 * t2), 0 === s2 ? 0 : 1 / (s2 * s2), 0 === i2 ? 0 : 1 / (i2 * i2)), this._minimumRadius = Math.min(t2, s2, i2), this._maximumRadius = Math.max(t2, s2, i2), this._centerToleranceSquared = 0.1, 0 !== this._radiiSquared.z && (this._squaredXOverSquaredZ = this._radiiSquared.x / this._radiiSquared.z);
  }
  static fromCartesian3(t2) {
    return new Wt(t2.x, t2.y, t2.z);
  }
  geodeticSurfaceNormalCartographic(t2, s2) {
    s2 || (s2 = new u());
    const i2 = t2.x, e2 = t2.y, a2 = Math.cos(e2), n2 = a2 * Math.cos(i2), r2 = a2 * Math.sin(i2), h2 = Math.sin(e2);
    return s2.set(n2, r2, h2), s2.normalize(), s2;
  }
  cartographicDegreeToCartesian(t2, s2) {
    return Ft.set(o.degToRad(t2.x), o.degToRad(t2.y), t2.z), this.cartographicToCartesian(Ft, s2);
  }
  cartographicToCartesian(t2, s2) {
    const i2 = this.geodeticSurfaceNormalCartographic(t2);
    s2 || (s2 = new u()), s2.multiplyVectors(this._radiiSquared, i2);
    const e2 = Math.sqrt(i2.clone().dot(s2));
    return s2.divideScalar(e2), i2.multiplyScalar(t2.z), s2.add(i2), s2;
  }
  cartesianToCartographicDegree(t2, s2) {
    const i2 = this.cartesianToCartographic(t2, s2);
    if (i2)
      return (s2 = i2).x = o.radToDeg(s2.x), s2.y = o.radToDeg(s2.y), s2;
  }
  scaleToGeodeticSurface(t2, s2) {
    return jt(t2, this._oneOverRadii, this._oneOverRadiiSquared, this._centerToleranceSquared, s2);
  }
  scaleToGeocentricSurface(t2, s2) {
    s2 || (s2 = new u());
    const i2 = t2.x, e2 = t2.y, a2 = t2.z, n2 = this._oneOverRadiiSquared, r2 = 1 / Math.sqrt(i2 * i2 * n2.x + e2 * e2 * n2.y + a2 * a2 * n2.z);
    return s2.copy(t2).multiplyScalar(r2);
  }
  cartesianToCartographic(t2, s2) {
    const i2 = this.scaleToGeodeticSurface(t2, Vt);
    if (!i2)
      return;
    const e2 = this.geodeticSurfaceNormal(i2), a2 = t2.clone();
    a2.sub(i2);
    const n2 = Math.atan2(e2.y, e2.x), r2 = Math.asin(e2.z), h2 = Math.sign(a2.dot(t2)) * a2.length();
    return s2 || (s2 = new u()), s2.set(n2, r2, h2), s2;
  }
  geodeticSurfaceNormal(t2, s2) {
    return J(s2) || (s2 = new u()), s2.multiplyVectors(t2, this._oneOverRadiiSquared), s2.normalize(), s2;
  }
  getSurfaceNormalIntersectionWithZAxis(t2, s2, i2) {
    s2 = $(s2, 0);
    const e2 = this._squaredXOverSquaredZ;
    if (J(i2) || (i2 = new u()), i2.x = 0, i2.y = 0, i2.z = t2.z * (1 - e2), !(Math.abs(i2.z) >= this._radii.z - s2))
      return i2;
  }
  transformPositionToScaledSpace(t2, s2) {
    return _t.multiplyComponents(t2, this._oneOverRadii, s2);
  }
  static clone(t2, s2) {
    if (!t2)
      return;
    const i2 = t2._radii;
    return s2 ? (_t.clone(i2, s2._radii), _t.clone(t2._radiiSquared, s2._radiiSquared), _t.clone(t2._radiiToTheFourth, s2._radiiToTheFourth), _t.clone(t2._oneOverRadii, s2._oneOverRadii), _t.clone(t2._oneOverRadiiSquared, s2._oneOverRadiiSquared), s2._minimumRadius = t2._minimumRadius, s2._maximumRadius = t2._maximumRadius, s2._centerToleranceSquared = t2._centerToleranceSquared, s2) : new Wt(i2.x, i2.y, i2.z);
  }
  get radii() {
    return this._radii;
  }
  get radiiSquared() {
    return this._radiiSquared;
  }
  get radiiToTheFourth() {
    return this.radiiToTheFourth;
  }
  get oneOverRadii() {
    return this._oneOverRadii;
  }
  get oneOverRadiiSquared() {
    return this._oneOverRadiiSquared;
  }
  get maximumRadius() {
    return this._maximumRadius;
  }
  get minimumRadius() {
    return this._minimumRadius;
  }
}
Wt.WGS84 = Object.freeze(new Wt(6378137, 6378137, 6356752314245179e-9));
class Ht {
  static fromQuaternion(t2, s2) {
    const i2 = t2.x * t2.x, e2 = t2.x * t2.y, a2 = t2.x * t2.z, n2 = t2.x * t2.w, r2 = t2.y * t2.y, h2 = t2.y * t2.z, o2 = t2.y * t2.w, c2 = t2.z * t2.z, l2 = t2.z * t2.w, u2 = t2.w * t2.w, d2 = i2 - r2 - c2 + u2, m2 = 2 * (e2 - l2), f2 = 2 * (a2 + o2), y2 = 2 * (e2 + l2), p2 = -i2 + r2 - c2 + u2, g2 = 2 * (h2 - n2), M2 = 2 * (a2 - o2), x2 = 2 * (h2 + n2), w2 = -i2 - r2 + c2 + u2;
    return s2 || (s2 = new _()), s2.set(d2, m2, f2, y2, p2, g2, M2, x2, w2), s2;
  }
  static getColumn(t2, s2, i2) {
    const e2 = t2.elements, a2 = 3 * s2, n2 = e2[a2], r2 = e2[a2 + 1], h2 = e2[a2 + 2];
    return i2.x = n2, i2.y = r2, i2.z = h2, i2;
  }
  static multiplyByVector(t2, s2, i2) {
    return i2 || (i2 = new u()), i2.copy(s2), i2.applyMatrix3(t2), i2;
  }
  static multiplyByScale(t2, s2, i2) {
    i2 || (i2 = new _());
    const e2 = i2.elements, a2 = t2.elements;
    return e2[0] = a2[0] * s2.x, e2[1] = a2[1] * s2.x, e2[2] = a2[2] * s2.x, e2[3] = a2[3] * s2.y, e2[4] = a2[4] * s2.y, e2[5] = a2[5] * s2.y, e2[6] = a2[6] * s2.z, e2[7] = a2[7] * s2.z, e2[8] = a2[8] * s2.z, i2;
  }
  static transpose(t2, s2) {
    return s2 || (s2 = new _()), s2.copy(t2).transpose(), s2;
  }
  static fromScale(t2, s2) {
    s2 || (s2 = new _());
    const i2 = s2.elements;
    return i2[0] = t2.x, i2[1] = 0, i2[2] = 0, i2[3] = 0, i2[4] = t2.y, i2[5] = 0, i2[6] = 0, i2[7] = 0, i2[8] = t2.z, s2;
  }
  static multiply(t2, s2, i2) {
    i2 || (i2 = new _());
    const e2 = t2.elements, a2 = s2.elements, n2 = i2.elements, r2 = e2[0], h2 = e2[3], o2 = e2[6], c2 = e2[1], l2 = e2[4], u2 = e2[7], d2 = e2[2], m2 = e2[5], f2 = e2[8], y2 = a2[0], p2 = a2[3], g2 = a2[6], M2 = a2[1], x2 = a2[4], w2 = a2[7], S2 = a2[2], E2 = a2[5], b2 = a2[8];
    return n2[0] = r2 * y2 + h2 * M2 + o2 * S2, n2[3] = r2 * p2 + h2 * x2 + o2 * E2, n2[6] = r2 * g2 + h2 * w2 + o2 * b2, n2[1] = c2 * y2 + l2 * M2 + u2 * S2, n2[4] = c2 * p2 + l2 * x2 + u2 * E2, n2[7] = c2 * g2 + l2 * w2 + u2 * b2, n2[2] = d2 * y2 + m2 * M2 + f2 * S2, n2[5] = d2 * p2 + m2 * x2 + f2 * E2, n2[8] = d2 * g2 + m2 * w2 + f2 * b2, i2;
  }
  static clone(t2, s2) {
    if (J(t2))
      return J(s2) ? (s2.clone(t2), s2) : new _(t2[0], t2[3], t2[6], t2[1], t2[4], t2[7], t2[2], t2[5], t2[8]);
  }
  static setColumn(t2, s2, i2, e2) {
    const a2 = (e2 = Ht.clone(t2, e2)).elements, n2 = 3 * s2;
    return a2[n2] = i2.x, a2[n2 + 1] = i2.y, a2[n2 + 2] = i2.z, e2;
  }
}
Ht.ZERO = _.ZERO = Object.freeze(new _(0, 0, 0, 0, 0, 0, 0, 0, 0)), Ht.COLUMN0ROW0 = 0, Ht.COLUMN0ROW1 = 1, Ht.COLUMN0ROW2 = 2, Ht.COLUMN1ROW0 = 3, Ht.COLUMN1ROW1 = 4, Ht.COLUMN1ROW2 = 5, Ht.COLUMN2ROW0 = 6, Ht.COLUMN2ROW1 = 7, Ht.COLUMN2ROW2 = 8;
const Xt = new u(), Yt = new u(), Zt = new u(), Qt = new u(1 / 6378137, 1 / 6378137, 1 / 6356752314245179e-9), Kt = new u(1 / 40680631590769, 1 / 40680631590769, 1 / 40408299984661445e-3), Jt = st.EPSILON1;
const _$t = class {
  static fromRadians(t2, s2, i2, e2) {
    return i2 = $(i2, 0), J(e2) ? (e2.x = t2, e2.y = s2, e2.z = i2, e2) : new u(t2, s2, i2);
  }
  static fromDegrees(t2, s2, i2, e2) {
    return t2 = st.toRadians(t2), s2 = st.toRadians(s2), _$t.fromRadians(t2, s2, i2, e2);
  }
  static fromCartesian(t2, s2, i2) {
    const e2 = J(s2) ? s2.oneOverRadii : Qt, a2 = J(s2) ? s2.oneOverRadiiSquared : Kt, n2 = jt(t2, e2, a2, J(s2) ? s2._centerToleranceSquared : Jt, Yt);
    if (!J(n2))
      return;
    let r2 = _t.multiplyComponents(n2, a2, Xt);
    r2 = _t.normalize(r2, r2);
    const h2 = _t.subtract(t2, n2, Zt), o2 = Math.atan2(r2.y, r2.x), c2 = Math.asin(r2.z), l2 = st.sign(_t.dot(h2, t2)) * _t.magnitude(h2);
    return J(i2) ? (i2.x = o2, i2.y = c2, i2.z = l2, i2) : new u(o2, c2, l2);
  }
  static toCartesian(t2, s2, i2) {
    return _t.fromRadians(t2.x, t2.y, t2.z, s2, i2);
  }
  static clone(t2, s2) {
    if (J(t2))
      return J(s2) ? (s2.x = t2.x, s2.y = t2.y, s2.z = t2.z, s2) : new u(t2.x, t2.y, t2.z);
  }
  static equals(t2, s2) {
    return t2 === s2 || J(t2) && J(s2) && t2.x === s2.x && t2.y === s2.y && t2.z === s2.z;
  }
  static equalsEpsilon(t2, s2, i2) {
    return i2 = $(i2, 0), t2 === s2 || J(t2) && J(s2) && st.equalsEpsilon(t2.x, s2.x, i2) && st.equalsEpsilon(t2.y, s2.y, i2) && st.equalsEpsilon(t2.z, s2.z, i2);
  }
};
let $t = _$t;
__publicField($t, "fromRadians", function(t2, s2, i2, e2) {
  return i2 = $(i2, 0), J(e2) ? (e2.x = t2, e2.y = s2, e2.z = i2, e2) : new u(t2, s2, i2);
});
__publicField($t, "fromDegrees", function(t2, s2, i2, e2) {
  return t2 = st.toRadians(t2), s2 = st.toRadians(s2), _$t.fromRadians(t2, s2, i2, e2);
});
__publicField($t, "ZERO", Object.freeze(new u(0, 0, 0)));
const ts = new c(), ss = new c();
const _is = class {
  static clone(t2, s2) {
    return s2.copy(t2), s2;
  }
  static fromElements(t2, s2, i2) {
    return i2 || (i2 = new c()), i2.set(t2, s2), i2;
  }
  static lerp(t2, s2, i2, e2) {
    return e2 || (e2 = new c()), e2.lerpVectors(t2, s2, i2), e2;
  }
  static equalsEpsilon(t2, s2, i2, e2) {
    return t2 === s2 || J(t2) && J(s2) && st.equalsEpsilon(t2.x, s2.x, i2, e2) && st.equalsEpsilon(t2.y, s2.y, i2, e2);
  }
  static equals(t2, s2) {
    return t2.equals(s2);
  }
  static dot(t2, s2) {
    return t2.dot(s2);
  }
  static normalize(t2, s2) {
    return t2 === s2 ? (t2.normalize(), t2) : (s2.copy(t2), s2.normalize(), s2);
  }
  static add(t2, s2, i2) {
    return i2 || (i2 = new c()), i2.addVectors(t2, s2);
  }
  static multiplyByScalar(t2, s2, i2) {
    return i2 || (i2 = new c()), i2.copy(t2).multiplyScalar(s2), i2;
  }
  static subtract(t2, s2, i2) {
    return i2 || (i2 = new c()), i2.subVectors(t2, s2), i2;
  }
  static distance(t2, s2) {
    return t2.distanceTo(s2);
  }
  static angleBetween(t2, s2) {
    return _is.normalize(t2, ts), _is.normalize(s2, ss), st.acosClamped(_is.dot(ts, ss));
  }
};
let is = _is;
__publicField(is, "ZERO", new c());
is.fromCartesian3 = is.clone, is.fromCartesian4 = is.clone;
let es = new l(), as = new l(), ns = new l(), rs = new l(), hs = new u();
class os {
  static fromAxisAngle(t2, s2, i2) {
    return i2 || (i2 = new l()), hs.copy(t2), hs.normalize(), i2.setFromAxisAngle(hs, s2), i2;
  }
  static multiply(t2, s2, i2) {
    return i2 || (i2 = new l()), i2.multiplyQuaternions(t2, s2), i2;
  }
  static fromHeadingPitchRoll(t2, s2) {
    return rs = os.fromAxisAngle(_t.UNIT_X, t2.roll, es), ns = os.fromAxisAngle(_t.UNIT_Y, -t2.pitch, s2), s2 = os.multiply(ns, rs, ns), as = os.fromAxisAngle(_t.UNIT_Z, -t2.heading, es), os.multiply(as, s2, s2);
  }
}
class cs {
  static clone(t2, s2) {
    return s2.copy(t2), s2;
  }
  static inverseTransformation(t2, s2) {
    return s2.copy(t2).invert(), s2;
  }
  static multiplyByPoint(t2, s2, i2) {
    const e2 = t2.elements, a2 = s2.x, n2 = s2.y, r2 = s2.z, h2 = e2[0] * a2 + e2[4] * n2 + e2[8] * r2 + e2[12], o2 = e2[1] * a2 + e2[5] * n2 + e2[9] * r2 + e2[13], c2 = e2[2] * a2 + e2[6] * n2 + e2[10] * r2 + e2[14];
    return i2.x = h2, i2.y = o2, i2.z = c2, i2;
  }
  static multiplyByPointAsVector(t2, s2, i2) {
    const e2 = t2.elements, a2 = s2.x, n2 = s2.y, r2 = s2.z, h2 = e2[0] * a2 + e2[4] * n2 + e2[8] * r2, o2 = e2[1] * a2 + e2[5] * n2 + e2[9] * r2, c2 = e2[2] * a2 + e2[6] * n2 + e2[10] * r2;
    return i2.x = h2, i2.y = o2, i2.z = c2, i2;
  }
  static computeViewportTransformation(t2, s2, i2, e2) {
    J(e2) || (e2 = new D()), t2 = $(t2, $.EMPTY_OBJECT);
    const a2 = $(t2.x, 0), n2 = $(t2.y, 0), r2 = $(t2.width, 0), h2 = $(t2.height, 0);
    s2 = $(s2, 0);
    const o2 = 0.5 * r2, c2 = 0.5 * h2, l2 = 0.5 * ((i2 = $(i2, 1)) - s2), u2 = o2, d2 = c2, m2 = l2, _2 = a2 + o2, f2 = n2 + c2, y2 = s2 + l2, p2 = e2.elements;
    return p2[0] = u2, p2[1] = 0, p2[2] = 0, p2[3] = 0, p2[4] = 0, p2[5] = d2, p2[6] = 0, p2[7] = 0, p2[8] = 0, p2[9] = 0, p2[10] = m2, p2[11] = 0, p2[12] = _2, p2[13] = f2, p2[14] = y2, p2[15] = 1, e2;
  }
  static equals(t2, s2) {
    return t2.equals(s2);
  }
  static multiplyByVector(t2, s2, i2) {
    return i2 || (i2 = new y()), i2.copy(s2), i2.applyMatrix4(t2), i2;
  }
  static getColumn(t2, s2, i2) {
    const e2 = t2.elements, a2 = 4 * s2, n2 = e2[a2], r2 = e2[a2 + 1], h2 = e2[a2 + 2], o2 = e2[a2 + 3];
    return i2.x = n2, i2.y = r2, i2.z = h2, i2.w = o2, i2;
  }
  static fromTranslationQuaternionRotationScale(t2, s2, i2, e2) {
    e2 || (e2 = new D());
    const a2 = i2.x, n2 = i2.y, r2 = i2.z, h2 = s2.x * s2.x, o2 = s2.x * s2.y, c2 = s2.x * s2.z, l2 = s2.x * s2.w, u2 = s2.y * s2.y, d2 = s2.y * s2.z, m2 = s2.y * s2.w, _2 = s2.z * s2.z, f2 = s2.z * s2.w, y2 = s2.w * s2.w, p2 = h2 - u2 - _2 + y2, g2 = 2 * (o2 - f2), M2 = 2 * (c2 + m2), x2 = 2 * (o2 + f2), w2 = -h2 + u2 - _2 + y2, S2 = 2 * (d2 - l2), E2 = 2 * (c2 - m2), b2 = 2 * (d2 + l2), P2 = -h2 - u2 + _2 + y2, v2 = e2.elements;
    return v2[0] = p2 * a2, v2[1] = x2 * a2, v2[2] = E2 * a2, v2[3] = 0, v2[4] = g2 * n2, v2[5] = w2 * n2, v2[6] = b2 * n2, v2[7] = 0, v2[8] = M2 * r2, v2[9] = S2 * r2, v2[10] = P2 * r2, v2[11] = 0, v2[12] = t2.x, v2[13] = t2.y, v2[14] = t2.z, v2[15] = 1, e2;
  }
}
__publicField(cs, "IDENTITY", Object.freeze(new D()));
cs.ZERO = Object.freeze(new D(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
const ls = {}, us = new l(), ds = new u(1, 1, 1), ms = new D(), _s = { up: { south: "east", north: "west", west: "south", east: "north" }, down: { south: "west", north: "east", west: "north", east: "south" }, south: { up: "west", down: "east", west: "down", east: "up" }, north: { up: "east", down: "west", west: "up", east: "down" }, west: { up: "north", down: "south", north: "down", south: "up" }, east: { up: "south", down: "north", north: "up", south: "down" } };
let fs = { north: [-1, 0, 0], east: [0, 1, 0], up: [0, 0, 1], south: [1, 0, 0], west: [0, -1, 0], down: [0, 0, -1] }, ys = {}, ps = { east: new u(), north: new u(), up: new u(), west: new u(), south: new u(), down: new u() }, gs = new u(), Ms = new u(), xs = new u();
const ws = (t2) => void 0 !== t2, Ss = new u(), Es = new u(), bs = new u(), Ps = function(t2, s2, i2 = 0, e2) {
  const a2 = new u(40680631590769, 40680631590769, 40408299984661445e-3), n2 = Math.cos(s2);
  Es.x = n2 * Math.cos(t2), Es.y = n2 * Math.sin(t2), Es.z = Math.sin(s2), Es.normalize(), bs.multiplyVectors(a2, Es);
  const r2 = Math.sqrt(Es.dot(bs));
  return bs.divideScalar(r2), Es.multiplyScalar(i2), ws(e2) || (e2 = new u()), e2.addVectors(bs, Es);
};
function vs(t2, s2) {
  this.start = $(t2, 0), this.stop = $(s2, 0);
}
ls.lnglatToEcef = (t2, s2, i2 = 0, e2) => Ps(t2 * Math.PI / 180, s2 * Math.PI / 180, i2, e2), ls.radianToEcef = Ps, ls.localFrameToFixedFrameGenerator = function(t2, s2) {
  if (!_s.hasOwnProperty(t2) || !_s[t2].hasOwnProperty(s2))
    throw new Error("firstAxis and secondAxis must be east, north, up, west, south or down.");
  let i2, e2 = _s[t2][s2], a2 = t2 + s2;
  return ws(ys[a2]) ? i2 = ys[a2] : (i2 = function(i3, a3, n2) {
    if (!ws(i3))
      throw new Error("origin is required.");
    if (ws(n2) || (n2 = new D()), i3.equals(Ss))
      gs.fromArray(fs[t2]), Ms.fromArray(fs[s2]), xs.fromArray(fs[e2]);
    else if (Math.abs(i3.x) < 1e-14 && Math.abs(i3.y) < 1e-14) {
      let a4 = 0 === (r2 = +(r2 = i3.z)) ? r2 : r2 > 0 ? 1 : -1;
      gs.fromArray(fs[t2]), "east" !== t2 && "west" !== t2 && gs.multiplyScalar(a4), Ms.fromArray(fs[s2]), "east" !== s2 && "west" !== s2 && Ms.multiplyScalar(a4), xs.fromArray(fs[e2]), "east" !== e2 && "west" !== e2 && xs.multiplyScalar(a4);
    } else {
      (a3 = a3 || Wt.WGS84).geodeticSurfaceNormal(i3, ps.up);
      let n3 = ps.up, r3 = ps.east;
      r3.x = -i3.y, r3.y = i3.x, r3.z = 0, ps.east.copy(r3).normalize(), ps.north.crossVectors(n3, r3), ps.down.copy(ps.up).multiplyScalar(-1), ps.west.copy(ps.east).multiplyScalar(-1), ps.south.copy(ps.north).multiplyScalar(-1), gs = ps[t2], Ms = ps[s2], xs = ps[e2];
    }
    var r2;
    const h2 = n2.elements;
    return h2[0] = gs.x, h2[1] = gs.y, h2[2] = gs.z, h2[3] = 0, h2[4] = Ms.x, h2[5] = Ms.y, h2[6] = Ms.z, h2[7] = 0, h2[8] = xs.x, h2[9] = xs.y, h2[10] = xs.z, h2[11] = 0, h2[12] = i3.x, h2[13] = i3.y, h2[14] = i3.z, h2[15] = 1, n2;
  }, ys[a2] = i2), i2;
}, ls.eastNorthUpToFixedFrame = ls.localFrameToFixedFrameGenerator("east", "north"), ls.headingPitchRollToFixedFrame = function(t2, s2, i2, e2, a2) {
  e2 = e2 || ls.eastNorthUpToFixedFrame;
  const n2 = os.fromHeadingPitchRoll(s2, us), r2 = cs.fromTranslationQuaternionRotationScale(_t.ZERO, n2, ds, ms);
  return (a2 = e2(t2, i2, a2)).multiply(r2);
}, ls.northEastDownToFixedFrame = ls.localFrameToFixedFrameGenerator("north", "east"), ls.northUpEastToFixedFrame = ls.localFrameToFixedFrameGenerator("north", "up"), ls.northWestUpToFixedFrame = ls.localFrameToFixedFrameGenerator("north", "west");
var As = {};
function Gs(t2, s2, i2) {
  var e2 = t2 + s2;
  return st.sign(t2) !== st.sign(s2) && Math.abs(e2 / Math.max(Math.abs(t2), Math.abs(s2))) < i2 ? 0 : e2;
}
As.computeDiscriminant = function(t2, s2, i2) {
  if ("number" != typeof t2)
    throw new tt("a is a required number.");
  if ("number" != typeof s2)
    throw new tt("b is a required number.");
  if ("number" != typeof i2)
    throw new tt("c is a required number.");
  return s2 * s2 - 4 * t2 * i2;
}, As.computeRealRoots = function(t2, s2, i2) {
  if ("number" != typeof t2)
    throw new tt("a is a required number.");
  if ("number" != typeof s2)
    throw new tt("b is a required number.");
  if ("number" != typeof i2)
    throw new tt("c is a required number.");
  var e2;
  if (0 === t2)
    return 0 === s2 ? [] : [-i2 / s2];
  if (0 === s2) {
    if (0 === i2)
      return [0, 0];
    var a2 = Math.abs(i2), n2 = Math.abs(t2);
    if (a2 < n2 && a2 / n2 < st.EPSILON14)
      return [0, 0];
    if (a2 > n2 && n2 / a2 < st.EPSILON14)
      return [];
    if ((e2 = -i2 / t2) < 0)
      return [];
    var r2 = Math.sqrt(e2);
    return [-r2, r2];
  }
  if (0 === i2)
    return (e2 = -s2 / t2) < 0 ? [e2, 0] : [0, e2];
  var h2 = Gs(s2 * s2, -(4 * t2 * i2), st.EPSILON14);
  if (h2 < 0)
    return [];
  var o2 = -0.5 * Gs(s2, st.sign(s2) * Math.sqrt(h2), st.EPSILON14);
  return s2 > 0 ? [o2 / t2, i2 / o2] : [i2 / o2, o2 / t2];
};
var Cs = {};
function Ns(t2, s2, i2, e2) {
  var a2, n2, r2 = t2, h2 = s2 / 3, o2 = i2 / 3, c2 = e2, l2 = r2 * o2, u2 = h2 * c2, d2 = h2 * h2, m2 = o2 * o2, _2 = r2 * o2 - d2, f2 = r2 * c2 - h2 * o2, y2 = h2 * c2 - m2, p2 = 4 * _2 * y2 - f2 * f2;
  if (p2 < 0) {
    var g2, M2, x2;
    d2 * u2 >= l2 * m2 ? (g2 = r2, M2 = _2, x2 = -2 * h2 * _2 + r2 * f2) : (g2 = c2, M2 = y2, x2 = -c2 * f2 + 2 * o2 * y2);
    var w2 = -(x2 < 0 ? -1 : 1) * Math.abs(g2) * Math.sqrt(-p2), S2 = (n2 = -x2 + w2) / 2, E2 = S2 < 0 ? -Math.pow(-S2, 1 / 3) : Math.pow(S2, 1 / 3), b2 = n2 === w2 ? -E2 : -M2 / E2;
    return a2 = M2 <= 0 ? E2 + b2 : -x2 / (E2 * E2 + b2 * b2 + M2), d2 * u2 >= l2 * m2 ? [(a2 - h2) / r2] : [-c2 / (a2 + o2)];
  }
  var P2 = _2, v2 = -2 * h2 * _2 + r2 * f2, A2 = y2, G2 = -c2 * f2 + 2 * o2 * y2, C2 = Math.sqrt(p2), N2 = Math.sqrt(3) / 2, I2 = Math.abs(Math.atan2(r2 * C2, -v2) / 3);
  a2 = 2 * Math.sqrt(-P2);
  var z2 = Math.cos(I2);
  n2 = a2 * z2;
  var T2 = a2 * (-z2 / 2 - N2 * Math.sin(I2)), O2 = n2 + T2 > 2 * h2 ? n2 - h2 : T2 - h2, R2 = r2, q2 = O2 / R2;
  I2 = Math.abs(Math.atan2(c2 * C2, -G2) / 3);
  var L2 = -c2, B2 = (n2 = (a2 = 2 * Math.sqrt(-A2)) * (z2 = Math.cos(I2))) + (T2 = a2 * (-z2 / 2 - N2 * Math.sin(I2))) < 2 * o2 ? n2 + o2 : T2 + o2, k2 = L2 / B2, D2 = -O2 * B2 - R2 * L2, U2 = (o2 * D2 - h2 * (O2 * L2)) / (-h2 * D2 + o2 * (R2 * B2));
  return q2 <= U2 ? q2 <= k2 ? U2 <= k2 ? [q2, U2, k2] : [q2, k2, U2] : [k2, q2, U2] : q2 <= k2 ? [U2, q2, k2] : U2 <= k2 ? [U2, k2, q2] : [k2, U2, q2];
}
Cs.computeDiscriminant = function(t2, s2, i2, e2) {
  if ("number" != typeof t2)
    throw new tt("a is a required number.");
  if ("number" != typeof s2)
    throw new tt("b is a required number.");
  if ("number" != typeof i2)
    throw new tt("c is a required number.");
  if ("number" != typeof e2)
    throw new tt("d is a required number.");
  var a2 = s2 * s2, n2 = i2 * i2;
  return 18 * t2 * s2 * i2 * e2 + a2 * n2 - 27 * (t2 * t2) * (e2 * e2) - 4 * (t2 * n2 * i2 + a2 * s2 * e2);
}, Cs.computeRealRoots = function(t2, s2, i2, e2) {
  if ("number" != typeof t2)
    throw new tt("a is a required number.");
  if ("number" != typeof s2)
    throw new tt("b is a required number.");
  if ("number" != typeof i2)
    throw new tt("c is a required number.");
  if ("number" != typeof e2)
    throw new tt("d is a required number.");
  var a2, n2;
  if (0 === t2)
    return As.computeRealRoots(s2, i2, e2);
  if (0 === s2) {
    if (0 === i2) {
      if (0 === e2)
        return [0, 0, 0];
      var r2 = (n2 = -e2 / t2) < 0 ? -Math.pow(-n2, 1 / 3) : Math.pow(n2, 1 / 3);
      return [r2, r2, r2];
    }
    return 0 === e2 ? 0 === (a2 = As.computeRealRoots(t2, 0, i2)).Length ? [0] : [a2[0], 0, a2[1]] : Ns(t2, 0, i2, e2);
  }
  return 0 === i2 ? 0 === e2 ? (n2 = -s2 / t2) < 0 ? [n2, 0, 0] : [0, 0, n2] : Ns(t2, s2, 0, e2) : 0 === e2 ? 0 === (a2 = As.computeRealRoots(t2, s2, i2)).length ? [0] : a2[1] <= 0 ? [a2[0], a2[1], 0] : a2[0] >= 0 ? [0, a2[0], a2[1]] : [a2[0], 0, a2[1]] : Ns(t2, s2, i2, e2);
};
var Is = {};
function zs(t2, s2, i2, e2) {
  var a2 = t2 * t2, n2 = s2 - 3 * a2 / 8, r2 = i2 - s2 * t2 / 2 + a2 * t2 / 8, h2 = e2 - i2 * t2 / 4 + s2 * a2 / 16 - 3 * a2 * a2 / 256, o2 = Cs.computeRealRoots(1, 2 * n2, n2 * n2 - 4 * h2, -r2 * r2);
  if (o2.length > 0) {
    var c2 = -t2 / 4, l2 = o2[o2.length - 1];
    if (Math.abs(l2) < st.EPSILON14) {
      var u2 = As.computeRealRoots(1, n2, h2);
      if (2 === u2.length) {
        var d2, m2 = u2[0], _2 = u2[1];
        if (m2 >= 0 && _2 >= 0) {
          var f2 = Math.sqrt(m2), y2 = Math.sqrt(_2);
          return [c2 - y2, c2 - f2, c2 + f2, c2 + y2];
        }
        if (m2 >= 0 && _2 < 0)
          return [c2 - (d2 = Math.sqrt(m2)), c2 + d2];
        if (m2 < 0 && _2 >= 0)
          return [c2 - (d2 = Math.sqrt(_2)), c2 + d2];
      }
      return [];
    }
    if (l2 > 0) {
      var p2 = Math.sqrt(l2), g2 = (n2 + l2 - r2 / p2) / 2, M2 = (n2 + l2 + r2 / p2) / 2, x2 = As.computeRealRoots(1, p2, g2), w2 = As.computeRealRoots(1, -p2, M2);
      return 0 !== x2.length ? (x2[0] += c2, x2[1] += c2, 0 !== w2.length ? (w2[0] += c2, w2[1] += c2, x2[1] <= w2[0] ? [x2[0], x2[1], w2[0], w2[1]] : w2[1] <= x2[0] ? [w2[0], w2[1], x2[0], x2[1]] : x2[0] >= w2[0] && x2[1] <= w2[1] ? [w2[0], x2[0], x2[1], w2[1]] : w2[0] >= x2[0] && w2[1] <= x2[1] ? [x2[0], w2[0], w2[1], x2[1]] : x2[0] > w2[0] && x2[0] < w2[1] ? [w2[0], x2[0], w2[1], x2[1]] : [x2[0], w2[0], x2[1], w2[1]]) : x2) : 0 !== w2.length ? (w2[0] += c2, w2[1] += c2, w2) : [];
    }
  }
  return [];
}
function Ts(t2, s2, i2, e2) {
  var a2 = t2 * t2, n2 = -2 * s2, r2 = i2 * t2 + s2 * s2 - 4 * e2, h2 = a2 * e2 - i2 * s2 * t2 + i2 * i2, o2 = Cs.computeRealRoots(1, n2, r2, h2);
  if (o2.length > 0) {
    var c2, l2, u2, d2, m2, _2, f2 = o2[0], y2 = s2 - f2, p2 = y2 * y2, g2 = t2 / 2, M2 = y2 / 2, x2 = p2 - 4 * e2, w2 = p2 + 4 * Math.abs(e2), S2 = a2 - 4 * f2, E2 = a2 + 4 * Math.abs(f2);
    if (f2 < 0 || x2 * E2 < S2 * w2) {
      var b2 = Math.sqrt(S2);
      c2 = b2 / 2, l2 = 0 === b2 ? 0 : (t2 * M2 - i2) / b2;
    } else {
      var P2 = Math.sqrt(x2);
      c2 = 0 === P2 ? 0 : (t2 * M2 - i2) / P2, l2 = P2 / 2;
    }
    0 === g2 && 0 === c2 ? (u2 = 0, d2 = 0) : st.sign(g2) === st.sign(c2) ? d2 = f2 / (u2 = g2 + c2) : u2 = f2 / (d2 = g2 - c2), 0 === M2 && 0 === l2 ? (m2 = 0, _2 = 0) : st.sign(M2) === st.sign(l2) ? _2 = e2 / (m2 = M2 + l2) : m2 = e2 / (_2 = M2 - l2);
    var v2 = As.computeRealRoots(1, u2, m2), A2 = As.computeRealRoots(1, d2, _2);
    if (0 !== v2.length)
      return 0 !== A2.length ? v2[1] <= A2[0] ? [v2[0], v2[1], A2[0], A2[1]] : A2[1] <= v2[0] ? [A2[0], A2[1], v2[0], v2[1]] : v2[0] >= A2[0] && v2[1] <= A2[1] ? [A2[0], v2[0], v2[1], A2[1]] : A2[0] >= v2[0] && A2[1] <= v2[1] ? [v2[0], A2[0], A2[1], v2[1]] : v2[0] > A2[0] && v2[0] < A2[1] ? [A2[0], v2[0], A2[1], v2[1]] : [v2[0], A2[0], v2[1], A2[1]] : v2;
    if (0 !== A2.length)
      return A2;
  }
  return [];
}
Is.computeDiscriminant = function(t2, s2, i2, e2, a2) {
  if ("number" != typeof t2)
    throw new tt("a is a required number.");
  if ("number" != typeof s2)
    throw new tt("b is a required number.");
  if ("number" != typeof i2)
    throw new tt("c is a required number.");
  if ("number" != typeof e2)
    throw new tt("d is a required number.");
  if ("number" != typeof a2)
    throw new tt("e is a required number.");
  var n2 = t2 * t2, r2 = s2 * s2, h2 = r2 * s2, o2 = i2 * i2, c2 = o2 * i2, l2 = e2 * e2, u2 = l2 * e2, d2 = a2 * a2;
  return r2 * o2 * l2 - 4 * h2 * u2 - 4 * t2 * c2 * l2 + 18 * t2 * s2 * i2 * u2 - 27 * n2 * l2 * l2 + 256 * (n2 * t2) * (d2 * a2) + a2 * (18 * h2 * i2 * e2 - 4 * r2 * c2 + 16 * t2 * o2 * o2 - 80 * t2 * s2 * o2 * e2 - 6 * t2 * r2 * l2 + 144 * n2 * i2 * l2) + d2 * (144 * t2 * r2 * i2 - 27 * r2 * r2 - 128 * n2 * o2 - 192 * n2 * s2 * e2);
}, Is.computeRealRoots = function(t2, s2, i2, e2, a2) {
  if ("number" != typeof t2)
    throw new tt("a is a required number.");
  if ("number" != typeof s2)
    throw new tt("b is a required number.");
  if ("number" != typeof i2)
    throw new tt("c is a required number.");
  if ("number" != typeof e2)
    throw new tt("d is a required number.");
  if ("number" != typeof a2)
    throw new tt("e is a required number.");
  if (Math.abs(t2) < st.EPSILON15)
    return Cs.computeRealRoots(s2, i2, e2, a2);
  var n2 = s2 / t2, r2 = i2 / t2, h2 = e2 / t2, o2 = a2 / t2, c2 = n2 < 0 ? 1 : 0;
  switch (c2 += r2 < 0 ? c2 + 1 : c2, c2 += h2 < 0 ? c2 + 1 : c2, c2 += o2 < 0 ? c2 + 1 : c2) {
    case 0:
    case 3:
    case 4:
    case 6:
    case 7:
    case 9:
    case 10:
    case 12:
    case 13:
    case 14:
    case 15:
      return zs(n2, r2, h2, o2);
    case 1:
    case 2:
    case 5:
    case 8:
    case 11:
      return Ts(n2, r2, h2, o2);
    default:
      return;
  }
};
var Os = { rayPlane: function(t2, s2, i2) {
  if (!J(t2))
    throw new tt("ray is required.");
  if (!J(s2))
    throw new tt("plane is required.");
  J(i2) || (i2 = new u());
  var e2 = t2.origin, a2 = t2.direction, n2 = s2.normal, r2 = _t.dot(n2, a2);
  if (!(Math.abs(r2) < st.EPSILON15)) {
    var h2 = (-s2.constant - _t.dot(n2, e2)) / r2;
    if (!(h2 < 0))
      return i2 = _t.multiplyByScalar(a2, h2, i2), _t.add(e2, i2, i2);
  }
} }, Rs = new u(), qs = new u(), Ls = new u(), Bs = new u(), ks = new u();
Os.rayTriangleParametric = function(t2, s2, i2, e2, a2) {
  if (!J(t2))
    throw new tt("ray is required.");
  if (!J(s2))
    throw new tt("p0 is required.");
  if (!J(i2))
    throw new tt("p1 is required.");
  if (!J(e2))
    throw new tt("p2 is required.");
  a2 = $(a2, false);
  var n2, r2, h2, o2, c2, l2 = t2.origin, u2 = t2.direction, d2 = _t.subtract(i2, s2, Rs), m2 = _t.subtract(e2, s2, qs), _2 = _t.cross(u2, m2, Ls), f2 = _t.dot(d2, _2);
  if (a2) {
    if (f2 < st.EPSILON6)
      return;
    if (n2 = _t.subtract(l2, s2, Bs), (h2 = _t.dot(n2, _2)) < 0 || h2 > f2)
      return;
    if (r2 = _t.cross(n2, d2, ks), (o2 = _t.dot(u2, r2)) < 0 || h2 + o2 > f2)
      return;
    c2 = _t.dot(m2, r2) / f2;
  } else {
    if (Math.abs(f2) < st.EPSILON6)
      return;
    var y2 = 1 / f2;
    if (n2 = _t.subtract(l2, s2, Bs), (h2 = _t.dot(n2, _2) * y2) < 0 || h2 > 1)
      return;
    if (r2 = _t.cross(n2, d2, ks), (o2 = _t.dot(u2, r2) * y2) < 0 || h2 + o2 > 1)
      return;
    c2 = _t.dot(m2, r2) * y2;
  }
  return c2;
}, Os.rayTriangle = function(t2, s2, i2, e2, a2, n2) {
  var r2 = Os.rayTriangleParametric(t2, s2, i2, e2, a2);
  if (J(r2) && !(r2 < 0))
    return J(n2) || (n2 = new u()), _t.multiplyByScalar(t2.direction, r2, n2), _t.add(t2.origin, n2, n2);
};
var Ds = new k();
Os.lineSegmentTriangle = function(t2, s2, i2, e2, a2, n2, r2) {
  if (!J(t2))
    throw new tt("v0 is required.");
  if (!J(s2))
    throw new tt("v1 is required.");
  if (!J(i2))
    throw new tt("p0 is required.");
  if (!J(e2))
    throw new tt("p1 is required.");
  if (!J(a2))
    throw new tt("p2 is required.");
  var h2 = Ds;
  _t.clone(t2, h2.origin), _t.subtract(s2, t2, h2.direction), _t.normalize(h2.direction, h2.direction);
  var o2 = Os.rayTriangleParametric(h2, i2, e2, a2, n2);
  if (!(!J(o2) || o2 < 0 || o2 > _t.distance(t2, s2)))
    return J(r2) || (r2 = new u()), _t.multiplyByScalar(h2.direction, o2, r2), _t.add(h2.origin, r2, r2);
};
var Us = { root0: 0, root1: 0 };
function js(t2, s2, i2) {
  J(i2) || (i2 = new vs());
  var e2 = t2.origin, a2 = t2.direction, n2 = s2.center, r2 = s2.radius * s2.radius, h2 = _t.subtract(e2, n2, Ls), o2 = function(t3, s3, i3, e3) {
    var a3 = s3 * s3 - 4 * t3 * i3;
    if (!(a3 < 0)) {
      if (a3 > 0) {
        var n3 = 1 / (2 * t3), r3 = Math.sqrt(a3), h3 = (-s3 + r3) * n3, o3 = (-s3 - r3) * n3;
        return h3 < o3 ? (e3.root0 = h3, e3.root1 = o3) : (e3.root0 = o3, e3.root1 = h3), e3;
      }
      var c2 = -s3 / (2 * t3);
      if (0 !== c2)
        return e3.root0 = e3.root1 = c2, e3;
    }
  }(_t.dot(a2, a2), 2 * _t.dot(a2, h2), _t.magnitudeSquared(h2) - r2, Us);
  if (J(o2))
    return i2.start = o2.root0, i2.stop = o2.root1, i2;
}
Os.raySphere = function(t2, s2, i2) {
  if (!J(t2))
    throw new tt("ray is required.");
  if (!J(s2))
    throw new tt("sphere is required.");
  if (J(i2 = js(t2, s2, i2)) && !(i2.stop < 0))
    return i2.start = Math.max(i2.start, 0), i2;
};
var Fs = new k();
Os.lineSegmentSphere = function(t2, s2, i2, e2) {
  if (!J(t2))
    throw new tt("p0 is required.");
  if (!J(s2))
    throw new tt("p1 is required.");
  if (!J(i2))
    throw new tt("sphere is required.");
  var a2 = Fs;
  _t.clone(t2, a2.origin);
  var n2 = _t.subtract(s2, t2, a2.direction), r2 = _t.magnitude(n2);
  if (_t.normalize(n2, n2), !(!J(e2 = js(a2, i2, e2)) || e2.stop < 0 || e2.start > r2))
    return e2.start = Math.max(e2.start, 0), e2.stop = Math.min(e2.stop, r2), e2;
};
var Vs = new u(), Ws = new u();
function Hs(t2, s2, i2) {
  var e2 = t2 + s2;
  return st.sign(t2) !== st.sign(s2) && Math.abs(e2 / Math.max(Math.abs(t2), Math.abs(s2))) < i2 ? 0 : e2;
}
Os.rayEllipsoid = function(t2, s2) {
  if (!J(t2))
    throw new tt("ray is required.");
  if (!J(s2))
    throw new tt("ellipsoid is required.");
  var i2, e2, a2, n2, r2, h2 = s2.oneOverRadii, o2 = _t.multiplyComponents(h2, t2.origin, Vs), c2 = _t.multiplyComponents(h2, t2.direction, Ws), l2 = _t.magnitudeSquared(o2), u2 = _t.dot(o2, c2);
  if (l2 > 1) {
    if (u2 >= 0)
      return;
    var d2 = u2 * u2;
    if (i2 = l2 - 1, d2 < (a2 = (e2 = _t.magnitudeSquared(c2)) * i2))
      return;
    if (d2 > a2) {
      n2 = u2 * u2 - a2;
      var m2 = (r2 = -u2 + Math.sqrt(n2)) / e2, _2 = i2 / r2;
      return m2 < _2 ? new vs(m2, _2) : { start: _2, stop: m2 };
    }
    var f2 = Math.sqrt(i2 / e2);
    return new vs(f2, f2);
  }
  return l2 < 1 ? (i2 = l2 - 1, n2 = u2 * u2 - (a2 = (e2 = _t.magnitudeSquared(c2)) * i2), new vs(0, (r2 = -u2 + Math.sqrt(n2)) / e2)) : u2 < 0 ? new vs(0, -u2 / (e2 = _t.magnitudeSquared(c2))) : void 0;
};
var Xs = new u(), Ys = new u(), Zs = new u(), Qs = new u(), Ks = new u(), Js = new _(), $s = new _(), ti = new _(), si = new _(), ii = new _(), ei = new _(), ai = new _(), ni = new u(), ri = new u(), hi = new u();
Os.grazingAltitudeLocation = function(t2, s2) {
  if (!J(t2))
    throw new tt("ray is required.");
  if (!J(s2))
    throw new tt("ellipsoid is required.");
  var i2 = t2.origin, e2 = t2.direction;
  if (!_t.equals(i2, _t.ZERO)) {
    var a2 = s2.geodeticSurfaceNormal(i2, Xs);
    if (_t.dot(e2, a2) >= 0)
      return i2;
  }
  var n2 = J(this.rayEllipsoid(t2, s2)), r2 = s2.transformPositionToScaledSpace(e2, Xs), h2 = _t.normalize(r2, r2), o2 = _t.mostOrthogonalAxis(r2, Qs), c2 = _t.normalize(_t.cross(o2, h2, Ys), Ys), l2 = _t.normalize(_t.cross(h2, c2, Zs), Zs), d2 = Js;
  d2[0] = h2.x, d2[1] = h2.y, d2[2] = h2.z, d2[3] = c2.x, d2[4] = c2.y, d2[5] = c2.z, d2[6] = l2.x, d2[7] = l2.y, d2[8] = l2.z;
  var m2 = Ht.transpose(d2, $s), _2 = Ht.fromScale(s2.radii, ti), f2 = Ht.fromScale(s2.oneOverRadii, si), y2 = ii;
  y2[0] = 0, y2[1] = -e2.z, y2[2] = e2.y, y2[3] = e2.z, y2[4] = 0, y2[5] = -e2.x, y2[6] = -e2.y, y2[7] = e2.x, y2[8] = 0;
  var p2, g2, M2 = Ht.multiply(Ht.multiply(m2, f2, ei), y2, ei), x2 = Ht.multiply(Ht.multiply(M2, _2, ai), d2, ai), w2 = Ht.multiplyByVector(M2, i2, Ks), S2 = function(t3, s3, i3, e3, a3) {
    var n3, r3 = e3 * e3, h3 = a3 * a3, o3 = (t3[Ht.COLUMN1ROW1] - t3[Ht.COLUMN2ROW2]) * h3, c3 = a3 * (e3 * Hs(t3[Ht.COLUMN1ROW0], t3[Ht.COLUMN0ROW1], st.EPSILON15) + s3.y), l3 = t3[Ht.COLUMN0ROW0] * r3 + t3[Ht.COLUMN2ROW2] * h3 + e3 * s3.x + i3, d3 = h3 * Hs(t3[Ht.COLUMN2ROW1], t3[Ht.COLUMN1ROW2], st.EPSILON15), m3 = a3 * (e3 * Hs(t3[Ht.COLUMN2ROW0], t3[Ht.COLUMN0ROW2]) + s3.z), _3 = [];
    if (0 === m3 && 0 === d3) {
      if (0 === (n3 = As.computeRealRoots(o3, c3, l3)).length)
        return _3;
      var f3 = n3[0], y3 = Math.sqrt(Math.max(1 - f3 * f3, 0));
      if (_3.push(new u(e3, a3 * f3, a3 * -y3)), _3.push(new u(e3, a3 * f3, a3 * y3)), 2 === n3.length) {
        var p3 = n3[1], g3 = Math.sqrt(Math.max(1 - p3 * p3, 0));
        _3.push(new u(e3, a3 * p3, a3 * -g3)), _3.push(new u(e3, a3 * p3, a3 * g3));
      }
      return _3;
    }
    var M3 = m3 * m3, x3 = d3 * d3, w3 = m3 * d3, S3 = o3 * o3 + x3, E3 = 2 * (c3 * o3 + w3), b3 = 2 * l3 * o3 + c3 * c3 - x3 + M3, P3 = 2 * (l3 * c3 - w3), v3 = l3 * l3 - M3;
    if (0 === S3 && 0 === E3 && 0 === b3 && 0 === P3)
      return _3;
    var A3 = (n3 = Is.computeRealRoots(S3, E3, b3, P3, v3)).length;
    if (0 === A3)
      return _3;
    for (var G3 = 0; G3 < A3; ++G3) {
      var C3 = n3[G3], N2 = C3 * C3, I2 = Math.max(1 - N2, 0), z2 = Math.sqrt(I2), T2 = (st.sign(o3) === st.sign(l3) ? Hs(o3 * N2 + l3, c3 * C3, st.EPSILON12) : st.sign(l3) === st.sign(c3 * C3) ? Hs(o3 * N2, c3 * C3 + l3, st.EPSILON12) : Hs(o3 * N2 + c3 * C3, l3, st.EPSILON12)) * Hs(d3 * C3, m3, st.EPSILON15);
      T2 < 0 ? _3.push(new u(e3, a3 * C3, a3 * z2)) : T2 > 0 ? _3.push(new u(e3, a3 * C3, a3 * -z2)) : 0 !== z2 ? (_3.push(new u(e3, a3 * C3, a3 * -z2)), _3.push(new u(e3, a3 * C3, a3 * z2)), ++G3) : _3.push(new u(e3, a3 * C3, a3 * z2));
    }
    return _3;
  }(x2, _t.negate(w2, Xs), 0, 0, 1), E2 = S2.length;
  if (E2 > 0) {
    for (var b2 = _t.clone(_t.ZERO, ri), P2 = Number.NEGATIVE_INFINITY, v2 = 0; v2 < E2; ++v2) {
      p2 = Ht.multiplyByVector(_2, Ht.multiplyByVector(d2, S2[v2], ni), ni);
      var A2 = _t.normalize(_t.subtract(p2, i2, Qs), Qs), G2 = _t.dot(A2, e2);
      G2 > P2 && (P2 = G2, b2 = _t.clone(p2, b2));
    }
    var C2 = s2.cartesianToCartographic(b2, hi);
    return P2 = st.clamp(P2, 0, 1), g2 = _t.magnitude(_t.subtract(b2, i2, Qs)) * Math.sqrt(1 - P2 * P2), g2 = n2 ? -g2 : g2, C2.z = g2, s2.cartographicToCartesian(C2, new u());
  }
};
var oi = new u();
Os.lineSegmentPlane = function(t2, s2, i2, e2) {
  if (!J(t2))
    throw new tt("endPoint0 is required.");
  if (!J(s2))
    throw new tt("endPoint1 is required.");
  if (!J(i2))
    throw new tt("plane is required.");
  J(e2) || (e2 = new u());
  var a2 = _t.subtract(s2, t2, oi), n2 = i2.normal, r2 = _t.dot(n2, a2);
  if (!(Math.abs(r2) < st.EPSILON6)) {
    var h2 = _t.dot(n2, t2), o2 = -(i2.constant + h2) / r2;
    if (!(o2 < 0 || o2 > 1))
      return _t.multiplyByScalar(a2, o2, e2), _t.add(t2, e2, e2), e2;
  }
}, Os.trianglePlaneIntersection = function(t2, s2, i2, e2) {
  if (!(J(t2) && J(s2) && J(i2) && J(e2)))
    throw new tt("p0, p1, p2, and plane are required.");
  var a2, n2, r2 = e2.normal, h2 = e2.constant, o2 = _t.dot(r2, t2) + h2 < 0, c2 = _t.dot(r2, s2) + h2 < 0, l2 = _t.dot(r2, i2) + h2 < 0, d2 = 0;
  if (d2 += o2 ? 1 : 0, d2 += c2 ? 1 : 0, 1 !== (d2 += l2 ? 1 : 0) && 2 !== d2 || (a2 = new u(), n2 = new u()), 1 === d2) {
    if (o2)
      return Os.lineSegmentPlane(t2, s2, e2, a2), Os.lineSegmentPlane(t2, i2, e2, n2), { positions: [t2, s2, i2, a2, n2], indices: [0, 3, 4, 1, 2, 4, 1, 4, 3] };
    if (c2)
      return Os.lineSegmentPlane(s2, i2, e2, a2), Os.lineSegmentPlane(s2, t2, e2, n2), { positions: [t2, s2, i2, a2, n2], indices: [1, 3, 4, 2, 0, 4, 2, 4, 3] };
    if (l2)
      return Os.lineSegmentPlane(i2, t2, e2, a2), Os.lineSegmentPlane(i2, s2, e2, n2), { positions: [t2, s2, i2, a2, n2], indices: [2, 3, 4, 0, 1, 4, 0, 4, 3] };
  } else if (2 === d2) {
    if (!o2)
      return Os.lineSegmentPlane(s2, t2, e2, a2), Os.lineSegmentPlane(i2, t2, e2, n2), { positions: [t2, s2, i2, a2, n2], indices: [1, 2, 4, 1, 4, 3, 0, 3, 4] };
    if (!c2)
      return Os.lineSegmentPlane(i2, s2, e2, a2), Os.lineSegmentPlane(t2, s2, e2, n2), { positions: [t2, s2, i2, a2, n2], indices: [2, 0, 4, 2, 4, 3, 1, 3, 4] };
    if (!l2)
      return Os.lineSegmentPlane(t2, i2, e2, a2), Os.lineSegmentPlane(s2, i2, e2, n2), { positions: [t2, s2, i2, a2, n2], indices: [0, 1, 4, 0, 4, 3, 2, 3, 4] };
  }
};
class ci {
  static clone(t2, s2) {
    return s2 || (s2 = new y()), s2.copy(t2), s2;
  }
  static fromElements(t2, s2, i2, e2, a2) {
    return a2 || (a2 = new y()), a2.set(t2, s2, i2, e2), a2;
  }
  static lerp(t2, s2, i2, e2) {
    return e2 || (e2 = new y()), e2.lerpVectors(t2, s2, i2), e2;
  }
  static equals(t2, s2) {
    return t2.equals(s2);
  }
  static normalize(t2, s2) {
    return t2 === s2 ? (t2.normalize(), t2) : (s2.copy(t2), s2.normalize(), s2);
  }
  static add(t2, s2, i2) {
    return i2 || (i2 = new y()), i2.addVectors(t2, s2);
  }
  static multiplyByScalar(t2, s2, i2) {
    return i2 || (i2 = new y()), i2.copy(t2).multiplyScalar(s2), i2;
  }
  static subtract(t2, s2, i2) {
    return i2 || (i2 = new y()), i2.subVectors(t2, s2), i2;
  }
  static distance(t2, s2) {
    return t2.distanceTo(s2);
  }
}
__publicField(ci, "ZERO", new y(0, 0, 0, 0));
__publicField(ci, "UNIT_W", Object.freeze(new y(0, 0, 0, 1)));
const li = new u(), ui = new u(), di = new D(), mi = new y(0, 0, 0, 0), _i = new u();
class fi {
  static fromPointNormal(t2, s2, i2) {
    return i2 || (i2 = new K()), i2.setFromNormalAndCoplanarPoint(s2, t2), i2;
  }
  static fromCartesian4(t2, s2) {
    const i2 = _t.fromCartesian4(t2, li), e2 = t2.w;
    if (!st.equalsEpsilon(_t.magnitude(i2), 1, st.EPSILON6))
      throw new Error("normal must be normalized.");
    return J(s2) ? (_t.clone(i2, s2.normal), s2.constant = e2, s2) : new fi(i2, e2);
  }
  static getPointDistance(t2, s2) {
    return _t.dot(t2.normal, s2) + t2.constant;
  }
  static projectPointOntoPlane(t2, s2, i2) {
    J(i2) || (i2 = new u());
    const e2 = fi.getPointDistance(t2, s2), a2 = _t.multiplyByScalar(t2.normal, e2, ui);
    return _t.subtract(s2, a2, i2);
  }
  static transform(t2, s2, i2) {
    const e2 = t2.normal, a2 = t2.constant, n2 = D.inverseTranspose(s2, di);
    let r2 = ci.fromElements(e2.x, e2.y, e2.z, a2, mi);
    r2 = D.multiplyByVector(n2, r2, r2);
    const h2 = _t.fromCartesian4(r2, _i);
    return r2 = ci.divideByScalar(r2, _t.magnitude(h2), r2), K.fromCartesian4(r2, i2);
  }
  static clone(t2, s2) {
    return J(s2) ? (_t.clone(t2.normal, s2.normal), s2.constant = t2.constant, s2) : new fi(t2.normal, t2.constant);
  }
  static equals(t2, s2) {
    return t2.constant === s2.constant && _t.equals(t2.normal, s2.normal);
  }
}
K.ORIGIN_XY_PLANE = Object.freeze(new fi(_t.UNIT_Z, 0)), K.ORIGIN_YZ_PLANE = Object.freeze(new fi(_t.UNIT_X, 0)), K.ORIGIN_ZX_PLANE = Object.freeze(new fi(_t.UNIT_Y, 0));
const yi = new y(0, 0, 0, 0), pi = new k(), gi = new u();
class Mi {
  constructor(t2, s2) {
    if (!J(t2 = (s2 = $(s2, Wt.WGS84)).scaleToGeodeticSurface(t2)))
      throw new tt("origin must not be at the center of the ellipsoid.");
    const i2 = ls.eastNorthUpToFixedFrame(t2, s2);
    this._ellipsoid = s2, this._origin = t2, this._xAxis = _t.fromCartesian4(cs.getColumn(i2, 0, yi)), this._yAxis = _t.fromCartesian4(cs.getColumn(i2, 1, yi));
    const e2 = _t.fromCartesian4(cs.getColumn(i2, 2, yi));
    this._plane = fi.fromPointNormal(t2, e2);
  }
  static fromPoints(t2, s2) {
    let i2 = t2[0].x, e2 = t2[0].y, a2 = t2[0].z, n2 = t2[0].x, r2 = t2[0].y, h2 = t2[0].z;
    for (let s3 = 0; s3 < t2.length; s3++) {
      const o3 = t2[s3], c3 = o3.x, l3 = o3.y, u2 = o3.z;
      i2 = Math.min(c3, i2), n2 = Math.max(c3, n2), e2 = Math.min(l3, e2), r2 = Math.max(l3, r2), a2 = Math.min(u2, a2), h2 = Math.max(u2, h2);
    }
    const o2 = new u(i2, e2, a2), c2 = new u(n2, r2, h2), l2 = new p(o2, c2);
    let d2 = new u();
    return d2 = l2.getCenter(d2), new Mi(d2, s2);
  }
  projectPointToNearestOnPlane(t2, s2) {
    J(s2) || (s2 = new is());
    const i2 = pi;
    i2.origin = t2, _t.clone(this._plane.normal, i2.direction);
    let e2 = Os.rayPlane(i2, this._plane, gi);
    if (J(e2) || (_t.negate(i2.direction, i2.direction), e2 = Os.rayPlane(i2, this._plane, gi)), J(e2)) {
      const t3 = _t.subtract(e2, this._origin, e2), i3 = _t.dot(this._xAxis, t3), a2 = _t.dot(this._yAxis, t3);
      return J(s2) ? (s2.x = i3, s2.y = a2, s2) : new c(i3, a2);
    }
  }
  projectPointsOntoPlane(t2, s2) {
    J(s2) || (s2 = []);
    let i2 = 0;
    const e2 = t2.length;
    for (let a2 = 0; a2 < e2; a2++) {
      const e3 = this.projectPointOntoPlane(t2[a2], s2[i2]);
      e3 && (s2[i2] = e3, i2++);
    }
    return s2.length = i2, s2;
  }
  projectPointOntoPlane(t2, s2) {
    const i2 = pi;
    i2.origin = t2, _t.normalize(t2, i2.direction);
    let e2 = Os.rayPlane(i2, this._plane, gi);
    if (J(e2) || (_t.negate(i2.direction, i2.direction), e2 = Os.rayPlane(i2, this._plane, gi)), J(e2)) {
      const t3 = _t.subtract(e2, this._origin, e2), i3 = _t.dot(this._xAxis, t3), a2 = _t.dot(this._yAxis, t3);
      return J(s2) ? (s2.x = i3, s2.y = a2, s2) : new c(i3, a2);
    }
  }
  get ellipsoid() {
    return this._ellipsoid;
  }
  get origin() {
    return this._origin;
  }
  get plane() {
    return this._plane;
  }
  get xAxis() {
    return this._xAxis;
  }
  get yAxis() {
    return this._yAxis;
  }
  get zAxis() {
    return this._plane.normal;
  }
}
var xi = Object.freeze({ OUTSIDE: -1, INTERSECTING: 0, INSIDE: 1 });
class wi {
  constructor(t2, s2) {
    this.isOrientedBoundingBox = true, this.center = _t.clone($(t2, _t.ZERO), new u()), this.halfAxes = Ht.clone($(s2, Ht.ZERO));
  }
  intersectPlane(t2) {
    return wi.intersectPlane(this, t2);
  }
  distanceSquaredTo(t2) {
    return wi.distanceSquaredTo(this, t2);
  }
  computeCorners(t2) {
    return wi.computeCorners(this, t2);
  }
  getCenter(t2) {
    return J(t2) ? (t2.copy(this.center), t2) : this.center.clone();
  }
  intersectsObb(t2) {
    const s2 = this.center, i2 = t2.center, e2 = this.halfAxes, a2 = t2.halfAxes, n2 = new u().subVectors(i2, s2), r2 = new u(e2.elements[0], e2.elements[1], e2.elements[2]), h2 = new u(e2.elements[3], e2.elements[4], e2.elements[5]), o2 = new u(e2.elements[6], e2.elements[7], e2.elements[8]), c2 = new u(a2.elements[0], a2.elements[1], a2.elements[2]), l2 = new u(a2.elements[3], a2.elements[4], a2.elements[5]), d2 = new u(a2.elements[6], a2.elements[7], a2.elements[8]), m2 = r2.length(), _2 = h2.length(), f2 = o2.length();
    r2.normalize(), h2.normalize(), o2.normalize();
    const y2 = c2.length(), p2 = l2.length(), g2 = d2.length();
    let M2, x2, w2;
    return c2.normalize(), l2.normalize(), d2.normalize(), M2 = m2, x2 = y2 * Math.abs(r2.dot(c2)) + p2 * Math.abs(r2.dot(l2)) + g2 * Math.abs(r2.dot(d2)), w2 = Math.abs(n2.dot(r2)), !(w2 > M2 + x2) && (M2 = _2, x2 = y2 * Math.abs(h2.dot(c2)) + p2 * Math.abs(h2.dot(l2)) + g2 * Math.abs(h2.dot(d2)), w2 = Math.abs(n2.dot(h2)), !(w2 > M2 + x2) && (M2 = f2, x2 = y2 * Math.abs(o2.dot(c2)) + p2 * Math.abs(o2.dot(l2)) + g2 * Math.abs(o2.dot(d2)), w2 = Math.abs(n2.dot(o2)), !(w2 > M2 + x2) && (M2 = m2 * Math.abs(c2.dot(r2)) + _2 * Math.abs(c2.dot(h2)) + f2 * Math.abs(c2.dot(o2)), x2 = y2, w2 = Math.abs(n2.dot(c2)), !(w2 > M2 + x2) && (M2 = m2 * Math.abs(l2.dot(r2)) + _2 * Math.abs(l2.dot(h2)) + f2 * Math.abs(l2.dot(o2)), x2 = p2, w2 = Math.abs(n2.dot(l2)), !(w2 > M2 + x2) && (M2 = m2 * Math.abs(d2.dot(r2)) + _2 * Math.abs(d2.dot(h2)) + f2 * Math.abs(d2.dot(o2)), x2 = g2, w2 = Math.abs(n2.dot(d2)), !(w2 > M2 + x2))))));
  }
}
const Si = new u(), Ei = new u();
function bi(t2, s2, i2, e2, a2, n2, r2, h2, o2, c2, l2) {
  if (!(J(a2) && J(n2) && J(r2) && J(h2) && J(o2) && J(c2)))
    throw new tt("all extents (minimum/maximum X/Y/Z) are required.");
  J(l2) || (l2 = new wi());
  const u2 = l2.halfAxes;
  Ht.setColumn(u2, 0, s2, u2), Ht.setColumn(u2, 1, i2, u2), Ht.setColumn(u2, 2, e2, u2);
  let d2 = Si;
  d2.x = (a2 + n2) / 2, d2.y = (r2 + h2) / 2, d2.z = (o2 + c2) / 2;
  const m2 = Ei;
  m2.x = (n2 - a2) / 2, m2.y = (h2 - r2) / 2, m2.z = (c2 - o2) / 2;
  const _2 = l2.center;
  return d2 = Ht.multiplyByVector(u2, d2, d2), _t.add(t2, d2, _2), Ht.multiplyByScale(u2, m2, u2), l2;
}
const Pi = new u(), vi = new u(), Ai = new u(), Gi = new u(), Ci = new u(), Ni = new u(), Ii = new u(), zi = new u(), Ti = new u(), Oi = new u(), Ri = new u(), qi = new u(), Li = new c(), Bi = new c(), ki = new c(), Di = new c(), Ui = new c(), ji = new u(), Fi = new u(), Vi = new u(), Wi = new u(), Hi = new c(), Xi = new u(), Yi = new u(), Zi = new u(), Qi = new K(new u(1, 0, 0), 0);
wi.fromRectangle = function(t2, s2, i2, e2, a2) {
  if (!J(t2))
    throw new tt("rectangle is required");
  if (t2.width < 0 || t2.width > st.TWO_PI)
    throw new tt("Rectangle width must be between 0 and 2 * pi");
  if (t2.height < 0 || t2.height > st.PI)
    throw new tt("Rectangle height must be between 0 and pi");
  if (J(e2) && !st.equalsEpsilon(e2.radii.x, e2.radii.y, st.EPSILON15))
    throw new tt("Ellipsoid must be an ellipsoid of revolution (radii.x == radii.y)");
  let n2, r2, h2, o2, c2, l2, u2;
  if (s2 = $(s2, 0), i2 = $(i2, 0), e2 = $(e2, Wt.WGS84), t2.width <= st.PI) {
    const d3 = it.center(t2, Pi), m3 = e2.cartographicToCartesian(d3, vi), _3 = new Mi(m3, e2);
    u2 = _3.plane;
    const f3 = d3.x, y3 = t2.south < 0 && t2.north > 0 ? 0 : d3.y, p3 = $t.fromRadians(f3, t2.north, i2, Ai), g3 = $t.fromRadians(t2.west, t2.north, i2, Gi), M3 = $t.fromRadians(t2.west, y3, i2, Ci), x3 = $t.fromRadians(t2.west, t2.south, i2, Ni), w3 = $t.fromRadians(f3, t2.south, i2, Ii), S2 = e2.cartographicToCartesian(p3, zi);
    let E2 = e2.cartographicToCartesian(g3, Ti);
    const b2 = e2.cartographicToCartesian(M3, Oi);
    let P2 = e2.cartographicToCartesian(x3, Ri);
    const v2 = e2.cartographicToCartesian(w3, qi), A2 = _3.projectPointToNearestOnPlane(S2, Li), G2 = _3.projectPointToNearestOnPlane(E2, Bi), C2 = _3.projectPointToNearestOnPlane(b2, ki), N2 = _3.projectPointToNearestOnPlane(P2, Di), I2 = _3.projectPointToNearestOnPlane(v2, Ui);
    return n2 = Math.min(G2.x, C2.x, N2.x), r2 = -n2, o2 = Math.max(G2.y, A2.y), h2 = Math.min(N2.y, I2.y), g3.z = x3.z = s2, E2 = e2.cartographicToCartesian(g3, Ti), P2 = e2.cartographicToCartesian(x3, Ri), c2 = Math.min(fi.getPointDistance(u2, E2), fi.getPointDistance(u2, P2)), l2 = i2, bi(_3.origin, _3.xAxis, _3.yAxis, _3.zAxis, n2, r2, h2, o2, c2, l2, a2);
  }
  const d2 = t2.south > 0, m2 = t2.north < 0, _2 = d2 ? t2.south : m2 ? t2.north : 0, f2 = it.center(t2, Pi).x, y2 = _t.fromRadians(f2, _2, i2, e2, ji);
  y2.z = 0;
  const p2 = Math.abs(y2.x) < st.EPSILON10 && Math.abs(y2.y) < st.EPSILON10 ? _t.UNIT_X : _t.normalize(y2, Fi), g2 = _t.UNIT_Z, M2 = _t.cross(p2, g2, Vi);
  u2 = fi.fromPointNormal(y2, p2, Qi);
  const x2 = _t.fromRadians(f2 + st.PI_OVER_TWO, _2, i2, e2, Wi);
  r2 = _t.dot(fi.projectPointOntoPlane(u2, x2, Hi), M2), n2 = -r2, o2 = _t.fromRadians(0, t2.north, m2 ? s2 : i2, e2, Xi).z, h2 = _t.fromRadians(0, t2.south, d2 ? s2 : i2, e2, Yi).z;
  const w2 = _t.fromRadians(t2.east, _2, i2, e2, Zi);
  return c2 = fi.getPointDistance(u2, w2), l2 = 0, bi(y2, M2, g2, p2, n2, r2, h2, o2, c2, l2, a2);
};
const Ki = new u(), Ji = new u(), $i = new u(), te = new u(), se = new u(), ie = new u();
wi.distanceSquaredTo = function(t2, s2) {
  if (!J(t2))
    throw new tt("box is required.");
  if (!J(s2))
    throw new tt("cartesian is required.");
  const i2 = _t.subtract(s2, t2.center, Si), e2 = t2.halfAxes;
  let a2 = Ht.getColumn(e2, 0, Ki), n2 = Ht.getColumn(e2, 1, Ji), r2 = Ht.getColumn(e2, 2, $i);
  const h2 = _t.magnitude(a2), o2 = _t.magnitude(n2), c2 = _t.magnitude(r2);
  let l2 = true, u2 = true, d2 = true;
  h2 > 0 ? _t.divideByScalar(a2, h2, a2) : l2 = false, o2 > 0 ? _t.divideByScalar(n2, o2, n2) : u2 = false, c2 > 0 ? _t.divideByScalar(r2, c2, r2) : d2 = false;
  const m2 = !l2 + !u2 + !d2;
  let _2, f2, y2;
  if (1 === m2) {
    let t3 = a2;
    _2 = n2, f2 = r2, u2 ? d2 || (t3 = r2, f2 = a2) : (t3 = n2, _2 = a2), y2 = _t.cross(_2, f2, se), t3 === a2 ? a2 = y2 : t3 === n2 ? n2 = y2 : t3 === r2 && (r2 = y2);
  } else if (2 === m2) {
    _2 = a2, u2 ? _2 = n2 : d2 && (_2 = r2);
    let t3 = _t.UNIT_Y;
    _t.equalsEpsilon(t3, _2, st.EPSILON3) && (t3 = _t.UNIT_X), f2 = _t.cross(_2, t3, te), _t.normalize(f2, f2), y2 = _t.cross(_2, f2, se), _t.normalize(y2, y2), _2 === a2 ? (n2 = f2, r2 = y2) : _2 === n2 ? (r2 = f2, a2 = y2) : _2 === r2 && (a2 = f2, n2 = y2);
  } else
    3 === m2 && (a2 = _t.UNIT_X, n2 = _t.UNIT_Y, r2 = _t.UNIT_Z);
  const p2 = ie;
  p2.x = _t.dot(i2, a2), p2.y = _t.dot(i2, n2), p2.z = _t.dot(i2, r2);
  let g2, M2 = 0;
  return p2.x < -h2 ? (g2 = p2.x + h2, M2 += g2 * g2) : p2.x > h2 && (g2 = p2.x - h2, M2 += g2 * g2), p2.y < -o2 ? (g2 = p2.y + o2, M2 += g2 * g2) : p2.y > o2 && (g2 = p2.y - o2, M2 += g2 * g2), p2.z < -c2 ? (g2 = p2.z + c2, M2 += g2 * g2) : p2.z > c2 && (g2 = p2.z - c2, M2 += g2 * g2), M2;
}, wi.intersectPlane = function(t2, s2) {
  if (!J(t2))
    throw new tt("box is required.");
  if (!J(s2))
    throw new tt("plane is required.");
  const i2 = t2.center, e2 = s2.normal, a2 = t2.halfAxes, n2 = e2.x, r2 = e2.y, h2 = e2.z, o2 = a2.elements, c2 = Math.abs(n2 * o2[Ht.COLUMN0ROW0] + r2 * o2[Ht.COLUMN0ROW1] + h2 * o2[Ht.COLUMN0ROW2]) + Math.abs(n2 * o2[Ht.COLUMN1ROW0] + r2 * o2[Ht.COLUMN1ROW1] + h2 * o2[Ht.COLUMN1ROW2]) + Math.abs(n2 * o2[Ht.COLUMN2ROW0] + r2 * o2[Ht.COLUMN2ROW1] + h2 * o2[Ht.COLUMN2ROW2]), l2 = _t.dot(e2.clone(), i2) + s2.constant;
  return l2 <= -c2 ? xi.OUTSIDE : l2 >= c2 ? xi.INSIDE : xi.INTERSECTING;
};
const ee = new u(), ae = new u(), ne = new u();
wi.computeCorners = function(t2, s2) {
  J(s2) || (s2 = [new u(), new u(), new u(), new u(), new u(), new u(), new u(), new u()]);
  const i2 = t2.center, e2 = t2.halfAxes, a2 = Ht.getColumn(e2, 0, ee), n2 = Ht.getColumn(e2, 1, ae), r2 = Ht.getColumn(e2, 2, ne);
  return _t.clone(i2, s2[0]), _t.subtract(s2[0], a2, s2[0]), _t.subtract(s2[0], n2, s2[0]), _t.subtract(s2[0], r2, s2[0]), _t.clone(i2, s2[1]), _t.subtract(s2[1], a2, s2[1]), _t.subtract(s2[1], n2, s2[1]), _t.add(s2[1], r2, s2[1]), _t.clone(i2, s2[2]), _t.subtract(s2[2], a2, s2[2]), _t.add(s2[2], n2, s2[2]), _t.subtract(s2[2], r2, s2[2]), _t.clone(i2, s2[3]), _t.subtract(s2[3], a2, s2[3]), _t.add(s2[3], n2, s2[3]), _t.add(s2[3], r2, s2[3]), _t.clone(i2, s2[4]), _t.add(s2[4], a2, s2[4]), _t.subtract(s2[4], n2, s2[4]), _t.subtract(s2[4], r2, s2[4]), _t.clone(i2, s2[5]), _t.add(s2[5], a2, s2[5]), _t.subtract(s2[5], n2, s2[5]), _t.add(s2[5], r2, s2[5]), _t.clone(i2, s2[6]), _t.add(s2[6], a2, s2[6]), _t.add(s2[6], n2, s2[6]), _t.subtract(s2[6], r2, s2[6]), _t.clone(i2, s2[7]), _t.add(s2[7], a2, s2[7]), _t.add(s2[7], n2, s2[7]), _t.add(s2[7], r2, s2[7]), s2;
}, wi.fromGeoBoundingBox = function(t2, s2) {
  if (!J(t2))
    throw new tt("geoBoundingBox is required.");
  const i2 = t2.min, e2 = t2.max, a2 = it.fromBox(t2, null, true);
  return wi.fromRectangle(a2, i2.z, e2.z, null, s2);
};
class re extends Ct {
  constructor() {
    super(...arguments);
    __publicField(this, "name", xt);
  }
  projectCoordinate(t2, s2) {
    return Wt.WGS84.cartographicDegreeToCartesian(t2, s2);
  }
  unprojectCoordinate(t2, s2) {
    return Wt.WGS84.cartesianToCartographicDegree(t2, s2);
  }
  getGeodeticSurfaceNormal(t2, s2) {
    s2 || (s2 = new u());
    return Wt.WGS84.geodeticSurfaceNormalCartographic(t2, s2);
  }
  getProjectedSurfaceNormal(t2, s2) {
    s2 || (s2 = new u());
    return Wt.WGS84.geodeticSurfaceNormal(t2, s2);
  }
  geoBoxToProjectedBox(t2, s2) {
    return s2 || (s2 = new wi()), s2 = wi.fromGeoBoundingBox(t2, s2);
  }
  getLODSacleOfGeoBoundingBox(t2) {
    if (t2.min.y > 85 || t2.max.y < -85)
      return 0;
    const s2 = (t2.min.y + t2.max.y) / 2;
    return Math.cos(o.degToRad(s2));
  }
  localFrameToFixedFrame(t2, s2) {
    return s2 || (s2 = new D()), ls.eastNorthUpToFixedFrame(t2, null, s2), s2;
  }
}
function he() {
}
function oe(t2, s2) {
  for (let i2 in s2)
    t2[i2] = s2[i2];
}
function ce(t2, s2) {
  this.lng = t2, this.lat = s2;
}
function le(t2, s2) {
  this.x = t2, this.y = s2;
}
oe(ce.prototype, { equals: function(t2) {
  return this.lat === t2.lat && this.lng === t2.lng;
}, clone: function() {
  return new ce(this.lat, this.lng);
}, getLngSpan: function(t2) {
  let s2 = this.lng, i2 = Math.abs(t2 - s2);
  return i2 > 180 && (i2 = 360 - i2), i2;
}, sub: function(t2) {
  return new ce(this.lat - t2.lat, this.lng - t2.lng);
}, toString: function() {
  return "Point";
} }), oe(he, { EARTHRADIUS: 637099681e-2, MCBAND: [1289059486e-2, 836237787e-2, 5591021, 348198983e-2, 167804312e-2, 0], LLBAND: [75, 60, 45, 30, 15, 0], MC2LL: [[1410526172116255e-23, 898305509648872e-20, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 173379812e-1], [-7435856389565537e-24, 8983055097726239e-21, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1026014486e-2], [-3030883460898826e-23, 898305509983578e-20, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 685681737e-2], [-1981981304930552e-23, 8983055099779535e-21, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 448277706e-2], [309191371068437e-23, 8983055096812155e-21, 6995724062e-14, 23.10934304144901, -23663490511e-14, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 25551644e-1], [2890871144776878e-24, 8983055095805407e-21, -3068298e-14, 7.47137025468032, -353937994e-14, -0.02145144861037, -1234426596e-14, 10322952773e-14, -323890364e-14, 826088.5]], LL2MC: [[-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5], [8277824516172526e-19, 111320.7020463578, 6477955746671607e-7, -4082003173641316e-6, 1077490566351142e-5, -1517187553151559e-5, 1205306533862167e-5, -5124939663577472e-6, 9133119359512032e-7, 67.5], [0.00337398766765, 111320.7020202162, 4481351045890365e-9, -2339375119931662e-8, 7968221547186455e-8, -1159649932797253e-7, 9723671115602145e-8, -4366194633752821e-8, 8477230501135234e-9, 52.5], [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837749470245e-9, 992013.7397791013, -122195221711287e-8, 1340652697009075e-9, -620943.6990984312, 144416.9293806241, 37.5], [-3441963504368392e-19, 111320.7020576856, 278.2353980772752, 2485758690035394e-9, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5], [-3218135878613132e-19, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]], getDistanceByMC: function(t2, s2) {
  if (!t2 || !s2)
    return 0;
  let i2, e2, a2, n2;
  return (t2 = this.convertMC2LL(t2)) ? (i2 = this.toRadians(t2.lng), e2 = this.toRadians(t2.lat), (s2 = this.convertMC2LL(s2)) ? (a2 = this.toRadians(s2.lng), n2 = this.toRadians(s2.lat), this.getDistance(i2, a2, e2, n2)) : 0) : 0;
}, getDistanceByLL: function(t2, s2) {
  if (!t2 || !s2)
    return 0;
  let i2, e2, a2, n2;
  return t2.lng = this.getLoop(t2.lng, -180, 180), t2.lat = this.getRange(t2.lat, -74, 74), s2.lng = this.getLoop(s2.lng, -180, 180), s2.lat = this.getRange(s2.lat, -74, 74), i2 = this.toRadians(t2.lng), a2 = this.toRadians(t2.lat), e2 = this.toRadians(s2.lng), n2 = this.toRadians(s2.lat), this.getDistance(i2, e2, a2, n2);
}, convertMC2LL: function(t2) {
  if (null == t2)
    return new ce(0, 0);
  if (t2.lng < 180 && t2.lng > -180 && t2.lat < 90 && t2.lat > -90)
    return t2;
  let s2, i2;
  s2 = new ce(Math.abs(t2.lng), Math.abs(t2.lat));
  for (let t3 = 0; t3 < this.MCBAND.length; t3++)
    if (s2.lat >= this.MCBAND[t3]) {
      i2 = this.MC2LL[t3];
      break;
    }
  let e2 = this.convertor(t2, i2);
  return t2 = new ce(e2.lng.toFixed(6), e2.lat.toFixed(6));
}, convertLL2MC: function(t2) {
  if (null == t2)
    return new ce(0, 0);
  if (t2.lng > 180 || t2.lng < -180 || t2.lat > 90 || t2.lat < -90)
    return t2;
  let s2, i2;
  t2.lng = this.getLoop(t2.lng, -180, 180), t2.lat = this.getRange(t2.lat, -74, 74), s2 = new ce(t2.lng, t2.lat);
  for (var e2 = 0; e2 < this.LLBAND.length; e2++)
    if (s2.lat >= this.LLBAND[e2]) {
      i2 = this.LL2MC[e2];
      break;
    }
  if (!i2) {
    for (e2 = 0; e2 < this.LLBAND.length; e2++)
      if (s2.lat <= -this.LLBAND[e2]) {
        i2 = this.LL2MC[e2];
        break;
      }
  }
  let a2 = this.convertor(t2, i2);
  return t2 = new ce(Number(a2.lng), Number(a2.lat));
}, convertor: function(t2, s2) {
  if (!t2 || !s2)
    return;
  let i2 = s2[0] + s2[1] * Math.abs(t2.lng), e2 = Math.abs(t2.lat) / s2[9], a2 = s2[2] + s2[3] * e2 + s2[4] * e2 * e2 + s2[5] * e2 * e2 * e2 + s2[6] * e2 * e2 * e2 * e2 + s2[7] * e2 * e2 * e2 * e2 * e2 + s2[8] * e2 * e2 * e2 * e2 * e2 * e2;
  return i2 *= t2.lng < 0 ? -1 : 1, a2 *= t2.lat < 0 ? -1 : 1, new ce(i2, a2);
}, getDistance: function(t2, s2, i2, e2) {
  return this.EARTHRADIUS * Math.acos(Math.sin(i2) * Math.sin(e2) + Math.cos(i2) * Math.cos(e2) * Math.cos(s2 - t2));
}, toRadians: function(t2) {
  return Math.PI * t2 / 180;
}, toDegrees: function(t2) {
  return 180 * t2 / Math.PI;
}, getRange: function(t2, s2, i2) {
  return null != s2 && (t2 = Math.max(t2, s2)), null != i2 && (t2 = Math.min(t2, i2)), t2;
}, getLoop: function(t2, s2, i2) {
  for (; t2 > i2; )
    t2 -= i2 - s2;
  for (; t2 < s2; )
    t2 += i2 - s2;
  return t2;
} }), oe(he.prototype, { lngLatToMercator: function(t2) {
  return he.convertLL2MC(t2);
}, lngLatToPoint: function(t2) {
  let s2 = he.convertLL2MC(t2);
  return new le(s2.lng, s2.lat);
}, mercatorToLngLat: function(t2) {
  return he.convertMC2LL(t2);
}, pointToLngLat: function(t2) {
  let s2 = new ce(t2.x, t2.y);
  return he.convertMC2LL(s2);
}, pointToPixel: function(t2, s2, i2, e2, a2) {
  if (!t2)
    return;
  t2 = this.lngLatToMercator(t2, a2);
  let n2 = this.getZoomUnits(s2);
  return new le(Math.round((t2.lng - i2.lng) / n2 + e2.width / 2), Math.round((i2.lat - t2.lat) / n2 + e2.height / 2));
}, pixelToPoint: function(t2, s2, i2, e2, a2) {
  if (!t2)
    return;
  let n2 = this.getZoomUnits(s2), r2 = new ce(i2.lng + n2 * (t2.x - e2.width / 2), i2.lat - n2 * (t2.y - e2.height / 2));
  return this.mercatorToLngLat(r2, a2);
}, getZoomUnits: function(t2) {
  return Math.pow(2, 18 - t2);
} });
const ue = 2003772636e-2, de = 1247410417e-2, me = new u();
class _e extends Ct {
  constructor() {
    super(...arguments);
    __publicField(this, "name", wt);
    __publicField(this, "isAxisAligned", true);
    __publicField(this, "unprojectCoordinate", (t2, s2, i2) => {
      s2 || (s2 = new u()), me.copy(t2), t2.x < -ue && (me.x = -ue), t2.x > ue && (me.x = ue), t2.y < -de && (me.y = -de), t2.y > de && (me.y = de);
      const e2 = he.convertMC2LL({ lng: me.x, lat: me.y });
      return s2.set(Number(e2.lng), Number(e2.lat), me.z), i2 && (s2.x = Nt(t2.x, s2.x, 180, ue), s2.y = Nt(t2.y, s2.y, 74, de)), s2;
    });
  }
  projectCoordinate(t2, s2, i2 = false) {
    s2 || (s2 = new u()), me.copy(t2), t2.x < -180 && (me.x = -180), t2.x > 180 && (me.x = 180), t2.y < -74 && (me.y = -74), t2.y > 74 && (me.y = 74);
    const e2 = he.convertLL2MC({ lng: me.x, lat: me.y });
    return s2.set(Number(e2.lng), Number(e2.lat), me.z), i2 && (s2.x = It(t2.x, s2.x, 180, ue), s2.y = It(t2.y, s2.y, 74, de)), s2;
  }
}
const fe = 6378137 * Math.PI / 180;
class ye extends Ct {
  constructor() {
    super(...arguments);
    __publicField(this, "name", gt);
    __publicField(this, "isGeo", true);
    __publicField(this, "isAxisAligned", true);
  }
  projectCoordinate(t2, s2) {
    return s2 || (s2 = new u()), s2.x = t2.x * fe, s2.y = t2.y * fe, s2.z = t2.z, s2;
  }
  unprojectCoordinate(t2, s2) {
    return s2 || (s2 = new u()), s2.x = t2.x / fe, s2.y = t2.y / fe, s2.z = t2.z, s2;
  }
}
class pe extends Ct {
  constructor() {
    super(...arguments);
    __publicField(this, "name", St);
    __publicField(this, "isAxisAligned", true);
  }
  projectCoordinate(t2, s2) {
    return s2 || (s2 = new u()), s2.x = t2.x, s2.y = -t2.y, s2.z = t2.z, s2;
  }
  unprojectCoordinate(t2, s2) {
    return s2 || (s2 = new u()), s2.x = t2.x, s2.y = -t2.y, s2.z = t2.z, s2;
  }
}
"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
var ge = { exports: {} };
ge.exports = function() {
  function t2(t3) {
    t3("EPSG:4326", "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"), t3("EPSG:4269", "+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"), t3("EPSG:3857", "+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs");
    for (var s3 = 1; s3 <= 60; ++s3)
      t3("EPSG:" + (32600 + s3), "+proj=utm +zone=" + s3 + " +datum=WGS84 +units=m"), t3("EPSG:" + (32700 + s3), "+proj=utm +zone=" + s3 + " +south +datum=WGS84 +units=m");
    t3.WGS84 = t3["EPSG:4326"], t3["EPSG:3785"] = t3["EPSG:3857"], t3.GOOGLE = t3["EPSG:3857"], t3["EPSG:900913"] = t3["EPSG:3857"], t3["EPSG:102113"] = t3["EPSG:3857"];
  }
  var s2 = 1, i2 = 2, e2 = 3, a2 = 4, n2 = 5, r2 = 6378137, h2 = 6356752314e-3, o2 = 0.0066943799901413165, c2 = 484813681109536e-20, l2 = Math.PI / 2, u2 = 0.16666666666666666, d2 = 0.04722222222222222, m2 = 0.022156084656084655, _2 = 1e-10, f2 = 0.017453292519943295, y2 = 57.29577951308232, p2 = Math.PI / 4, g2 = 2 * Math.PI, M2 = 3.14159265359, x2 = { greenwich: 0, lisbon: -9.131906111111, paris: 2.337229166667, bogota: -74.080916666667, madrid: -3.687938888889, rome: 12.452333333333, bern: 7.439583333333, jakarta: 106.807719444444, ferro: -17.666666666667, brussels: 4.367975, stockholm: 18.058277777778, athens: 23.7163375, oslo: 10.722916666667 }, w2 = { mm: { to_meter: 1e-3 }, cm: { to_meter: 0.01 }, ft: { to_meter: 0.3048 }, "us-ft": { to_meter: 1200 / 3937 }, fath: { to_meter: 1.8288 }, kmi: { to_meter: 1852 }, "us-ch": { to_meter: 20.1168402336805 }, "us-mi": { to_meter: 1609.34721869444 }, km: { to_meter: 1e3 }, "ind-ft": { to_meter: 0.30479841 }, "ind-yd": { to_meter: 0.91439523 }, mi: { to_meter: 1609.344 }, yd: { to_meter: 0.9144 }, ch: { to_meter: 20.1168 }, link: { to_meter: 0.201168 }, dm: { to_meter: 0.1 }, in: { to_meter: 0.0254 }, "ind-ch": { to_meter: 20.11669506 }, "us-in": { to_meter: 0.025400050800101 }, "us-yd": { to_meter: 0.914401828803658 } }, S2 = /[\s_\-\/\(\)]/g;
  function E2(t3, s3) {
    if (t3[s3])
      return t3[s3];
    for (var i3, e3 = Object.keys(t3), a3 = s3.toLowerCase().replace(S2, ""), n3 = -1; ++n3 < e3.length; )
      if ((i3 = e3[n3]).toLowerCase().replace(S2, "") === a3)
        return t3[i3];
  }
  function b2(t3) {
    var s3, i3, e3, a3 = {}, n3 = t3.split("+").map(function(t4) {
      return t4.trim();
    }).filter(function(t4) {
      return t4;
    }).reduce(function(t4, s4) {
      var i4 = s4.split("=");
      return i4.push(true), t4[i4[0].toLowerCase()] = i4[1], t4;
    }, {}), r3 = { proj: "projName", datum: "datumCode", rf: function(t4) {
      a3.rf = parseFloat(t4);
    }, lat_0: function(t4) {
      a3.lat0 = t4 * f2;
    }, lat_1: function(t4) {
      a3.lat1 = t4 * f2;
    }, lat_2: function(t4) {
      a3.lat2 = t4 * f2;
    }, lat_ts: function(t4) {
      a3.lat_ts = t4 * f2;
    }, lon_0: function(t4) {
      a3.long0 = t4 * f2;
    }, lon_1: function(t4) {
      a3.long1 = t4 * f2;
    }, lon_2: function(t4) {
      a3.long2 = t4 * f2;
    }, alpha: function(t4) {
      a3.alpha = parseFloat(t4) * f2;
    }, gamma: function(t4) {
      a3.rectified_grid_angle = parseFloat(t4) * f2;
    }, lonc: function(t4) {
      a3.longc = t4 * f2;
    }, x_0: function(t4) {
      a3.x0 = parseFloat(t4);
    }, y_0: function(t4) {
      a3.y0 = parseFloat(t4);
    }, k_0: function(t4) {
      a3.k0 = parseFloat(t4);
    }, k: function(t4) {
      a3.k0 = parseFloat(t4);
    }, a: function(t4) {
      a3.a = parseFloat(t4);
    }, b: function(t4) {
      a3.b = parseFloat(t4);
    }, r: function(t4) {
      a3.a = a3.b = parseFloat(t4);
    }, r_a: function() {
      a3.R_A = true;
    }, zone: function(t4) {
      a3.zone = parseInt(t4, 10);
    }, south: function() {
      a3.utmSouth = true;
    }, towgs84: function(t4) {
      a3.datum_params = t4.split(",").map(function(t5) {
        return parseFloat(t5);
      });
    }, to_meter: function(t4) {
      a3.to_meter = parseFloat(t4);
    }, units: function(t4) {
      a3.units = t4;
      var s4 = E2(w2, t4);
      s4 && (a3.to_meter = s4.to_meter);
    }, from_greenwich: function(t4) {
      a3.from_greenwich = t4 * f2;
    }, pm: function(t4) {
      var s4 = E2(x2, t4);
      a3.from_greenwich = (s4 || parseFloat(t4)) * f2;
    }, nadgrids: function(t4) {
      "@null" === t4 ? a3.datumCode = "none" : a3.nadgrids = t4;
    }, axis: function(t4) {
      var s4 = "ewnsud";
      3 === t4.length && -1 !== s4.indexOf(t4.substr(0, 1)) && -1 !== s4.indexOf(t4.substr(1, 1)) && -1 !== s4.indexOf(t4.substr(2, 1)) && (a3.axis = t4);
    }, approx: function() {
      a3.approx = true;
    } };
    for (s3 in n3)
      i3 = n3[s3], s3 in r3 ? "function" == typeof (e3 = r3[s3]) ? e3(i3) : a3[e3] = i3 : a3[s3] = i3;
    return "string" == typeof a3.datumCode && "WGS84" !== a3.datumCode && (a3.datumCode = a3.datumCode.toLowerCase()), a3;
  }
  class P2 {
    static getId(t3) {
      const s3 = t3.find((t4) => Array.isArray(t4) && "ID" === t4[0]);
      return s3 && s3.length >= 3 ? { authority: s3[1], code: parseInt(s3[2], 10) } : null;
    }
    static convertUnit(t3, s3 = "unit") {
      if (!t3 || t3.length < 3)
        return { type: s3, name: "unknown", conversion_factor: null };
      const i3 = t3[1], e3 = parseFloat(t3[2]) || null, a3 = t3.find((t4) => Array.isArray(t4) && "ID" === t4[0]);
      return { type: s3, name: i3, conversion_factor: e3, id: a3 ? { authority: a3[1], code: parseInt(a3[2], 10) } : null };
    }
    static convertAxis(t3) {
      var _a2;
      const s3 = t3[1] || "Unknown";
      let i3;
      const e3 = s3.match(/^\((.)\)$/);
      if (e3) {
        const t4 = e3[1].toUpperCase();
        if ("E" === t4)
          i3 = "east";
        else if ("N" === t4)
          i3 = "north";
        else {
          if ("U" !== t4)
            throw new Error(`Unknown axis abbreviation: ${t4}`);
          i3 = "up";
        }
      } else
        i3 = ((_a2 = t3[2]) == null ? void 0 : _a2.toLowerCase()) || "unknown";
      const a3 = t3.find((t4) => Array.isArray(t4) && "ORDER" === t4[0]), n3 = a3 ? parseInt(a3[1], 10) : null, r3 = t3.find((t4) => Array.isArray(t4) && ("LENGTHUNIT" === t4[0] || "ANGLEUNIT" === t4[0] || "SCALEUNIT" === t4[0]));
      return { name: s3, direction: i3, unit: this.convertUnit(r3), order: n3 };
    }
    static extractAxes(t3) {
      return t3.filter((t4) => Array.isArray(t4) && "AXIS" === t4[0]).map((t4) => this.convertAxis(t4)).sort((t4, s3) => (t4.order || 0) - (s3.order || 0));
    }
    static convert(t3, s3 = {}) {
      switch (t3[0]) {
        case "PROJCRS":
          s3.type = "ProjectedCRS", s3.name = t3[1], s3.base_crs = t3.find((t4) => Array.isArray(t4) && "BASEGEOGCRS" === t4[0]) ? this.convert(t3.find((t4) => Array.isArray(t4) && "BASEGEOGCRS" === t4[0])) : null, s3.conversion = t3.find((t4) => Array.isArray(t4) && "CONVERSION" === t4[0]) ? this.convert(t3.find((t4) => Array.isArray(t4) && "CONVERSION" === t4[0])) : null;
          const i3 = t3.find((t4) => Array.isArray(t4) && "CS" === t4[0]);
          i3 && (s3.coordinate_system = { type: i3[1], axis: this.extractAxes(t3) });
          const e3 = t3.find((t4) => Array.isArray(t4) && "LENGTHUNIT" === t4[0]);
          if (e3) {
            const t4 = this.convertUnit(e3);
            s3.coordinate_system.unit = t4;
          }
          s3.id = this.getId(t3);
          break;
        case "BASEGEOGCRS":
        case "GEOGCRS":
          s3.type = "GeographicCRS", s3.name = t3[1];
          const a3 = t3.find((t4) => Array.isArray(t4) && ("DATUM" === t4[0] || "ENSEMBLE" === t4[0]));
          if (a3) {
            const i4 = this.convert(a3);
            "ENSEMBLE" === a3[0] ? s3.datum_ensemble = i4 : s3.datum = i4;
            const e4 = t3.find((t4) => Array.isArray(t4) && "PRIMEM" === t4[0]);
            e4 && "Greenwich" !== e4[1] && (i4.prime_meridian = { name: e4[1], longitude: parseFloat(e4[2]) });
          }
          s3.coordinate_system = { type: "ellipsoidal", axis: this.extractAxes(t3) }, s3.id = this.getId(t3);
          break;
        case "DATUM":
          s3.type = "GeodeticReferenceFrame", s3.name = t3[1], s3.ellipsoid = t3.find((t4) => Array.isArray(t4) && "ELLIPSOID" === t4[0]) ? this.convert(t3.find((t4) => Array.isArray(t4) && "ELLIPSOID" === t4[0])) : null;
          break;
        case "ENSEMBLE":
          s3.type = "DatumEnsemble", s3.name = t3[1], s3.members = t3.filter((t4) => Array.isArray(t4) && "MEMBER" === t4[0]).map((t4) => ({ type: "DatumEnsembleMember", name: t4[1], id: this.getId(t4) }));
          const n3 = t3.find((t4) => Array.isArray(t4) && "ENSEMBLEACCURACY" === t4[0]);
          n3 && (s3.accuracy = parseFloat(n3[1]));
          const r3 = t3.find((t4) => Array.isArray(t4) && "ELLIPSOID" === t4[0]);
          r3 && (s3.ellipsoid = this.convert(r3)), s3.id = this.getId(t3);
          break;
        case "ELLIPSOID":
          s3.type = "Ellipsoid", s3.name = t3[1], s3.semi_major_axis = parseFloat(t3[2]), s3.inverse_flattening = parseFloat(t3[3]), t3.find((t4) => Array.isArray(t4) && "LENGTHUNIT" === t4[0]) && this.convert(t3.find((t4) => Array.isArray(t4) && "LENGTHUNIT" === t4[0]), s3);
          break;
        case "CONVERSION":
          s3.type = "Conversion", s3.name = t3[1], s3.method = t3.find((t4) => Array.isArray(t4) && "METHOD" === t4[0]) ? this.convert(t3.find((t4) => Array.isArray(t4) && "METHOD" === t4[0])) : null, s3.parameters = t3.filter((t4) => Array.isArray(t4) && "PARAMETER" === t4[0]).map((t4) => this.convert(t4));
          break;
        case "METHOD":
          s3.type = "Method", s3.name = t3[1], s3.id = this.getId(t3);
          break;
        case "PARAMETER":
          s3.type = "Parameter", s3.name = t3[1], s3.value = parseFloat(t3[2]), s3.unit = this.convertUnit(t3.find((t4) => Array.isArray(t4) && ("LENGTHUNIT" === t4[0] || "ANGLEUNIT" === t4[0] || "SCALEUNIT" === t4[0]))), s3.id = this.getId(t3);
          break;
        case "BOUNDCRS":
          s3.type = "BoundCRS";
          const h3 = t3.find((t4) => Array.isArray(t4) && "SOURCECRS" === t4[0]);
          if (h3) {
            const t4 = h3.find((t5) => Array.isArray(t5));
            s3.source_crs = t4 ? this.convert(t4) : null;
          }
          const o3 = t3.find((t4) => Array.isArray(t4) && "TARGETCRS" === t4[0]);
          if (o3) {
            const t4 = o3.find((t5) => Array.isArray(t5));
            s3.target_crs = t4 ? this.convert(t4) : null;
          }
          const c3 = t3.find((t4) => Array.isArray(t4) && "ABRIDGEDTRANSFORMATION" === t4[0]);
          s3.transformation = c3 ? this.convert(c3) : null;
          break;
        case "ABRIDGEDTRANSFORMATION":
          if (s3.type = "Transformation", s3.name = t3[1], s3.method = t3.find((t4) => Array.isArray(t4) && "METHOD" === t4[0]) ? this.convert(t3.find((t4) => Array.isArray(t4) && "METHOD" === t4[0])) : null, s3.parameters = t3.filter((t4) => Array.isArray(t4) && ("PARAMETER" === t4[0] || "PARAMETERFILE" === t4[0])).map((t4) => "PARAMETER" === t4[0] ? this.convert(t4) : "PARAMETERFILE" === t4[0] ? { name: t4[1], value: t4[2], id: { authority: "EPSG", code: 8656 } } : void 0), 7 === s3.parameters.length) {
            const t4 = s3.parameters[6];
            "Scale difference" === t4.name && (t4.value = Math.round(1e12 * (t4.value - 1)) / 1e6);
          }
          s3.id = this.getId(t3);
          break;
        case "AXIS":
          s3.coordinate_system || (s3.coordinate_system = { type: "unspecified", axis: [] }), s3.coordinate_system.axis.push(this.convertAxis(t3));
          break;
        case "LENGTHUNIT":
          const l3 = this.convertUnit(t3, "LinearUnit");
          s3.coordinate_system && s3.coordinate_system.axis && s3.coordinate_system.axis.forEach((t4) => {
            t4.unit || (t4.unit = l3);
          }), l3.conversion_factor && 1 !== l3.conversion_factor && s3.semi_major_axis && (s3.semi_major_axis = { value: s3.semi_major_axis, unit: l3 });
          break;
        default:
          s3.keyword = t3[0];
      }
      return s3;
    }
  }
  class v2 extends P2 {
    static convert(t3, s3 = {}) {
      var _a2;
      return super.convert(t3, s3), "Cartesian" === ((_a2 = s3.coordinate_system) == null ? void 0 : _a2.subtype) && delete s3.coordinate_system, s3.usage && delete s3.usage, s3;
    }
  }
  class A2 extends P2 {
    static convert(t3, s3 = {}) {
      var _a2, _b, _c;
      super.convert(t3, s3);
      const i3 = t3.find((t4) => Array.isArray(t4) && "CS" === t4[0]);
      i3 && (s3.coordinate_system = { subtype: i3[1], axis: this.extractAxes(t3) });
      const e3 = t3.find((t4) => Array.isArray(t4) && "USAGE" === t4[0]);
      return e3 && (s3.usage = { scope: (_a2 = e3.find((t4) => Array.isArray(t4) && "SCOPE" === t4[0])) == null ? void 0 : _a2[1], area: (_b = e3.find((t4) => Array.isArray(t4) && "AREA" === t4[0])) == null ? void 0 : _b[1], bbox: (_c = e3.find((t4) => Array.isArray(t4) && "BBOX" === t4[0])) == null ? void 0 : _c.slice(1) }), s3;
    }
  }
  function G2(t3) {
    return t3.find((t4) => Array.isArray(t4) && "USAGE" === t4[0]) ? "2019" : (t3.find((t4) => Array.isArray(t4) && "CS" === t4[0]) || "BOUNDCRS" === t3[0] || "PROJCRS" === t3[0] || t3[0], "2015");
  }
  function C2(t3) {
    return ("2019" === G2(t3) ? A2 : v2).convert(t3);
  }
  function N2(t3) {
    const s3 = t3.toUpperCase();
    return s3.includes("PROJCRS") || s3.includes("GEOGCRS") || s3.includes("BOUNDCRS") || s3.includes("VERTCRS") || s3.includes("LENGTHUNIT") || s3.includes("ANGLEUNIT") || s3.includes("SCALEUNIT") ? "WKT2" : (s3.includes("PROJCS") || s3.includes("GEOGCS") || s3.includes("LOCAL_CS") || s3.includes("VERT_CS") || s3.includes("UNIT"), "WKT1");
  }
  var I2 = 1, z2 = 2, T2 = 3, O2 = 4, R2 = 5, q2 = -1, L2 = /\s/, B2 = /[A-Za-z]/, k2 = /[A-Za-z84_]/, D2 = /[,\]]/, U2 = /[\d\.E\-\+]/;
  function j2(t3) {
    if ("string" != typeof t3)
      throw new Error("not a string");
    this.text = t3.trim(), this.level = 0, this.place = 0, this.root = null, this.stack = [], this.currentObject = null, this.state = I2;
  }
  function F2(t3) {
    return new j2(t3).output();
  }
  function V2(t3, s3, i3) {
    Array.isArray(s3) && (i3.unshift(s3), s3 = null);
    var e3 = s3 ? {} : t3, a3 = i3.reduce(function(t4, s4) {
      return W2(s4, t4), t4;
    }, e3);
    s3 && (t3[s3] = a3);
  }
  function W2(t3, s3) {
    if (Array.isArray(t3)) {
      var i3 = t3.shift();
      if ("PARAMETER" === i3 && (i3 = t3.shift()), 1 === t3.length)
        return Array.isArray(t3[0]) ? (s3[i3] = {}, void W2(t3[0], s3[i3])) : void (s3[i3] = t3[0]);
      if (t3.length)
        if ("TOWGS84" !== i3) {
          if ("AXIS" === i3)
            return i3 in s3 || (s3[i3] = []), void s3[i3].push(t3);
          var e3;
          switch (Array.isArray(i3) || (s3[i3] = {}), i3) {
            case "UNIT":
            case "PRIMEM":
            case "VERT_DATUM":
              return s3[i3] = { name: t3[0].toLowerCase(), convert: t3[1] }, void (3 === t3.length && W2(t3[2], s3[i3]));
            case "SPHEROID":
            case "ELLIPSOID":
              return s3[i3] = { name: t3[0], a: t3[1], rf: t3[2] }, void (4 === t3.length && W2(t3[3], s3[i3]));
            case "EDATUM":
            case "ENGINEERINGDATUM":
            case "LOCAL_DATUM":
            case "DATUM":
            case "VERT_CS":
            case "VERTCRS":
            case "VERTICALCRS":
              return t3[0] = ["name", t3[0]], void V2(s3, i3, t3);
            case "COMPD_CS":
            case "COMPOUNDCRS":
            case "FITTED_CS":
            case "PROJECTEDCRS":
            case "PROJCRS":
            case "GEOGCS":
            case "GEOCCS":
            case "PROJCS":
            case "LOCAL_CS":
            case "GEODCRS":
            case "GEODETICCRS":
            case "GEODETICDATUM":
            case "ENGCRS":
            case "ENGINEERINGCRS":
              return t3[0] = ["name", t3[0]], V2(s3, i3, t3), void (s3[i3].type = i3);
            default:
              for (e3 = -1; ++e3 < t3.length; )
                if (!Array.isArray(t3[e3]))
                  return W2(t3, s3[i3]);
              return V2(s3, i3, t3);
          }
        } else
          s3[i3] = t3;
      else
        s3[i3] = true;
    } else
      s3[t3] = true;
  }
  j2.prototype.readCharicter = function() {
    var t3 = this.text[this.place++];
    if (this.state !== O2)
      for (; L2.test(t3); ) {
        if (this.place >= this.text.length)
          return;
        t3 = this.text[this.place++];
      }
    switch (this.state) {
      case I2:
        return this.neutral(t3);
      case z2:
        return this.keyword(t3);
      case O2:
        return this.quoted(t3);
      case R2:
        return this.afterquote(t3);
      case T2:
        return this.number(t3);
      case q2:
        return;
    }
  }, j2.prototype.afterquote = function(t3) {
    if ('"' === t3)
      return this.word += '"', void (this.state = O2);
    if (D2.test(t3))
      return this.word = this.word.trim(), void this.afterItem(t3);
    throw new Error(`havn't handled "` + t3 + '" in afterquote yet, index ' + this.place);
  }, j2.prototype.afterItem = function(t3) {
    return "," === t3 ? (null !== this.word && this.currentObject.push(this.word), this.word = null, void (this.state = I2)) : "]" === t3 ? (this.level--, null !== this.word && (this.currentObject.push(this.word), this.word = null), this.state = I2, this.currentObject = this.stack.pop(), void (this.currentObject || (this.state = q2))) : void 0;
  }, j2.prototype.number = function(t3) {
    if (!U2.test(t3)) {
      if (D2.test(t3))
        return this.word = parseFloat(this.word), void this.afterItem(t3);
      throw new Error(`havn't handled "` + t3 + '" in number yet, index ' + this.place);
    }
    this.word += t3;
  }, j2.prototype.quoted = function(t3) {
    '"' !== t3 ? this.word += t3 : this.state = R2;
  }, j2.prototype.keyword = function(t3) {
    if (k2.test(t3))
      this.word += t3;
    else {
      if ("[" === t3) {
        var s3 = [];
        return s3.push(this.word), this.level++, null === this.root ? this.root = s3 : this.currentObject.push(s3), this.stack.push(this.currentObject), this.currentObject = s3, void (this.state = I2);
      }
      if (!D2.test(t3))
        throw new Error(`havn't handled "` + t3 + '" in keyword yet, index ' + this.place);
      this.afterItem(t3);
    }
  }, j2.prototype.neutral = function(t3) {
    if (B2.test(t3))
      return this.word = t3, void (this.state = z2);
    if ('"' === t3)
      return this.word = "", void (this.state = O2);
    if (U2.test(t3))
      return this.word = t3, void (this.state = T2);
    if (!D2.test(t3))
      throw new Error(`havn't handled "` + t3 + '" in neutral yet, index ' + this.place);
    this.afterItem(t3);
  }, j2.prototype.output = function() {
    for (; this.place < this.text.length; )
      this.readCharicter();
    if (this.state === q2)
      return this.root;
    throw new Error('unable to parse string "' + this.text + '". State is ' + this.state);
  };
  var H2 = 0.017453292519943295;
  function X2(t3) {
    return t3 * H2;
  }
  function Y2(t3) {
    const s3 = (t3.projName || "").toLowerCase().replace(/_/g, " ");
    t3.long0 || !t3.longc || "albers conic equal area" !== s3 && "lambert azimuthal equal area" !== s3 || (t3.long0 = t3.longc), t3.lat_ts || !t3.lat1 || "stereographic south pole" !== s3 && "polar stereographic (variant b)" !== s3 ? t3.lat_ts || !t3.lat0 || "polar stereographic" !== s3 && "polar stereographic (variant a)" !== s3 || (t3.lat_ts = t3.lat0, t3.lat0 = X2(t3.lat0 > 0 ? 90 : -90), delete t3.lat1) : (t3.lat0 = X2(t3.lat1 > 0 ? 90 : -90), t3.lat_ts = t3.lat1, delete t3.lat1);
  }
  function Z2(t3) {
    let s3 = { units: null, to_meter: void 0 };
    return "string" == typeof t3 ? (s3.units = t3.toLowerCase(), "metre" === s3.units && (s3.units = "meter"), "meter" === s3.units && (s3.to_meter = 1)) : (t3 == null ? void 0 : t3.name) && (s3.units = t3.name.toLowerCase(), "metre" === s3.units && (s3.units = "meter"), s3.to_meter = t3.conversion_factor), s3;
  }
  function Q2(t3) {
    return "object" == typeof t3 ? t3.value * t3.unit.conversion_factor : t3;
  }
  function K2(t3, s3) {
    t3.ellipsoid.radius ? (s3.a = t3.ellipsoid.radius, s3.rf = 0) : (s3.a = Q2(t3.ellipsoid.semi_major_axis), void 0 !== t3.ellipsoid.inverse_flattening ? s3.rf = t3.ellipsoid.inverse_flattening : void 0 !== t3.ellipsoid.semi_major_axis && void 0 !== t3.ellipsoid.semi_minor_axis && (s3.rf = s3.a / (s3.a - Q2(t3.ellipsoid.semi_minor_axis))));
  }
  function J2(t3, s3 = {}) {
    var _a2;
    return t3 && "object" == typeof t3 ? "BoundCRS" === t3.type ? (J2(t3.source_crs, s3), t3.transformation && ("NTv2" === ((_a2 = t3.transformation.method) == null ? void 0 : _a2.name) ? s3.nadgrids = t3.transformation.parameters[0].value : s3.datum_params = t3.transformation.parameters.map((t4) => t4.value)), s3) : (Object.keys(t3).forEach((i3) => {
      var _a3, _b, _c;
      const e3 = t3[i3];
      if (null !== e3)
        switch (i3) {
          case "name":
            if (s3.srsCode)
              break;
            s3.name = e3, s3.srsCode = e3;
            break;
          case "type":
            "GeographicCRS" === e3 ? s3.projName = "longlat" : "ProjectedCRS" === e3 && (s3.projName = (_b = (_a3 = t3.conversion) == null ? void 0 : _a3.method) == null ? void 0 : _b.name);
            break;
          case "datum":
          case "datum_ensemble":
            e3.ellipsoid && (s3.ellps = e3.ellipsoid.name, K2(e3, s3)), e3.prime_meridian && (s3.from_greenwich = e3.prime_meridian.longitude * Math.PI / 180);
            break;
          case "ellipsoid":
            s3.ellps = e3.name, K2(e3, s3);
            break;
          case "prime_meridian":
            s3.long0 = (e3.longitude || 0) * Math.PI / 180;
            break;
          case "coordinate_system":
            if (e3.axis) {
              if (s3.axis = e3.axis.map((t4) => {
                const s4 = t4.direction;
                if ("east" === s4)
                  return "e";
                if ("north" === s4)
                  return "n";
                if ("west" === s4)
                  return "w";
                if ("south" === s4)
                  return "s";
                throw new Error(`Unknown axis direction: ${s4}`);
              }).join("") + "u", e3.unit) {
                const { units: t4, to_meter: i4 } = Z2(e3.unit);
                s3.units = t4, s3.to_meter = i4;
              } else if ((_c = e3.axis[0]) == null ? void 0 : _c.unit) {
                const { units: t4, to_meter: i4 } = Z2(e3.axis[0].unit);
                s3.units = t4, s3.to_meter = i4;
              }
            }
            break;
          case "id":
            e3.authority && e3.code && (s3.title = e3.authority + ":" + e3.code);
            break;
          case "conversion":
            e3.method && e3.method.name && (s3.projName = e3.method.name), e3.parameters && e3.parameters.forEach((t4) => {
              const i4 = t4.name.toLowerCase().replace(/\s+/g, "_"), e4 = t4.value;
              t4.unit && t4.unit.conversion_factor ? s3[i4] = e4 * t4.unit.conversion_factor : "degree" === t4.unit ? s3[i4] = e4 * Math.PI / 180 : s3[i4] = e4;
            });
            break;
          case "unit":
            e3.name && (s3.units = e3.name.toLowerCase(), "metre" === s3.units && (s3.units = "meter")), e3.conversion_factor && (s3.to_meter = e3.conversion_factor);
            break;
          case "base_crs":
            J2(e3, s3), s3.datumCode = e3.id ? e3.id.authority + "_" + e3.id.code : e3.name;
        }
    }), void 0 !== s3.latitude_of_false_origin && (s3.lat0 = s3.latitude_of_false_origin), void 0 !== s3.longitude_of_false_origin && (s3.long0 = s3.longitude_of_false_origin), void 0 !== s3.latitude_of_standard_parallel && (s3.lat0 = s3.latitude_of_standard_parallel, s3.lat1 = s3.latitude_of_standard_parallel), void 0 !== s3.latitude_of_1st_standard_parallel && (s3.lat1 = s3.latitude_of_1st_standard_parallel), void 0 !== s3.latitude_of_2nd_standard_parallel && (s3.lat2 = s3.latitude_of_2nd_standard_parallel), void 0 !== s3.latitude_of_projection_centre && (s3.lat0 = s3.latitude_of_projection_centre), void 0 !== s3.longitude_of_projection_centre && (s3.longc = s3.longitude_of_projection_centre), void 0 !== s3.easting_at_false_origin && (s3.x0 = s3.easting_at_false_origin), void 0 !== s3.northing_at_false_origin && (s3.y0 = s3.northing_at_false_origin), void 0 !== s3.latitude_of_natural_origin && (s3.lat0 = s3.latitude_of_natural_origin), void 0 !== s3.longitude_of_natural_origin && (s3.long0 = s3.longitude_of_natural_origin), void 0 !== s3.longitude_of_origin && (s3.long0 = s3.longitude_of_origin), void 0 !== s3.false_easting && (s3.x0 = s3.false_easting), s3.easting_at_projection_centre && (s3.x0 = s3.easting_at_projection_centre), void 0 !== s3.false_northing && (s3.y0 = s3.false_northing), s3.northing_at_projection_centre && (s3.y0 = s3.northing_at_projection_centre), void 0 !== s3.standard_parallel_1 && (s3.lat1 = s3.standard_parallel_1), void 0 !== s3.standard_parallel_2 && (s3.lat2 = s3.standard_parallel_2), void 0 !== s3.scale_factor_at_natural_origin && (s3.k0 = s3.scale_factor_at_natural_origin), void 0 !== s3.scale_factor_at_projection_centre && (s3.k0 = s3.scale_factor_at_projection_centre), void 0 !== s3.scale_factor_on_pseudo_standard_parallel && (s3.k0 = s3.scale_factor_on_pseudo_standard_parallel), void 0 !== s3.azimuth && (s3.alpha = s3.azimuth), void 0 !== s3.azimuth_at_projection_centre && (s3.alpha = s3.azimuth_at_projection_centre), s3.angle_from_rectified_to_skew_grid && (s3.rectified_grid_angle = s3.angle_from_rectified_to_skew_grid), Y2(s3), s3) : t3;
  }
  var $2 = ["PROJECTEDCRS", "PROJCRS", "GEOGCS", "GEOCCS", "PROJCS", "LOCAL_CS", "GEODCRS", "GEODETICCRS", "GEODETICDATUM", "ENGCRS", "ENGINEERINGCRS"];
  function tt2(t3, s3) {
    var i3 = s3[0], e3 = s3[1];
    !(i3 in t3) && e3 in t3 && (t3[i3] = t3[e3], 3 === s3.length && (t3[i3] = s3[2](t3[i3])));
  }
  function st2(t3) {
    for (var s3 = Object.keys(t3), i3 = 0, e3 = s3.length; i3 < e3; ++i3) {
      var a3 = s3[i3];
      -1 !== $2.indexOf(a3) && it2(t3[a3]), "object" == typeof t3[a3] && st2(t3[a3]);
    }
  }
  function it2(t3) {
    if (t3.AUTHORITY) {
      var s3 = Object.keys(t3.AUTHORITY)[0];
      s3 && s3 in t3.AUTHORITY && (t3.title = s3 + ":" + t3.AUTHORITY[s3]);
    }
    if ("GEOGCS" === t3.type ? t3.projName = "longlat" : "LOCAL_CS" === t3.type ? (t3.projName = "identity", t3.local = true) : "object" == typeof t3.PROJECTION ? t3.projName = Object.keys(t3.PROJECTION)[0] : t3.projName = t3.PROJECTION, t3.AXIS) {
      for (var i3 = "", e3 = 0, a3 = t3.AXIS.length; e3 < a3; ++e3) {
        var n3 = [t3.AXIS[e3][0].toLowerCase(), t3.AXIS[e3][1].toLowerCase()];
        -1 !== n3[0].indexOf("north") || ("y" === n3[0] || "lat" === n3[0]) && "north" === n3[1] ? i3 += "n" : -1 !== n3[0].indexOf("south") || ("y" === n3[0] || "lat" === n3[0]) && "south" === n3[1] ? i3 += "s" : -1 !== n3[0].indexOf("east") || ("x" === n3[0] || "lon" === n3[0]) && "east" === n3[1] ? i3 += "e" : -1 === n3[0].indexOf("west") && ("x" !== n3[0] && "lon" !== n3[0] || "west" !== n3[1]) || (i3 += "w");
      }
      2 === i3.length && (i3 += "u"), 3 === i3.length && (t3.axis = i3);
    }
    t3.UNIT && (t3.units = t3.UNIT.name.toLowerCase(), "metre" === t3.units && (t3.units = "meter"), t3.UNIT.convert && ("GEOGCS" === t3.type ? t3.DATUM && t3.DATUM.SPHEROID && (t3.to_meter = t3.UNIT.convert * t3.DATUM.SPHEROID.a) : t3.to_meter = t3.UNIT.convert));
    var r3 = t3.GEOGCS;
    function h3(s4) {
      return s4 * (t3.to_meter || 1);
    }
    "GEOGCS" === t3.type && (r3 = t3), r3 && (r3.DATUM ? t3.datumCode = r3.DATUM.name.toLowerCase() : t3.datumCode = r3.name.toLowerCase(), "d_" === t3.datumCode.slice(0, 2) && (t3.datumCode = t3.datumCode.slice(2)), "new_zealand_1949" === t3.datumCode && (t3.datumCode = "nzgd49"), "wgs_1984" !== t3.datumCode && "world_geodetic_system_1984" !== t3.datumCode || ("Mercator_Auxiliary_Sphere" === t3.PROJECTION && (t3.sphere = true), t3.datumCode = "wgs84"), "belge_1972" === t3.datumCode && (t3.datumCode = "rnb72"), r3.DATUM && r3.DATUM.SPHEROID && (t3.ellps = r3.DATUM.SPHEROID.name.replace("_19", "").replace(/[Cc]larke\_18/, "clrk"), "international" === t3.ellps.toLowerCase().slice(0, 13) && (t3.ellps = "intl"), t3.a = r3.DATUM.SPHEROID.a, t3.rf = parseFloat(r3.DATUM.SPHEROID.rf, 10)), r3.DATUM && r3.DATUM.TOWGS84 && (t3.datum_params = r3.DATUM.TOWGS84), ~t3.datumCode.indexOf("osgb_1936") && (t3.datumCode = "osgb36"), ~t3.datumCode.indexOf("osni_1952") && (t3.datumCode = "osni52"), (~t3.datumCode.indexOf("tm65") || ~t3.datumCode.indexOf("geodetic_datum_of_1965")) && (t3.datumCode = "ire65"), "ch1903+" === t3.datumCode && (t3.datumCode = "ch1903"), ~t3.datumCode.indexOf("israel") && (t3.datumCode = "isr93")), t3.b && !isFinite(t3.b) && (t3.b = t3.a), t3.rectified_grid_angle && (t3.rectified_grid_angle = X2(t3.rectified_grid_angle)), [["standard_parallel_1", "Standard_Parallel_1"], ["standard_parallel_1", "Latitude of 1st standard parallel"], ["standard_parallel_2", "Standard_Parallel_2"], ["standard_parallel_2", "Latitude of 2nd standard parallel"], ["false_easting", "False_Easting"], ["false_easting", "False easting"], ["false-easting", "Easting at false origin"], ["false_northing", "False_Northing"], ["false_northing", "False northing"], ["false_northing", "Northing at false origin"], ["central_meridian", "Central_Meridian"], ["central_meridian", "Longitude of natural origin"], ["central_meridian", "Longitude of false origin"], ["latitude_of_origin", "Latitude_Of_Origin"], ["latitude_of_origin", "Central_Parallel"], ["latitude_of_origin", "Latitude of natural origin"], ["latitude_of_origin", "Latitude of false origin"], ["scale_factor", "Scale_Factor"], ["k0", "scale_factor"], ["latitude_of_center", "Latitude_Of_Center"], ["latitude_of_center", "Latitude_of_center"], ["lat0", "latitude_of_center", X2], ["longitude_of_center", "Longitude_Of_Center"], ["longitude_of_center", "Longitude_of_center"], ["longc", "longitude_of_center", X2], ["x0", "false_easting", h3], ["y0", "false_northing", h3], ["long0", "central_meridian", X2], ["lat0", "latitude_of_origin", X2], ["lat0", "standard_parallel_1", X2], ["lat1", "standard_parallel_1", X2], ["lat2", "standard_parallel_2", X2], ["azimuth", "Azimuth"], ["alpha", "azimuth", X2], ["srsCode", "name"]].forEach(function(s4) {
      return tt2(t3, s4);
    }), Y2(t3);
  }
  function et2(t3) {
    if ("object" == typeof t3)
      return J2(t3);
    const s3 = N2(t3);
    var i3 = F2(t3);
    if ("WKT2" === s3)
      return J2(C2(i3));
    var e3 = i3[0], a3 = {};
    return W2(i3, a3), st2(a3), a3[e3];
  }
  function at2(t3) {
    var s3 = this;
    if (2 === arguments.length) {
      var i3 = arguments[1];
      "string" == typeof i3 ? "+" === i3.charAt(0) ? at2[t3] = b2(arguments[1]) : at2[t3] = et2(arguments[1]) : at2[t3] = i3;
    } else if (1 === arguments.length) {
      if (Array.isArray(t3))
        return t3.map(function(t4) {
          Array.isArray(t4) ? at2.apply(s3, t4) : at2(t4);
        });
      if ("string" == typeof t3) {
        if (t3 in at2)
          return at2[t3];
      } else
        "EPSG" in t3 ? at2["EPSG:" + t3.EPSG] = t3 : "ESRI" in t3 ? at2["ESRI:" + t3.ESRI] = t3 : "IAU2000" in t3 ? at2["IAU2000:" + t3.IAU2000] = t3 : console.log(t3);
      return;
    }
  }
  function nt2(t3) {
    return "string" == typeof t3;
  }
  function rt2(t3) {
    return t3 in at2;
  }
  function ht2(t3) {
    return 0 !== t3.indexOf("+") && -1 !== t3.indexOf("[") || "object" == typeof t3 && !("srsCode" in t3);
  }
  t2(at2);
  var ot2 = ["3857", "900913", "3785", "102113"];
  function ct2(t3) {
    var s3 = E2(t3, "authority");
    if (s3) {
      var i3 = E2(s3, "epsg");
      return i3 && ot2.indexOf(i3) > -1;
    }
  }
  function lt2(t3) {
    var s3 = E2(t3, "extension");
    if (s3)
      return E2(s3, "proj4");
  }
  function ut2(t3) {
    return "+" === t3[0];
  }
  function dt2(t3) {
    if (!nt2(t3))
      return t3.projName ? t3 : et2(t3);
    if (rt2(t3))
      return at2[t3];
    if (ht2(t3)) {
      var s3 = et2(t3);
      if (ct2(s3))
        return at2["EPSG:3857"];
      var i3 = lt2(s3);
      return i3 ? b2(i3) : s3;
    }
    return ut2(t3) ? b2(t3) : void 0;
  }
  function mt2(t3, s3) {
    var i3, e3;
    if (t3 = t3 || {}, !s3)
      return t3;
    for (e3 in s3)
      void 0 !== (i3 = s3[e3]) && (t3[e3] = i3);
    return t3;
  }
  function _t2(t3, s3, i3) {
    var e3 = t3 * s3;
    return i3 / Math.sqrt(1 - e3 * e3);
  }
  function ft2(t3) {
    return t3 < 0 ? -1 : 1;
  }
  function yt2(t3) {
    return Math.abs(t3) <= M2 ? t3 : t3 - ft2(t3) * g2;
  }
  function pt2(t3, s3, i3) {
    var e3 = t3 * i3, a3 = 0.5 * t3;
    return e3 = Math.pow((1 - e3) / (1 + e3), a3), Math.tan(0.5 * (l2 - s3)) / e3;
  }
  function gt2(t3, s3) {
    for (var i3, e3, a3 = 0.5 * t3, n3 = l2 - 2 * Math.atan(s3), r3 = 0; r3 <= 15; r3++)
      if (i3 = t3 * Math.sin(n3), n3 += e3 = l2 - 2 * Math.atan(s3 * Math.pow((1 - i3) / (1 + i3), a3)) - n3, Math.abs(e3) <= 1e-10)
        return n3;
    return -9999;
  }
  function Mt2() {
    var t3 = this.b / this.a;
    this.es = 1 - t3 * t3, "x0" in this || (this.x0 = 0), "y0" in this || (this.y0 = 0), this.e = Math.sqrt(this.es), this.lat_ts ? this.sphere ? this.k0 = Math.cos(this.lat_ts) : this.k0 = _t2(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) : this.k0 || (this.k ? this.k0 = this.k : this.k0 = 1);
  }
  function xt2(t3) {
    var s3, i3, e3 = t3.x, a3 = t3.y;
    if (a3 * y2 > 90 && a3 * y2 < -90 && e3 * y2 > 180 && e3 * y2 < -180)
      return null;
    if (Math.abs(Math.abs(a3) - l2) <= _2)
      return null;
    if (this.sphere)
      s3 = this.x0 + this.a * this.k0 * yt2(e3 - this.long0), i3 = this.y0 + this.a * this.k0 * Math.log(Math.tan(p2 + 0.5 * a3));
    else {
      var n3 = Math.sin(a3), r3 = pt2(this.e, a3, n3);
      s3 = this.x0 + this.a * this.k0 * yt2(e3 - this.long0), i3 = this.y0 - this.a * this.k0 * Math.log(r3);
    }
    return t3.x = s3, t3.y = i3, t3;
  }
  function wt2(t3) {
    var s3, i3, e3 = t3.x - this.x0, a3 = t3.y - this.y0;
    if (this.sphere)
      i3 = l2 - 2 * Math.atan(Math.exp(-a3 / (this.a * this.k0)));
    else {
      var n3 = Math.exp(-a3 / (this.a * this.k0));
      if (-9999 === (i3 = gt2(this.e, n3)))
        return null;
    }
    return s3 = yt2(this.long0 + e3 / (this.a * this.k0)), t3.x = s3, t3.y = i3, t3;
  }
  function St2() {
  }
  function Et2(t3) {
    return t3;
  }
  var bt2 = [{ init: Mt2, forward: xt2, inverse: wt2, names: ["Mercator", "Popular Visualisation Pseudo Mercator", "Mercator_1SP", "Mercator_Auxiliary_Sphere", "Mercator_Variant_A", "merc"] }, { init: St2, forward: Et2, inverse: Et2, names: ["longlat", "identity"] }], Pt2 = {}, vt2 = [];
  function At2(t3, s3) {
    var i3 = vt2.length;
    return t3.names ? (vt2[i3] = t3, t3.names.forEach(function(t4) {
      Pt2[t4.toLowerCase()] = i3;
    }), this) : (console.log(s3), true);
  }
  function Gt2(t3) {
    return t3.replace(/[-\(\)\s]+/g, " ").trim().replace(/ /g, "_");
  }
  function Ct2(t3) {
    if (!t3)
      return false;
    var s3 = t3.toLowerCase();
    return void 0 !== Pt2[s3] && vt2[Pt2[s3]] || (s3 = Gt2(s3)) in Pt2 && vt2[Pt2[s3]] ? vt2[Pt2[s3]] : void 0;
  }
  function Nt2() {
    bt2.forEach(At2);
  }
  var It2 = { start: Nt2, add: At2, get: Ct2 }, zt2 = { MERIT: { a: 6378137, rf: 298.257, ellipseName: "MERIT 1983" }, SGS85: { a: 6378136, rf: 298.257, ellipseName: "Soviet Geodetic System 85" }, GRS80: { a: 6378137, rf: 298.257222101, ellipseName: "GRS 1980(IUGG, 1980)" }, IAU76: { a: 6378140, rf: 298.257, ellipseName: "IAU 1976" }, airy: { a: 6377563396e-3, b: 635625691e-2, ellipseName: "Airy 1830" }, APL4: { a: 6378137, rf: 298.25, ellipseName: "Appl. Physics. 1965" }, NWL9D: { a: 6378145, rf: 298.25, ellipseName: "Naval Weapons Lab., 1965" }, mod_airy: { a: 6377340189e-3, b: 6356034446e-3, ellipseName: "Modified Airy" }, andrae: { a: 637710443e-2, rf: 300, ellipseName: "Andrae 1876 (Den., Iclnd.)" }, aust_SA: { a: 6378160, rf: 298.25, ellipseName: "Australian Natl & S. Amer. 1969" }, GRS67: { a: 6378160, rf: 298.247167427, ellipseName: "GRS 67(IUGG 1967)" }, bessel: { a: 6377397155e-3, rf: 299.1528128, ellipseName: "Bessel 1841" }, bess_nam: { a: 6377483865e-3, rf: 299.1528128, ellipseName: "Bessel 1841 (Namibia)" }, clrk66: { a: 63782064e-1, b: 63565838e-1, ellipseName: "Clarke 1866" }, clrk80: { a: 6378249145e-3, rf: 293.4663, ellipseName: "Clarke 1880 mod." }, clrk80ign: { a: 63782492e-1, b: 6356515, rf: 293.4660213, ellipseName: "Clarke 1880 (IGN)" }, clrk58: { a: 6378293645208759e-9, rf: 294.2606763692654, ellipseName: "Clarke 1858" }, CPM: { a: 63757387e-1, rf: 334.29, ellipseName: "Comm. des Poids et Mesures 1799" }, delmbr: { a: 6376428, rf: 311.5, ellipseName: "Delambre 1810 (Belgium)" }, engelis: { a: 637813605e-2, rf: 298.2566, ellipseName: "Engelis 1985" }, evrst30: { a: 6377276345e-3, rf: 300.8017, ellipseName: "Everest 1830" }, evrst48: { a: 6377304063e-3, rf: 300.8017, ellipseName: "Everest 1948" }, evrst56: { a: 6377301243e-3, rf: 300.8017, ellipseName: "Everest 1956" }, evrst69: { a: 6377295664e-3, rf: 300.8017, ellipseName: "Everest 1969" }, evrstSS: { a: 6377298556e-3, rf: 300.8017, ellipseName: "Everest (Sabah & Sarawak)" }, fschr60: { a: 6378166, rf: 298.3, ellipseName: "Fischer (Mercury Datum) 1960" }, fschr60m: { a: 6378155, rf: 298.3, ellipseName: "Fischer 1960" }, fschr68: { a: 6378150, rf: 298.3, ellipseName: "Fischer 1968" }, helmert: { a: 6378200, rf: 298.3, ellipseName: "Helmert 1906" }, hough: { a: 6378270, rf: 297, ellipseName: "Hough" }, intl: { a: 6378388, rf: 297, ellipseName: "International 1909 (Hayford)" }, kaula: { a: 6378163, rf: 298.24, ellipseName: "Kaula 1961" }, lerch: { a: 6378139, rf: 298.257, ellipseName: "Lerch 1979" }, mprts: { a: 6397300, rf: 191, ellipseName: "Maupertius 1738" }, new_intl: { a: 63781575e-1, b: 63567722e-1, ellipseName: "New International 1967" }, plessis: { a: 6376523, rf: 6355863, ellipseName: "Plessis 1817 (France)" }, krass: { a: 6378245, rf: 298.3, ellipseName: "Krassovsky, 1942" }, SEasia: { a: 6378155, b: 63567733205e-4, ellipseName: "Southeast Asia" }, walbeck: { a: 6376896, b: 63558348467e-4, ellipseName: "Walbeck" }, WGS60: { a: 6378165, rf: 298.3, ellipseName: "WGS 60" }, WGS66: { a: 6378145, rf: 298.25, ellipseName: "WGS 66" }, WGS7: { a: 6378135, rf: 298.26, ellipseName: "WGS 72" }, WGS84: { a: 6378137, rf: 298.257223563, ellipseName: "WGS 84" }, sphere: { a: 6370997, b: 6370997, ellipseName: "Normal Sphere (r=6370997)" } };
  const Tt2 = zt2.WGS84;
  function Ot2(t3, s3, i3, e3) {
    var a3 = t3 * t3, n3 = s3 * s3, r3 = (a3 - n3) / a3, h3 = 0;
    return e3 ? (a3 = (t3 *= 1 - r3 * (u2 + r3 * (d2 + r3 * m2))) * t3, r3 = 0) : h3 = Math.sqrt(r3), { es: r3, e: h3, ep2: (a3 - n3) / n3 };
  }
  function Rt2(t3, s3, i3, e3, a3) {
    if (!t3) {
      var n3 = E2(zt2, e3);
      n3 || (n3 = Tt2), t3 = n3.a, s3 = n3.b, i3 = n3.rf;
    }
    return i3 && !s3 && (s3 = (1 - 1 / i3) * t3), (0 === i3 || Math.abs(t3 - s3) < _2) && (a3 = true, s3 = t3), { a: t3, b: s3, rf: i3, sphere: a3 };
  }
  var qt2 = { wgs84: { towgs84: "0,0,0", ellipse: "WGS84", datumName: "WGS84" }, ch1903: { towgs84: "674.374,15.056,405.346", ellipse: "bessel", datumName: "swiss" }, ggrs87: { towgs84: "-199.87,74.79,246.62", ellipse: "GRS80", datumName: "Greek_Geodetic_Reference_System_1987" }, nad83: { towgs84: "0,0,0", ellipse: "GRS80", datumName: "North_American_Datum_1983" }, nad27: { nadgrids: "@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat", ellipse: "clrk66", datumName: "North_American_Datum_1927" }, potsdam: { towgs84: "598.1,73.7,418.2,0.202,0.045,-2.455,6.7", ellipse: "bessel", datumName: "Potsdam Rauenberg 1950 DHDN" }, carthage: { towgs84: "-263.0,6.0,431.0", ellipse: "clark80", datumName: "Carthage 1934 Tunisia" }, hermannskogel: { towgs84: "577.326,90.129,463.919,5.137,1.474,5.297,2.4232", ellipse: "bessel", datumName: "Hermannskogel" }, mgi: { towgs84: "577.326,90.129,463.919,5.137,1.474,5.297,2.4232", ellipse: "bessel", datumName: "Militar-Geographische Institut" }, osni52: { towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15", ellipse: "airy", datumName: "Irish National" }, ire65: { towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15", ellipse: "mod_airy", datumName: "Ireland 1965" }, rassadiran: { towgs84: "-133.63,-157.5,-158.62", ellipse: "intl", datumName: "Rassadiran" }, nzgd49: { towgs84: "59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993", ellipse: "intl", datumName: "New Zealand Geodetic Datum 1949" }, osgb36: { towgs84: "446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894", ellipse: "airy", datumName: "Ordnance Survey of Great Britain 1936" }, s_jtsk: { towgs84: "589,76,480", ellipse: "bessel", datumName: "S-JTSK (Ferro)" }, beduaram: { towgs84: "-106,-87,188", ellipse: "clrk80", datumName: "Beduaram" }, gunung_segara: { towgs84: "-403,684,41", ellipse: "bessel", datumName: "Gunung Segara Jakarta" }, rnb72: { towgs84: "106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1", ellipse: "intl", datumName: "Reseau National Belge 1972" }, EPSG_5451: { towgs84: "6.41,-49.05,-11.28,1.5657,0.5242,6.9718,-5.7649" }, IGNF_LURESG: { towgs84: "-192.986,13.673,-39.309,-0.4099,-2.9332,2.6881,0.43" }, EPSG_4614: { towgs84: "-119.4248,-303.65872,-11.00061,1.164298,0.174458,1.096259,3.657065" }, EPSG_4615: { towgs84: "-494.088,-312.129,279.877,-1.423,-1.013,1.59,-0.748" }, ESRI_37241: { towgs84: "-76.822,257.457,-12.817,2.136,-0.033,-2.392,-0.031" }, ESRI_37249: { towgs84: "-440.296,58.548,296.265,1.128,10.202,4.559,-0.438" }, ESRI_37245: { towgs84: "-511.151,-181.269,139.609,1.05,2.703,1.798,3.071" }, EPSG_4178: { towgs84: "24.9,-126.4,-93.2,-0.063,-0.247,-0.041,1.01" }, EPSG_4622: { towgs84: "-472.29,-5.63,-304.12,0.4362,-0.8374,0.2563,1.8984" }, EPSG_4625: { towgs84: "126.93,547.94,130.41,-2.7867,5.1612,-0.8584,13.8227" }, EPSG_5252: { towgs84: "0.023,0.036,-0.068,0.00176,0.00912,-0.01136,0.00439" }, EPSG_4314: { towgs84: "597.1,71.4,412.1,0.894,0.068,-1.563,7.58" }, EPSG_4282: { towgs84: "-178.3,-316.7,-131.5,5.278,6.077,10.979,19.166" }, EPSG_4231: { towgs84: "-83.11,-97.38,-117.22,0.0276,-0.2167,0.2147,0.1218" }, EPSG_4274: { towgs84: "-230.994,102.591,25.199,0.633,-0.239,0.9,1.95" }, EPSG_4134: { towgs84: "-180.624,-225.516,173.919,-0.81,-1.898,8.336,16.71006" }, EPSG_4254: { towgs84: "18.38,192.45,96.82,0.056,-0.142,-0.2,-0.0013" }, EPSG_4159: { towgs84: "-194.513,-63.978,-25.759,-3.4027,3.756,-3.352,-0.9175" }, EPSG_4687: { towgs84: "0.072,-0.507,-0.245,0.0183,-0.0003,0.007,-0.0093" }, EPSG_4227: { towgs84: "-83.58,-397.54,458.78,-17.595,-2.847,4.256,3.225" }, EPSG_4746: { towgs84: "599.4,72.4,419.2,-0.062,-0.022,-2.723,6.46" }, EPSG_4745: { towgs84: "612.4,77,440.2,-0.054,0.057,-2.797,2.55" }, EPSG_6311: { towgs84: "8.846,-4.394,-1.122,-0.00237,-0.146528,0.130428,0.783926" }, EPSG_4289: { towgs84: "565.7381,50.4018,465.2904,-1.91514,1.60363,-9.09546,4.07244" }, EPSG_4230: { towgs84: "-68.863,-134.888,-111.49,-0.53,-0.14,0.57,-3.4" }, EPSG_4154: { towgs84: "-123.02,-158.95,-168.47" }, EPSG_4156: { towgs84: "570.8,85.7,462.8,4.998,1.587,5.261,3.56" }, EPSG_4299: { towgs84: "482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15" }, EPSG_4179: { towgs84: "33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84" }, EPSG_4313: { towgs84: "-106.8686,52.2978,-103.7239,0.3366,-0.457,1.8422,-1.2747" }, EPSG_4194: { towgs84: "163.511,127.533,-159.789" }, EPSG_4195: { towgs84: "105,326,-102.5" }, EPSG_4196: { towgs84: "-45,417,-3.5" }, EPSG_4611: { towgs84: "-162.619,-276.959,-161.764,0.067753,-2.243649,-1.158827,-1.094246" }, EPSG_4633: { towgs84: "137.092,131.66,91.475,-1.9436,-11.5993,-4.3321,-7.4824" }, EPSG_4641: { towgs84: "-408.809,366.856,-412.987,1.8842,-0.5308,2.1655,-121.0993" }, EPSG_4643: { towgs84: "-480.26,-438.32,-643.429,16.3119,20.1721,-4.0349,-111.7002" }, EPSG_4300: { towgs84: "482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15" }, EPSG_4188: { towgs84: "482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15" }, EPSG_4660: { towgs84: "982.6087,552.753,-540.873,32.39344,-153.25684,-96.2266,16.805" }, EPSG_4662: { towgs84: "97.295,-263.247,310.882,-1.5999,0.8386,3.1409,13.3259" }, EPSG_3906: { towgs84: "577.88891,165.22205,391.18289,4.9145,-0.94729,-13.05098,7.78664" }, EPSG_4307: { towgs84: "-209.3622,-87.8162,404.6198,0.0046,3.4784,0.5805,-1.4547" }, EPSG_6892: { towgs84: "-76.269,-16.683,68.562,-6.275,10.536,-4.286,-13.686" }, EPSG_4690: { towgs84: "221.597,152.441,176.523,2.403,1.3893,0.884,11.4648" }, EPSG_4691: { towgs84: "218.769,150.75,176.75,3.5231,2.0037,1.288,10.9817" }, EPSG_4629: { towgs84: "72.51,345.411,79.241,-1.5862,-0.8826,-0.5495,1.3653" }, EPSG_4630: { towgs84: "165.804,216.213,180.26,-0.6251,-0.4515,-0.0721,7.4111" }, EPSG_4692: { towgs84: "217.109,86.452,23.711,0.0183,-0.0003,0.007,-0.0093" }, EPSG_9333: { towgs84: "0,0,0,-8.393,0.749,-10.276,0" }, EPSG_9059: { towgs84: "0,0,0" }, EPSG_4312: { towgs84: "601.705,84.263,485.227,4.7354,1.3145,5.393,-2.3887" }, EPSG_4123: { towgs84: "-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496" }, EPSG_4309: { towgs84: "-124.45,183.74,44.64,-0.4384,0.5446,-0.9706,-2.1365" }, ESRI_104106: { towgs84: "-283.088,-70.693,117.445,-1.157,0.059,-0.652,-4.058" }, EPSG_4281: { towgs84: "-219.247,-73.802,269.529" }, EPSG_4322: { towgs84: "0,0,4.5" }, EPSG_4324: { towgs84: "0,0,1.9" }, EPSG_4284: { towgs84: "43.822,-108.842,-119.585,1.455,-0.761,0.737,0.549" }, EPSG_4277: { towgs84: "446.448,-125.157,542.06,0.15,0.247,0.842,-20.489" }, EPSG_4207: { towgs84: "-282.1,-72.2,120,-1.529,0.145,-0.89,-4.46" }, EPSG_4688: { towgs84: "347.175,1077.618,2623.677,33.9058,-70.6776,9.4013,186.0647" }, EPSG_4689: { towgs84: "410.793,54.542,80.501,-2.5596,-2.3517,-0.6594,17.3218" }, EPSG_4720: { towgs84: "0,0,4.5" }, EPSG_4273: { towgs84: "278.3,93,474.5,7.889,0.05,-6.61,6.21" }, EPSG_4240: { towgs84: "204.64,834.74,293.8" }, EPSG_4817: { towgs84: "278.3,93,474.5,7.889,0.05,-6.61,6.21" }, ESRI_104131: { towgs84: "426.62,142.62,460.09,4.98,4.49,-12.42,-17.1" }, EPSG_4265: { towgs84: "-104.1,-49.1,-9.9,0.971,-2.917,0.714,-11.68" }, EPSG_4263: { towgs84: "-111.92,-87.85,114.5,1.875,0.202,0.219,0.032" }, EPSG_4298: { towgs84: "-689.5937,623.84046,-65.93566,-0.02331,1.17094,-0.80054,5.88536" }, EPSG_4270: { towgs84: "-253.4392,-148.452,386.5267,0.15605,0.43,-0.1013,-0.0424" }, EPSG_4229: { towgs84: "-121.8,98.1,-10.7" }, EPSG_4220: { towgs84: "-55.5,-348,-229.2" }, EPSG_4214: { towgs84: "12.646,-155.176,-80.863" }, EPSG_4232: { towgs84: "-345,3,223" }, EPSG_4238: { towgs84: "-1.977,-13.06,-9.993,0.364,0.254,0.689,-1.037" }, EPSG_4168: { towgs84: "-170,33,326" }, EPSG_4131: { towgs84: "199,931,318.9" }, EPSG_4152: { towgs84: "-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0" }, EPSG_5228: { towgs84: "572.213,85.334,461.94,4.9732,1.529,5.2484,3.5378" }, EPSG_8351: { towgs84: "485.021,169.465,483.839,7.786342,4.397554,4.102655,0" }, EPSG_4683: { towgs84: "-127.62,-67.24,-47.04,-3.068,4.903,1.578,-1.06" }, EPSG_4133: { towgs84: "0,0,0" }, EPSG_7373: { towgs84: "0.819,-0.5762,-1.6446,-0.00378,-0.03317,0.00318,0.0693" }, EPSG_9075: { towgs84: "-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0" }, EPSG_9072: { towgs84: "-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0" }, EPSG_9294: { towgs84: "1.16835,-1.42001,-2.24431,-0.00822,-0.05508,0.01818,0.23388" }, EPSG_4212: { towgs84: "-267.434,173.496,181.814,-13.4704,8.7154,7.3926,14.7492" }, EPSG_4191: { towgs84: "-44.183,-0.58,-38.489,2.3867,2.7072,-3.5196,-8.2703" }, EPSG_4237: { towgs84: "52.684,-71.194,-13.975,-0.312,-0.1063,-0.3729,1.0191" }, EPSG_4740: { towgs84: "-1.08,-0.27,-0.9" }, EPSG_4124: { towgs84: "419.3836,99.3335,591.3451,0.850389,1.817277,-7.862238,-0.99496" }, EPSG_5681: { towgs84: "584.9636,107.7175,413.8067,1.1155,0.2824,-3.1384,7.9922" }, EPSG_4141: { towgs84: "23.772,17.49,17.859,-0.3132,-1.85274,1.67299,-5.4262" }, EPSG_4204: { towgs84: "-85.645,-273.077,-79.708,2.289,-1.421,2.532,3.194" }, EPSG_4319: { towgs84: "226.702,-193.337,-35.371,-2.229,-4.391,9.238,0.9798" }, EPSG_4200: { towgs84: "24.82,-131.21,-82.66" }, EPSG_4130: { towgs84: "0,0,0" }, EPSG_4127: { towgs84: "-82.875,-57.097,-156.768,-2.158,1.524,-0.982,-0.359" }, EPSG_4149: { towgs84: "674.374,15.056,405.346" }, EPSG_4617: { towgs84: "-0.991,1.9072,0.5129,1.25033e-7,4.6785e-8,5.6529e-8,0" }, EPSG_4663: { towgs84: "-210.502,-66.902,-48.476,2.094,-15.067,-5.817,0.485" }, EPSG_4664: { towgs84: "-211.939,137.626,58.3,-0.089,0.251,0.079,0.384" }, EPSG_4665: { towgs84: "-105.854,165.589,-38.312,-0.003,-0.026,0.024,-0.048" }, EPSG_4666: { towgs84: "631.392,-66.551,481.442,1.09,-4.445,-4.487,-4.43" }, EPSG_4756: { towgs84: "-192.873,-39.382,-111.202,-0.00205,-0.0005,0.00335,0.0188" }, EPSG_4723: { towgs84: "-179.483,-69.379,-27.584,-7.862,8.163,6.042,-13.925" }, EPSG_4726: { towgs84: "8.853,-52.644,180.304,-0.393,-2.323,2.96,-24.081" }, EPSG_4267: { towgs84: "-8.0,160.0,176.0" }, EPSG_5365: { towgs84: "-0.16959,0.35312,0.51846,0.03385,-0.16325,0.03446,0.03693" }, EPSG_4218: { towgs84: "304.5,306.5,-318.1" }, EPSG_4242: { towgs84: "-33.722,153.789,94.959,-8.581,-4.478,4.54,8.95" }, EPSG_4216: { towgs84: "-292.295,248.758,429.447,4.9971,2.99,6.6906,1.0289" }, ESRI_104105: { towgs84: "631.392,-66.551,481.442,1.09,-4.445,-4.487,-4.43" }, ESRI_104129: { towgs84: "0,0,0" }, EPSG_4673: { towgs84: "174.05,-25.49,112.57" }, EPSG_4202: { towgs84: "-124,-60,154" }, EPSG_4203: { towgs84: "-117.763,-51.51,139.061,0.292,0.443,0.277,-0.191" }, EPSG_3819: { towgs84: "595.48,121.69,515.35,4.115,-2.9383,0.853,-3.408" }, EPSG_8694: { towgs84: "-93.799,-132.737,-219.073,-1.844,0.648,-6.37,-0.169" }, EPSG_4145: { towgs84: "275.57,676.78,229.6" }, EPSG_4283: { towgs84: "61.55,-10.87,-40.19,39.4924,32.7221,32.8979,-9.994" }, EPSG_4317: { towgs84: "2.3287,-147.0425,-92.0802,-0.3092483,0.32482185,0.49729934,5.68906266" }, EPSG_4272: { towgs84: "59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993" }, EPSG_4248: { towgs84: "-307.7,265.3,-363.5" }, EPSG_5561: { towgs84: "24,-121,-76" }, EPSG_5233: { towgs84: "-0.293,766.95,87.713,0.195704,1.695068,3.473016,-0.039338" }, ESRI_104130: { towgs84: "-86,-98,-119" }, ESRI_104102: { towgs84: "682,-203,480" }, ESRI_37207: { towgs84: "7,-10,-26" }, EPSG_4675: { towgs84: "59.935,118.4,-10.871" }, ESRI_104109: { towgs84: "-89.121,-348.182,260.871" }, ESRI_104112: { towgs84: "-185.583,-230.096,281.361" }, ESRI_104113: { towgs84: "25.1,-275.6,222.6" }, IGNF_WGS72G: { towgs84: "0,12,6" }, IGNF_NTFG: { towgs84: "-168,-60,320" }, IGNF_EFATE57G: { towgs84: "-127,-769,472" }, IGNF_PGP50G: { towgs84: "324.8,153.6,172.1" }, IGNF_REUN47G: { towgs84: "94,-948,-1262" }, IGNF_CSG67G: { towgs84: "-186,230,110" }, IGNF_GUAD48G: { towgs84: "-467,-16,-300" }, IGNF_TAHI51G: { towgs84: "162,117,154" }, IGNF_TAHAAG: { towgs84: "65,342,77" }, IGNF_NUKU72G: { towgs84: "84,274,65" }, IGNF_PETRELS72G: { towgs84: "365,194,166" }, IGNF_WALL78G: { towgs84: "253,-133,-127" }, IGNF_MAYO50G: { towgs84: "-382,-59,-262" }, IGNF_TANNAG: { towgs84: "-139,-967,436" }, IGNF_IGN72G: { towgs84: "-13,-348,292" }, IGNF_ATIGG: { towgs84: "1118,23,66" }, IGNF_FANGA84G: { towgs84: "150.57,158.33,118.32" }, IGNF_RUSAT84G: { towgs84: "202.13,174.6,-15.74" }, IGNF_KAUE70G: { towgs84: "126.74,300.1,-75.49" }, IGNF_MOP90G: { towgs84: "-10.8,-1.8,12.77" }, IGNF_MHPF67G: { towgs84: "338.08,212.58,-296.17" }, IGNF_TAHI79G: { towgs84: "160.61,116.05,153.69" }, IGNF_ANAA92G: { towgs84: "1.5,3.84,4.81" }, IGNF_MARQUI72G: { towgs84: "330.91,-13.92,58.56" }, IGNF_APAT86G: { towgs84: "143.6,197.82,74.05" }, IGNF_TUBU69G: { towgs84: "237.17,171.61,-77.84" }, IGNF_STPM50G: { towgs84: "11.363,424.148,373.13" }, EPSG_4150: { towgs84: "674.374,15.056,405.346" }, EPSG_4754: { towgs84: "-208.4058,-109.8777,-2.5764" }, ESRI_104101: { towgs84: "374,150,588" }, EPSG_4693: { towgs84: "0,-0.15,0.68" }, EPSG_6207: { towgs84: "293.17,726.18,245.36" }, EPSG_4153: { towgs84: "-133.63,-157.5,-158.62" }, EPSG_4132: { towgs84: "-241.54,-163.64,396.06" }, EPSG_4221: { towgs84: "-154.5,150.7,100.4" }, EPSG_4266: { towgs84: "-80.7,-132.5,41.1" }, EPSG_4193: { towgs84: "-70.9,-151.8,-41.4" }, EPSG_5340: { towgs84: "-0.41,0.46,-0.35" }, EPSG_4246: { towgs84: "-294.7,-200.1,525.5" }, EPSG_4318: { towgs84: "-3.2,-5.7,2.8" }, EPSG_4121: { towgs84: "-199.87,74.79,246.62" }, EPSG_4223: { towgs84: "-260.1,5.5,432.2" }, EPSG_4158: { towgs84: "-0.465,372.095,171.736" }, EPSG_4285: { towgs84: "-128.16,-282.42,21.93" }, EPSG_4613: { towgs84: "-404.78,685.68,45.47" }, EPSG_4607: { towgs84: "195.671,332.517,274.607" }, EPSG_4475: { towgs84: "-381.788,-57.501,-256.673" }, EPSG_4208: { towgs84: "-157.84,308.54,-146.6" }, EPSG_4743: { towgs84: "70.995,-335.916,262.898" }, EPSG_4710: { towgs84: "-323.65,551.39,-491.22" }, EPSG_7881: { towgs84: "-0.077,0.079,0.086" }, EPSG_4682: { towgs84: "283.729,735.942,261.143" }, EPSG_4739: { towgs84: "-156,-271,-189" }, EPSG_4679: { towgs84: "-80.01,253.26,291.19" }, EPSG_4750: { towgs84: "-56.263,16.136,-22.856" }, EPSG_4644: { towgs84: "-10.18,-350.43,291.37" }, EPSG_4695: { towgs84: "-103.746,-9.614,-255.95" }, EPSG_4292: { towgs84: "-355,21,72" }, EPSG_4302: { towgs84: "-61.702,284.488,472.052" }, EPSG_4143: { towgs84: "-124.76,53,466.79" }, EPSG_4606: { towgs84: "-153,153,307" }, EPSG_4699: { towgs84: "-770.1,158.4,-498.2" }, EPSG_4247: { towgs84: "-273.5,110.6,-357.9" }, EPSG_4160: { towgs84: "8.88,184.86,106.69" }, EPSG_4161: { towgs84: "-233.43,6.65,173.64" }, EPSG_9251: { towgs84: "-9.5,122.9,138.2" }, EPSG_9253: { towgs84: "-78.1,101.6,133.3" }, EPSG_4297: { towgs84: "-198.383,-240.517,-107.909" }, EPSG_4269: { towgs84: "0,0,0" }, EPSG_4301: { towgs84: "-147,506,687" }, EPSG_4618: { towgs84: "-59,-11,-52" }, EPSG_4612: { towgs84: "0,0,0" }, EPSG_4678: { towgs84: "44.585,-131.212,-39.544" }, EPSG_4250: { towgs84: "-130,29,364" }, EPSG_4144: { towgs84: "214,804,268" }, EPSG_4147: { towgs84: "-17.51,-108.32,-62.39" }, EPSG_4259: { towgs84: "-254.1,-5.36,-100.29" }, EPSG_4164: { towgs84: "-76,-138,67" }, EPSG_4211: { towgs84: "-378.873,676.002,-46.255" }, EPSG_4182: { towgs84: "-422.651,-172.995,84.02" }, EPSG_4224: { towgs84: "-143.87,243.37,-33.52" }, EPSG_4225: { towgs84: "-205.57,168.77,-4.12" }, EPSG_5527: { towgs84: "-67.35,3.88,-38.22" }, EPSG_4752: { towgs84: "98,390,-22" }, EPSG_4310: { towgs84: "-30,190,89" }, EPSG_9248: { towgs84: "-192.26,65.72,132.08" }, EPSG_4680: { towgs84: "124.5,-63.5,-281" }, EPSG_4701: { towgs84: "-79.9,-158,-168.9" }, EPSG_4706: { towgs84: "-146.21,112.63,4.05" }, EPSG_4805: { towgs84: "682,-203,480" }, EPSG_4201: { towgs84: "-165,-11,206" }, EPSG_4210: { towgs84: "-157,-2,-299" }, EPSG_4183: { towgs84: "-104,167,-38" }, EPSG_4139: { towgs84: "11,72,-101" }, EPSG_4668: { towgs84: "-86,-98,-119" }, EPSG_4717: { towgs84: "-2,151,181" }, EPSG_4732: { towgs84: "102,52,-38" }, EPSG_4280: { towgs84: "-377,681,-50" }, EPSG_4209: { towgs84: "-138,-105,-289" }, EPSG_4261: { towgs84: "31,146,47" }, EPSG_4658: { towgs84: "-73,46,-86" }, EPSG_4721: { towgs84: "265.025,384.929,-194.046" }, EPSG_4222: { towgs84: "-136,-108,-292" }, EPSG_4601: { towgs84: "-255,-15,71" }, EPSG_4602: { towgs84: "725,685,536" }, EPSG_4603: { towgs84: "72,213.7,93" }, EPSG_4605: { towgs84: "9,183,236" }, EPSG_4621: { towgs84: "137,248,-430" }, EPSG_4657: { towgs84: "-28,199,5" }, EPSG_4316: { towgs84: "103.25,-100.4,-307.19" }, EPSG_4642: { towgs84: "-13,-348,292" }, EPSG_4698: { towgs84: "145,-187,103" }, EPSG_4192: { towgs84: "-206.1,-174.7,-87.7" }, EPSG_4311: { towgs84: "-265,120,-358" }, EPSG_4135: { towgs84: "58,-283,-182" }, ESRI_104138: { towgs84: "198,-226,-347" }, EPSG_4245: { towgs84: "-11,851,5" }, EPSG_4142: { towgs84: "-125,53,467" }, EPSG_4213: { towgs84: "-106,-87,188" }, EPSG_4253: { towgs84: "-133,-77,-51" }, EPSG_4129: { towgs84: "-132,-110,-335" }, EPSG_4713: { towgs84: "-77,-128,142" }, EPSG_4239: { towgs84: "217,823,299" }, EPSG_4146: { towgs84: "295,736,257" }, EPSG_4155: { towgs84: "-83,37,124" }, EPSG_4165: { towgs84: "-173,253,27" }, EPSG_4672: { towgs84: "175,-38,113" }, EPSG_4236: { towgs84: "-637,-549,-203" }, EPSG_4251: { towgs84: "-90,40,88" }, EPSG_4271: { towgs84: "-2,374,172" }, EPSG_4175: { towgs84: "-88,4,101" }, EPSG_4716: { towgs84: "298,-304,-375" }, EPSG_4315: { towgs84: "-23,259,-9" }, EPSG_4744: { towgs84: "-242.2,-144.9,370.3" }, EPSG_4244: { towgs84: "-97,787,86" }, EPSG_4293: { towgs84: "616,97,-251" }, EPSG_4714: { towgs84: "-127,-769,472" }, EPSG_4736: { towgs84: "260,12,-147" }, EPSG_6883: { towgs84: "-235,-110,393" }, EPSG_6894: { towgs84: "-63,176,185" }, EPSG_4205: { towgs84: "-43,-163,45" }, EPSG_4256: { towgs84: "41,-220,-134" }, EPSG_4262: { towgs84: "639,405,60" }, EPSG_4604: { towgs84: "174,359,365" }, EPSG_4169: { towgs84: "-115,118,426" }, EPSG_4620: { towgs84: "-106,-129,165" }, EPSG_4184: { towgs84: "-203,141,53" }, EPSG_4616: { towgs84: "-289,-124,60" }, EPSG_9403: { towgs84: "-307,-92,127" }, EPSG_4684: { towgs84: "-133,-321,50" }, EPSG_4708: { towgs84: "-491,-22,435" }, EPSG_4707: { towgs84: "114,-116,-333" }, EPSG_4709: { towgs84: "145,75,-272" }, EPSG_4712: { towgs84: "-205,107,53" }, EPSG_4711: { towgs84: "124,-234,-25" }, EPSG_4718: { towgs84: "230,-199,-752" }, EPSG_4719: { towgs84: "211,147,111" }, EPSG_4724: { towgs84: "208,-435,-229" }, EPSG_4725: { towgs84: "189,-79,-202" }, EPSG_4735: { towgs84: "647,1777,-1124" }, EPSG_4722: { towgs84: "-794,119,-298" }, EPSG_4728: { towgs84: "-307,-92,127" }, EPSG_4734: { towgs84: "-632,438,-609" }, EPSG_4727: { towgs84: "912,-58,1227" }, EPSG_4729: { towgs84: "185,165,42" }, EPSG_4730: { towgs84: "170,42,84" }, EPSG_4733: { towgs84: "276,-57,149" }, ESRI_37218: { towgs84: "230,-199,-752" }, ESRI_37240: { towgs84: "-7,215,225" }, ESRI_37221: { towgs84: "252,-209,-751" }, ESRI_4305: { towgs84: "-123,-206,219" }, ESRI_104139: { towgs84: "-73,-247,227" }, EPSG_4748: { towgs84: "51,391,-36" }, EPSG_4219: { towgs84: "-384,664,-48" }, EPSG_4255: { towgs84: "-333,-222,114" }, EPSG_4257: { towgs84: "-587.8,519.75,145.76" }, EPSG_4646: { towgs84: "-963,510,-359" }, EPSG_6881: { towgs84: "-24,-203,268" }, EPSG_6882: { towgs84: "-183,-15,273" }, EPSG_4715: { towgs84: "-104,-129,239" }, IGNF_RGF93GDD: { towgs84: "0,0,0" }, IGNF_RGM04GDD: { towgs84: "0,0,0" }, IGNF_RGSPM06GDD: { towgs84: "0,0,0" }, IGNF_RGTAAF07GDD: { towgs84: "0,0,0" }, IGNF_RGFG95GDD: { towgs84: "0,0,0" }, IGNF_RGNCG: { towgs84: "0,0,0" }, IGNF_RGPFGDD: { towgs84: "0,0,0" }, IGNF_ETRS89G: { towgs84: "0,0,0" }, IGNF_RGR92GDD: { towgs84: "0,0,0" }, EPSG_4173: { towgs84: "0,0,0" }, EPSG_4180: { towgs84: "0,0,0" }, EPSG_4619: { towgs84: "0,0,0" }, EPSG_4667: { towgs84: "0,0,0" }, EPSG_4075: { towgs84: "0,0,0" }, EPSG_6706: { towgs84: "0,0,0" }, EPSG_7798: { towgs84: "0,0,0" }, EPSG_4661: { towgs84: "0,0,0" }, EPSG_4669: { towgs84: "0,0,0" }, EPSG_8685: { towgs84: "0,0,0" }, EPSG_4151: { towgs84: "0,0,0" }, EPSG_9702: { towgs84: "0,0,0" }, EPSG_4758: { towgs84: "0,0,0" }, EPSG_4761: { towgs84: "0,0,0" }, EPSG_4765: { towgs84: "0,0,0" }, EPSG_8997: { towgs84: "0,0,0" }, EPSG_4023: { towgs84: "0,0,0" }, EPSG_4670: { towgs84: "0,0,0" }, EPSG_4694: { towgs84: "0,0,0" }, EPSG_4148: { towgs84: "0,0,0" }, EPSG_4163: { towgs84: "0,0,0" }, EPSG_4167: { towgs84: "0,0,0" }, EPSG_4189: { towgs84: "0,0,0" }, EPSG_4190: { towgs84: "0,0,0" }, EPSG_4176: { towgs84: "0,0,0" }, EPSG_4659: { towgs84: "0,0,0" }, EPSG_3824: { towgs84: "0,0,0" }, EPSG_3889: { towgs84: "0,0,0" }, EPSG_4046: { towgs84: "0,0,0" }, EPSG_4081: { towgs84: "0,0,0" }, EPSG_4558: { towgs84: "0,0,0" }, EPSG_4483: { towgs84: "0,0,0" }, EPSG_5013: { towgs84: "0,0,0" }, EPSG_5264: { towgs84: "0,0,0" }, EPSG_5324: { towgs84: "0,0,0" }, EPSG_5354: { towgs84: "0,0,0" }, EPSG_5371: { towgs84: "0,0,0" }, EPSG_5373: { towgs84: "0,0,0" }, EPSG_5381: { towgs84: "0,0,0" }, EPSG_5393: { towgs84: "0,0,0" }, EPSG_5489: { towgs84: "0,0,0" }, EPSG_5593: { towgs84: "0,0,0" }, EPSG_6135: { towgs84: "0,0,0" }, EPSG_6365: { towgs84: "0,0,0" }, EPSG_5246: { towgs84: "0,0,0" }, EPSG_7886: { towgs84: "0,0,0" }, EPSG_8431: { towgs84: "0,0,0" }, EPSG_8427: { towgs84: "0,0,0" }, EPSG_8699: { towgs84: "0,0,0" }, EPSG_8818: { towgs84: "0,0,0" }, EPSG_4757: { towgs84: "0,0,0" }, EPSG_9140: { towgs84: "0,0,0" }, EPSG_8086: { towgs84: "0,0,0" }, EPSG_4686: { towgs84: "0,0,0" }, EPSG_4737: { towgs84: "0,0,0" }, EPSG_4702: { towgs84: "0,0,0" }, EPSG_4747: { towgs84: "0,0,0" }, EPSG_4749: { towgs84: "0,0,0" }, EPSG_4674: { towgs84: "0,0,0" }, EPSG_4755: { towgs84: "0,0,0" }, EPSG_4759: { towgs84: "0,0,0" }, EPSG_4762: { towgs84: "0,0,0" }, EPSG_4763: { towgs84: "0,0,0" }, EPSG_4764: { towgs84: "0,0,0" }, EPSG_4166: { towgs84: "0,0,0" }, EPSG_4170: { towgs84: "0,0,0" }, EPSG_5546: { towgs84: "0,0,0" }, EPSG_7844: { towgs84: "0,0,0" }, EPSG_4818: { towgs84: "589,76,480" } };
  for (var Lt2 in qt2) {
    var Bt2 = qt2[Lt2];
    Bt2.datumName && (qt2[Bt2.datumName] = Bt2);
  }
  function kt2(t3, r3, h3, o3, l3, u3, d3) {
    var m3 = {};
    return m3.datum_type = void 0 === t3 || "none" === t3 ? n2 : a2, r3 && (m3.datum_params = r3.map(parseFloat), 0 === m3.datum_params[0] && 0 === m3.datum_params[1] && 0 === m3.datum_params[2] || (m3.datum_type = s2), m3.datum_params.length > 3 && (0 === m3.datum_params[3] && 0 === m3.datum_params[4] && 0 === m3.datum_params[5] && 0 === m3.datum_params[6] || (m3.datum_type = i2, m3.datum_params[3] *= c2, m3.datum_params[4] *= c2, m3.datum_params[5] *= c2, m3.datum_params[6] = m3.datum_params[6] / 1e6 + 1))), d3 && (m3.datum_type = e2, m3.grids = d3), m3.a = h3, m3.b = o3, m3.es = l3, m3.ep2 = u3, m3;
  }
  var Dt2 = {};
  function Ut2(t3, s3, i3) {
    return s3 instanceof ArrayBuffer ? jt2(t3, s3, i3) : { ready: Ft2(t3, s3) };
  }
  function jt2(t3, s3, i3) {
    var e3 = true;
    void 0 !== i3 && false === i3.includeErrorFields && (e3 = false);
    var a3 = new DataView(s3), n3 = Yt2(a3), r3 = Zt2(a3, n3), h3 = { header: r3, subgrids: Kt2(a3, r3, n3, e3) };
    return Dt2[t3] = h3, h3;
  }
  async function Ft2(t3, s3) {
    for (var i3 = [], e3 = await s3.getImageCount(), a3 = e3 - 1; a3 >= 0; a3--) {
      var n3 = await s3.getImage(a3), r3 = await n3.readRasters(), h3 = [n3.getWidth(), n3.getHeight()], o3 = n3.getBoundingBox().map(Ht2), c3 = [n3.fileDirectory.ModelPixelScale[0], n3.fileDirectory.ModelPixelScale[1]].map(Ht2), l3 = o3[0] + (h3[0] - 1) * c3[0], u3 = o3[3] - (h3[1] - 1) * c3[1], d3 = r3[0], m3 = r3[1], _3 = [];
      for (let t4 = h3[1] - 1; t4 >= 0; t4--)
        for (let s4 = h3[0] - 1; s4 >= 0; s4--) {
          var f3 = t4 * h3[0] + s4;
          _3.push([-Xt2(m3[f3]), Xt2(d3[f3])]);
        }
      i3.push({ del: c3, lim: h3, ll: [-l3, u3], cvs: _3 });
    }
    var y3 = { header: { nSubgrids: e3 }, subgrids: i3 };
    return Dt2[t3] = y3, y3;
  }
  function Vt2(t3) {
    return void 0 === t3 ? null : t3.split(",").map(Wt2);
  }
  function Wt2(t3) {
    if (0 === t3.length)
      return null;
    var s3 = "@" === t3[0];
    return s3 && (t3 = t3.slice(1)), "null" === t3 ? { name: "null", mandatory: !s3, grid: null, isNull: true } : { name: t3, mandatory: !s3, grid: Dt2[t3] || null, isNull: false };
  }
  function Ht2(t3) {
    return t3 * Math.PI / 180;
  }
  function Xt2(t3) {
    return t3 / 3600 * Math.PI / 180;
  }
  function Yt2(t3) {
    var s3 = t3.getInt32(8, false);
    return 11 !== s3 && (11 !== (s3 = t3.getInt32(8, true)) && console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"), true);
  }
  function Zt2(t3, s3) {
    return { nFields: t3.getInt32(8, s3), nSubgridFields: t3.getInt32(24, s3), nSubgrids: t3.getInt32(40, s3), shiftType: Qt2(t3, 56, 64).trim(), fromSemiMajorAxis: t3.getFloat64(120, s3), fromSemiMinorAxis: t3.getFloat64(136, s3), toSemiMajorAxis: t3.getFloat64(152, s3), toSemiMinorAxis: t3.getFloat64(168, s3) };
  }
  function Qt2(t3, s3, i3) {
    return String.fromCharCode.apply(null, new Uint8Array(t3.buffer.slice(s3, i3)));
  }
  function Kt2(t3, s3, i3, e3) {
    for (var a3 = 176, n3 = [], r3 = 0; r3 < s3.nSubgrids; r3++) {
      var h3 = $t2(t3, a3, i3), o3 = ts2(t3, a3, h3, i3, e3), c3 = Math.round(1 + (h3.upperLongitude - h3.lowerLongitude) / h3.longitudeInterval), l3 = Math.round(1 + (h3.upperLatitude - h3.lowerLatitude) / h3.latitudeInterval);
      n3.push({ ll: [Xt2(h3.lowerLongitude), Xt2(h3.lowerLatitude)], del: [Xt2(h3.longitudeInterval), Xt2(h3.latitudeInterval)], lim: [c3, l3], count: h3.gridNodeCount, cvs: Jt2(o3) });
      var u3 = 16;
      false === e3 && (u3 = 8), a3 += 176 + h3.gridNodeCount * u3;
    }
    return n3;
  }
  function Jt2(t3) {
    return t3.map(function(t4) {
      return [Xt2(t4.longitudeShift), Xt2(t4.latitudeShift)];
    });
  }
  function $t2(t3, s3, i3) {
    return { name: Qt2(t3, s3 + 8, s3 + 16).trim(), parent: Qt2(t3, s3 + 24, s3 + 24 + 8).trim(), lowerLatitude: t3.getFloat64(s3 + 72, i3), upperLatitude: t3.getFloat64(s3 + 88, i3), lowerLongitude: t3.getFloat64(s3 + 104, i3), upperLongitude: t3.getFloat64(s3 + 120, i3), latitudeInterval: t3.getFloat64(s3 + 136, i3), longitudeInterval: t3.getFloat64(s3 + 152, i3), gridNodeCount: t3.getInt32(s3 + 168, i3) };
  }
  function ts2(t3, s3, i3, e3, a3) {
    var n3 = s3 + 176, r3 = 16;
    false === a3 && (r3 = 8);
    for (var h3 = [], o3 = 0; o3 < i3.gridNodeCount; o3++) {
      var c3 = { latitudeShift: t3.getFloat32(n3 + o3 * r3, e3), longitudeShift: t3.getFloat32(n3 + o3 * r3 + 4, e3) };
      false !== a3 && (c3.latitudeAccuracy = t3.getFloat32(n3 + o3 * r3 + 8, e3), c3.longitudeAccuracy = t3.getFloat32(n3 + o3 * r3 + 12, e3)), h3.push(c3);
    }
    return h3;
  }
  function ss2(t3, s3) {
    if (!(this instanceof ss2))
      return new ss2(t3);
    s3 = s3 || function(t4) {
      if (t4)
        throw t4;
    };
    var i3 = dt2(t3);
    if ("object" == typeof i3) {
      var e3 = ss2.projections.get(i3.projName);
      if (e3) {
        if (i3.datumCode && "none" !== i3.datumCode) {
          var a3 = E2(qt2, i3.datumCode);
          a3 && (i3.datum_params = i3.datum_params || (a3.towgs84 ? a3.towgs84.split(",") : null), i3.ellps = a3.ellipse, i3.datumName = a3.datumName ? a3.datumName : i3.datumCode);
        }
        i3.k0 = i3.k0 || 1, i3.axis = i3.axis || "enu", i3.ellps = i3.ellps || "wgs84", i3.lat1 = i3.lat1 || i3.lat0;
        var n3 = Rt2(i3.a, i3.b, i3.rf, i3.ellps, i3.sphere), r3 = Ot2(n3.a, n3.b, n3.rf, i3.R_A), h3 = Vt2(i3.nadgrids), o3 = i3.datum || kt2(i3.datumCode, i3.datum_params, n3.a, n3.b, r3.es, r3.ep2, h3);
        mt2(this, i3), mt2(this, e3), this.a = n3.a, this.b = n3.b, this.rf = n3.rf, this.sphere = n3.sphere, this.es = r3.es, this.e = r3.e, this.ep2 = r3.ep2, this.datum = o3, this.init(), s3(null, this);
      } else
        s3("Could not get projection name from: " + t3);
    } else
      s3("Could not parse to valid json: " + t3);
  }
  function is2(t3, e3) {
    return t3.datum_type === e3.datum_type && !(t3.a !== e3.a || Math.abs(t3.es - e3.es) > 5e-11) && (t3.datum_type === s2 ? t3.datum_params[0] === e3.datum_params[0] && t3.datum_params[1] === e3.datum_params[1] && t3.datum_params[2] === e3.datum_params[2] : t3.datum_type !== i2 || t3.datum_params[0] === e3.datum_params[0] && t3.datum_params[1] === e3.datum_params[1] && t3.datum_params[2] === e3.datum_params[2] && t3.datum_params[3] === e3.datum_params[3] && t3.datum_params[4] === e3.datum_params[4] && t3.datum_params[5] === e3.datum_params[5] && t3.datum_params[6] === e3.datum_params[6]);
  }
  function es2(t3, s3, i3) {
    var e3, a3, n3, r3, h3 = t3.x, o3 = t3.y, c3 = t3.z ? t3.z : 0;
    if (o3 < -l2 && o3 > -1.001 * l2)
      o3 = -l2;
    else if (o3 > l2 && o3 < 1.001 * l2)
      o3 = l2;
    else {
      if (o3 < -l2)
        return { x: -1 / 0, y: -1 / 0, z: t3.z };
      if (o3 > l2)
        return { x: 1 / 0, y: 1 / 0, z: t3.z };
    }
    return h3 > Math.PI && (h3 -= 2 * Math.PI), a3 = Math.sin(o3), r3 = Math.cos(o3), n3 = a3 * a3, { x: ((e3 = i3 / Math.sqrt(1 - s3 * n3)) + c3) * r3 * Math.cos(h3), y: (e3 + c3) * r3 * Math.sin(h3), z: (e3 * (1 - s3) + c3) * a3 };
  }
  function as2(t3, s3, i3, e3) {
    var a3, n3, r3, h3, o3, c3, l3, u3, d3, m3, _3, f3, y3, p3, g3, M3 = 1e-12, x3 = M3 * M3, w3 = 30, S3 = t3.x, E3 = t3.y, b3 = t3.z ? t3.z : 0;
    if (a3 = Math.sqrt(S3 * S3 + E3 * E3), n3 = Math.sqrt(S3 * S3 + E3 * E3 + b3 * b3), a3 / i3 < M3) {
      if (p3 = 0, n3 / i3 < M3)
        return g3 = -e3, { x: t3.x, y: t3.y, z: t3.z };
    } else
      p3 = Math.atan2(E3, S3);
    r3 = b3 / n3, u3 = (h3 = a3 / n3) * (1 - s3) * (o3 = 1 / Math.sqrt(1 - s3 * (2 - s3) * h3 * h3)), d3 = r3 * o3, y3 = 0;
    do {
      y3++, c3 = s3 * (l3 = i3 / Math.sqrt(1 - s3 * d3 * d3)) / (l3 + (g3 = a3 * u3 + b3 * d3 - l3 * (1 - s3 * d3 * d3))), f3 = (_3 = r3 * (o3 = 1 / Math.sqrt(1 - c3 * (2 - c3) * h3 * h3))) * u3 - (m3 = h3 * (1 - c3) * o3) * d3, u3 = m3, d3 = _3;
    } while (f3 * f3 > x3 && y3 < w3);
    return { x: p3, y: Math.atan(_3 / Math.abs(m3)), z: g3 };
  }
  function ns2(t3, e3, a3) {
    if (e3 === s2)
      return { x: t3.x + a3[0], y: t3.y + a3[1], z: t3.z + a3[2] };
    if (e3 === i2) {
      var n3 = a3[0], r3 = a3[1], h3 = a3[2], o3 = a3[3], c3 = a3[4], l3 = a3[5], u3 = a3[6];
      return { x: u3 * (t3.x - l3 * t3.y + c3 * t3.z) + n3, y: u3 * (l3 * t3.x + t3.y - o3 * t3.z) + r3, z: u3 * (-c3 * t3.x + o3 * t3.y + t3.z) + h3 };
    }
  }
  function rs2(t3, e3, a3) {
    if (e3 === s2)
      return { x: t3.x - a3[0], y: t3.y - a3[1], z: t3.z - a3[2] };
    if (e3 === i2) {
      var n3 = a3[0], r3 = a3[1], h3 = a3[2], o3 = a3[3], c3 = a3[4], l3 = a3[5], u3 = a3[6], d3 = (t3.x - n3) / u3, m3 = (t3.y - r3) / u3, _3 = (t3.z - h3) / u3;
      return { x: d3 + l3 * m3 - c3 * _3, y: -l3 * d3 + m3 + o3 * _3, z: c3 * d3 - o3 * m3 + _3 };
    }
  }
  function hs2(t3) {
    return t3 === s2 || t3 === i2;
  }
  function os2(t3, s3, i3) {
    if (is2(t3, s3))
      return i3;
    if (t3.datum_type === n2 || s3.datum_type === n2)
      return i3;
    var a3 = t3.a, c3 = t3.es;
    if (t3.datum_type === e2) {
      if (0 !== cs2(t3, false, i3))
        return;
      a3 = r2, c3 = o2;
    }
    var l3 = s3.a, u3 = s3.b, d3 = s3.es;
    return s3.datum_type === e2 && (l3 = r2, u3 = h2, d3 = o2), c3 !== d3 || a3 !== l3 || hs2(t3.datum_type) || hs2(s3.datum_type) ? (i3 = es2(i3, c3, a3), hs2(t3.datum_type) && (i3 = ns2(i3, t3.datum_type, t3.datum_params)), hs2(s3.datum_type) && (i3 = rs2(i3, s3.datum_type, s3.datum_params)), i3 = as2(i3, d3, l3, u3), s3.datum_type !== e2 || 0 === cs2(s3, true, i3) ? i3 : void 0) : i3;
  }
  function cs2(t3, s3, i3) {
    if (null === t3.grids || 0 === t3.grids.length)
      return console.log("Grid shift grids not found"), -1;
    var e3 = { x: -i3.x, y: i3.y }, a3 = { x: Number.NaN, y: Number.NaN }, n3 = [];
    t:
      for (var r3 = 0; r3 < t3.grids.length; r3++) {
        var h3 = t3.grids[r3];
        if (n3.push(h3.name), h3.isNull) {
          a3 = e3;
          break;
        }
        if (null !== h3.grid)
          for (var o3 = h3.grid.subgrids, c3 = 0, l3 = o3.length; c3 < l3; c3++) {
            var u3 = o3[c3], d3 = (Math.abs(u3.del[1]) + Math.abs(u3.del[0])) / 1e4, m3 = u3.ll[0] - d3, _3 = u3.ll[1] - d3, f3 = u3.ll[0] + (u3.lim[0] - 1) * u3.del[0] + d3, p3 = u3.ll[1] + (u3.lim[1] - 1) * u3.del[1] + d3;
            if (!(_3 > e3.y || m3 > e3.x || p3 < e3.y || f3 < e3.x || (a3 = ls2(e3, s3, u3), isNaN(a3.x))))
              break t;
          }
        else if (h3.mandatory)
          return console.log("Unable to find mandatory grid '" + h3.name + "'"), -1;
      }
    return isNaN(a3.x) ? (console.log("Failed to find a grid shift table for location '" + -e3.x * y2 + " " + e3.y * y2 + " tried: '" + n3 + "'"), -1) : (i3.x = -a3.x, i3.y = a3.y, 0);
  }
  function ls2(t3, s3, i3) {
    var e3 = { x: Number.NaN, y: Number.NaN };
    if (isNaN(t3.x))
      return e3;
    var a3 = { x: t3.x, y: t3.y };
    a3.x -= i3.ll[0], a3.y -= i3.ll[1], a3.x = yt2(a3.x - Math.PI) + Math.PI;
    var n3 = us2(a3, i3);
    if (s3) {
      if (isNaN(n3.x))
        return e3;
      n3.x = a3.x - n3.x, n3.y = a3.y - n3.y;
      var r3, h3, o3 = 9, c3 = 1e-12;
      do {
        if (h3 = us2(n3, i3), isNaN(h3.x)) {
          console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");
          break;
        }
        r3 = { x: a3.x - (h3.x + n3.x), y: a3.y - (h3.y + n3.y) }, n3.x += r3.x, n3.y += r3.y;
      } while (o3-- && Math.abs(r3.x) > c3 && Math.abs(r3.y) > c3);
      if (o3 < 0)
        return console.log("Inverse grid shift iterator failed to converge."), e3;
      e3.x = yt2(n3.x + i3.ll[0]), e3.y = n3.y + i3.ll[1];
    } else
      isNaN(n3.x) || (e3.x = t3.x + n3.x, e3.y = t3.y + n3.y);
    return e3;
  }
  function us2(t3, s3) {
    var i3, e3 = { x: t3.x / s3.del[0], y: t3.y / s3.del[1] }, a3 = { x: Math.floor(e3.x), y: Math.floor(e3.y) }, n3 = { x: e3.x - 1 * a3.x, y: e3.y - 1 * a3.y }, r3 = { x: Number.NaN, y: Number.NaN };
    if (a3.x < 0 || a3.x >= s3.lim[0])
      return r3;
    if (a3.y < 0 || a3.y >= s3.lim[1])
      return r3;
    i3 = a3.y * s3.lim[0] + a3.x;
    var h3 = { x: s3.cvs[i3][0], y: s3.cvs[i3][1] };
    i3++;
    var o3 = { x: s3.cvs[i3][0], y: s3.cvs[i3][1] };
    i3 += s3.lim[0];
    var c3 = { x: s3.cvs[i3][0], y: s3.cvs[i3][1] };
    i3--;
    var l3 = { x: s3.cvs[i3][0], y: s3.cvs[i3][1] }, u3 = n3.x * n3.y, d3 = n3.x * (1 - n3.y), m3 = (1 - n3.x) * (1 - n3.y), _3 = (1 - n3.x) * n3.y;
    return r3.x = m3 * h3.x + d3 * o3.x + _3 * l3.x + u3 * c3.x, r3.y = m3 * h3.y + d3 * o3.y + _3 * l3.y + u3 * c3.y, r3;
  }
  function ds2(t3, s3, i3) {
    var e3, a3, n3, r3 = i3.x, h3 = i3.y, o3 = i3.z || 0, c3 = {};
    for (n3 = 0; n3 < 3; n3++)
      if (!s3 || 2 !== n3 || void 0 !== i3.z)
        switch (0 === n3 ? (e3 = r3, a3 = -1 !== "ew".indexOf(t3.axis[n3]) ? "x" : "y") : 1 === n3 ? (e3 = h3, a3 = -1 !== "ns".indexOf(t3.axis[n3]) ? "y" : "x") : (e3 = o3, a3 = "z"), t3.axis[n3]) {
          case "e":
          case "n":
            c3[a3] = e3;
            break;
          case "w":
          case "s":
            c3[a3] = -e3;
            break;
          case "u":
            void 0 !== i3[a3] && (c3.z = e3);
            break;
          case "d":
            void 0 !== i3[a3] && (c3.z = -e3);
            break;
          default:
            return null;
        }
    return c3;
  }
  function ms2(t3) {
    var s3 = { x: t3[0], y: t3[1] };
    return t3.length > 2 && (s3.z = t3[2]), t3.length > 3 && (s3.m = t3[3]), s3;
  }
  function _s2(t3) {
    fs2(t3.x), fs2(t3.y);
  }
  function fs2(t3) {
    if ("function" == typeof Number.isFinite) {
      if (Number.isFinite(t3))
        return;
      throw new TypeError("coordinates must be finite numbers");
    }
    if ("number" != typeof t3 || t3 != t3 || !isFinite(t3))
      throw new TypeError("coordinates must be finite numbers");
  }
  function ys2(t3, a3) {
    return (t3.datum.datum_type === s2 || t3.datum.datum_type === i2 || t3.datum.datum_type === e2) && "WGS84" !== a3.datumCode || (a3.datum.datum_type === s2 || a3.datum.datum_type === i2 || a3.datum.datum_type === e2) && "WGS84" !== t3.datumCode;
  }
  function ps2(t3, s3, i3, e3) {
    var a3, n3 = void 0 !== (i3 = Array.isArray(i3) ? ms2(i3) : { x: i3.x, y: i3.y, z: i3.z, m: i3.m }).z;
    if (_s2(i3), t3.datum && s3.datum && ys2(t3, s3) && (i3 = ps2(t3, a3 = new ss2("WGS84"), i3, e3), t3 = a3), e3 && "enu" !== t3.axis && (i3 = ds2(t3, false, i3)), "longlat" === t3.projName)
      i3 = { x: i3.x * f2, y: i3.y * f2, z: i3.z || 0 };
    else if (t3.to_meter && (i3 = { x: i3.x * t3.to_meter, y: i3.y * t3.to_meter, z: i3.z || 0 }), !(i3 = t3.inverse(i3)))
      return;
    if (t3.from_greenwich && (i3.x += t3.from_greenwich), i3 = os2(t3.datum, s3.datum, i3))
      return s3.from_greenwich && (i3 = { x: i3.x - s3.from_greenwich, y: i3.y, z: i3.z || 0 }), "longlat" === s3.projName ? i3 = { x: i3.x * y2, y: i3.y * y2, z: i3.z || 0 } : (i3 = s3.forward(i3), s3.to_meter && (i3 = { x: i3.x / s3.to_meter, y: i3.y / s3.to_meter, z: i3.z || 0 })), e3 && "enu" !== s3.axis ? ds2(s3, true, i3) : (i3 && !n3 && delete i3.z, i3);
  }
  ss2.projections = It2, ss2.projections.start();
  var gs2 = ss2("WGS84");
  function Ms2(t3, s3, i3, e3) {
    var a3, n3, r3;
    return Array.isArray(i3) ? (a3 = ps2(t3, s3, i3, e3) || { x: NaN, y: NaN }, i3.length > 2 ? void 0 !== t3.name && "geocent" === t3.name || void 0 !== s3.name && "geocent" === s3.name ? "number" == typeof a3.z ? [a3.x, a3.y, a3.z].concat(i3.slice(3)) : [a3.x, a3.y, i3[2]].concat(i3.slice(3)) : [a3.x, a3.y].concat(i3.slice(2)) : [a3.x, a3.y]) : (n3 = ps2(t3, s3, i3, e3), 2 === (r3 = Object.keys(i3)).length || r3.forEach(function(e4) {
      if (void 0 !== t3.name && "geocent" === t3.name || void 0 !== s3.name && "geocent" === s3.name) {
        if ("x" === e4 || "y" === e4 || "z" === e4)
          return;
      } else if ("x" === e4 || "y" === e4)
        return;
      n3[e4] = i3[e4];
    }), n3);
  }
  function xs2(t3) {
    return t3 instanceof ss2 ? t3 : t3.oProj ? t3.oProj : ss2(t3);
  }
  function ws2(t3, s3, i3) {
    t3 = xs2(t3);
    var e3, a3 = false;
    return void 0 === s3 ? (s3 = t3, t3 = gs2, a3 = true) : (void 0 !== s3.x || Array.isArray(s3)) && (i3 = s3, s3 = t3, t3 = gs2, a3 = true), s3 = xs2(s3), i3 ? Ms2(t3, s3, i3) : (e3 = { forward: function(i4, e4) {
      return Ms2(t3, s3, i4, e4);
    }, inverse: function(i4, e4) {
      return Ms2(s3, t3, i4, e4);
    } }, a3 && (e3.oProj = s3), e3);
  }
  var Ss2 = 6, Es2 = "AJSAJS", bs2 = "AFAFAF", Ps2 = 65, vs2 = 73, As2 = 79, Gs2 = 86, Cs2 = 90, Ns2 = { forward: Is2, inverse: zs2, toPoint: Ts2 };
  function Is2(t3, s3) {
    return s3 = s3 || 5, ks2(qs2({ lat: t3[1], lon: t3[0] }), s3);
  }
  function zs2(t3) {
    var s3 = Ls2(Fs2(t3.toUpperCase()));
    return s3.lat && s3.lon ? [s3.lon, s3.lat, s3.lon, s3.lat] : [s3.left, s3.bottom, s3.right, s3.top];
  }
  function Ts2(t3) {
    var s3 = Ls2(Fs2(t3.toUpperCase()));
    return s3.lat && s3.lon ? [s3.lon, s3.lat] : [(s3.left + s3.right) / 2, (s3.top + s3.bottom) / 2];
  }
  function Os2(t3) {
    return t3 * (Math.PI / 180);
  }
  function Rs2(t3) {
    return t3 / Math.PI * 180;
  }
  function qs2(t3) {
    var s3, i3, e3, a3, n3, r3, h3, o3 = t3.lat, c3 = t3.lon, l3 = 6378137, u3 = 669438e-8, d3 = 0.9996, m3 = Os2(o3), _3 = Os2(c3);
    h3 = Math.floor((c3 + 180) / 6) + 1, 180 === c3 && (h3 = 60), o3 >= 56 && o3 < 64 && c3 >= 3 && c3 < 12 && (h3 = 32), o3 >= 72 && o3 < 84 && (c3 >= 0 && c3 < 9 ? h3 = 31 : c3 >= 9 && c3 < 21 ? h3 = 33 : c3 >= 21 && c3 < 33 ? h3 = 35 : c3 >= 33 && c3 < 42 && (h3 = 37)), r3 = Os2(6 * (h3 - 1) - 180 + 3), s3 = u3 / (1 - u3), i3 = l3 / Math.sqrt(1 - u3 * Math.sin(m3) * Math.sin(m3)), e3 = Math.tan(m3) * Math.tan(m3), a3 = s3 * Math.cos(m3) * Math.cos(m3);
    var f3 = d3 * i3 * ((n3 = Math.cos(m3) * (_3 - r3)) + (1 - e3 + a3) * n3 * n3 * n3 / 6 + (5 - 18 * e3 + e3 * e3 + 72 * a3 - 58 * s3) * n3 * n3 * n3 * n3 * n3 / 120) + 5e5, y3 = d3 * (l3 * ((1 - u3 / 4 - 3 * u3 * u3 / 64 - 5 * u3 * u3 * u3 / 256) * m3 - (3 * u3 / 8 + 3 * u3 * u3 / 32 + 45 * u3 * u3 * u3 / 1024) * Math.sin(2 * m3) + (15 * u3 * u3 / 256 + 45 * u3 * u3 * u3 / 1024) * Math.sin(4 * m3) - 35 * u3 * u3 * u3 / 3072 * Math.sin(6 * m3)) + i3 * Math.tan(m3) * (n3 * n3 / 2 + (5 - e3 + 9 * a3 + 4 * a3 * a3) * n3 * n3 * n3 * n3 / 24 + (61 - 58 * e3 + e3 * e3 + 600 * a3 - 330 * s3) * n3 * n3 * n3 * n3 * n3 * n3 / 720));
    return o3 < 0 && (y3 += 1e7), { northing: Math.round(y3), easting: Math.round(f3), zoneNumber: h3, zoneLetter: Bs2(o3) };
  }
  function Ls2(t3) {
    var s3 = t3.northing, i3 = t3.easting, e3 = t3.zoneLetter, a3 = t3.zoneNumber;
    if (a3 < 0 || a3 > 60)
      return null;
    var n3, r3, h3, o3, c3, l3, u3, d3, m3, _3 = 0.9996, f3 = 6378137, y3 = 669438e-8, p3 = (1 - Math.sqrt(1 - y3)) / (1 + Math.sqrt(1 - y3)), g3 = i3 - 5e5, M3 = s3;
    e3 < "N" && (M3 -= 1e7), u3 = 6 * (a3 - 1) - 180 + 3, n3 = y3 / (1 - y3), m3 = (d3 = M3 / _3 / (f3 * (1 - y3 / 4 - 3 * y3 * y3 / 64 - 5 * y3 * y3 * y3 / 256))) + (3 * p3 / 2 - 27 * p3 * p3 * p3 / 32) * Math.sin(2 * d3) + (21 * p3 * p3 / 16 - 55 * p3 * p3 * p3 * p3 / 32) * Math.sin(4 * d3) + 151 * p3 * p3 * p3 / 96 * Math.sin(6 * d3), r3 = f3 / Math.sqrt(1 - y3 * Math.sin(m3) * Math.sin(m3)), h3 = Math.tan(m3) * Math.tan(m3), o3 = n3 * Math.cos(m3) * Math.cos(m3), c3 = f3 * (1 - y3) / Math.pow(1 - y3 * Math.sin(m3) * Math.sin(m3), 1.5), l3 = g3 / (r3 * _3);
    var x3 = m3 - r3 * Math.tan(m3) / c3 * (l3 * l3 / 2 - (5 + 3 * h3 + 10 * o3 - 4 * o3 * o3 - 9 * n3) * l3 * l3 * l3 * l3 / 24 + (61 + 90 * h3 + 298 * o3 + 45 * h3 * h3 - 252 * n3 - 3 * o3 * o3) * l3 * l3 * l3 * l3 * l3 * l3 / 720);
    x3 = Rs2(x3);
    var w3, S3 = (l3 - (1 + 2 * h3 + o3) * l3 * l3 * l3 / 6 + (5 - 2 * o3 + 28 * h3 - 3 * o3 * o3 + 8 * n3 + 24 * h3 * h3) * l3 * l3 * l3 * l3 * l3 / 120) / Math.cos(m3);
    if (S3 = u3 + Rs2(S3), t3.accuracy) {
      var E3 = Ls2({ northing: t3.northing + t3.accuracy, easting: t3.easting + t3.accuracy, zoneLetter: t3.zoneLetter, zoneNumber: t3.zoneNumber });
      w3 = { top: E3.lat, right: E3.lon, bottom: x3, left: S3 };
    } else
      w3 = { lat: x3, lon: S3 };
    return w3;
  }
  function Bs2(t3) {
    var s3 = "Z";
    return 84 >= t3 && t3 >= 72 ? s3 = "X" : 72 > t3 && t3 >= 64 ? s3 = "W" : 64 > t3 && t3 >= 56 ? s3 = "V" : 56 > t3 && t3 >= 48 ? s3 = "U" : 48 > t3 && t3 >= 40 ? s3 = "T" : 40 > t3 && t3 >= 32 ? s3 = "S" : 32 > t3 && t3 >= 24 ? s3 = "R" : 24 > t3 && t3 >= 16 ? s3 = "Q" : 16 > t3 && t3 >= 8 ? s3 = "P" : 8 > t3 && t3 >= 0 ? s3 = "N" : 0 > t3 && t3 >= -8 ? s3 = "M" : -8 > t3 && t3 >= -16 ? s3 = "L" : -16 > t3 && t3 >= -24 ? s3 = "K" : -24 > t3 && t3 >= -32 ? s3 = "J" : -32 > t3 && t3 >= -40 ? s3 = "H" : -40 > t3 && t3 >= -48 ? s3 = "G" : -48 > t3 && t3 >= -56 ? s3 = "F" : -56 > t3 && t3 >= -64 ? s3 = "E" : -64 > t3 && t3 >= -72 ? s3 = "D" : -72 > t3 && t3 >= -80 && (s3 = "C"), s3;
  }
  function ks2(t3, s3) {
    var i3 = "00000" + t3.easting, e3 = "00000" + t3.northing;
    return t3.zoneNumber + t3.zoneLetter + Ds2(t3.easting, t3.northing, t3.zoneNumber) + i3.substr(i3.length - 5, s3) + e3.substr(e3.length - 5, s3);
  }
  function Ds2(t3, s3, i3) {
    var e3 = Us2(i3);
    return js2(Math.floor(t3 / 1e5), Math.floor(s3 / 1e5) % 20, e3);
  }
  function Us2(t3) {
    var s3 = t3 % Ss2;
    return 0 === s3 && (s3 = Ss2), s3;
  }
  function js2(t3, s3, i3) {
    var e3 = i3 - 1, a3 = Es2.charCodeAt(e3), n3 = bs2.charCodeAt(e3), r3 = a3 + t3 - 1, h3 = n3 + s3, o3 = false;
    return r3 > Cs2 && (r3 = r3 - Cs2 + Ps2 - 1, o3 = true), (r3 === vs2 || a3 < vs2 && r3 > vs2 || (r3 > vs2 || a3 < vs2) && o3) && r3++, (r3 === As2 || a3 < As2 && r3 > As2 || (r3 > As2 || a3 < As2) && o3) && ++r3 === vs2 && r3++, r3 > Cs2 && (r3 = r3 - Cs2 + Ps2 - 1), h3 > Gs2 ? (h3 = h3 - Gs2 + Ps2 - 1, o3 = true) : o3 = false, (h3 === vs2 || n3 < vs2 && h3 > vs2 || (h3 > vs2 || n3 < vs2) && o3) && h3++, (h3 === As2 || n3 < As2 && h3 > As2 || (h3 > As2 || n3 < As2) && o3) && ++h3 === vs2 && h3++, h3 > Gs2 && (h3 = h3 - Gs2 + Ps2 - 1), String.fromCharCode(r3) + String.fromCharCode(h3);
  }
  function Fs2(t3) {
    if (t3 && 0 === t3.length)
      throw "MGRSPoint coverting from nothing";
    for (var s3, i3 = t3.length, e3 = null, a3 = "", n3 = 0; !/[A-Z]/.test(s3 = t3.charAt(n3)); ) {
      if (n3 >= 2)
        throw "MGRSPoint bad conversion from: " + t3;
      a3 += s3, n3++;
    }
    var r3 = parseInt(a3, 10);
    if (0 === n3 || n3 + 3 > i3)
      throw "MGRSPoint bad conversion from: " + t3;
    var h3 = t3.charAt(n3++);
    if (h3 <= "A" || "B" === h3 || "Y" === h3 || h3 >= "Z" || "I" === h3 || "O" === h3)
      throw "MGRSPoint zone letter " + h3 + " not handled: " + t3;
    e3 = t3.substring(n3, n3 += 2);
    for (var o3 = Us2(r3), c3 = Vs2(e3.charAt(0), o3), l3 = Ws2(e3.charAt(1), o3); l3 < Hs2(h3); )
      l3 += 2e6;
    var u3 = i3 - n3;
    if (u3 % 2 != 0)
      throw "MGRSPoint has to have an even number \nof digits after the zone letter and two 100km letters - front \nhalf for easting meters, second half for \nnorthing meters" + t3;
    var d3, m3, _3, f3 = u3 / 2, y3 = 0, p3 = 0;
    return f3 > 0 && (d3 = 1e5 / Math.pow(10, f3), m3 = t3.substring(n3, n3 + f3), y3 = parseFloat(m3) * d3, _3 = t3.substring(n3 + f3), p3 = parseFloat(_3) * d3), { easting: y3 + c3, northing: p3 + l3, zoneLetter: h3, zoneNumber: r3, accuracy: d3 };
  }
  function Vs2(t3, s3) {
    for (var i3 = Es2.charCodeAt(s3 - 1), e3 = 1e5, a3 = false; i3 !== t3.charCodeAt(0); ) {
      if (++i3 === vs2 && i3++, i3 === As2 && i3++, i3 > Cs2) {
        if (a3)
          throw "Bad character: " + t3;
        i3 = Ps2, a3 = true;
      }
      e3 += 1e5;
    }
    return e3;
  }
  function Ws2(t3, s3) {
    if (t3 > "V")
      throw "MGRSPoint given invalid Northing " + t3;
    for (var i3 = bs2.charCodeAt(s3 - 1), e3 = 0, a3 = false; i3 !== t3.charCodeAt(0); ) {
      if (++i3 === vs2 && i3++, i3 === As2 && i3++, i3 > Gs2) {
        if (a3)
          throw "Bad character: " + t3;
        i3 = Ps2, a3 = true;
      }
      e3 += 1e5;
    }
    return e3;
  }
  function Hs2(t3) {
    var s3;
    switch (t3) {
      case "C":
        s3 = 11e5;
        break;
      case "D":
        s3 = 2e6;
        break;
      case "E":
        s3 = 28e5;
        break;
      case "F":
        s3 = 37e5;
        break;
      case "G":
        s3 = 46e5;
        break;
      case "H":
        s3 = 55e5;
        break;
      case "J":
        s3 = 64e5;
        break;
      case "K":
        s3 = 73e5;
        break;
      case "L":
        s3 = 82e5;
        break;
      case "M":
        s3 = 91e5;
        break;
      case "N":
        s3 = 0;
        break;
      case "P":
        s3 = 8e5;
        break;
      case "Q":
        s3 = 17e5;
        break;
      case "R":
        s3 = 26e5;
        break;
      case "S":
        s3 = 35e5;
        break;
      case "T":
        s3 = 44e5;
        break;
      case "U":
        s3 = 53e5;
        break;
      case "V":
        s3 = 62e5;
        break;
      case "W":
        s3 = 7e6;
        break;
      case "X":
        s3 = 79e5;
        break;
      default:
        s3 = -1;
    }
    if (s3 >= 0)
      return s3;
    throw "Invalid zone letter: " + t3;
  }
  function Xs2(t3, s3, i3) {
    if (!(this instanceof Xs2))
      return new Xs2(t3, s3, i3);
    if (Array.isArray(t3))
      this.x = t3[0], this.y = t3[1], this.z = t3[2] || 0;
    else if ("object" == typeof t3)
      this.x = t3.x, this.y = t3.y, this.z = t3.z || 0;
    else if ("string" == typeof t3 && void 0 === s3) {
      var e3 = t3.split(",");
      this.x = parseFloat(e3[0], 10), this.y = parseFloat(e3[1], 10), this.z = parseFloat(e3[2], 10) || 0;
    } else
      this.x = t3, this.y = s3, this.z = i3 || 0;
    console.warn("proj4.Point will be removed in version 3, use proj4.toPoint");
  }
  Xs2.fromMGRS = function(t3) {
    return new Xs2(Ts2(t3));
  }, Xs2.prototype.toMGRS = function(t3) {
    return Is2([this.x, this.y], t3);
  };
  var Ys2 = 1, Zs2 = 0.25, Qs2 = 0.046875, Ks2 = 0.01953125, Js2 = 0.01068115234375, $s2 = 0.75, ti2 = 0.46875, si2 = 0.013020833333333334, ii2 = 0.007120768229166667, ei2 = 0.3645833333333333, ai2 = 0.005696614583333333, ni2 = 0.3076171875;
  function ri2(t3) {
    var s3 = [];
    s3[0] = Ys2 - t3 * (Zs2 + t3 * (Qs2 + t3 * (Ks2 + t3 * Js2))), s3[1] = t3 * ($s2 - t3 * (Qs2 + t3 * (Ks2 + t3 * Js2)));
    var i3 = t3 * t3;
    return s3[2] = i3 * (ti2 - t3 * (si2 + t3 * ii2)), i3 *= t3, s3[3] = i3 * (ei2 - t3 * ai2), s3[4] = i3 * t3 * ni2, s3;
  }
  function hi2(t3, s3, i3, e3) {
    return i3 *= s3, s3 *= s3, e3[0] * t3 - i3 * (e3[1] + s3 * (e3[2] + s3 * (e3[3] + s3 * e3[4])));
  }
  var oi2 = 20;
  function ci2(t3, s3, i3) {
    for (var e3 = 1 / (1 - s3), a3 = t3, n3 = oi2; n3; --n3) {
      var r3 = Math.sin(a3), h3 = 1 - s3 * r3 * r3;
      if (a3 -= h3 = (hi2(a3, r3, Math.cos(a3), i3) - t3) * (h3 * Math.sqrt(h3)) * e3, Math.abs(h3) < _2)
        return a3;
    }
    return a3;
  }
  function li2() {
    this.x0 = void 0 !== this.x0 ? this.x0 : 0, this.y0 = void 0 !== this.y0 ? this.y0 : 0, this.long0 = void 0 !== this.long0 ? this.long0 : 0, this.lat0 = void 0 !== this.lat0 ? this.lat0 : 0, this.es && (this.en = ri2(this.es), this.ml0 = hi2(this.lat0, Math.sin(this.lat0), Math.cos(this.lat0), this.en));
  }
  function ui2(t3) {
    var s3, i3, e3, a3 = t3.x, n3 = t3.y, r3 = yt2(a3 - this.long0), h3 = Math.sin(n3), o3 = Math.cos(n3);
    if (this.es) {
      var c3 = o3 * r3, l3 = Math.pow(c3, 2), u3 = this.ep2 * Math.pow(o3, 2), d3 = Math.pow(u3, 2), m3 = Math.abs(o3) > _2 ? Math.tan(n3) : 0, f3 = Math.pow(m3, 2), y3 = Math.pow(f3, 2);
      s3 = 1 - this.es * Math.pow(h3, 2), c3 /= Math.sqrt(s3);
      var p3 = hi2(n3, h3, o3, this.en);
      i3 = this.a * (this.k0 * c3 * (1 + l3 / 6 * (1 - f3 + u3 + l3 / 20 * (5 - 18 * f3 + y3 + 14 * u3 - 58 * f3 * u3 + l3 / 42 * (61 + 179 * y3 - y3 * f3 - 479 * f3))))) + this.x0, e3 = this.a * (this.k0 * (p3 - this.ml0 + h3 * r3 * c3 / 2 * (1 + l3 / 12 * (5 - f3 + 9 * u3 + 4 * d3 + l3 / 30 * (61 + y3 - 58 * f3 + 270 * u3 - 330 * f3 * u3 + l3 / 56 * (1385 + 543 * y3 - y3 * f3 - 3111 * f3)))))) + this.y0;
    } else {
      var g3 = o3 * Math.sin(r3);
      if (Math.abs(Math.abs(g3) - 1) < _2)
        return 93;
      if (i3 = 0.5 * this.a * this.k0 * Math.log((1 + g3) / (1 - g3)) + this.x0, e3 = o3 * Math.cos(r3) / Math.sqrt(1 - Math.pow(g3, 2)), (g3 = Math.abs(e3)) >= 1) {
        if (g3 - 1 > _2)
          return 93;
        e3 = 0;
      } else
        e3 = Math.acos(e3);
      n3 < 0 && (e3 = -e3), e3 = this.a * this.k0 * (e3 - this.lat0) + this.y0;
    }
    return t3.x = i3, t3.y = e3, t3;
  }
  function di2(t3) {
    var s3, i3, e3, a3, n3 = (t3.x - this.x0) * (1 / this.a), r3 = (t3.y - this.y0) * (1 / this.a);
    if (this.es)
      if (i3 = ci2(s3 = this.ml0 + r3 / this.k0, this.es, this.en), Math.abs(i3) < l2) {
        var h3 = Math.sin(i3), o3 = Math.cos(i3), c3 = Math.abs(o3) > _2 ? Math.tan(i3) : 0, u3 = this.ep2 * Math.pow(o3, 2), d3 = Math.pow(u3, 2), m3 = Math.pow(c3, 2), f3 = Math.pow(m3, 2);
        s3 = 1 - this.es * Math.pow(h3, 2);
        var y3 = n3 * Math.sqrt(s3) / this.k0, p3 = Math.pow(y3, 2);
        e3 = i3 - (s3 *= c3) * p3 / (1 - this.es) * 0.5 * (1 - p3 / 12 * (5 + 3 * m3 - 9 * u3 * m3 + u3 - 4 * d3 - p3 / 30 * (61 + 90 * m3 - 252 * u3 * m3 + 45 * f3 + 46 * u3 - p3 / 56 * (1385 + 3633 * m3 + 4095 * f3 + 1574 * f3 * m3)))), a3 = yt2(this.long0 + y3 * (1 - p3 / 6 * (1 + 2 * m3 + u3 - p3 / 20 * (5 + 28 * m3 + 24 * f3 + 8 * u3 * m3 + 6 * u3 - p3 / 42 * (61 + 662 * m3 + 1320 * f3 + 720 * f3 * m3)))) / o3);
      } else
        e3 = l2 * ft2(r3), a3 = 0;
    else {
      var g3 = Math.exp(n3 / this.k0), M3 = 0.5 * (g3 - 1 / g3), x3 = this.lat0 + r3 / this.k0, w3 = Math.cos(x3);
      s3 = Math.sqrt((1 - Math.pow(w3, 2)) / (1 + Math.pow(M3, 2))), e3 = Math.asin(s3), r3 < 0 && (e3 = -e3), a3 = 0 === M3 && 0 === w3 ? 0 : yt2(Math.atan2(M3, w3) + this.long0);
    }
    return t3.x = a3, t3.y = e3, t3;
  }
  var mi2 = { init: li2, forward: ui2, inverse: di2, names: ["Fast_Transverse_Mercator", "Fast Transverse Mercator"] };
  function _i2(t3) {
    var s3 = Math.exp(t3);
    return s3 = (s3 - 1 / s3) / 2;
  }
  function fi2(t3, s3) {
    t3 = Math.abs(t3), s3 = Math.abs(s3);
    var i3 = Math.max(t3, s3), e3 = Math.min(t3, s3) / (i3 || 1);
    return i3 * Math.sqrt(1 + Math.pow(e3, 2));
  }
  function yi2(t3) {
    var s3 = 1 + t3, i3 = s3 - 1;
    return 0 === i3 ? t3 : t3 * Math.log(s3) / i3;
  }
  function pi2(t3) {
    var s3 = Math.abs(t3);
    return s3 = yi2(s3 * (1 + s3 / (fi2(1, s3) + 1))), t3 < 0 ? -s3 : s3;
  }
  function gi2(t3, s3) {
    for (var i3, e3 = 2 * Math.cos(2 * s3), a3 = t3.length - 1, n3 = t3[a3], r3 = 0; --a3 >= 0; )
      i3 = e3 * n3 - r3 + t3[a3], r3 = n3, n3 = i3;
    return s3 + i3 * Math.sin(2 * s3);
  }
  function Mi2(t3, s3) {
    for (var i3, e3 = 2 * Math.cos(s3), a3 = t3.length - 1, n3 = t3[a3], r3 = 0; --a3 >= 0; )
      i3 = e3 * n3 - r3 + t3[a3], r3 = n3, n3 = i3;
    return Math.sin(s3) * i3;
  }
  function xi2(t3) {
    var s3 = Math.exp(t3);
    return s3 = (s3 + 1 / s3) / 2;
  }
  function wi2(t3, s3, i3) {
    for (var e3, a3, n3 = Math.sin(s3), r3 = Math.cos(s3), h3 = _i2(i3), o3 = xi2(i3), c3 = 2 * r3 * o3, l3 = -2 * n3 * h3, u3 = t3.length - 1, d3 = t3[u3], m3 = 0, _3 = 0, f3 = 0; --u3 >= 0; )
      e3 = _3, a3 = m3, d3 = c3 * (_3 = d3) - e3 - l3 * (m3 = f3) + t3[u3], f3 = l3 * _3 - a3 + c3 * m3;
    return [(c3 = n3 * o3) * d3 - (l3 = r3 * h3) * f3, c3 * f3 + l3 * d3];
  }
  function Si2() {
    if (!this.approx && (isNaN(this.es) || this.es <= 0))
      throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');
    this.approx && (mi2.init.apply(this), this.forward = mi2.forward, this.inverse = mi2.inverse), this.x0 = void 0 !== this.x0 ? this.x0 : 0, this.y0 = void 0 !== this.y0 ? this.y0 : 0, this.long0 = void 0 !== this.long0 ? this.long0 : 0, this.lat0 = void 0 !== this.lat0 ? this.lat0 : 0, this.cgb = [], this.cbg = [], this.utg = [], this.gtu = [];
    var t3 = this.es / (1 + Math.sqrt(1 - this.es)), s3 = t3 / (2 - t3), i3 = s3;
    this.cgb[0] = s3 * (2 + s3 * (-2 / 3 + s3 * (s3 * (116 / 45 + s3 * (26 / 45 + s3 * (-2854 / 675))) - 2))), this.cbg[0] = s3 * (s3 * (2 / 3 + s3 * (4 / 3 + s3 * (-82 / 45 + s3 * (32 / 45 + s3 * (4642 / 4725))))) - 2), i3 *= s3, this.cgb[1] = i3 * (7 / 3 + s3 * (s3 * (-227 / 45 + s3 * (2704 / 315 + s3 * (2323 / 945))) - 1.6)), this.cbg[1] = i3 * (5 / 3 + s3 * (-16 / 15 + s3 * (-13 / 9 + s3 * (904 / 315 + s3 * (-1522 / 945))))), i3 *= s3, this.cgb[2] = i3 * (56 / 15 + s3 * (-136 / 35 + s3 * (-1262 / 105 + s3 * (73814 / 2835)))), this.cbg[2] = i3 * (-26 / 15 + s3 * (34 / 21 + s3 * (1.6 + s3 * (-12686 / 2835)))), i3 *= s3, this.cgb[3] = i3 * (4279 / 630 + s3 * (-332 / 35 + s3 * (-399572 / 14175))), this.cbg[3] = i3 * (1237 / 630 + s3 * (s3 * (-24832 / 14175) - 2.4)), i3 *= s3, this.cgb[4] = i3 * (4174 / 315 + s3 * (-144838 / 6237)), this.cbg[4] = i3 * (-734 / 315 + s3 * (109598 / 31185)), i3 *= s3, this.cgb[5] = i3 * (601676 / 22275), this.cbg[5] = i3 * (444337 / 155925), i3 = Math.pow(s3, 2), this.Qn = this.k0 / (1 + s3) * (1 + i3 * (1 / 4 + i3 * (1 / 64 + i3 / 256))), this.utg[0] = s3 * (s3 * (2 / 3 + s3 * (-37 / 96 + s3 * (1 / 360 + s3 * (81 / 512 + s3 * (-96199 / 604800))))) - 0.5), this.gtu[0] = s3 * (0.5 + s3 * (-2 / 3 + s3 * (5 / 16 + s3 * (41 / 180 + s3 * (-127 / 288 + s3 * (7891 / 37800)))))), this.utg[1] = i3 * (-1 / 48 + s3 * (-1 / 15 + s3 * (437 / 1440 + s3 * (-46 / 105 + s3 * (1118711 / 3870720))))), this.gtu[1] = i3 * (13 / 48 + s3 * (s3 * (557 / 1440 + s3 * (281 / 630 + s3 * (-1983433 / 1935360))) - 0.6)), i3 *= s3, this.utg[2] = i3 * (-17 / 480 + s3 * (37 / 840 + s3 * (209 / 4480 + s3 * (-5569 / 90720)))), this.gtu[2] = i3 * (61 / 240 + s3 * (-103 / 140 + s3 * (15061 / 26880 + s3 * (167603 / 181440)))), i3 *= s3, this.utg[3] = i3 * (-4397 / 161280 + s3 * (11 / 504 + s3 * (830251 / 7257600))), this.gtu[3] = i3 * (49561 / 161280 + s3 * (-179 / 168 + s3 * (6601661 / 7257600))), i3 *= s3, this.utg[4] = i3 * (-4583 / 161280 + s3 * (108847 / 3991680)), this.gtu[4] = i3 * (34729 / 80640 + s3 * (-3418889 / 1995840)), i3 *= s3, this.utg[5] = i3 * (-20648693 / 638668800), this.gtu[5] = 0.6650675310896665 * i3;
    var e3 = gi2(this.cbg, this.lat0);
    this.Zb = -this.Qn * (e3 + Mi2(this.gtu, 2 * e3));
  }
  function Ei2(t3) {
    var s3 = yt2(t3.x - this.long0), i3 = t3.y;
    i3 = gi2(this.cbg, i3);
    var e3 = Math.sin(i3), a3 = Math.cos(i3), n3 = Math.sin(s3), r3 = Math.cos(s3);
    i3 = Math.atan2(e3, r3 * a3), s3 = Math.atan2(n3 * a3, fi2(e3, a3 * r3)), s3 = pi2(Math.tan(s3));
    var h3, o3, c3 = wi2(this.gtu, 2 * i3, 2 * s3);
    return i3 += c3[0], s3 += c3[1], Math.abs(s3) <= 2.623395162778 ? (h3 = this.a * (this.Qn * s3) + this.x0, o3 = this.a * (this.Qn * i3 + this.Zb) + this.y0) : (h3 = 1 / 0, o3 = 1 / 0), t3.x = h3, t3.y = o3, t3;
  }
  function bi2(t3) {
    var s3, i3, e3 = (t3.x - this.x0) * (1 / this.a), a3 = (t3.y - this.y0) * (1 / this.a);
    if (a3 = (a3 - this.Zb) / this.Qn, e3 /= this.Qn, Math.abs(e3) <= 2.623395162778) {
      var n3 = wi2(this.utg, 2 * a3, 2 * e3);
      a3 += n3[0], e3 += n3[1], e3 = Math.atan(_i2(e3));
      var r3 = Math.sin(a3), h3 = Math.cos(a3), o3 = Math.sin(e3), c3 = Math.cos(e3);
      a3 = Math.atan2(r3 * c3, fi2(o3, c3 * h3)), s3 = yt2((e3 = Math.atan2(o3, c3 * h3)) + this.long0), i3 = gi2(this.cgb, a3);
    } else
      s3 = 1 / 0, i3 = 1 / 0;
    return t3.x = s3, t3.y = i3, t3;
  }
  var Pi2 = { init: Si2, forward: Ei2, inverse: bi2, names: ["Extended_Transverse_Mercator", "Extended Transverse Mercator", "etmerc", "Transverse_Mercator", "Transverse Mercator", "Gauss Kruger", "Gauss_Kruger", "tmerc"] };
  function vi2(t3, s3) {
    if (void 0 === t3) {
      if ((t3 = Math.floor(30 * (yt2(s3) + Math.PI) / Math.PI) + 1) < 0)
        return 0;
      if (t3 > 60)
        return 60;
    }
    return t3;
  }
  function Ai2() {
    var t3 = vi2(this.zone, this.long0);
    if (void 0 === t3)
      throw new Error("unknown utm zone");
    this.lat0 = 0, this.long0 = (6 * Math.abs(t3) - 183) * f2, this.x0 = 5e5, this.y0 = this.utmSouth ? 1e7 : 0, this.k0 = 0.9996, Pi2.init.apply(this), this.forward = Pi2.forward, this.inverse = Pi2.inverse;
  }
  var Gi2 = { init: Ai2, names: ["Universal Transverse Mercator System", "utm"], dependsOn: "etmerc" };
  function Ci2(t3, s3) {
    return Math.pow((1 - t3) / (1 + t3), s3);
  }
  var Ni2 = 20;
  function Ii2() {
    var t3 = Math.sin(this.lat0), s3 = Math.cos(this.lat0);
    s3 *= s3, this.rc = Math.sqrt(1 - this.es) / (1 - this.es * t3 * t3), this.C = Math.sqrt(1 + this.es * s3 * s3 / (1 - this.es)), this.phic0 = Math.asin(t3 / this.C), this.ratexp = 0.5 * this.C * this.e, this.K = Math.tan(0.5 * this.phic0 + p2) / (Math.pow(Math.tan(0.5 * this.lat0 + p2), this.C) * Ci2(this.e * t3, this.ratexp));
  }
  function zi2(t3) {
    var s3 = t3.x, i3 = t3.y;
    return t3.y = 2 * Math.atan(this.K * Math.pow(Math.tan(0.5 * i3 + p2), this.C) * Ci2(this.e * Math.sin(i3), this.ratexp)) - l2, t3.x = this.C * s3, t3;
  }
  function Ti2(t3) {
    for (var s3 = 1e-14, i3 = t3.x / this.C, e3 = t3.y, a3 = Math.pow(Math.tan(0.5 * e3 + p2) / this.K, 1 / this.C), n3 = Ni2; n3 > 0 && (e3 = 2 * Math.atan(a3 * Ci2(this.e * Math.sin(t3.y), -0.5 * this.e)) - l2, !(Math.abs(e3 - t3.y) < s3)); --n3)
      t3.y = e3;
    return n3 ? (t3.x = i3, t3.y = e3, t3) : null;
  }
  var Oi2 = { init: Ii2, forward: zi2, inverse: Ti2 };
  function Ri2() {
    Oi2.init.apply(this), this.rc && (this.sinc0 = Math.sin(this.phic0), this.cosc0 = Math.cos(this.phic0), this.R2 = 2 * this.rc, this.title || (this.title = "Oblique Stereographic Alternative"));
  }
  function qi2(t3) {
    var s3, i3, e3, a3;
    return t3.x = yt2(t3.x - this.long0), Oi2.forward.apply(this, [t3]), s3 = Math.sin(t3.y), i3 = Math.cos(t3.y), e3 = Math.cos(t3.x), a3 = this.k0 * this.R2 / (1 + this.sinc0 * s3 + this.cosc0 * i3 * e3), t3.x = a3 * i3 * Math.sin(t3.x), t3.y = a3 * (this.cosc0 * s3 - this.sinc0 * i3 * e3), t3.x = this.a * t3.x + this.x0, t3.y = this.a * t3.y + this.y0, t3;
  }
  function Li2(t3) {
    var s3, i3, e3, a3, n3;
    if (t3.x = (t3.x - this.x0) / this.a, t3.y = (t3.y - this.y0) / this.a, t3.x /= this.k0, t3.y /= this.k0, n3 = fi2(t3.x, t3.y)) {
      var r3 = 2 * Math.atan2(n3, this.R2);
      s3 = Math.sin(r3), i3 = Math.cos(r3), a3 = Math.asin(i3 * this.sinc0 + t3.y * s3 * this.cosc0 / n3), e3 = Math.atan2(t3.x * s3, n3 * this.cosc0 * i3 - t3.y * this.sinc0 * s3);
    } else
      a3 = this.phic0, e3 = 0;
    return t3.x = e3, t3.y = a3, Oi2.inverse.apply(this, [t3]), t3.x = yt2(t3.x + this.long0), t3;
  }
  var Bi2 = { init: Ri2, forward: qi2, inverse: Li2, names: ["Stereographic_North_Pole", "Oblique_Stereographic", "sterea", "Oblique Stereographic Alternative", "Double_Stereographic"] };
  function ki2(t3, s3, i3) {
    return s3 *= i3, Math.tan(0.5 * (l2 + t3)) * Math.pow((1 - s3) / (1 + s3), 0.5 * i3);
  }
  function Di2() {
    this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.coslat0 = Math.cos(this.lat0), this.sinlat0 = Math.sin(this.lat0), this.sphere ? 1 === this.k0 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= _2 && (this.k0 = 0.5 * (1 + ft2(this.lat0) * Math.sin(this.lat_ts))) : (Math.abs(this.coslat0) <= _2 && (this.lat0 > 0 ? this.con = 1 : this.con = -1), this.cons = Math.sqrt(Math.pow(1 + this.e, 1 + this.e) * Math.pow(1 - this.e, 1 - this.e)), 1 === this.k0 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= _2 && Math.abs(Math.cos(this.lat_ts)) > _2 && (this.k0 = 0.5 * this.cons * _t2(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) / pt2(this.e, this.con * this.lat_ts, this.con * Math.sin(this.lat_ts))), this.ms1 = _t2(this.e, this.sinlat0, this.coslat0), this.X0 = 2 * Math.atan(this.ssfn_(this.lat0, this.sinlat0, this.e)) - l2, this.cosX0 = Math.cos(this.X0), this.sinX0 = Math.sin(this.X0));
  }
  function Ui2(t3) {
    var s3, i3, e3, a3, n3, r3, h3 = t3.x, o3 = t3.y, c3 = Math.sin(o3), u3 = Math.cos(o3), d3 = yt2(h3 - this.long0);
    return Math.abs(Math.abs(h3 - this.long0) - Math.PI) <= _2 && Math.abs(o3 + this.lat0) <= _2 ? (t3.x = NaN, t3.y = NaN, t3) : this.sphere ? (s3 = 2 * this.k0 / (1 + this.sinlat0 * c3 + this.coslat0 * u3 * Math.cos(d3)), t3.x = this.a * s3 * u3 * Math.sin(d3) + this.x0, t3.y = this.a * s3 * (this.coslat0 * c3 - this.sinlat0 * u3 * Math.cos(d3)) + this.y0, t3) : (i3 = 2 * Math.atan(this.ssfn_(o3, c3, this.e)) - l2, a3 = Math.cos(i3), e3 = Math.sin(i3), Math.abs(this.coslat0) <= _2 ? (n3 = pt2(this.e, o3 * this.con, this.con * c3), r3 = 2 * this.a * this.k0 * n3 / this.cons, t3.x = this.x0 + r3 * Math.sin(h3 - this.long0), t3.y = this.y0 - this.con * r3 * Math.cos(h3 - this.long0), t3) : (Math.abs(this.sinlat0) < _2 ? (s3 = 2 * this.a * this.k0 / (1 + a3 * Math.cos(d3)), t3.y = s3 * e3) : (s3 = 2 * this.a * this.k0 * this.ms1 / (this.cosX0 * (1 + this.sinX0 * e3 + this.cosX0 * a3 * Math.cos(d3))), t3.y = s3 * (this.cosX0 * e3 - this.sinX0 * a3 * Math.cos(d3)) + this.y0), t3.x = s3 * a3 * Math.sin(d3) + this.x0, t3));
  }
  function ji2(t3) {
    var s3, i3, e3, a3, n3;
    t3.x -= this.x0, t3.y -= this.y0;
    var r3 = Math.sqrt(t3.x * t3.x + t3.y * t3.y);
    if (this.sphere) {
      var h3 = 2 * Math.atan(r3 / (2 * this.a * this.k0));
      return s3 = this.long0, i3 = this.lat0, r3 <= _2 ? (t3.x = s3, t3.y = i3, t3) : (i3 = Math.asin(Math.cos(h3) * this.sinlat0 + t3.y * Math.sin(h3) * this.coslat0 / r3), s3 = Math.abs(this.coslat0) < _2 ? this.lat0 > 0 ? yt2(this.long0 + Math.atan2(t3.x, -1 * t3.y)) : yt2(this.long0 + Math.atan2(t3.x, t3.y)) : yt2(this.long0 + Math.atan2(t3.x * Math.sin(h3), r3 * this.coslat0 * Math.cos(h3) - t3.y * this.sinlat0 * Math.sin(h3))), t3.x = s3, t3.y = i3, t3);
    }
    if (Math.abs(this.coslat0) <= _2) {
      if (r3 <= _2)
        return i3 = this.lat0, s3 = this.long0, t3.x = s3, t3.y = i3, t3;
      t3.x *= this.con, t3.y *= this.con, e3 = r3 * this.cons / (2 * this.a * this.k0), i3 = this.con * gt2(this.e, e3), s3 = this.con * yt2(this.con * this.long0 + Math.atan2(t3.x, -1 * t3.y));
    } else
      a3 = 2 * Math.atan(r3 * this.cosX0 / (2 * this.a * this.k0 * this.ms1)), s3 = this.long0, r3 <= _2 ? n3 = this.X0 : (n3 = Math.asin(Math.cos(a3) * this.sinX0 + t3.y * Math.sin(a3) * this.cosX0 / r3), s3 = yt2(this.long0 + Math.atan2(t3.x * Math.sin(a3), r3 * this.cosX0 * Math.cos(a3) - t3.y * this.sinX0 * Math.sin(a3)))), i3 = -1 * gt2(this.e, Math.tan(0.5 * (l2 + n3)));
    return t3.x = s3, t3.y = i3, t3;
  }
  var Fi2 = { init: Di2, forward: Ui2, inverse: ji2, names: ["stere", "Stereographic_South_Pole", "Polar_Stereographic_variant_A", "Polar_Stereographic_variant_B", "Polar_Stereographic"], ssfn_: ki2 };
  function Vi2() {
    var t3 = this.lat0;
    this.lambda0 = this.long0;
    var s3 = Math.sin(t3), i3 = this.a, e3 = 1 / this.rf, a3 = 2 * e3 - Math.pow(e3, 2), n3 = this.e = Math.sqrt(a3);
    this.R = this.k0 * i3 * Math.sqrt(1 - a3) / (1 - a3 * Math.pow(s3, 2)), this.alpha = Math.sqrt(1 + a3 / (1 - a3) * Math.pow(Math.cos(t3), 4)), this.b0 = Math.asin(s3 / this.alpha);
    var r3 = Math.log(Math.tan(Math.PI / 4 + this.b0 / 2)), h3 = Math.log(Math.tan(Math.PI / 4 + t3 / 2)), o3 = Math.log((1 + n3 * s3) / (1 - n3 * s3));
    this.K = r3 - this.alpha * h3 + this.alpha * n3 / 2 * o3;
  }
  function Wi2(t3) {
    var s3 = Math.log(Math.tan(Math.PI / 4 - t3.y / 2)), i3 = this.e / 2 * Math.log((1 + this.e * Math.sin(t3.y)) / (1 - this.e * Math.sin(t3.y))), e3 = -this.alpha * (s3 + i3) + this.K, a3 = 2 * (Math.atan(Math.exp(e3)) - Math.PI / 4), n3 = this.alpha * (t3.x - this.lambda0), r3 = Math.atan(Math.sin(n3) / (Math.sin(this.b0) * Math.tan(a3) + Math.cos(this.b0) * Math.cos(n3))), h3 = Math.asin(Math.cos(this.b0) * Math.sin(a3) - Math.sin(this.b0) * Math.cos(a3) * Math.cos(n3));
    return t3.y = this.R / 2 * Math.log((1 + Math.sin(h3)) / (1 - Math.sin(h3))) + this.y0, t3.x = this.R * r3 + this.x0, t3;
  }
  function Hi2(t3) {
    for (var s3 = t3.x - this.x0, i3 = t3.y - this.y0, e3 = s3 / this.R, a3 = 2 * (Math.atan(Math.exp(i3 / this.R)) - Math.PI / 4), n3 = Math.asin(Math.cos(this.b0) * Math.sin(a3) + Math.sin(this.b0) * Math.cos(a3) * Math.cos(e3)), r3 = Math.atan(Math.sin(e3) / (Math.cos(this.b0) * Math.cos(e3) - Math.sin(this.b0) * Math.tan(a3))), h3 = this.lambda0 + r3 / this.alpha, o3 = 0, c3 = n3, l3 = -1e3, u3 = 0; Math.abs(c3 - l3) > 1e-7; ) {
      if (++u3 > 20)
        return;
      o3 = 1 / this.alpha * (Math.log(Math.tan(Math.PI / 4 + n3 / 2)) - this.K) + this.e * Math.log(Math.tan(Math.PI / 4 + Math.asin(this.e * Math.sin(c3)) / 2)), l3 = c3, c3 = 2 * Math.atan(Math.exp(o3)) - Math.PI / 2;
    }
    return t3.x = h3, t3.y = c3, t3;
  }
  var Xi2 = { init: Vi2, forward: Wi2, inverse: Hi2, names: ["somerc"] }, Yi2 = 1e-7;
  function Zi2(t3) {
    var s3 = ["Hotine_Oblique_Mercator", "Hotine_Oblique_Mercator_variant_A", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin"], i3 = "object" == typeof t3.projName ? Object.keys(t3.projName)[0] : t3.projName;
    return "no_uoff" in t3 || "no_off" in t3 || -1 !== s3.indexOf(i3) || -1 !== s3.indexOf(Gt2(i3));
  }
  function Qi2() {
    var t3, s3, i3, e3, a3, n3, r3, h3, o3, c3, u3, d3 = 0, m3 = 0, f3 = 0, y3 = 0, M3 = 0, x3 = 0, w3 = 0;
    this.no_off = Zi2(this), this.no_rot = "no_rot" in this;
    var S3 = false;
    "alpha" in this && (S3 = true);
    var E3 = false;
    if ("rectified_grid_angle" in this && (E3 = true), S3 && (w3 = this.alpha), E3 && (d3 = this.rectified_grid_angle), S3 || E3)
      m3 = this.longc;
    else if (f3 = this.long1, M3 = this.lat1, y3 = this.long2, x3 = this.lat2, Math.abs(M3 - x3) <= Yi2 || (t3 = Math.abs(M3)) <= Yi2 || Math.abs(t3 - l2) <= Yi2 || Math.abs(Math.abs(this.lat0) - l2) <= Yi2 || Math.abs(Math.abs(x3) - l2) <= Yi2)
      throw new Error();
    var b3 = 1 - this.es;
    s3 = Math.sqrt(b3), Math.abs(this.lat0) > _2 ? (h3 = Math.sin(this.lat0), i3 = Math.cos(this.lat0), t3 = 1 - this.es * h3 * h3, this.B = i3 * i3, this.B = Math.sqrt(1 + this.es * this.B * this.B / b3), this.A = this.B * this.k0 * s3 / t3, (a3 = (e3 = this.B * s3 / (i3 * Math.sqrt(t3))) * e3 - 1) <= 0 ? a3 = 0 : (a3 = Math.sqrt(a3), this.lat0 < 0 && (a3 = -a3)), this.E = a3 += e3, this.E *= Math.pow(pt2(this.e, this.lat0, h3), this.B)) : (this.B = 1 / s3, this.A = this.k0, this.E = e3 = a3 = 1), S3 || E3 ? (S3 ? (u3 = Math.asin(Math.sin(w3) / e3), E3 || (d3 = w3)) : (u3 = d3, w3 = Math.asin(e3 * Math.sin(u3))), this.lam0 = m3 - Math.asin(0.5 * (a3 - 1 / a3) * Math.tan(u3)) / this.B) : (n3 = Math.pow(pt2(this.e, M3, Math.sin(M3)), this.B), r3 = Math.pow(pt2(this.e, x3, Math.sin(x3)), this.B), a3 = this.E / n3, o3 = (r3 - n3) / (r3 + n3), c3 = ((c3 = this.E * this.E) - r3 * n3) / (c3 + r3 * n3), (t3 = f3 - y3) < -Math.pi ? y3 -= g2 : t3 > Math.pi && (y3 += g2), this.lam0 = yt2(0.5 * (f3 + y3) - Math.atan(c3 * Math.tan(0.5 * this.B * (f3 - y3)) / o3) / this.B), u3 = Math.atan(2 * Math.sin(this.B * yt2(f3 - this.lam0)) / (a3 - 1 / a3)), d3 = w3 = Math.asin(e3 * Math.sin(u3))), this.singam = Math.sin(u3), this.cosgam = Math.cos(u3), this.sinrot = Math.sin(d3), this.cosrot = Math.cos(d3), this.rB = 1 / this.B, this.ArB = this.A * this.rB, this.BrA = 1 / this.ArB, this.no_off ? this.u_0 = 0 : (this.u_0 = Math.abs(this.ArB * Math.atan(Math.sqrt(e3 * e3 - 1) / Math.cos(w3))), this.lat0 < 0 && (this.u_0 = -this.u_0)), a3 = 0.5 * u3, this.v_pole_n = this.ArB * Math.log(Math.tan(p2 - a3)), this.v_pole_s = this.ArB * Math.log(Math.tan(p2 + a3));
  }
  function Ki2(t3) {
    var s3, i3, e3, a3, n3, r3, h3, o3, c3 = {};
    if (t3.x = t3.x - this.lam0, Math.abs(Math.abs(t3.y) - l2) > _2) {
      if (s3 = 0.5 * ((n3 = this.E / Math.pow(pt2(this.e, t3.y, Math.sin(t3.y)), this.B)) - (r3 = 1 / n3)), i3 = 0.5 * (n3 + r3), a3 = Math.sin(this.B * t3.x), e3 = (s3 * this.singam - a3 * this.cosgam) / i3, Math.abs(Math.abs(e3) - 1) < _2)
        throw new Error();
      o3 = 0.5 * this.ArB * Math.log((1 - e3) / (1 + e3)), r3 = Math.cos(this.B * t3.x), h3 = Math.abs(r3) < Yi2 ? this.A * t3.x : this.ArB * Math.atan2(s3 * this.cosgam + a3 * this.singam, r3);
    } else
      o3 = t3.y > 0 ? this.v_pole_n : this.v_pole_s, h3 = this.ArB * t3.y;
    return this.no_rot ? (c3.x = h3, c3.y = o3) : (h3 -= this.u_0, c3.x = o3 * this.cosrot + h3 * this.sinrot, c3.y = h3 * this.cosrot - o3 * this.sinrot), c3.x = this.a * c3.x + this.x0, c3.y = this.a * c3.y + this.y0, c3;
  }
  function Ji2(t3) {
    var s3, i3, e3, a3, n3, r3, h3, o3 = {};
    if (t3.x = (t3.x - this.x0) * (1 / this.a), t3.y = (t3.y - this.y0) * (1 / this.a), this.no_rot ? (i3 = t3.y, s3 = t3.x) : (i3 = t3.x * this.cosrot - t3.y * this.sinrot, s3 = t3.y * this.cosrot + t3.x * this.sinrot + this.u_0), a3 = 0.5 * ((e3 = Math.exp(-this.BrA * i3)) - 1 / e3), n3 = 0.5 * (e3 + 1 / e3), h3 = ((r3 = Math.sin(this.BrA * s3)) * this.cosgam + a3 * this.singam) / n3, Math.abs(Math.abs(h3) - 1) < _2)
      o3.x = 0, o3.y = h3 < 0 ? -l2 : l2;
    else {
      if (o3.y = this.E / Math.sqrt((1 + h3) / (1 - h3)), o3.y = gt2(this.e, Math.pow(o3.y, 1 / this.B)), o3.y === 1 / 0)
        throw new Error();
      o3.x = -this.rB * Math.atan2(a3 * this.cosgam - r3 * this.singam, Math.cos(this.BrA * s3));
    }
    return o3.x += this.lam0, o3;
  }
  var $i2 = { init: Qi2, forward: Ki2, inverse: Ji2, names: ["Hotine_Oblique_Mercator", "Hotine Oblique Mercator", "Hotine_Oblique_Mercator_variant_A", "Hotine_Oblique_Mercator_Variant_B", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin", "Hotine_Oblique_Mercator_Two_Point_Natural_Origin", "Hotine_Oblique_Mercator_Azimuth_Center", "Oblique_Mercator", "omerc"] };
  function te2() {
    if (this.lat2 || (this.lat2 = this.lat1), this.k0 || (this.k0 = 1), this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, !(Math.abs(this.lat1 + this.lat2) < _2)) {
      var t3 = this.b / this.a;
      this.e = Math.sqrt(1 - t3 * t3);
      var s3 = Math.sin(this.lat1), i3 = Math.cos(this.lat1), e3 = _t2(this.e, s3, i3), a3 = pt2(this.e, this.lat1, s3), n3 = Math.sin(this.lat2), r3 = Math.cos(this.lat2), h3 = _t2(this.e, n3, r3), o3 = pt2(this.e, this.lat2, n3), c3 = Math.abs(Math.abs(this.lat0) - l2) < _2 ? 0 : pt2(this.e, this.lat0, Math.sin(this.lat0));
      Math.abs(this.lat1 - this.lat2) > _2 ? this.ns = Math.log(e3 / h3) / Math.log(a3 / o3) : this.ns = s3, isNaN(this.ns) && (this.ns = s3), this.f0 = e3 / (this.ns * Math.pow(a3, this.ns)), this.rh = this.a * this.f0 * Math.pow(c3, this.ns), this.title || (this.title = "Lambert Conformal Conic");
    }
  }
  function se2(t3) {
    var s3 = t3.x, i3 = t3.y;
    Math.abs(2 * Math.abs(i3) - Math.PI) <= _2 && (i3 = ft2(i3) * (l2 - 2 * _2));
    var e3, a3, n3 = Math.abs(Math.abs(i3) - l2);
    if (n3 > _2)
      e3 = pt2(this.e, i3, Math.sin(i3)), a3 = this.a * this.f0 * Math.pow(e3, this.ns);
    else {
      if ((n3 = i3 * this.ns) <= 0)
        return null;
      a3 = 0;
    }
    var r3 = this.ns * yt2(s3 - this.long0);
    return t3.x = this.k0 * (a3 * Math.sin(r3)) + this.x0, t3.y = this.k0 * (this.rh - a3 * Math.cos(r3)) + this.y0, t3;
  }
  function ie2(t3) {
    var s3, i3, e3, a3, n3, r3 = (t3.x - this.x0) / this.k0, h3 = this.rh - (t3.y - this.y0) / this.k0;
    this.ns > 0 ? (s3 = Math.sqrt(r3 * r3 + h3 * h3), i3 = 1) : (s3 = -Math.sqrt(r3 * r3 + h3 * h3), i3 = -1);
    var o3 = 0;
    if (0 !== s3 && (o3 = Math.atan2(i3 * r3, i3 * h3)), 0 !== s3 || this.ns > 0) {
      if (i3 = 1 / this.ns, e3 = Math.pow(s3 / (this.a * this.f0), i3), -9999 === (a3 = gt2(this.e, e3)))
        return null;
    } else
      a3 = -l2;
    return n3 = yt2(o3 / this.ns + this.long0), t3.x = n3, t3.y = a3, t3;
  }
  var ee2 = { init: te2, forward: se2, inverse: ie2, names: ["Lambert Tangential Conformal Conic Projection", "Lambert_Conformal_Conic", "Lambert_Conformal_Conic_1SP", "Lambert_Conformal_Conic_2SP", "lcc", "Lambert Conic Conformal (1SP)", "Lambert Conic Conformal (2SP)"] };
  function ae2() {
    this.a = 6377397155e-3, this.es = 0.006674372230614, this.e = Math.sqrt(this.es), this.lat0 || (this.lat0 = 0.863937979737193), this.long0 || (this.long0 = 0.4334234309119251), this.k0 || (this.k0 = 0.9999), this.s45 = 0.785398163397448, this.s90 = 2 * this.s45, this.fi0 = this.lat0, this.e2 = this.es, this.e = Math.sqrt(this.e2), this.alfa = Math.sqrt(1 + this.e2 * Math.pow(Math.cos(this.fi0), 4) / (1 - this.e2)), this.uq = 1.04216856380474, this.u0 = Math.asin(Math.sin(this.fi0) / this.alfa), this.g = Math.pow((1 + this.e * Math.sin(this.fi0)) / (1 - this.e * Math.sin(this.fi0)), this.alfa * this.e / 2), this.k = Math.tan(this.u0 / 2 + this.s45) / Math.pow(Math.tan(this.fi0 / 2 + this.s45), this.alfa) * this.g, this.k1 = this.k0, this.n0 = this.a * Math.sqrt(1 - this.e2) / (1 - this.e2 * Math.pow(Math.sin(this.fi0), 2)), this.s0 = 1.37008346281555, this.n = Math.sin(this.s0), this.ro0 = this.k1 * this.n0 / Math.tan(this.s0), this.ad = this.s90 - this.uq;
  }
  function ne2(t3) {
    var s3, i3, e3, a3, n3, r3, h3, o3 = t3.x, c3 = t3.y, l3 = yt2(o3 - this.long0);
    return s3 = Math.pow((1 + this.e * Math.sin(c3)) / (1 - this.e * Math.sin(c3)), this.alfa * this.e / 2), i3 = 2 * (Math.atan(this.k * Math.pow(Math.tan(c3 / 2 + this.s45), this.alfa) / s3) - this.s45), e3 = -l3 * this.alfa, a3 = Math.asin(Math.cos(this.ad) * Math.sin(i3) + Math.sin(this.ad) * Math.cos(i3) * Math.cos(e3)), n3 = Math.asin(Math.cos(i3) * Math.sin(e3) / Math.cos(a3)), r3 = this.n * n3, h3 = this.ro0 * Math.pow(Math.tan(this.s0 / 2 + this.s45), this.n) / Math.pow(Math.tan(a3 / 2 + this.s45), this.n), t3.y = h3 * Math.cos(r3) / 1, t3.x = h3 * Math.sin(r3) / 1, this.czech || (t3.y *= -1, t3.x *= -1), t3;
  }
  function re2(t3) {
    var s3, i3, e3, a3, n3, r3, h3, o3 = t3.x;
    t3.x = t3.y, t3.y = o3, this.czech || (t3.y *= -1, t3.x *= -1), n3 = Math.sqrt(t3.x * t3.x + t3.y * t3.y), a3 = Math.atan2(t3.y, t3.x) / Math.sin(this.s0), e3 = 2 * (Math.atan(Math.pow(this.ro0 / n3, 1 / this.n) * Math.tan(this.s0 / 2 + this.s45)) - this.s45), s3 = Math.asin(Math.cos(this.ad) * Math.sin(e3) - Math.sin(this.ad) * Math.cos(e3) * Math.cos(a3)), i3 = Math.asin(Math.cos(e3) * Math.sin(a3) / Math.cos(s3)), t3.x = this.long0 - i3 / this.alfa, r3 = s3, h3 = 0;
    var c3 = 0;
    do {
      t3.y = 2 * (Math.atan(Math.pow(this.k, -1 / this.alfa) * Math.pow(Math.tan(s3 / 2 + this.s45), 1 / this.alfa) * Math.pow((1 + this.e * Math.sin(r3)) / (1 - this.e * Math.sin(r3)), this.e / 2)) - this.s45), Math.abs(r3 - t3.y) < 1e-10 && (h3 = 1), r3 = t3.y, c3 += 1;
    } while (0 === h3 && c3 < 15);
    return c3 >= 15 ? null : t3;
  }
  var he2 = { init: ae2, forward: ne2, inverse: re2, names: ["Krovak", "krovak"] };
  function oe2(t3, s3, i3, e3, a3) {
    return t3 * a3 - s3 * Math.sin(2 * a3) + i3 * Math.sin(4 * a3) - e3 * Math.sin(6 * a3);
  }
  function ce2(t3) {
    return 1 - 0.25 * t3 * (1 + t3 / 16 * (3 + 1.25 * t3));
  }
  function le2(t3) {
    return 0.375 * t3 * (1 + 0.25 * t3 * (1 + 0.46875 * t3));
  }
  function ue2(t3) {
    return 0.05859375 * t3 * t3 * (1 + 0.75 * t3);
  }
  function de2(t3) {
    return t3 * t3 * t3 * (35 / 3072);
  }
  function me2(t3, s3, i3) {
    var e3 = s3 * i3;
    return t3 / Math.sqrt(1 - e3 * e3);
  }
  function _e2(t3) {
    return Math.abs(t3) < l2 ? t3 : t3 - ft2(t3) * Math.PI;
  }
  function fe2(t3, s3, i3, e3, a3) {
    var n3, r3;
    n3 = t3 / s3;
    for (var h3 = 0; h3 < 15; h3++)
      if (n3 += r3 = (t3 - (s3 * n3 - i3 * Math.sin(2 * n3) + e3 * Math.sin(4 * n3) - a3 * Math.sin(6 * n3))) / (s3 - 2 * i3 * Math.cos(2 * n3) + 4 * e3 * Math.cos(4 * n3) - 6 * a3 * Math.cos(6 * n3)), Math.abs(r3) <= 1e-10)
        return n3;
    return NaN;
  }
  function ye2() {
    this.sphere || (this.e0 = ce2(this.es), this.e1 = le2(this.es), this.e2 = ue2(this.es), this.e3 = de2(this.es), this.ml0 = this.a * oe2(this.e0, this.e1, this.e2, this.e3, this.lat0));
  }
  function pe2(t3) {
    var s3, i3, e3 = t3.x, a3 = t3.y;
    if (e3 = yt2(e3 - this.long0), this.sphere)
      s3 = this.a * Math.asin(Math.cos(a3) * Math.sin(e3)), i3 = this.a * (Math.atan2(Math.tan(a3), Math.cos(e3)) - this.lat0);
    else {
      var n3 = Math.sin(a3), r3 = Math.cos(a3), h3 = me2(this.a, this.e, n3), o3 = Math.tan(a3) * Math.tan(a3), c3 = e3 * Math.cos(a3), l3 = c3 * c3, u3 = this.es * r3 * r3 / (1 - this.es);
      s3 = h3 * c3 * (1 - l3 * o3 * (1 / 6 - (8 - o3 + 8 * u3) * l3 / 120)), i3 = this.a * oe2(this.e0, this.e1, this.e2, this.e3, a3) - this.ml0 + h3 * n3 / r3 * l3 * (0.5 + (5 - o3 + 6 * u3) * l3 / 24);
    }
    return t3.x = s3 + this.x0, t3.y = i3 + this.y0, t3;
  }
  function ge2(t3) {
    t3.x -= this.x0, t3.y -= this.y0;
    var s3, i3, e3 = t3.x / this.a, a3 = t3.y / this.a;
    if (this.sphere) {
      var n3 = a3 + this.lat0;
      s3 = Math.asin(Math.sin(n3) * Math.cos(e3)), i3 = Math.atan2(Math.tan(e3), Math.cos(n3));
    } else {
      var r3 = fe2(this.ml0 / this.a + a3, this.e0, this.e1, this.e2, this.e3);
      if (Math.abs(Math.abs(r3) - l2) <= _2)
        return t3.x = this.long0, t3.y = l2, a3 < 0 && (t3.y *= -1), t3;
      var h3 = me2(this.a, this.e, Math.sin(r3)), o3 = h3 * h3 * h3 / this.a / this.a * (1 - this.es), c3 = Math.pow(Math.tan(r3), 2), u3 = e3 * this.a / h3, d3 = u3 * u3;
      s3 = r3 - h3 * Math.tan(r3) / o3 * u3 * u3 * (0.5 - (1 + 3 * c3) * u3 * u3 / 24), i3 = u3 * (1 - d3 * (c3 / 3 + (1 + 3 * c3) * c3 * d3 / 15)) / Math.cos(r3);
    }
    return t3.x = yt2(i3 + this.long0), t3.y = _e2(s3), t3;
  }
  var Me2 = { init: ye2, forward: pe2, inverse: ge2, names: ["Cassini", "Cassini_Soldner", "cass"] };
  function xe2(t3, s3) {
    var i3;
    return t3 > 1e-7 ? (1 - t3 * t3) * (s3 / (1 - (i3 = t3 * s3) * i3) - 0.5 / t3 * Math.log((1 - i3) / (1 + i3))) : 2 * s3;
  }
  function we2() {
    var t3, s3 = Math.abs(this.lat0);
    if (Math.abs(s3 - l2) < _2 ? this.mode = this.lat0 < 0 ? this.S_POLE : this.N_POLE : Math.abs(s3) < _2 ? this.mode = this.EQUIT : this.mode = this.OBLIQ, this.es > 0)
      switch (this.qp = xe2(this.e, 1), this.mmf = 0.5 / (1 - this.es), this.apa = Ne2(this.es), this.mode) {
        case this.N_POLE:
        case this.S_POLE:
          this.dd = 1;
          break;
        case this.EQUIT:
          this.rq = Math.sqrt(0.5 * this.qp), this.dd = 1 / this.rq, this.xmf = 1, this.ymf = 0.5 * this.qp;
          break;
        case this.OBLIQ:
          this.rq = Math.sqrt(0.5 * this.qp), t3 = Math.sin(this.lat0), this.sinb1 = xe2(this.e, t3) / this.qp, this.cosb1 = Math.sqrt(1 - this.sinb1 * this.sinb1), this.dd = Math.cos(this.lat0) / (Math.sqrt(1 - this.es * t3 * t3) * this.rq * this.cosb1), this.ymf = (this.xmf = this.rq) / this.dd, this.xmf *= this.dd;
      }
    else
      this.mode === this.OBLIQ && (this.sinph0 = Math.sin(this.lat0), this.cosph0 = Math.cos(this.lat0));
  }
  function Se2(t3) {
    var s3, i3, e3, a3, n3, r3, h3, o3, c3, u3, d3 = t3.x, m3 = t3.y;
    if (d3 = yt2(d3 - this.long0), this.sphere) {
      if (n3 = Math.sin(m3), u3 = Math.cos(m3), e3 = Math.cos(d3), this.mode === this.OBLIQ || this.mode === this.EQUIT) {
        if ((i3 = this.mode === this.EQUIT ? 1 + u3 * e3 : 1 + this.sinph0 * n3 + this.cosph0 * u3 * e3) <= _2)
          return null;
        s3 = (i3 = Math.sqrt(2 / i3)) * u3 * Math.sin(d3), i3 *= this.mode === this.EQUIT ? n3 : this.cosph0 * n3 - this.sinph0 * u3 * e3;
      } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
        if (this.mode === this.N_POLE && (e3 = -e3), Math.abs(m3 + this.lat0) < _2)
          return null;
        i3 = p2 - 0.5 * m3, s3 = (i3 = 2 * (this.mode === this.S_POLE ? Math.cos(i3) : Math.sin(i3))) * Math.sin(d3), i3 *= e3;
      }
    } else {
      switch (h3 = 0, o3 = 0, c3 = 0, e3 = Math.cos(d3), a3 = Math.sin(d3), n3 = Math.sin(m3), r3 = xe2(this.e, n3), this.mode !== this.OBLIQ && this.mode !== this.EQUIT || (h3 = r3 / this.qp, o3 = Math.sqrt(1 - h3 * h3)), this.mode) {
        case this.OBLIQ:
          c3 = 1 + this.sinb1 * h3 + this.cosb1 * o3 * e3;
          break;
        case this.EQUIT:
          c3 = 1 + o3 * e3;
          break;
        case this.N_POLE:
          c3 = l2 + m3, r3 = this.qp - r3;
          break;
        case this.S_POLE:
          c3 = m3 - l2, r3 = this.qp + r3;
      }
      if (Math.abs(c3) < _2)
        return null;
      switch (this.mode) {
        case this.OBLIQ:
        case this.EQUIT:
          c3 = Math.sqrt(2 / c3), i3 = this.mode === this.OBLIQ ? this.ymf * c3 * (this.cosb1 * h3 - this.sinb1 * o3 * e3) : (c3 = Math.sqrt(2 / (1 + o3 * e3))) * h3 * this.ymf, s3 = this.xmf * c3 * o3 * a3;
          break;
        case this.N_POLE:
        case this.S_POLE:
          r3 >= 0 ? (s3 = (c3 = Math.sqrt(r3)) * a3, i3 = e3 * (this.mode === this.S_POLE ? c3 : -c3)) : s3 = i3 = 0;
      }
    }
    return t3.x = this.a * s3 + this.x0, t3.y = this.a * i3 + this.y0, t3;
  }
  function Ee2(t3) {
    t3.x -= this.x0, t3.y -= this.y0;
    var s3, i3, e3, a3, n3, r3, h3, o3 = t3.x / this.a, c3 = t3.y / this.a;
    if (this.sphere) {
      var u3, d3 = 0, m3 = 0;
      if ((i3 = 0.5 * (u3 = Math.sqrt(o3 * o3 + c3 * c3))) > 1)
        return null;
      switch (i3 = 2 * Math.asin(i3), this.mode !== this.OBLIQ && this.mode !== this.EQUIT || (m3 = Math.sin(i3), d3 = Math.cos(i3)), this.mode) {
        case this.EQUIT:
          i3 = Math.abs(u3) <= _2 ? 0 : Math.asin(c3 * m3 / u3), o3 *= m3, c3 = d3 * u3;
          break;
        case this.OBLIQ:
          i3 = Math.abs(u3) <= _2 ? this.lat0 : Math.asin(d3 * this.sinph0 + c3 * m3 * this.cosph0 / u3), o3 *= m3 * this.cosph0, c3 = (d3 - Math.sin(i3) * this.sinph0) * u3;
          break;
        case this.N_POLE:
          c3 = -c3, i3 = l2 - i3;
          break;
        case this.S_POLE:
          i3 -= l2;
      }
      s3 = 0 !== c3 || this.mode !== this.EQUIT && this.mode !== this.OBLIQ ? Math.atan2(o3, c3) : 0;
    } else {
      if (h3 = 0, this.mode === this.OBLIQ || this.mode === this.EQUIT) {
        if (o3 /= this.dd, c3 *= this.dd, (r3 = Math.sqrt(o3 * o3 + c3 * c3)) < _2)
          return t3.x = this.long0, t3.y = this.lat0, t3;
        a3 = 2 * Math.asin(0.5 * r3 / this.rq), e3 = Math.cos(a3), o3 *= a3 = Math.sin(a3), this.mode === this.OBLIQ ? (h3 = e3 * this.sinb1 + c3 * a3 * this.cosb1 / r3, n3 = this.qp * h3, c3 = r3 * this.cosb1 * e3 - c3 * this.sinb1 * a3) : (h3 = c3 * a3 / r3, n3 = this.qp * h3, c3 = r3 * e3);
      } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
        if (this.mode === this.N_POLE && (c3 = -c3), !(n3 = o3 * o3 + c3 * c3))
          return t3.x = this.long0, t3.y = this.lat0, t3;
        h3 = 1 - n3 / this.qp, this.mode === this.S_POLE && (h3 = -h3);
      }
      s3 = Math.atan2(o3, c3), i3 = Ie2(Math.asin(h3), this.apa);
    }
    return t3.x = yt2(this.long0 + s3), t3.y = i3, t3;
  }
  var be2 = 0.3333333333333333, Pe2 = 0.17222222222222222, ve2 = 0.10257936507936508, Ae2 = 0.06388888888888888, Ge2 = 0.0664021164021164, Ce2 = 0.016415012942191543;
  function Ne2(t3) {
    var s3, i3 = [];
    return i3[0] = t3 * be2, s3 = t3 * t3, i3[0] += s3 * Pe2, i3[1] = s3 * Ae2, s3 *= t3, i3[0] += s3 * ve2, i3[1] += s3 * Ge2, i3[2] = s3 * Ce2, i3;
  }
  function Ie2(t3, s3) {
    var i3 = t3 + t3;
    return t3 + s3[0] * Math.sin(i3) + s3[1] * Math.sin(i3 + i3) + s3[2] * Math.sin(i3 + i3 + i3);
  }
  var ze2 = { init: we2, forward: Se2, inverse: Ee2, names: ["Lambert Azimuthal Equal Area", "Lambert_Azimuthal_Equal_Area", "laea"], S_POLE: 1, N_POLE: 2, EQUIT: 3, OBLIQ: 4 };
  function Te2(t3) {
    return Math.abs(t3) > 1 && (t3 = t3 > 1 ? 1 : -1), Math.asin(t3);
  }
  function Oe2() {
    Math.abs(this.lat1 + this.lat2) < _2 || (this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e3 = Math.sqrt(this.es), this.sin_po = Math.sin(this.lat1), this.cos_po = Math.cos(this.lat1), this.t1 = this.sin_po, this.con = this.sin_po, this.ms1 = _t2(this.e3, this.sin_po, this.cos_po), this.qs1 = xe2(this.e3, this.sin_po), this.sin_po = Math.sin(this.lat2), this.cos_po = Math.cos(this.lat2), this.t2 = this.sin_po, this.ms2 = _t2(this.e3, this.sin_po, this.cos_po), this.qs2 = xe2(this.e3, this.sin_po), this.sin_po = Math.sin(this.lat0), this.cos_po = Math.cos(this.lat0), this.t3 = this.sin_po, this.qs0 = xe2(this.e3, this.sin_po), Math.abs(this.lat1 - this.lat2) > _2 ? this.ns0 = (this.ms1 * this.ms1 - this.ms2 * this.ms2) / (this.qs2 - this.qs1) : this.ns0 = this.con, this.c = this.ms1 * this.ms1 + this.ns0 * this.qs1, this.rh = this.a * Math.sqrt(this.c - this.ns0 * this.qs0) / this.ns0);
  }
  function Re2(t3) {
    var s3 = t3.x, i3 = t3.y;
    this.sin_phi = Math.sin(i3), this.cos_phi = Math.cos(i3);
    var e3 = xe2(this.e3, this.sin_phi), a3 = this.a * Math.sqrt(this.c - this.ns0 * e3) / this.ns0, n3 = this.ns0 * yt2(s3 - this.long0), r3 = a3 * Math.sin(n3) + this.x0, h3 = this.rh - a3 * Math.cos(n3) + this.y0;
    return t3.x = r3, t3.y = h3, t3;
  }
  function qe2(t3) {
    var s3, i3, e3, a3, n3, r3;
    return t3.x -= this.x0, t3.y = this.rh - t3.y + this.y0, this.ns0 >= 0 ? (s3 = Math.sqrt(t3.x * t3.x + t3.y * t3.y), e3 = 1) : (s3 = -Math.sqrt(t3.x * t3.x + t3.y * t3.y), e3 = -1), a3 = 0, 0 !== s3 && (a3 = Math.atan2(e3 * t3.x, e3 * t3.y)), e3 = s3 * this.ns0 / this.a, this.sphere ? r3 = Math.asin((this.c - e3 * e3) / (2 * this.ns0)) : (i3 = (this.c - e3 * e3) / this.ns0, r3 = this.phi1z(this.e3, i3)), n3 = yt2(a3 / this.ns0 + this.long0), t3.x = n3, t3.y = r3, t3;
  }
  function Le2(t3, s3) {
    var i3, e3, a3, n3, r3 = Te2(0.5 * s3);
    if (t3 < _2)
      return r3;
    for (var h3 = t3 * t3, o3 = 1; o3 <= 25; o3++)
      if (r3 += n3 = 0.5 * (a3 = 1 - (e3 = t3 * (i3 = Math.sin(r3))) * e3) * a3 / Math.cos(r3) * (s3 / (1 - h3) - i3 / a3 + 0.5 / t3 * Math.log((1 - e3) / (1 + e3))), Math.abs(n3) <= 1e-7)
        return r3;
    return null;
  }
  var Be2 = { init: Oe2, forward: Re2, inverse: qe2, names: ["Albers_Conic_Equal_Area", "Albers_Equal_Area", "Albers", "aea"], phi1z: Le2 };
  function ke2() {
    this.sin_p14 = Math.sin(this.lat0), this.cos_p14 = Math.cos(this.lat0), this.infinity_dist = 1e3 * this.a, this.rc = 1;
  }
  function De2(t3) {
    var s3, i3, e3, a3, n3, r3, h3, o3, c3 = t3.x, l3 = t3.y;
    return e3 = yt2(c3 - this.long0), s3 = Math.sin(l3), i3 = Math.cos(l3), a3 = Math.cos(e3), n3 = 1, (r3 = this.sin_p14 * s3 + this.cos_p14 * i3 * a3) > 0 || Math.abs(r3) <= _2 ? (h3 = this.x0 + this.a * n3 * i3 * Math.sin(e3) / r3, o3 = this.y0 + this.a * n3 * (this.cos_p14 * s3 - this.sin_p14 * i3 * a3) / r3) : (h3 = this.x0 + this.infinity_dist * i3 * Math.sin(e3), o3 = this.y0 + this.infinity_dist * (this.cos_p14 * s3 - this.sin_p14 * i3 * a3)), t3.x = h3, t3.y = o3, t3;
  }
  function Ue2(t3) {
    var s3, i3, e3, a3, n3, r3;
    return t3.x = (t3.x - this.x0) / this.a, t3.y = (t3.y - this.y0) / this.a, t3.x /= this.k0, t3.y /= this.k0, (s3 = Math.sqrt(t3.x * t3.x + t3.y * t3.y)) ? (a3 = Math.atan2(s3, this.rc), i3 = Math.sin(a3), r3 = Te2((e3 = Math.cos(a3)) * this.sin_p14 + t3.y * i3 * this.cos_p14 / s3), n3 = Math.atan2(t3.x * i3, s3 * this.cos_p14 * e3 - t3.y * this.sin_p14 * i3), n3 = yt2(this.long0 + n3)) : (r3 = this.phic0, n3 = 0), t3.x = n3, t3.y = r3, t3;
  }
  var je2 = { init: ke2, forward: De2, inverse: Ue2, names: ["gnom"] };
  function Fe2(t3, s3) {
    var i3 = 1 - (1 - t3 * t3) / (2 * t3) * Math.log((1 - t3) / (1 + t3));
    if (Math.abs(Math.abs(s3) - i3) < 1e-6)
      return s3 < 0 ? -1 * l2 : l2;
    for (var e3, a3, n3, r3, h3 = Math.asin(0.5 * s3), o3 = 0; o3 < 30; o3++)
      if (a3 = Math.sin(h3), n3 = Math.cos(h3), r3 = t3 * a3, h3 += e3 = Math.pow(1 - r3 * r3, 2) / (2 * n3) * (s3 / (1 - t3 * t3) - a3 / (1 - r3 * r3) + 0.5 / t3 * Math.log((1 - r3) / (1 + r3))), Math.abs(e3) <= 1e-10)
        return h3;
    return NaN;
  }
  function Ve2() {
    this.sphere || (this.k0 = _t2(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)));
  }
  function We2(t3) {
    var s3, i3, e3 = t3.x, a3 = t3.y, n3 = yt2(e3 - this.long0);
    if (this.sphere)
      s3 = this.x0 + this.a * n3 * Math.cos(this.lat_ts), i3 = this.y0 + this.a * Math.sin(a3) / Math.cos(this.lat_ts);
    else {
      var r3 = xe2(this.e, Math.sin(a3));
      s3 = this.x0 + this.a * this.k0 * n3, i3 = this.y0 + this.a * r3 * 0.5 / this.k0;
    }
    return t3.x = s3, t3.y = i3, t3;
  }
  function He2(t3) {
    var s3, i3;
    return t3.x -= this.x0, t3.y -= this.y0, this.sphere ? (s3 = yt2(this.long0 + t3.x / this.a / Math.cos(this.lat_ts)), i3 = Math.asin(t3.y / this.a * Math.cos(this.lat_ts))) : (i3 = Fe2(this.e, 2 * t3.y * this.k0 / this.a), s3 = yt2(this.long0 + t3.x / (this.a * this.k0))), t3.x = s3, t3.y = i3, t3;
  }
  var Xe2 = { init: Ve2, forward: We2, inverse: He2, names: ["cea"] };
  function Ye2() {
    this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_ts || 0, this.title = this.title || "Equidistant Cylindrical (Plate Carre)", this.rc = Math.cos(this.lat_ts);
  }
  function Ze2(t3) {
    var s3 = t3.x, i3 = t3.y, e3 = yt2(s3 - this.long0), a3 = _e2(i3 - this.lat0);
    return t3.x = this.x0 + this.a * e3 * this.rc, t3.y = this.y0 + this.a * a3, t3;
  }
  function Qe2(t3) {
    var s3 = t3.x, i3 = t3.y;
    return t3.x = yt2(this.long0 + (s3 - this.x0) / (this.a * this.rc)), t3.y = _e2(this.lat0 + (i3 - this.y0) / this.a), t3;
  }
  var Ke2 = { init: Ye2, forward: Ze2, inverse: Qe2, names: ["Equirectangular", "Equidistant_Cylindrical", "Equidistant_Cylindrical_Spherical", "eqc"] }, Je2 = 20;
  function $e2() {
    this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = ce2(this.es), this.e1 = le2(this.es), this.e2 = ue2(this.es), this.e3 = de2(this.es), this.ml0 = this.a * oe2(this.e0, this.e1, this.e2, this.e3, this.lat0);
  }
  function ta(t3) {
    var s3, i3, e3, a3 = t3.x, n3 = t3.y, r3 = yt2(a3 - this.long0);
    if (e3 = r3 * Math.sin(n3), this.sphere)
      Math.abs(n3) <= _2 ? (s3 = this.a * r3, i3 = -1 * this.a * this.lat0) : (s3 = this.a * Math.sin(e3) / Math.tan(n3), i3 = this.a * (_e2(n3 - this.lat0) + (1 - Math.cos(e3)) / Math.tan(n3)));
    else if (Math.abs(n3) <= _2)
      s3 = this.a * r3, i3 = -1 * this.ml0;
    else {
      var h3 = me2(this.a, this.e, Math.sin(n3)) / Math.tan(n3);
      s3 = h3 * Math.sin(e3), i3 = this.a * oe2(this.e0, this.e1, this.e2, this.e3, n3) - this.ml0 + h3 * (1 - Math.cos(e3));
    }
    return t3.x = s3 + this.x0, t3.y = i3 + this.y0, t3;
  }
  function sa(t3) {
    var s3, i3, e3, a3, n3, r3, h3, o3, c3;
    if (e3 = t3.x - this.x0, a3 = t3.y - this.y0, this.sphere)
      if (Math.abs(a3 + this.a * this.lat0) <= _2)
        s3 = yt2(e3 / this.a + this.long0), i3 = 0;
      else {
        var l3;
        for (r3 = this.lat0 + a3 / this.a, h3 = e3 * e3 / this.a / this.a + r3 * r3, o3 = r3, n3 = Je2; n3; --n3)
          if (o3 += c3 = -1 * (r3 * (o3 * (l3 = Math.tan(o3)) + 1) - o3 - 0.5 * (o3 * o3 + h3) * l3) / ((o3 - r3) / l3 - 1), Math.abs(c3) <= _2) {
            i3 = o3;
            break;
          }
        s3 = yt2(this.long0 + Math.asin(e3 * Math.tan(o3) / this.a) / Math.sin(i3));
      }
    else if (Math.abs(a3 + this.ml0) <= _2)
      i3 = 0, s3 = yt2(this.long0 + e3 / this.a);
    else {
      var u3, d3, m3, f3, y3;
      for (r3 = (this.ml0 + a3) / this.a, h3 = e3 * e3 / this.a / this.a + r3 * r3, o3 = r3, n3 = Je2; n3; --n3)
        if (y3 = this.e * Math.sin(o3), u3 = Math.sqrt(1 - y3 * y3) * Math.tan(o3), d3 = this.a * oe2(this.e0, this.e1, this.e2, this.e3, o3), m3 = this.e0 - 2 * this.e1 * Math.cos(2 * o3) + 4 * this.e2 * Math.cos(4 * o3) - 6 * this.e3 * Math.cos(6 * o3), o3 -= c3 = (r3 * (u3 * (f3 = d3 / this.a) + 1) - f3 - 0.5 * u3 * (f3 * f3 + h3)) / (this.es * Math.sin(2 * o3) * (f3 * f3 + h3 - 2 * r3 * f3) / (4 * u3) + (r3 - f3) * (u3 * m3 - 2 / Math.sin(2 * o3)) - m3), Math.abs(c3) <= _2) {
          i3 = o3;
          break;
        }
      u3 = Math.sqrt(1 - this.es * Math.pow(Math.sin(i3), 2)) * Math.tan(i3), s3 = yt2(this.long0 + Math.asin(e3 * u3 / this.a) / Math.sin(i3));
    }
    return t3.x = s3, t3.y = i3, t3;
  }
  var ia = { init: $e2, forward: ta, inverse: sa, names: ["Polyconic", "American_Polyconic", "poly"] };
  function ea() {
    this.A = [], this.A[1] = 0.6399175073, this.A[2] = -0.1358797613, this.A[3] = 0.063294409, this.A[4] = -0.02526853, this.A[5] = 0.0117879, this.A[6] = -55161e-7, this.A[7] = 26906e-7, this.A[8] = -1333e-6, this.A[9] = 67e-5, this.A[10] = -34e-5, this.B_re = [], this.B_im = [], this.B_re[1] = 0.7557853228, this.B_im[1] = 0, this.B_re[2] = 0.249204646, this.B_im[2] = 3371507e-9, this.B_re[3] = -1541739e-9, this.B_im[3] = 0.04105856, this.B_re[4] = -0.10162907, this.B_im[4] = 0.01727609, this.B_re[5] = -0.26623489, this.B_im[5] = -0.36249218, this.B_re[6] = -0.6870983, this.B_im[6] = -1.1651967, this.C_re = [], this.C_im = [], this.C_re[1] = 1.3231270439, this.C_im[1] = 0, this.C_re[2] = -0.577245789, this.C_im[2] = -7809598e-9, this.C_re[3] = 0.508307513, this.C_im[3] = -0.112208952, this.C_re[4] = -0.15094762, this.C_im[4] = 0.18200602, this.C_re[5] = 1.01418179, this.C_im[5] = 1.64497696, this.C_re[6] = 1.9660549, this.C_im[6] = 2.5127645, this.D = [], this.D[1] = 1.5627014243, this.D[2] = 0.5185406398, this.D[3] = -0.03333098, this.D[4] = -0.1052906, this.D[5] = -0.0368594, this.D[6] = 7317e-6, this.D[7] = 0.0122, this.D[8] = 394e-5, this.D[9] = -13e-4;
  }
  function aa(t3) {
    var s3, i3 = t3.x, e3 = t3.y - this.lat0, a3 = i3 - this.long0, n3 = e3 / c2 * 1e-5, r3 = a3, h3 = 1, o3 = 0;
    for (s3 = 1; s3 <= 10; s3++)
      h3 *= n3, o3 += this.A[s3] * h3;
    var l3, u3 = o3, d3 = r3, m3 = 1, _3 = 0, f3 = 0, y3 = 0;
    for (s3 = 1; s3 <= 6; s3++)
      l3 = _3 * u3 + m3 * d3, m3 = m3 * u3 - _3 * d3, _3 = l3, f3 = f3 + this.B_re[s3] * m3 - this.B_im[s3] * _3, y3 = y3 + this.B_im[s3] * m3 + this.B_re[s3] * _3;
    return t3.x = y3 * this.a + this.x0, t3.y = f3 * this.a + this.y0, t3;
  }
  function na(t3) {
    var s3, i3, e3 = t3.x, a3 = t3.y, n3 = e3 - this.x0, r3 = (a3 - this.y0) / this.a, h3 = n3 / this.a, o3 = 1, l3 = 0, u3 = 0, d3 = 0;
    for (s3 = 1; s3 <= 6; s3++)
      i3 = l3 * r3 + o3 * h3, o3 = o3 * r3 - l3 * h3, l3 = i3, u3 = u3 + this.C_re[s3] * o3 - this.C_im[s3] * l3, d3 = d3 + this.C_im[s3] * o3 + this.C_re[s3] * l3;
    for (var m3 = 0; m3 < this.iterations; m3++) {
      var _3, f3 = u3, y3 = d3, p3 = r3, g3 = h3;
      for (s3 = 2; s3 <= 6; s3++)
        _3 = y3 * u3 + f3 * d3, f3 = f3 * u3 - y3 * d3, y3 = _3, p3 += (s3 - 1) * (this.B_re[s3] * f3 - this.B_im[s3] * y3), g3 += (s3 - 1) * (this.B_im[s3] * f3 + this.B_re[s3] * y3);
      f3 = 1, y3 = 0;
      var M3 = this.B_re[1], x3 = this.B_im[1];
      for (s3 = 2; s3 <= 6; s3++)
        _3 = y3 * u3 + f3 * d3, f3 = f3 * u3 - y3 * d3, y3 = _3, M3 += s3 * (this.B_re[s3] * f3 - this.B_im[s3] * y3), x3 += s3 * (this.B_im[s3] * f3 + this.B_re[s3] * y3);
      var w3 = M3 * M3 + x3 * x3;
      u3 = (p3 * M3 + g3 * x3) / w3, d3 = (g3 * M3 - p3 * x3) / w3;
    }
    var S3 = u3, E3 = d3, b3 = 1, P3 = 0;
    for (s3 = 1; s3 <= 9; s3++)
      b3 *= S3, P3 += this.D[s3] * b3;
    var v3 = this.lat0 + P3 * c2 * 1e5, A3 = this.long0 + E3;
    return t3.x = A3, t3.y = v3, t3;
  }
  var ra = { init: ea, forward: aa, inverse: na, names: ["New_Zealand_Map_Grid", "nzmg"] };
  function ha() {
  }
  function oa(t3) {
    var s3 = t3.x, i3 = t3.y, e3 = yt2(s3 - this.long0), a3 = this.x0 + this.a * e3, n3 = this.y0 + this.a * Math.log(Math.tan(Math.PI / 4 + i3 / 2.5)) * 1.25;
    return t3.x = a3, t3.y = n3, t3;
  }
  function ca(t3) {
    t3.x -= this.x0, t3.y -= this.y0;
    var s3 = yt2(this.long0 + t3.x / this.a), i3 = 2.5 * (Math.atan(Math.exp(0.8 * t3.y / this.a)) - Math.PI / 4);
    return t3.x = s3, t3.y = i3, t3;
  }
  var la = { init: ha, forward: oa, inverse: ca, names: ["Miller_Cylindrical", "mill"] }, ua = 20;
  function da() {
    this.sphere ? (this.n = 1, this.m = 0, this.es = 0, this.C_y = Math.sqrt((this.m + 1) / this.n), this.C_x = this.C_y / (this.m + 1)) : this.en = ri2(this.es);
  }
  function ma(t3) {
    var s3, i3, e3 = t3.x, a3 = t3.y;
    if (e3 = yt2(e3 - this.long0), this.sphere) {
      if (this.m)
        for (var n3 = this.n * Math.sin(a3), r3 = ua; r3; --r3) {
          var h3 = (this.m * a3 + Math.sin(a3) - n3) / (this.m + Math.cos(a3));
          if (a3 -= h3, Math.abs(h3) < _2)
            break;
        }
      else
        a3 = 1 !== this.n ? Math.asin(this.n * Math.sin(a3)) : a3;
      s3 = this.a * this.C_x * e3 * (this.m + Math.cos(a3)), i3 = this.a * this.C_y * a3;
    } else {
      var o3 = Math.sin(a3), c3 = Math.cos(a3);
      i3 = this.a * hi2(a3, o3, c3, this.en), s3 = this.a * e3 * c3 / Math.sqrt(1 - this.es * o3 * o3);
    }
    return t3.x = s3, t3.y = i3, t3;
  }
  function _a(t3) {
    var s3, i3, e3;
    return t3.x -= this.x0, i3 = t3.x / this.a, t3.y -= this.y0, s3 = t3.y / this.a, this.sphere ? (s3 /= this.C_y, i3 /= this.C_x * (this.m + Math.cos(s3)), this.m ? s3 = Te2((this.m * s3 + Math.sin(s3)) / this.n) : 1 !== this.n && (s3 = Te2(Math.sin(s3) / this.n)), i3 = yt2(i3 + this.long0), s3 = _e2(s3)) : (s3 = ci2(t3.y / this.a, this.es, this.en), (e3 = Math.abs(s3)) < l2 ? (e3 = Math.sin(s3), i3 = yt2(this.long0 + t3.x * Math.sqrt(1 - this.es * e3 * e3) / (this.a * Math.cos(s3)))) : e3 - _2 < l2 && (i3 = this.long0)), t3.x = i3, t3.y = s3, t3;
  }
  var fa = { init: da, forward: ma, inverse: _a, names: ["Sinusoidal", "sinu"] };
  function ya() {
  }
  function pa(t3) {
    for (var s3 = t3.x, i3 = t3.y, e3 = yt2(s3 - this.long0), a3 = i3, n3 = Math.PI * Math.sin(i3); ; ) {
      var r3 = -(a3 + Math.sin(a3) - n3) / (1 + Math.cos(a3));
      if (a3 += r3, Math.abs(r3) < _2)
        break;
    }
    a3 /= 2, Math.PI / 2 - Math.abs(i3) < _2 && (e3 = 0);
    var h3 = 0.900316316158 * this.a * e3 * Math.cos(a3) + this.x0, o3 = 1.4142135623731 * this.a * Math.sin(a3) + this.y0;
    return t3.x = h3, t3.y = o3, t3;
  }
  function ga(t3) {
    var s3, i3;
    t3.x -= this.x0, t3.y -= this.y0, i3 = t3.y / (1.4142135623731 * this.a), Math.abs(i3) > 0.999999999999 && (i3 = 0.999999999999), s3 = Math.asin(i3);
    var e3 = yt2(this.long0 + t3.x / (0.900316316158 * this.a * Math.cos(s3)));
    e3 < -Math.PI && (e3 = -Math.PI), e3 > Math.PI && (e3 = Math.PI), i3 = (2 * s3 + Math.sin(2 * s3)) / Math.PI, Math.abs(i3) > 1 && (i3 = 1);
    var a3 = Math.asin(i3);
    return t3.x = e3, t3.y = a3, t3;
  }
  var Ma = { init: ya, forward: pa, inverse: ga, names: ["Mollweide", "moll"] };
  function xa() {
    Math.abs(this.lat1 + this.lat2) < _2 || (this.lat2 = this.lat2 || this.lat1, this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = ce2(this.es), this.e1 = le2(this.es), this.e2 = ue2(this.es), this.e3 = de2(this.es), this.sinphi = Math.sin(this.lat1), this.cosphi = Math.cos(this.lat1), this.ms1 = _t2(this.e, this.sinphi, this.cosphi), this.ml1 = oe2(this.e0, this.e1, this.e2, this.e3, this.lat1), Math.abs(this.lat1 - this.lat2) < _2 ? this.ns = this.sinphi : (this.sinphi = Math.sin(this.lat2), this.cosphi = Math.cos(this.lat2), this.ms2 = _t2(this.e, this.sinphi, this.cosphi), this.ml2 = oe2(this.e0, this.e1, this.e2, this.e3, this.lat2), this.ns = (this.ms1 - this.ms2) / (this.ml2 - this.ml1)), this.g = this.ml1 + this.ms1 / this.ns, this.ml0 = oe2(this.e0, this.e1, this.e2, this.e3, this.lat0), this.rh = this.a * (this.g - this.ml0));
  }
  function wa(t3) {
    var s3, i3 = t3.x, e3 = t3.y;
    if (this.sphere)
      s3 = this.a * (this.g - e3);
    else {
      var a3 = oe2(this.e0, this.e1, this.e2, this.e3, e3);
      s3 = this.a * (this.g - a3);
    }
    var n3 = this.ns * yt2(i3 - this.long0), r3 = this.x0 + s3 * Math.sin(n3), h3 = this.y0 + this.rh - s3 * Math.cos(n3);
    return t3.x = r3, t3.y = h3, t3;
  }
  function Sa(t3) {
    var s3, i3, e3, a3;
    t3.x -= this.x0, t3.y = this.rh - t3.y + this.y0, this.ns >= 0 ? (i3 = Math.sqrt(t3.x * t3.x + t3.y * t3.y), s3 = 1) : (i3 = -Math.sqrt(t3.x * t3.x + t3.y * t3.y), s3 = -1);
    var n3 = 0;
    return 0 !== i3 && (n3 = Math.atan2(s3 * t3.x, s3 * t3.y)), this.sphere ? (a3 = yt2(this.long0 + n3 / this.ns), e3 = _e2(this.g - i3 / this.a), t3.x = a3, t3.y = e3, t3) : (e3 = fe2(this.g - i3 / this.a, this.e0, this.e1, this.e2, this.e3), a3 = yt2(this.long0 + n3 / this.ns), t3.x = a3, t3.y = e3, t3);
  }
  var Ea = { init: xa, forward: wa, inverse: Sa, names: ["Equidistant_Conic", "eqdc"] };
  function ba() {
    this.R = this.a;
  }
  function Pa(t3) {
    var s3, i3, e3 = t3.x, a3 = t3.y, n3 = yt2(e3 - this.long0);
    Math.abs(a3) <= _2 && (s3 = this.x0 + this.R * n3, i3 = this.y0);
    var r3 = Te2(2 * Math.abs(a3 / Math.PI));
    (Math.abs(n3) <= _2 || Math.abs(Math.abs(a3) - l2) <= _2) && (s3 = this.x0, i3 = a3 >= 0 ? this.y0 + Math.PI * this.R * Math.tan(0.5 * r3) : this.y0 + Math.PI * this.R * -Math.tan(0.5 * r3));
    var h3 = 0.5 * Math.abs(Math.PI / n3 - n3 / Math.PI), o3 = h3 * h3, c3 = Math.sin(r3), u3 = Math.cos(r3), d3 = u3 / (c3 + u3 - 1), m3 = d3 * d3, f3 = d3 * (2 / c3 - 1), y3 = f3 * f3, p3 = Math.PI * this.R * (h3 * (d3 - y3) + Math.sqrt(o3 * (d3 - y3) * (d3 - y3) - (y3 + o3) * (m3 - y3))) / (y3 + o3);
    n3 < 0 && (p3 = -p3), s3 = this.x0 + p3;
    var g3 = o3 + d3;
    return p3 = Math.PI * this.R * (f3 * g3 - h3 * Math.sqrt((y3 + o3) * (o3 + 1) - g3 * g3)) / (y3 + o3), i3 = a3 >= 0 ? this.y0 + p3 : this.y0 - p3, t3.x = s3, t3.y = i3, t3;
  }
  function va(t3) {
    var s3, i3, e3, a3, n3, r3, h3, o3, c3, l3, u3, d3;
    return t3.x -= this.x0, t3.y -= this.y0, u3 = Math.PI * this.R, n3 = (e3 = t3.x / u3) * e3 + (a3 = t3.y / u3) * a3, u3 = 3 * (a3 * a3 / (o3 = -2 * (r3 = -Math.abs(a3) * (1 + n3)) + 1 + 2 * a3 * a3 + n3 * n3) + (2 * (h3 = r3 - 2 * a3 * a3 + e3 * e3) * h3 * h3 / o3 / o3 / o3 - 9 * r3 * h3 / o3 / o3) / 27) / (c3 = (r3 - h3 * h3 / 3 / o3) / o3) / (l3 = 2 * Math.sqrt(-c3 / 3)), Math.abs(u3) > 1 && (u3 = u3 >= 0 ? 1 : -1), d3 = Math.acos(u3) / 3, i3 = t3.y >= 0 ? (-l3 * Math.cos(d3 + Math.PI / 3) - h3 / 3 / o3) * Math.PI : -(-l3 * Math.cos(d3 + Math.PI / 3) - h3 / 3 / o3) * Math.PI, s3 = Math.abs(e3) < _2 ? this.long0 : yt2(this.long0 + Math.PI * (n3 - 1 + Math.sqrt(1 + 2 * (e3 * e3 - a3 * a3) + n3 * n3)) / 2 / e3), t3.x = s3, t3.y = i3, t3;
  }
  var Aa, Ga = { init: ba, forward: Pa, inverse: va, names: ["Van_der_Grinten_I", "VanDerGrinten", "Van_der_Grinten", "vandg"] }, Ca = { exports: {} };
  function Na() {
    return Aa || (Aa = 1, function(t3) {
      var s3, i3, e3, a3;
      s3 = function(s4) {
        t3.exports ? t3.exports = s4 : window.geodesic = s4;
      }, (a3 = {}).Constants = {}, a3.Math = {}, a3.Accumulator = {}, (i3 = a3.Constants).WGS84 = { a: 6378137, f: 1 / 298.257223563 }, i3.version = { major: 2, minor: 1, patch: 1 }, i3.version_string = "2.1.1", (e3 = a3.Math).digits = 53, e3.epsilon = Math.pow(0.5, e3.digits - 1), e3.degree = Math.PI / 180, e3.sq = function(t4) {
        return t4 * t4;
      }, e3.hypot = function(t4, s4) {
        return Math.sqrt(t4 * t4 + s4 * s4);
      }, e3.cbrt = Math.cbrt || function(t4) {
        var s4 = Math.pow(Math.abs(t4), 1 / 3);
        return t4 > 0 ? s4 : t4 < 0 ? -s4 : t4;
      }, e3.log1p = Math.log1p || function(t4) {
        var s4 = 1 + t4, i4 = s4 - 1;
        return 0 === i4 ? t4 : t4 * Math.log(s4) / i4;
      }, e3.atanh = Math.atanh || function(t4) {
        var s4 = Math.abs(t4);
        return s4 = e3.log1p(2 * s4 / (1 - s4)) / 2, t4 > 0 ? s4 : t4 < 0 ? -s4 : t4;
      }, e3.copysign = function(t4, s4) {
        return Math.abs(t4) * (s4 < 0 || 0 === s4 && 1 / s4 < 0 ? -1 : 1);
      }, e3.sum = function(t4, s4) {
        var i4 = t4 + s4, e4 = i4 - s4, a4 = i4 - e4;
        return e4 -= t4, { s: i4, t: i4 ? 0 - (e4 + (a4 -= s4)) : i4 };
      }, e3.polyval = function(t4, s4, i4, e4) {
        for (var a4 = t4 < 0 ? 0 : s4[i4++]; --t4 >= 0; )
          a4 = a4 * e4 + s4[i4++];
        return a4;
      }, e3.AngRound = function(t4) {
        var s4 = 1 / 16, i4 = Math.abs(t4);
        return i4 = i4 < s4 ? s4 - (s4 - i4) : i4, e3.copysign(i4, t4);
      }, e3.remainder = function(t4, s4) {
        return (t4 %= s4) < -s4 / 2 ? t4 + s4 : t4 < s4 / 2 ? t4 : t4 - s4;
      }, e3.AngNormalize = function(t4) {
        var s4 = e3.remainder(t4, 360);
        return 180 === Math.abs(s4) ? e3.copysign(180, t4) : s4;
      }, e3.LatFix = function(t4) {
        return Math.abs(t4) > 90 ? NaN : t4;
      }, e3.AngDiff = function(t4, s4) {
        var i4, a4, n3 = e3.sum(e3.remainder(-t4, 360), e3.remainder(s4, 360));
        return i4 = (n3 = e3.sum(e3.remainder(n3.s, 360), n3.t)).s, a4 = n3.t, 0 !== i4 && 180 !== Math.abs(i4) || (i4 = e3.copysign(i4, 0 === a4 ? s4 - t4 : -a4)), { d: i4, e: a4 };
      }, e3.sincosd = function(t4) {
        var s4, i4, a4, n3, r3, h3, o3;
        switch (s4 = t4 % 360, i4 = (s4 -= 90 * (a4 = Math.round(s4 / 90))) * this.degree, n3 = Math.sin(i4), r3 = Math.cos(i4), 45 === Math.abs(s4) ? (r3 = Math.sqrt(0.5), n3 = e3.copysign(r3, i4)) : 30 === Math.abs(s4) && (r3 = Math.sqrt(0.75), n3 = e3.copysign(0.5, i4)), 3 & a4) {
          case 0:
            h3 = n3, o3 = r3;
            break;
          case 1:
            h3 = r3, o3 = -n3;
            break;
          case 2:
            h3 = -n3, o3 = -r3;
            break;
          default:
            h3 = -r3, o3 = n3;
        }
        return o3 += 0, 0 === h3 && (h3 = e3.copysign(h3, t4)), { s: h3, c: o3 };
      }, e3.sincosde = function(t4, s4) {
        var i4, a4, n3, r3, h3, o3, c3;
        switch (i4 = t4 % 360, n3 = Math.round(i4 / 90), a4 = (i4 = e3.AngRound(i4 - 90 * n3 + s4)) * this.degree, r3 = Math.sin(a4), h3 = Math.cos(a4), 45 === Math.abs(i4) ? (h3 = Math.sqrt(0.5), r3 = e3.copysign(h3, a4)) : 30 === Math.abs(i4) && (h3 = Math.sqrt(0.75), r3 = e3.copysign(0.5, a4)), 3 & n3) {
          case 0:
            o3 = r3, c3 = h3;
            break;
          case 1:
            o3 = h3, c3 = -r3;
            break;
          case 2:
            o3 = -r3, c3 = -h3;
            break;
          default:
            o3 = -h3, c3 = r3;
        }
        return c3 += 0, 0 === o3 && (o3 = e3.copysign(o3, t4 + s4)), { s: o3, c: c3 };
      }, e3.atan2d = function(t4, s4) {
        var i4, a4 = 0;
        switch (Math.abs(t4) > Math.abs(s4) && ([t4, s4] = [s4, t4], a4 = 2), e3.copysign(1, s4) < 0 && (s4 = -s4, ++a4), i4 = Math.atan2(t4, s4) / this.degree, a4) {
          case 1:
            i4 = e3.copysign(180, t4) - i4;
            break;
          case 2:
            i4 = 90 - i4;
            break;
          case 3:
            i4 = -90 + i4;
        }
        return i4;
      }, function(t4, s4) {
        t4.Accumulator = function(t5) {
          this.Set(t5);
        }, t4.Accumulator.prototype.Set = function(s5) {
          s5 || (s5 = 0), s5.constructor === t4.Accumulator ? (this._s = s5._s, this._t = s5._t) : (this._s = s5, this._t = 0);
        }, t4.Accumulator.prototype.Add = function(t5) {
          var i4 = s4.sum(t5, this._t), e4 = s4.sum(i4.s, this._s);
          i4 = i4.t, this._s = e4.s, this._t = e4.t, 0 === this._s ? this._s = i4 : this._t += i4;
        }, t4.Accumulator.prototype.Sum = function(s5) {
          var i4;
          return s5 ? ((i4 = new t4.Accumulator(this)).Add(s5), i4._s) : this._s;
        }, t4.Accumulator.prototype.Negate = function() {
          this._s *= -1, this._t *= -1;
        }, t4.Accumulator.prototype.Remainder = function(t5) {
          this._s = s4.remainder(this._s, t5), this.Add(0);
        };
      }(a3.Accumulator, a3.Math), a3.Geodesic = {}, a3.GeodesicLine = {}, a3.PolygonArea = {}, function(t4, s4, i4, e4, a4) {
        var n3, r3, h3, o3, c3, l3, u3, d3, m3, _3, f3, y3 = 6, p3 = y3, g3 = y3, M3 = y3, x3 = M3, w3 = 20, S3 = w3 + e4.digits + 10, E3 = e4.epsilon, b3 = 200 * E3, P3 = Math.sqrt(E3), v3 = E3, A3 = 1e3 * P3, G3 = 0, C3 = 31, N3 = 32640;
        t4.tiny_ = Math.sqrt(Number.MIN_VALUE / Number.EPSILON), t4.nC1_ = y3, t4.nC1p_ = y3, t4.nC2_ = y3, t4.nC3_ = y3, t4.nC4_ = y3, n3 = t4.nC3_ * (t4.nC3_ - 1) / 2, r3 = t4.nC4_ * (t4.nC4_ + 1) / 2, t4.CAP_C1 = 1, t4.CAP_C1p = 2, t4.CAP_C2 = 4, t4.CAP_C3 = 8, t4.CAP_C4 = 16, t4.NONE = 0, t4.ARC = 64, t4.LATITUDE = 128 | G3, t4.LONGITUDE = 256 | t4.CAP_C3, t4.AZIMUTH = 512 | G3, t4.DISTANCE = 1024 | t4.CAP_C1, t4.STANDARD = t4.LATITUDE | t4.LONGITUDE | t4.AZIMUTH | t4.DISTANCE, t4.DISTANCE_IN = 2048 | t4.CAP_C1 | t4.CAP_C1p, t4.REDUCEDLENGTH = 4096 | t4.CAP_C1 | t4.CAP_C2, t4.GEODESICSCALE = 8192 | t4.CAP_C1 | t4.CAP_C2, t4.AREA = 16384 | t4.CAP_C4, t4.ALL = N3 | C3, t4.LONG_UNROLL = 32768, t4.OUT_MASK = N3 | t4.LONG_UNROLL, t4.SinCosSeries = function(t5, s5, i5, e5) {
          var a5 = e5.length, n4 = a5 - (t5 ? 1 : 0), r4 = 2 * (i5 - s5) * (i5 + s5), h4 = 1 & n4 ? e5[--a5] : 0, o4 = 0;
          for (n4 = Math.floor(n4 / 2); n4--; )
            h4 = r4 * (o4 = r4 * h4 - o4 + e5[--a5]) - h4 + e5[--a5];
          return t5 ? 2 * s5 * i5 * h4 : i5 * (h4 - o4);
        }, h3 = function(t5, s5) {
          var i5, a5, n4, r4, h4, o4, c4, l4, u4, d4, m4, _4, f4 = e4.sq(t5), y4 = e4.sq(s5), p4 = (f4 + y4 - 1) / 6;
          return 0 === y4 && p4 <= 0 ? i5 = 0 : (o4 = p4, (h4 = (a5 = f4 * y4 / 4) * (a5 + 2 * (r4 = p4 * (n4 = e4.sq(p4))))) >= 0 ? (c4 = a5 + r4, c4 += c4 < 0 ? -Math.sqrt(h4) : Math.sqrt(h4), o4 += (l4 = e4.cbrt(c4)) + (0 !== l4 ? n4 / l4 : 0)) : (u4 = Math.atan2(Math.sqrt(-h4), -(a5 + r4)), o4 += 2 * p4 * Math.cos(u4 / 3)), d4 = Math.sqrt(e4.sq(o4) + y4), _4 = ((m4 = o4 < 0 ? y4 / (d4 - o4) : o4 + d4) - y4) / (2 * d4), i5 = m4 / (Math.sqrt(m4 + e4.sq(_4)) + _4)), i5;
        }, o3 = [1, 4, 64, 0, 256], t4.A1m1f = function(t5) {
          var s5 = Math.floor(p3 / 2);
          return (e4.polyval(s5, o3, 0, e4.sq(t5)) / o3[s5 + 1] + t5) / (1 - t5);
        }, c3 = [-1, 6, -16, 32, -9, 64, -128, 2048, 9, -16, 768, 3, -5, 512, -7, 1280, -7, 2048], t4.C1f = function(s5, i5) {
          var a5, n4, r4 = e4.sq(s5), h4 = s5, o4 = 0;
          for (a5 = 1; a5 <= t4.nC1_; ++a5)
            n4 = Math.floor((t4.nC1_ - a5) / 2), i5[a5] = h4 * e4.polyval(n4, c3, o4, r4) / c3[o4 + n4 + 1], o4 += n4 + 2, h4 *= s5;
        }, l3 = [205, -432, 768, 1536, 4005, -4736, 3840, 12288, -225, 116, 384, -7173, 2695, 7680, 3467, 7680, 38081, 61440], t4.C1pf = function(s5, i5) {
          var a5, n4, r4 = e4.sq(s5), h4 = s5, o4 = 0;
          for (a5 = 1; a5 <= t4.nC1p_; ++a5)
            n4 = Math.floor((t4.nC1p_ - a5) / 2), i5[a5] = h4 * e4.polyval(n4, l3, o4, r4) / l3[o4 + n4 + 1], o4 += n4 + 2, h4 *= s5;
        }, u3 = [-11, -28, -192, 0, 256], t4.A2m1f = function(t5) {
          var s5 = Math.floor(g3 / 2);
          return (e4.polyval(s5, u3, 0, e4.sq(t5)) / u3[s5 + 1] - t5) / (1 + t5);
        }, d3 = [1, 2, 16, 32, 35, 64, 384, 2048, 15, 80, 768, 7, 35, 512, 63, 1280, 77, 2048], t4.C2f = function(s5, i5) {
          var a5, n4, r4 = e4.sq(s5), h4 = s5, o4 = 0;
          for (a5 = 1; a5 <= t4.nC2_; ++a5)
            n4 = Math.floor((t4.nC2_ - a5) / 2), i5[a5] = h4 * e4.polyval(n4, d3, o4, r4) / d3[o4 + n4 + 1], o4 += n4 + 2, h4 *= s5;
        }, t4.Geodesic = function(t5, s5) {
          if (this.a = t5, this.f = s5, this._f1 = 1 - this.f, this._e2 = this.f * (2 - this.f), this._ep2 = this._e2 / e4.sq(this._f1), this._n = this.f / (2 - this.f), this._b = this.a * this._f1, this._c2 = (e4.sq(this.a) + e4.sq(this._b) * (0 === this._e2 ? 1 : (this._e2 > 0 ? e4.atanh(Math.sqrt(this._e2)) : Math.atan(Math.sqrt(-this._e2))) / Math.sqrt(Math.abs(this._e2)))) / 2, this._etol2 = 0.1 * P3 / Math.sqrt(Math.max(1e-3, Math.abs(this.f)) * Math.min(1, 1 - this.f / 2) / 2), !(isFinite(this.a) && this.a > 0))
            throw new Error("Equatorial radius is not positive");
          if (!(isFinite(this._b) && this._b > 0))
            throw new Error("Polar semi-axis is not positive");
          this._A3x = new Array(x3), this._C3x = new Array(n3), this._C4x = new Array(r3), this.A3coeff(), this.C3coeff(), this.C4coeff();
        }, m3 = [-3, 128, -2, -3, 64, -1, -3, -1, 16, 3, -1, -2, 8, 1, -1, 2, 1, 1], t4.Geodesic.prototype.A3coeff = function() {
          var t5, s5, i5 = 0, a5 = 0;
          for (t5 = M3 - 1; t5 >= 0; --t5)
            s5 = Math.min(M3 - t5 - 1, t5), this._A3x[a5++] = e4.polyval(s5, m3, i5, this._n) / m3[i5 + s5 + 1], i5 += s5 + 2;
        }, _3 = [3, 128, 2, 5, 128, -1, 3, 3, 64, -1, 0, 1, 8, -1, 1, 4, 5, 256, 1, 3, 128, -3, -2, 3, 64, 1, -3, 2, 32, 7, 512, -10, 9, 384, 5, -9, 5, 192, 7, 512, -14, 7, 512, 21, 2560], t4.Geodesic.prototype.C3coeff = function() {
          var s5, i5, a5, n4 = 0, r4 = 0;
          for (s5 = 1; s5 < t4.nC3_; ++s5)
            for (i5 = t4.nC3_ - 1; i5 >= s5; --i5)
              a5 = Math.min(t4.nC3_ - i5 - 1, i5), this._C3x[r4++] = e4.polyval(a5, _3, n4, this._n) / _3[n4 + a5 + 1], n4 += a5 + 2;
        }, f3 = [97, 15015, 1088, 156, 45045, -224, -4784, 1573, 45045, -10656, 14144, -4576, -858, 45045, 64, 624, -4576, 6864, -3003, 15015, 100, 208, 572, 3432, -12012, 30030, 45045, 1, 9009, -2944, 468, 135135, 5792, 1040, -1287, 135135, 5952, -11648, 9152, -2574, 135135, -64, -624, 4576, -6864, 3003, 135135, 8, 10725, 1856, -936, 225225, -8448, 4992, -1144, 225225, -1440, 4160, -4576, 1716, 225225, -136, 63063, 1024, -208, 105105, 3584, -3328, 1144, 315315, -128, 135135, -2560, 832, 405405, 128, 99099], t4.Geodesic.prototype.C4coeff = function() {
          var s5, i5, a5, n4 = 0, r4 = 0;
          for (s5 = 0; s5 < t4.nC4_; ++s5)
            for (i5 = t4.nC4_ - 1; i5 >= s5; --i5)
              a5 = t4.nC4_ - i5 - 1, this._C4x[r4++] = e4.polyval(a5, f3, n4, this._n) / f3[n4 + a5 + 1], n4 += a5 + 2;
        }, t4.Geodesic.prototype.A3f = function(t5) {
          return e4.polyval(x3 - 1, this._A3x, 0, t5);
        }, t4.Geodesic.prototype.C3f = function(s5, i5) {
          var a5, n4, r4 = 1, h4 = 0;
          for (a5 = 1; a5 < t4.nC3_; ++a5)
            n4 = t4.nC3_ - a5 - 1, r4 *= s5, i5[a5] = r4 * e4.polyval(n4, this._C3x, h4, s5), h4 += n4 + 1;
        }, t4.Geodesic.prototype.C4f = function(s5, i5) {
          var a5, n4, r4 = 1, h4 = 0;
          for (a5 = 0; a5 < t4.nC4_; ++a5)
            n4 = t4.nC4_ - a5 - 1, i5[a5] = r4 * e4.polyval(n4, this._C4x, h4, s5), h4 += n4 + 1, r4 *= s5;
        }, t4.Geodesic.prototype.Lengths = function(s5, i5, e5, a5, n4, r4, h4, o4, c4, l4, u4, d4, m4) {
          var _4, f4, y4, p4, g4 = {}, M4 = 0, x4 = 0, w4 = 0, S4 = 0;
          if ((u4 &= t4.OUT_MASK) & (t4.DISTANCE | t4.REDUCEDLENGTH | t4.GEODESICSCALE) && (w4 = t4.A1m1f(s5), t4.C1f(s5, d4), u4 & (t4.REDUCEDLENGTH | t4.GEODESICSCALE) && (S4 = t4.A2m1f(s5), t4.C2f(s5, m4), M4 = w4 - S4, S4 = 1 + S4), w4 = 1 + w4), u4 & t4.DISTANCE)
            _4 = t4.SinCosSeries(true, r4, h4, d4) - t4.SinCosSeries(true, e5, a5, d4), g4.s12b = w4 * (i5 + _4), u4 & (t4.REDUCEDLENGTH | t4.GEODESICSCALE) && (x4 = M4 * i5 + (w4 * _4 - S4 * (t4.SinCosSeries(true, r4, h4, m4) - t4.SinCosSeries(true, e5, a5, m4))));
          else if (u4 & (t4.REDUCEDLENGTH | t4.GEODESICSCALE)) {
            for (f4 = 1; f4 <= t4.nC2_; ++f4)
              m4[f4] = w4 * d4[f4] - S4 * m4[f4];
            x4 = M4 * i5 + (t4.SinCosSeries(true, r4, h4, m4) - t4.SinCosSeries(true, e5, a5, m4));
          }
          return u4 & t4.REDUCEDLENGTH && (g4.m0 = M4, g4.m12b = o4 * (a5 * r4) - n4 * (e5 * h4) - a5 * h4 * x4), u4 & t4.GEODESICSCALE && (y4 = a5 * h4 + e5 * r4, p4 = this._ep2 * (c4 - l4) * (c4 + l4) / (n4 + o4), g4.M12 = y4 + (p4 * r4 - h4 * x4) * e5 / n4, g4.M21 = y4 - (p4 * e5 - a5 * x4) * r4 / o4), g4;
        }, t4.Geodesic.prototype.InverseStart = function(s5, i5, a5, n4, r4, o4, c4, l4, u4, d4, m4) {
          var _4, f4, y4, p4, g4, M4, x4, w4, S4, E4, P4, v4, G4, C4, N4, I3, z3, T3, O3, R3, q3 = {}, L3 = n4 * i5 - r4 * s5, B3 = r4 * i5 + n4 * s5;
          return q3.sig12 = -1, _4 = n4 * i5, _4 += r4 * s5, (f4 = B3 >= 0 && L3 < 0.5 && r4 * c4 < 0.5) ? (p4 = e4.sq(s5 + n4), p4 /= p4 + e4.sq(i5 + r4), q3.dnm = Math.sqrt(1 + this._ep2 * p4), y4 = c4 / (this._f1 * q3.dnm), g4 = Math.sin(y4), M4 = Math.cos(y4)) : (g4 = l4, M4 = u4), q3.salp1 = r4 * g4, q3.calp1 = M4 >= 0 ? L3 + r4 * s5 * e4.sq(g4) / (1 + M4) : _4 - r4 * s5 * e4.sq(g4) / (1 - M4), w4 = e4.hypot(q3.salp1, q3.calp1), S4 = s5 * n4 + i5 * r4 * M4, f4 && w4 < this._etol2 ? (q3.salp2 = i5 * g4, q3.calp2 = L3 - i5 * n4 * (M4 >= 0 ? e4.sq(g4) / (1 + M4) : 1 - M4), x4 = e4.hypot(q3.salp2, q3.calp2), q3.salp2 /= x4, q3.calp2 /= x4, q3.sig12 = Math.atan2(w4, S4)) : Math.abs(this._n) > 0.1 || S4 >= 0 || w4 >= 6 * Math.abs(this._n) * Math.PI * e4.sq(i5) || (R3 = Math.atan2(-l4, -u4), this.f >= 0 ? (C4 = (G4 = e4.sq(s5) * this._ep2) / (2 * (1 + Math.sqrt(1 + G4)) + G4), E4 = R3 / (v4 = this.f * i5 * this.A3f(C4) * Math.PI), P4 = _4 / (v4 * i5)) : (N4 = r4 * i5 - n4 * s5, I3 = Math.atan2(_4, N4), P4 = c4 / (v4 = ((E4 = (z3 = this.Lengths(this._n, Math.PI + I3, s5, -i5, a5, n4, r4, o4, i5, r4, t4.REDUCEDLENGTH, d4, m4)).m12b / (i5 * r4 * z3.m0 * Math.PI) - 1) < -0.01 ? _4 / E4 : -this.f * e4.sq(i5) * Math.PI) / i5)), P4 > -b3 && E4 > -1 - A3 ? this.f >= 0 ? (q3.salp1 = Math.min(1, -E4), q3.calp1 = -Math.sqrt(1 - e4.sq(q3.salp1))) : (q3.calp1 = Math.max(E4 > -b3 ? 0 : -1, E4), q3.salp1 = Math.sqrt(1 - e4.sq(q3.calp1))) : (T3 = h3(E4, P4), O3 = v4 * (this.f >= 0 ? -E4 * T3 / (1 + T3) : -P4 * (1 + T3) / T3), g4 = Math.sin(O3), M4 = -Math.cos(O3), q3.salp1 = r4 * g4, q3.calp1 = _4 - r4 * s5 * e4.sq(g4) / (1 - M4))), q3.salp1 <= 0 ? (q3.salp1 = 1, q3.calp1 = 0) : (x4 = e4.hypot(q3.salp1, q3.calp1), q3.salp1 /= x4, q3.calp1 /= x4), q3;
        }, t4.Geodesic.prototype.Lambda12 = function(s5, i5, a5, n4, r4, h4, o4, c4, l4, u4, d4, m4, _4, f4) {
          var y4, p4, g4, M4, x4, w4, S4, E4, b4, P4, v4, A4, G4, C4 = {};
          return 0 === s5 && 0 === c4 && (c4 = -t4.tiny_), p4 = o4 * i5, g4 = e4.hypot(c4, o4 * s5), C4.ssig1 = s5, M4 = p4 * s5, C4.csig1 = x4 = c4 * i5, y4 = e4.hypot(C4.ssig1, C4.csig1), C4.ssig1 /= y4, C4.csig1 /= y4, C4.salp2 = r4 !== i5 ? p4 / r4 : o4, C4.calp2 = r4 !== i5 || Math.abs(n4) !== -s5 ? Math.sqrt(e4.sq(c4 * i5) + (i5 < -s5 ? (r4 - i5) * (i5 + r4) : (s5 - n4) * (s5 + n4))) / r4 : Math.abs(c4), C4.ssig2 = n4, w4 = p4 * n4, C4.csig2 = S4 = C4.calp2 * r4, y4 = e4.hypot(C4.ssig2, C4.csig2), C4.ssig2 /= y4, C4.csig2 /= y4, C4.sig12 = Math.atan2(Math.max(0, C4.csig1 * C4.ssig2 - C4.ssig1 * C4.csig2), C4.csig1 * C4.csig2 + C4.ssig1 * C4.ssig2), E4 = Math.max(0, x4 * w4 - M4 * S4), b4 = x4 * S4 + M4 * w4, v4 = Math.atan2(E4 * u4 - b4 * l4, b4 * u4 + E4 * l4), A4 = e4.sq(g4) * this._ep2, C4.eps = A4 / (2 * (1 + Math.sqrt(1 + A4)) + A4), this.C3f(C4.eps, f4), P4 = t4.SinCosSeries(true, C4.ssig2, C4.csig2, f4) - t4.SinCosSeries(true, C4.ssig1, C4.csig1, f4), C4.domg12 = -this.f * this.A3f(C4.eps) * p4 * (C4.sig12 + P4), C4.lam12 = v4 + C4.domg12, d4 && (0 === C4.calp2 ? C4.dlam12 = -2 * this._f1 * a5 / s5 : (G4 = this.Lengths(C4.eps, C4.sig12, C4.ssig1, C4.csig1, a5, C4.ssig2, C4.csig2, h4, i5, r4, t4.REDUCEDLENGTH, m4, _4), C4.dlam12 = G4.m12b, C4.dlam12 *= this._f1 / (C4.calp2 * r4))), C4;
        }, t4.Geodesic.prototype.Inverse = function(s5, i5, a5, n4, r4) {
          var h4, o4;
          return r4 || (r4 = t4.STANDARD), r4 === t4.LONG_UNROLL && (r4 |= t4.STANDARD), r4 &= t4.OUT_MASK, o4 = (h4 = this.InverseInt(s5, i5, a5, n4, r4)).vals, r4 & t4.AZIMUTH && (o4.azi1 = e4.atan2d(h4.salp1, h4.calp1), o4.azi2 = e4.atan2d(h4.salp2, h4.calp2)), o4;
        }, t4.Geodesic.prototype.InverseInt = function(s5, i5, a5, n4, r4) {
          var h4, o4, c4, l4, u4, d4, m4, _4, f4, y4, p4, g4, M4, x4, b4, P4, A4, G4, C4, N4, I3, z3, T3, O3, R3, q3, L3, B3, k3, D3, U3, j3, F3, V3, W3, H3, X3, Y3, Z3, Q3, K3, J3, $3, tt3, st3, it3, et3, at3, nt3, rt3, ht3, ot3, ct3, lt3, ut3, dt3, mt3, _t3, ft3, yt3, pt3, gt3, Mt3, xt3, wt3, St3 = {};
          if (St3.lat1 = s5 = e4.LatFix(s5), St3.lat2 = a5 = e4.LatFix(a5), s5 = e4.AngRound(s5), a5 = e4.AngRound(a5), o4 = (h4 = e4.AngDiff(i5, n4)).e, h4 = h4.d, r4 & t4.LONG_UNROLL ? (St3.lon1 = i5, St3.lon2 = i5 + h4 + o4) : (St3.lon1 = e4.AngNormalize(i5), St3.lon2 = e4.AngNormalize(n4)), o4 *= c4 = e4.copysign(1, h4), b4 = (h4 *= c4) * e4.degree, P4 = (l4 = e4.sincosde(h4, o4)).s, A4 = l4.c, o4 = 180 - h4 - o4, (u4 = Math.abs(s5) < Math.abs(a5) || isNaN(a5) ? -1 : 1) < 0 && (c4 *= -1, [a5, s5] = [s5, a5]), s5 *= d4 = e4.copysign(1, -s5), a5 *= d4, l4 = e4.sincosd(s5), m4 = this._f1 * l4.s, _4 = l4.c, m4 /= l4 = e4.hypot(m4, _4), _4 /= l4, _4 = Math.max(t4.tiny_, _4), l4 = e4.sincosd(a5), f4 = this._f1 * l4.s, y4 = l4.c, f4 /= l4 = e4.hypot(f4, y4), y4 /= l4, y4 = Math.max(t4.tiny_, y4), _4 < -m4 ? y4 === _4 && (f4 = e4.copysign(m4, f4)) : Math.abs(f4) === -m4 && (y4 = _4), M4 = Math.sqrt(1 + this._ep2 * e4.sq(m4)), x4 = Math.sqrt(1 + this._ep2 * e4.sq(f4)), T3 = new Array(t4.nC1_ + 1), O3 = new Array(t4.nC2_ + 1), R3 = new Array(t4.nC3_), (q3 = -90 === s5 || 0 === P4) && (N4 = P4, z3 = 0, B3 = m4, k3 = (C4 = A4) * _4, D3 = f4, U3 = (I3 = 1) * y4, G4 = Math.atan2(Math.max(0, k3 * D3 - B3 * U3), k3 * U3 + B3 * D3), p4 = (L3 = this.Lengths(this._n, G4, B3, k3, M4, D3, U3, x4, _4, y4, r4 | t4.DISTANCE | t4.REDUCEDLENGTH, T3, O3)).s12b, g4 = L3.m12b, r4 & t4.GEODESICSCALE && (St3.M12 = L3.M12, St3.M21 = L3.M21), G4 < 1 || g4 >= 0 ? ((G4 < 3 * t4.tiny_ || G4 < E3 && (p4 < 0 || g4 < 0)) && (G4 = g4 = p4 = 0), g4 *= this._b, p4 *= this._b, St3.a12 = G4 / e4.degree) : q3 = false), mt3 = 2, !q3 && 0 === m4 && (this.f <= 0 || o4 >= 180 * this.f))
            C4 = I3 = 0, N4 = z3 = 1, p4 = this.a * b4, G4 = F3 = b4 / this._f1, g4 = this._b * Math.sin(G4), r4 & t4.GEODESICSCALE && (St3.M12 = St3.M21 = Math.cos(G4)), St3.a12 = h4 / this._f1;
          else if (!q3)
            if (G4 = (L3 = this.InverseStart(m4, _4, M4, f4, y4, x4, b4, P4, A4, T3, O3)).sig12, N4 = L3.salp1, C4 = L3.calp1, G4 >= 0)
              z3 = L3.salp2, I3 = L3.calp2, V3 = L3.dnm, p4 = G4 * this._b * V3, g4 = e4.sq(V3) * this._b * Math.sin(G4 / V3), r4 & t4.GEODESICSCALE && (St3.M12 = St3.M21 = Math.cos(G4 / V3)), St3.a12 = G4 / e4.degree, F3 = b4 / (this._f1 * V3);
            else {
              for (W3 = 0, H3 = t4.tiny_, X3 = 1, Y3 = t4.tiny_, Z3 = -1, Q3 = false, K3 = false; J3 = (L3 = this.Lambda12(m4, _4, M4, f4, y4, x4, N4, C4, P4, A4, W3 < w3, T3, O3, R3)).lam12, z3 = L3.salp2, I3 = L3.calp2, G4 = L3.sig12, B3 = L3.ssig1, k3 = L3.csig1, D3 = L3.ssig2, U3 = L3.csig2, j3 = L3.eps, ft3 = L3.domg12, $3 = L3.dlam12, !K3 && Math.abs(J3) >= (Q3 ? 8 : 1) * E3 && W3 != S3; ++W3)
                J3 > 0 && (W3 < w3 || C4 / N4 > Z3 / Y3) ? (Y3 = N4, Z3 = C4) : J3 < 0 && (W3 < w3 || C4 / N4 < X3 / H3) && (H3 = N4, X3 = C4), W3 < w3 && $3 > 0 && (tt3 = -J3 / $3, Math.abs(tt3) < Math.PI && (st3 = Math.sin(tt3), (et3 = N4 * (it3 = Math.cos(tt3)) + C4 * st3) > 0)) ? (C4 = C4 * it3 - N4 * st3, N4 = et3, N4 /= l4 = e4.hypot(N4, C4), C4 /= l4, Q3 = Math.abs(J3) <= 16 * E3) : (N4 = (H3 + Y3) / 2, C4 = (X3 + Z3) / 2, N4 /= l4 = e4.hypot(N4, C4), C4 /= l4, Q3 = false, K3 = Math.abs(H3 - N4) + (X3 - C4) < v3 || Math.abs(N4 - Y3) + (C4 - Z3) < v3);
              at3 = r4 | (r4 & (t4.REDUCEDLENGTH | t4.GEODESICSCALE) ? t4.DISTANCE : t4.NONE), p4 = (L3 = this.Lengths(j3, G4, B3, k3, M4, D3, U3, x4, _4, y4, at3, T3, O3)).s12b, g4 = L3.m12b, r4 & t4.GEODESICSCALE && (St3.M12 = L3.M12, St3.M21 = L3.M21), g4 *= this._b, p4 *= this._b, St3.a12 = G4 / e4.degree, r4 & t4.AREA && (xt3 = Math.sin(ft3), mt3 = P4 * (wt3 = Math.cos(ft3)) - A4 * xt3, _t3 = A4 * wt3 + P4 * xt3);
            }
          return r4 & t4.DISTANCE && (St3.s12 = 0 + p4), r4 & t4.REDUCEDLENGTH && (St3.m12 = 0 + g4), r4 & t4.AREA && (nt3 = N4 * _4, 0 !== (rt3 = e4.hypot(C4, N4 * m4)) && 0 !== nt3 ? (B3 = m4, k3 = C4 * _4, D3 = f4, U3 = I3 * y4, j3 = (ot3 = e4.sq(rt3) * this._ep2) / (2 * (1 + Math.sqrt(1 + ot3)) + ot3), ct3 = e4.sq(this.a) * rt3 * nt3 * this._e2, B3 /= l4 = e4.hypot(B3, k3), k3 /= l4, D3 /= l4 = e4.hypot(D3, U3), U3 /= l4, lt3 = new Array(t4.nC4_), this.C4f(j3, lt3), ut3 = t4.SinCosSeries(false, B3, k3, lt3), dt3 = t4.SinCosSeries(false, D3, U3, lt3), St3.S12 = ct3 * (dt3 - ut3)) : St3.S12 = 0, q3 || 2 != mt3 || (mt3 = Math.sin(F3), _t3 = Math.cos(F3)), !q3 && _t3 > -0.7071 && f4 - m4 < 1.75 ? (ft3 = 1 + _t3, yt3 = 1 + _4, pt3 = 1 + y4, ht3 = 2 * Math.atan2(mt3 * (m4 * pt3 + f4 * yt3), ft3 * (m4 * f4 + yt3 * pt3))) : (Mt3 = I3 * C4 + z3 * N4, 0 === (gt3 = z3 * C4 - I3 * N4) && Mt3 < 0 && (gt3 = t4.tiny_ * C4, Mt3 = -1), ht3 = Math.atan2(gt3, Mt3)), St3.S12 += this._c2 * ht3, St3.S12 *= u4 * c4 * d4, St3.S12 += 0), u4 < 0 && ([z3, N4] = [N4, z3], [I3, C4] = [C4, I3], r4 & t4.GEODESICSCALE && ([St3.M21, St3.M12] = [St3.M12, St3.M21])), { vals: St3, salp1: N4 *= u4 * c4, calp1: C4 *= u4 * d4, salp2: z3 *= u4 * c4, calp2: I3 *= u4 * d4 };
        }, t4.Geodesic.prototype.GenDirect = function(i5, e5, a5, n4, r4, h4) {
          return h4 ? h4 === t4.LONG_UNROLL && (h4 |= t4.STANDARD) : h4 = t4.STANDARD, n4 || (h4 |= t4.DISTANCE_IN), new s4.GeodesicLine(this, i5, e5, a5, h4).GenPosition(n4, r4, h4);
        }, t4.Geodesic.prototype.Direct = function(t5, s5, i5, e5, a5) {
          return this.GenDirect(t5, s5, i5, false, e5, a5);
        }, t4.Geodesic.prototype.ArcDirect = function(t5, s5, i5, e5, a5) {
          return this.GenDirect(t5, s5, i5, true, e5, a5);
        }, t4.Geodesic.prototype.Line = function(t5, i5, e5, a5) {
          return new s4.GeodesicLine(this, t5, i5, e5, a5);
        }, t4.Geodesic.prototype.DirectLine = function(t5, s5, i5, e5, a5) {
          return this.GenDirectLine(t5, s5, i5, false, e5, a5);
        }, t4.Geodesic.prototype.ArcDirectLine = function(t5, s5, i5, e5, a5) {
          return this.GenDirectLine(t5, s5, i5, true, e5, a5);
        }, t4.Geodesic.prototype.GenDirectLine = function(i5, e5, a5, n4, r4, h4) {
          var o4;
          return h4 || (h4 = t4.STANDARD | t4.DISTANCE_IN), n4 || (h4 |= t4.DISTANCE_IN), (o4 = new s4.GeodesicLine(this, i5, e5, a5, h4)).GenSetDistance(n4, r4), o4;
        }, t4.Geodesic.prototype.InverseLine = function(i5, a5, n4, r4, h4) {
          var o4, c4, l4;
          return h4 || (h4 = t4.STANDARD | t4.DISTANCE_IN), o4 = this.InverseInt(i5, a5, n4, r4, t4.ARC), l4 = e4.atan2d(o4.salp1, o4.calp1), h4 & t4.OUT_MASK & t4.DISTANCE_IN && (h4 |= t4.DISTANCE), (c4 = new s4.GeodesicLine(this, i5, a5, l4, h4, o4.salp1, o4.calp1)).SetArc(o4.vals.a12), c4;
        }, t4.Geodesic.prototype.Polygon = function(t5) {
          return new i4.PolygonArea(this, t5);
        }, t4.WGS84 = new t4.Geodesic(a4.WGS84.a, a4.WGS84.f);
      }(a3.Geodesic, a3.GeodesicLine, a3.PolygonArea, a3.Math, a3.Constants), function(t4, s4, i4) {
        s4.GeodesicLine = function(s5, e4, a4, n3, r3, h3, o3) {
          var c3, l3, u3, d3, m3, _3;
          r3 || (r3 = t4.STANDARD | t4.DISTANCE_IN), this.a = s5.a, this.f = s5.f, this._b = s5._b, this._c2 = s5._c2, this._f1 = s5._f1, this.caps = r3 | t4.LATITUDE | t4.AZIMUTH | t4.LONG_UNROLL, this.lat1 = i4.LatFix(e4), this.lon1 = a4, void 0 === h3 || void 0 === o3 ? (this.azi1 = i4.AngNormalize(n3), c3 = i4.sincosd(i4.AngRound(this.azi1)), this.salp1 = c3.s, this.calp1 = c3.c) : (this.azi1 = n3, this.salp1 = h3, this.calp1 = o3), c3 = i4.sincosd(i4.AngRound(this.lat1)), u3 = this._f1 * c3.s, l3 = c3.c, u3 /= c3 = i4.hypot(u3, l3), l3 /= c3, l3 = Math.max(t4.tiny_, l3), this._dn1 = Math.sqrt(1 + s5._ep2 * i4.sq(u3)), this._salp0 = this.salp1 * l3, this._calp0 = i4.hypot(this.calp1, this.salp1 * u3), this._ssig1 = u3, this._somg1 = this._salp0 * u3, this._csig1 = this._comg1 = 0 !== u3 || 0 !== this.calp1 ? l3 * this.calp1 : 1, c3 = i4.hypot(this._ssig1, this._csig1), this._ssig1 /= c3, this._csig1 /= c3, this._k2 = i4.sq(this._calp0) * s5._ep2, d3 = this._k2 / (2 * (1 + Math.sqrt(1 + this._k2)) + this._k2), this.caps & t4.CAP_C1 && (this._A1m1 = t4.A1m1f(d3), this._C1a = new Array(t4.nC1_ + 1), t4.C1f(d3, this._C1a), this._B11 = t4.SinCosSeries(true, this._ssig1, this._csig1, this._C1a), m3 = Math.sin(this._B11), _3 = Math.cos(this._B11), this._stau1 = this._ssig1 * _3 + this._csig1 * m3, this._ctau1 = this._csig1 * _3 - this._ssig1 * m3), this.caps & t4.CAP_C1p && (this._C1pa = new Array(t4.nC1p_ + 1), t4.C1pf(d3, this._C1pa)), this.caps & t4.CAP_C2 && (this._A2m1 = t4.A2m1f(d3), this._C2a = new Array(t4.nC2_ + 1), t4.C2f(d3, this._C2a), this._B21 = t4.SinCosSeries(true, this._ssig1, this._csig1, this._C2a)), this.caps & t4.CAP_C3 && (this._C3a = new Array(t4.nC3_), s5.C3f(d3, this._C3a), this._A3c = -this.f * this._salp0 * s5.A3f(d3), this._B31 = t4.SinCosSeries(true, this._ssig1, this._csig1, this._C3a)), this.caps & t4.CAP_C4 && (this._C4a = new Array(t4.nC4_), s5.C4f(d3, this._C4a), this._A4 = i4.sq(this.a) * this._calp0 * this._salp0 * s5._e2, this._B41 = t4.SinCosSeries(false, this._ssig1, this._csig1, this._C4a)), this.a13 = this.s13 = NaN;
        }, s4.GeodesicLine.prototype.GenPosition = function(s5, e4, a4) {
          var n3, r3, h3, o3, c3, l3, u3, d3, m3, _3, f3, y3, p3, g3, M3, x3, w3, S3, E3, b3, P3, v3, A3, G3, C3, N3, I3 = {};
          return a4 ? a4 === t4.LONG_UNROLL && (a4 |= t4.STANDARD) : a4 = t4.STANDARD, a4 &= this.caps & t4.OUT_MASK, I3.lat1 = this.lat1, I3.azi1 = this.azi1, I3.lon1 = a4 & t4.LONG_UNROLL ? this.lon1 : i4.AngNormalize(this.lon1), s5 ? I3.a12 = e4 : I3.s12 = e4, s5 || this.caps & t4.DISTANCE_IN & t4.OUT_MASK ? (o3 = 0, c3 = 0, s5 ? (n3 = e4 * i4.degree, r3 = (A3 = i4.sincosd(e4)).s, h3 = A3.c) : (d3 = e4 / (this._b * (1 + this._A1m1)), m3 = Math.sin(d3), _3 = Math.cos(d3), n3 = d3 - ((o3 = -t4.SinCosSeries(true, this._stau1 * _3 + this._ctau1 * m3, this._ctau1 * _3 - this._stau1 * m3, this._C1pa)) - this._B11), r3 = Math.sin(n3), h3 = Math.cos(n3), Math.abs(this.f) > 0.01 && (l3 = this._ssig1 * h3 + this._csig1 * r3, u3 = this._csig1 * h3 - this._ssig1 * r3, o3 = t4.SinCosSeries(true, l3, u3, this._C1a), n3 -= ((1 + this._A1m1) * (n3 + (o3 - this._B11)) - e4 / this._b) / Math.sqrt(1 + this._k2 * i4.sq(l3)), r3 = Math.sin(n3), h3 = Math.cos(n3))), l3 = this._ssig1 * h3 + this._csig1 * r3, u3 = this._csig1 * h3 - this._ssig1 * r3, E3 = Math.sqrt(1 + this._k2 * i4.sq(l3)), a4 & (t4.DISTANCE | t4.REDUCEDLENGTH | t4.GEODESICSCALE) && ((s5 || Math.abs(this.f) > 0.01) && (o3 = t4.SinCosSeries(true, l3, u3, this._C1a)), c3 = (1 + this._A1m1) * (o3 - this._B11)), p3 = this._calp0 * l3, 0 === (g3 = i4.hypot(this._salp0, this._calp0 * u3)) && (g3 = u3 = t4.tiny_), w3 = this._salp0, S3 = this._calp0 * u3, s5 && a4 & t4.DISTANCE && (I3.s12 = this._b * ((1 + this._A1m1) * n3 + c3)), a4 & t4.LONGITUDE && (M3 = this._salp0 * l3, x3 = u3, y3 = i4.copysign(1, this._salp0), f3 = ((a4 & t4.LONG_UNROLL ? y3 * (n3 - (Math.atan2(l3, u3) - Math.atan2(this._ssig1, this._csig1)) + (Math.atan2(y3 * M3, x3) - Math.atan2(y3 * this._somg1, this._comg1))) : Math.atan2(M3 * this._comg1 - x3 * this._somg1, x3 * this._comg1 + M3 * this._somg1)) + this._A3c * (n3 + (t4.SinCosSeries(true, l3, u3, this._C3a) - this._B31))) / i4.degree, I3.lon2 = a4 & t4.LONG_UNROLL ? this.lon1 + f3 : i4.AngNormalize(i4.AngNormalize(this.lon1) + i4.AngNormalize(f3))), a4 & t4.LATITUDE && (I3.lat2 = i4.atan2d(p3, this._f1 * g3)), a4 & t4.AZIMUTH && (I3.azi2 = i4.atan2d(w3, S3)), a4 & (t4.REDUCEDLENGTH | t4.GEODESICSCALE) && (b3 = t4.SinCosSeries(true, l3, u3, this._C2a), P3 = (1 + this._A2m1) * (b3 - this._B21), v3 = (this._A1m1 - this._A2m1) * n3 + (c3 - P3), a4 & t4.REDUCEDLENGTH && (I3.m12 = this._b * (E3 * (this._csig1 * l3) - this._dn1 * (this._ssig1 * u3) - this._csig1 * u3 * v3)), a4 & t4.GEODESICSCALE && (A3 = this._k2 * (l3 - this._ssig1) * (l3 + this._ssig1) / (this._dn1 + E3), I3.M12 = h3 + (A3 * l3 - u3 * v3) * this._ssig1 / this._dn1, I3.M21 = h3 - (A3 * this._ssig1 - this._csig1 * v3) * l3 / E3)), a4 & t4.AREA && (G3 = t4.SinCosSeries(false, l3, u3, this._C4a), 0 === this._calp0 || 0 === this._salp0 ? (C3 = w3 * this.calp1 - S3 * this.salp1, N3 = S3 * this.calp1 + w3 * this.salp1) : (C3 = this._calp0 * this._salp0 * (h3 <= 0 ? this._csig1 * (1 - h3) + r3 * this._ssig1 : r3 * (this._csig1 * r3 / (1 + h3) + this._ssig1)), N3 = i4.sq(this._salp0) + i4.sq(this._calp0) * this._csig1 * u3), I3.S12 = this._c2 * Math.atan2(C3, N3) + this._A4 * (G3 - this._B41)), s5 || (I3.a12 = n3 / i4.degree), I3) : (I3.a12 = NaN, I3);
        }, s4.GeodesicLine.prototype.Position = function(t5, s5) {
          return this.GenPosition(false, t5, s5);
        }, s4.GeodesicLine.prototype.ArcPosition = function(t5, s5) {
          return this.GenPosition(true, t5, s5);
        }, s4.GeodesicLine.prototype.GenSetDistance = function(t5, s5) {
          t5 ? this.SetArc(s5) : this.SetDistance(s5);
        }, s4.GeodesicLine.prototype.SetDistance = function(s5) {
          var i5;
          this.s13 = s5, i5 = this.GenPosition(false, this.s13, t4.ARC), this.a13 = 0 + i5.a12;
        }, s4.GeodesicLine.prototype.SetArc = function(s5) {
          var i5;
          this.a13 = s5, i5 = this.GenPosition(true, this.a13, t4.DISTANCE), this.s13 = 0 + i5.s12;
        };
      }(a3.Geodesic, a3.GeodesicLine, a3.Math), function(t4, s4, i4, e4) {
        var a4, n3, r3, h3;
        a4 = function(t5, s5) {
          var e5 = i4.AngDiff(t5, s5).d;
          return t5 = i4.AngNormalize(t5), s5 = i4.AngNormalize(s5), e5 > 0 && (t5 < 0 && s5 >= 0 || t5 > 0 && 0 === s5) ? 1 : e5 < 0 && t5 >= 0 && s5 < 0 ? -1 : 0;
        }, n3 = function(t5, s5) {
          return (0 <= (s5 %= 720) && s5 < 360 || s5 < -360 ? 0 : 1) - (0 <= (t5 %= 720) && t5 < 360 || t5 < -360 ? 0 : 1);
        }, r3 = function(t5, s5, i5, e5, a5) {
          return t5.Remainder(s5), 1 & i5 && t5.Add((t5.Sum() < 0 ? 1 : -1) * s5 / 2), e5 || t5.Negate(), a5 ? t5.Sum() > s5 / 2 ? t5.Add(-s5) : t5.Sum() <= -s5 / 2 && t5.Add(+s5) : t5.Sum() >= s5 ? t5.Add(-s5) : t5.Sum() < 0 && t5.Add(+s5), 0 + t5.Sum();
        }, h3 = function(t5, s5, e5, a5, n4) {
          return t5 = i4.remainder(t5, s5), 1 & e5 && (t5 += (t5 < 0 ? 1 : -1) * s5 / 2), a5 || (t5 *= -1), n4 ? t5 > s5 / 2 ? t5 -= s5 : t5 <= -s5 / 2 && (t5 += s5) : t5 >= s5 ? t5 -= s5 : t5 < 0 && (t5 += s5), 0 + t5;
        }, t4.PolygonArea = function(t5, i5) {
          this._geod = t5, this.a = this._geod.a, this.f = this._geod.f, this._area0 = 4 * Math.PI * t5._c2, this.polyline = i5 || false, this._mask = s4.LATITUDE | s4.LONGITUDE | s4.DISTANCE | (this.polyline ? s4.NONE : s4.AREA | s4.LONG_UNROLL), this.polyline || (this._areasum = new e4.Accumulator(0)), this._perimetersum = new e4.Accumulator(0), this.Clear();
        }, t4.PolygonArea.prototype.Clear = function() {
          this.num = 0, this._crossings = 0, this.polyline || this._areasum.Set(0), this._perimetersum.Set(0), this._lat0 = this._lon0 = this.lat = this.lon = NaN;
        }, t4.PolygonArea.prototype.AddPoint = function(t5, s5) {
          var i5;
          0 === this.num ? (this._lat0 = this.lat = t5, this._lon0 = this.lon = s5) : (i5 = this._geod.Inverse(this.lat, this.lon, t5, s5, this._mask), this._perimetersum.Add(i5.s12), this.polyline || (this._areasum.Add(i5.S12), this._crossings += a4(this.lon, s5)), this.lat = t5, this.lon = s5), ++this.num;
        }, t4.PolygonArea.prototype.AddEdge = function(t5, s5) {
          var i5;
          this.num && (i5 = this._geod.Direct(this.lat, this.lon, t5, s5, this._mask), this._perimetersum.Add(s5), this.polyline || (this._areasum.Add(i5.S12), this._crossings += n3(this.lon, i5.lon2)), this.lat = i5.lat2, this.lon = i5.lon2), ++this.num;
        }, t4.PolygonArea.prototype.Compute = function(t5, s5) {
          var i5, n4, h4 = { number: this.num };
          return this.num < 2 ? (h4.perimeter = 0, this.polyline || (h4.area = 0), h4) : this.polyline ? (h4.perimeter = this._perimetersum.Sum(), h4) : (i5 = this._geod.Inverse(this.lat, this.lon, this._lat0, this._lon0, this._mask), h4.perimeter = this._perimetersum.Sum(i5.s12), (n4 = new e4.Accumulator(this._areasum)).Add(i5.S12), h4.area = r3(n4, this._area0, this._crossings + a4(this.lon, this._lon0), t5, s5), h4);
        }, t4.PolygonArea.prototype.TestPoint = function(t5, s5, i5, e5) {
          var n4, r4, o3, c3, l3 = { number: this.num + 1 };
          if (0 === this.num)
            return l3.perimeter = 0, this.polyline || (l3.area = 0), l3;
          for (l3.perimeter = this._perimetersum.Sum(), r4 = this.polyline ? 0 : this._areasum.Sum(), o3 = this._crossings, c3 = 0; c3 < (this.polyline ? 1 : 2); ++c3)
            n4 = this._geod.Inverse(0 === c3 ? this.lat : t5, 0 === c3 ? this.lon : s5, 0 !== c3 ? this._lat0 : t5, 0 !== c3 ? this._lon0 : s5, this._mask), l3.perimeter += n4.s12, this.polyline || (r4 += n4.S12, o3 += a4(0 === c3 ? this.lon : s5, 0 !== c3 ? this._lon0 : s5));
          return this.polyline || (l3.area = h3(r4, this._area0, o3, i5, e5)), l3;
        }, t4.PolygonArea.prototype.TestEdge = function(t5, s5, i5, e5) {
          var r4, o3, c3, l3 = { number: this.num ? this.num + 1 : 0 };
          return 0 === this.num || (l3.perimeter = this._perimetersum.Sum() + s5, this.polyline || (o3 = this._areasum.Sum(), c3 = this._crossings, o3 += (r4 = this._geod.Direct(this.lat, this.lon, t5, s5, this._mask)).S12, c3 += n3(this.lon, r4.lon2), c3 += a4(r4.lon2, this._lon0), r4 = this._geod.Inverse(r4.lat2, r4.lon2, this._lat0, this._lon0, this._mask), l3.perimeter += r4.s12, o3 += r4.S12, l3.area = h3(o3, this._area0, c3, i5, e5))), l3;
        };
      }(a3.PolygonArea, a3.Geodesic, a3.Math, a3.Accumulator), s3(a3);
    }(Ca)), Ca.exports;
  }
  var Ia = Na();
  function za() {
    this.sin_p12 = Math.sin(this.lat0), this.cos_p12 = Math.cos(this.lat0), this.g = new Ia.Geodesic.Geodesic(this.a, this.es / (1 + Math.sqrt(1 - this.es)));
  }
  function Ta(t3) {
    var s3, i3, e3, a3, n3, r3, h3, o3, c3, u3, d3, m3, y3, p3, g3, M3 = t3.x, x3 = t3.y, w3 = Math.sin(t3.y), S3 = Math.cos(t3.y), E3 = yt2(M3 - this.long0);
    return this.sphere ? Math.abs(this.sin_p12 - 1) <= _2 ? (t3.x = this.x0 + this.a * (l2 - x3) * Math.sin(E3), t3.y = this.y0 - this.a * (l2 - x3) * Math.cos(E3), t3) : Math.abs(this.sin_p12 + 1) <= _2 ? (t3.x = this.x0 + this.a * (l2 + x3) * Math.sin(E3), t3.y = this.y0 + this.a * (l2 + x3) * Math.cos(E3), t3) : (c3 = this.sin_p12 * w3 + this.cos_p12 * S3 * Math.cos(E3), o3 = (h3 = Math.acos(c3)) ? h3 / Math.sin(h3) : 1, t3.x = this.x0 + this.a * o3 * S3 * Math.sin(E3), t3.y = this.y0 + this.a * o3 * (this.cos_p12 * w3 - this.sin_p12 * S3 * Math.cos(E3)), t3) : (s3 = ce2(this.es), i3 = le2(this.es), e3 = ue2(this.es), a3 = de2(this.es), Math.abs(this.sin_p12 - 1) <= _2 ? (n3 = this.a * oe2(s3, i3, e3, a3, l2), r3 = this.a * oe2(s3, i3, e3, a3, x3), t3.x = this.x0 + (n3 - r3) * Math.sin(E3), t3.y = this.y0 - (n3 - r3) * Math.cos(E3), t3) : Math.abs(this.sin_p12 + 1) <= _2 ? (n3 = this.a * oe2(s3, i3, e3, a3, l2), r3 = this.a * oe2(s3, i3, e3, a3, x3), t3.x = this.x0 + (n3 + r3) * Math.sin(E3), t3.y = this.y0 + (n3 + r3) * Math.cos(E3), t3) : Math.abs(M3) < _2 && Math.abs(x3 - this.lat0) < _2 ? (t3.x = t3.y = 0, t3) : (u3 = this.lat0 / f2, d3 = this.long0 / f2, m3 = x3 / f2, y3 = M3 / f2, g3 = (p3 = this.g.Inverse(u3, d3, m3, y3, this.g.AZIMUTH)).azi1 * f2, t3.x = p3.s12 * Math.sin(g3), t3.y = p3.s12 * Math.cos(g3), t3));
  }
  function Oa(t3) {
    var s3, i3, e3, a3, n3, r3, h3, o3, c3, u3, d3, m3, y3, p3, g3, M3, x3;
    if (t3.x -= this.x0, t3.y -= this.y0, this.sphere) {
      if ((s3 = Math.sqrt(t3.x * t3.x + t3.y * t3.y)) > 2 * l2 * this.a)
        return;
      return i3 = s3 / this.a, e3 = Math.sin(i3), a3 = Math.cos(i3), n3 = this.long0, Math.abs(s3) <= _2 ? r3 = this.lat0 : (r3 = Te2(a3 * this.sin_p12 + t3.y * e3 * this.cos_p12 / s3), h3 = Math.abs(this.lat0) - l2, n3 = Math.abs(h3) <= _2 ? this.lat0 >= 0 ? yt2(this.long0 + Math.atan2(t3.x, -t3.y)) : yt2(this.long0 - Math.atan2(-t3.x, t3.y)) : yt2(this.long0 + Math.atan2(t3.x * e3, s3 * this.cos_p12 * a3 - t3.y * this.sin_p12 * e3))), t3.x = n3, t3.y = r3, t3;
    }
    return o3 = ce2(this.es), c3 = le2(this.es), u3 = ue2(this.es), d3 = de2(this.es), Math.abs(this.sin_p12 - 1) <= _2 ? (r3 = fe2(((m3 = this.a * oe2(o3, c3, u3, d3, l2)) - (s3 = Math.sqrt(t3.x * t3.x + t3.y * t3.y))) / this.a, o3, c3, u3, d3), n3 = yt2(this.long0 + Math.atan2(t3.x, -1 * t3.y)), t3.x = n3, t3.y = r3, t3) : Math.abs(this.sin_p12 + 1) <= _2 ? (m3 = this.a * oe2(o3, c3, u3, d3, l2), r3 = fe2(((s3 = Math.sqrt(t3.x * t3.x + t3.y * t3.y)) - m3) / this.a, o3, c3, u3, d3), n3 = yt2(this.long0 + Math.atan2(t3.x, t3.y)), t3.x = n3, t3.y = r3, t3) : (y3 = this.lat0 / f2, p3 = this.long0 / f2, g3 = Math.atan2(t3.x, t3.y) / f2, M3 = Math.sqrt(t3.x * t3.x + t3.y * t3.y), x3 = this.g.Direct(y3, p3, g3, M3, this.g.STANDARD), t3.x = x3.lon2 * f2, t3.y = x3.lat2 * f2, t3);
  }
  var Ra = { init: za, forward: Ta, inverse: Oa, names: ["Azimuthal_Equidistant", "aeqd"] };
  function qa() {
    this.sin_p14 = Math.sin(this.lat0), this.cos_p14 = Math.cos(this.lat0);
  }
  function La(t3) {
    var s3, i3, e3, a3, n3, r3, h3, o3, c3 = t3.x, l3 = t3.y;
    return e3 = yt2(c3 - this.long0), s3 = Math.sin(l3), i3 = Math.cos(l3), a3 = Math.cos(e3), n3 = 1, ((r3 = this.sin_p14 * s3 + this.cos_p14 * i3 * a3) > 0 || Math.abs(r3) <= _2) && (h3 = this.a * n3 * i3 * Math.sin(e3), o3 = this.y0 + this.a * n3 * (this.cos_p14 * s3 - this.sin_p14 * i3 * a3)), t3.x = h3, t3.y = o3, t3;
  }
  function Ba(t3) {
    var s3, i3, e3, a3, n3, r3, h3;
    return t3.x -= this.x0, t3.y -= this.y0, i3 = Te2((s3 = Math.sqrt(t3.x * t3.x + t3.y * t3.y)) / this.a), e3 = Math.sin(i3), a3 = Math.cos(i3), r3 = this.long0, Math.abs(s3) <= _2 ? (h3 = this.lat0, t3.x = r3, t3.y = h3, t3) : (h3 = Te2(a3 * this.sin_p14 + t3.y * e3 * this.cos_p14 / s3), n3 = Math.abs(this.lat0) - l2, Math.abs(n3) <= _2 ? (r3 = this.lat0 >= 0 ? yt2(this.long0 + Math.atan2(t3.x, -t3.y)) : yt2(this.long0 - Math.atan2(-t3.x, t3.y)), t3.x = r3, t3.y = h3, t3) : (r3 = yt2(this.long0 + Math.atan2(t3.x * e3, s3 * this.cos_p14 * a3 - t3.y * this.sin_p14 * e3)), t3.x = r3, t3.y = h3, t3));
  }
  var ka = { init: qa, forward: La, inverse: Ba, names: ["ortho"] }, Da = { FRONT: 1, RIGHT: 2, BACK: 3, LEFT: 4, TOP: 5, BOTTOM: 6 }, Ua = { AREA_0: 1, AREA_1: 2, AREA_2: 3, AREA_3: 4 };
  function ja() {
    this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_ts || 0, this.title = this.title || "Quadrilateralized Spherical Cube", this.lat0 >= l2 - p2 / 2 ? this.face = Da.TOP : this.lat0 <= -(l2 - p2 / 2) ? this.face = Da.BOTTOM : Math.abs(this.long0) <= p2 ? this.face = Da.FRONT : Math.abs(this.long0) <= l2 + p2 ? this.face = this.long0 > 0 ? Da.RIGHT : Da.LEFT : this.face = Da.BACK, 0 !== this.es && (this.one_minus_f = 1 - (this.a - this.b) / this.a, this.one_minus_f_squared = this.one_minus_f * this.one_minus_f);
  }
  function Fa(t3) {
    var s3, i3, e3, a3, n3, r3, h3 = { x: 0, y: 0 }, o3 = { value: 0 };
    if (t3.x -= this.long0, s3 = 0 !== this.es ? Math.atan(this.one_minus_f_squared * Math.tan(t3.y)) : t3.y, i3 = t3.x, this.face === Da.TOP)
      a3 = l2 - s3, i3 >= p2 && i3 <= l2 + p2 ? (o3.value = Ua.AREA_0, e3 = i3 - l2) : i3 > l2 + p2 || i3 <= -(l2 + p2) ? (o3.value = Ua.AREA_1, e3 = i3 > 0 ? i3 - M2 : i3 + M2) : i3 > -(l2 + p2) && i3 <= -p2 ? (o3.value = Ua.AREA_2, e3 = i3 + l2) : (o3.value = Ua.AREA_3, e3 = i3);
    else if (this.face === Da.BOTTOM)
      a3 = l2 + s3, i3 >= p2 && i3 <= l2 + p2 ? (o3.value = Ua.AREA_0, e3 = -i3 + l2) : i3 < p2 && i3 >= -p2 ? (o3.value = Ua.AREA_1, e3 = -i3) : i3 < -p2 && i3 >= -(l2 + p2) ? (o3.value = Ua.AREA_2, e3 = -i3 - l2) : (o3.value = Ua.AREA_3, e3 = i3 > 0 ? -i3 + M2 : -i3 - M2);
    else {
      var c3, u3, d3, m3, _3, f3;
      this.face === Da.RIGHT ? i3 = Ha(i3, +l2) : this.face === Da.BACK ? i3 = Ha(i3, 3.14159265359) : this.face === Da.LEFT && (i3 = Ha(i3, -l2)), m3 = Math.sin(s3), _3 = Math.cos(s3), f3 = Math.sin(i3), c3 = _3 * Math.cos(i3), u3 = _3 * f3, d3 = m3, this.face === Da.FRONT ? e3 = Wa(a3 = Math.acos(c3), d3, u3, o3) : this.face === Da.RIGHT ? e3 = Wa(a3 = Math.acos(u3), d3, -c3, o3) : this.face === Da.BACK ? e3 = Wa(a3 = Math.acos(-c3), d3, -u3, o3) : this.face === Da.LEFT ? e3 = Wa(a3 = Math.acos(-u3), d3, c3, o3) : (a3 = e3 = 0, o3.value = Ua.AREA_0);
    }
    return r3 = Math.atan(12 / M2 * (e3 + Math.acos(Math.sin(e3) * Math.cos(p2)) - l2)), n3 = Math.sqrt((1 - Math.cos(a3)) / (Math.cos(r3) * Math.cos(r3)) / (1 - Math.cos(Math.atan(1 / Math.cos(e3))))), o3.value === Ua.AREA_1 ? r3 += l2 : o3.value === Ua.AREA_2 ? r3 += M2 : o3.value === Ua.AREA_3 && (r3 += 1.5 * M2), h3.x = n3 * Math.cos(r3), h3.y = n3 * Math.sin(r3), h3.x = h3.x * this.a + this.x0, h3.y = h3.y * this.a + this.y0, t3.x = h3.x, t3.y = h3.y, t3;
  }
  function Va(t3) {
    var s3, i3, e3, a3, n3, r3, h3, o3, c3, u3, d3, m3, _3 = { lam: 0, phi: 0 }, f3 = { value: 0 };
    if (t3.x = (t3.x - this.x0) / this.a, t3.y = (t3.y - this.y0) / this.a, i3 = Math.atan(Math.sqrt(t3.x * t3.x + t3.y * t3.y)), s3 = Math.atan2(t3.y, t3.x), t3.x >= 0 && t3.x >= Math.abs(t3.y) ? f3.value = Ua.AREA_0 : t3.y >= 0 && t3.y >= Math.abs(t3.x) ? (f3.value = Ua.AREA_1, s3 -= l2) : t3.x < 0 && -t3.x >= Math.abs(t3.y) ? (f3.value = Ua.AREA_2, s3 = s3 < 0 ? s3 + M2 : s3 - M2) : (f3.value = Ua.AREA_3, s3 += l2), c3 = M2 / 12 * Math.tan(s3), n3 = Math.sin(c3) / (Math.cos(c3) - 1 / Math.sqrt(2)), r3 = Math.atan(n3), (h3 = 1 - (e3 = Math.cos(s3)) * e3 * (a3 = Math.tan(i3)) * a3 * (1 - Math.cos(Math.atan(1 / Math.cos(r3))))) < -1 ? h3 = -1 : h3 > 1 && (h3 = 1), this.face === Da.TOP)
      o3 = Math.acos(h3), _3.phi = l2 - o3, f3.value === Ua.AREA_0 ? _3.lam = r3 + l2 : f3.value === Ua.AREA_1 ? _3.lam = r3 < 0 ? r3 + M2 : r3 - M2 : f3.value === Ua.AREA_2 ? _3.lam = r3 - l2 : _3.lam = r3;
    else if (this.face === Da.BOTTOM)
      o3 = Math.acos(h3), _3.phi = o3 - l2, f3.value === Ua.AREA_0 ? _3.lam = -r3 + l2 : f3.value === Ua.AREA_1 ? _3.lam = -r3 : f3.value === Ua.AREA_2 ? _3.lam = -r3 - l2 : _3.lam = r3 < 0 ? -r3 - M2 : -r3 + M2;
    else {
      var y3, p3, g3;
      c3 = (y3 = h3) * y3, p3 = (c3 += (g3 = c3 >= 1 ? 0 : Math.sqrt(1 - c3) * Math.sin(r3)) * g3) >= 1 ? 0 : Math.sqrt(1 - c3), f3.value === Ua.AREA_1 ? (c3 = p3, p3 = -g3, g3 = c3) : f3.value === Ua.AREA_2 ? (p3 = -p3, g3 = -g3) : f3.value === Ua.AREA_3 && (c3 = p3, p3 = g3, g3 = -c3), this.face === Da.RIGHT ? (c3 = y3, y3 = -p3, p3 = c3) : this.face === Da.BACK ? (y3 = -y3, p3 = -p3) : this.face === Da.LEFT && (c3 = y3, y3 = p3, p3 = -c3), _3.phi = Math.acos(-g3) - l2, _3.lam = Math.atan2(p3, y3), this.face === Da.RIGHT ? _3.lam = Ha(_3.lam, -l2) : this.face === Da.BACK ? _3.lam = Ha(_3.lam, -3.14159265359) : this.face === Da.LEFT && (_3.lam = Ha(_3.lam, +l2));
    }
    return 0 !== this.es && (u3 = _3.phi < 0 ? 1 : 0, d3 = Math.tan(_3.phi), m3 = this.b / Math.sqrt(d3 * d3 + this.one_minus_f_squared), _3.phi = Math.atan(Math.sqrt(this.a * this.a - m3 * m3) / (this.one_minus_f * m3)), u3 && (_3.phi = -_3.phi)), _3.lam += this.long0, t3.x = _3.lam, t3.y = _3.phi, t3;
  }
  function Wa(t3, s3, i3, e3) {
    var a3;
    return t3 < _2 ? (e3.value = Ua.AREA_0, a3 = 0) : (a3 = Math.atan2(s3, i3), Math.abs(a3) <= p2 ? e3.value = Ua.AREA_0 : a3 > p2 && a3 <= l2 + p2 ? (e3.value = Ua.AREA_1, a3 -= l2) : a3 > l2 + p2 || a3 <= -(l2 + p2) ? (e3.value = Ua.AREA_2, a3 = a3 >= 0 ? a3 - M2 : a3 + M2) : (e3.value = Ua.AREA_3, a3 += l2)), a3;
  }
  function Ha(t3, s3) {
    var i3 = t3 + s3;
    return i3 < -3.14159265359 ? i3 += g2 : i3 > 3.14159265359 && (i3 -= g2), i3;
  }
  var Xa = { init: ja, forward: Fa, inverse: Va, names: ["Quadrilateralized Spherical Cube", "Quadrilateralized_Spherical_Cube", "qsc"] }, Ya = [[1, 22199e-21, -715515e-10, 31103e-10], [0.9986, -482243e-9, -24897e-9, -13309e-10], [0.9954, -83103e-8, -448605e-10, -986701e-12], [0.99, -135364e-8, -59661e-9, 36777e-10], [0.9822, -167442e-8, -449547e-11, -572411e-11], [0.973, -214868e-8, -903571e-10, 18736e-12], [0.96, -305085e-8, -900761e-10, 164917e-11], [0.9427, -382792e-8, -653386e-10, -26154e-10], [0.9216, -467746e-8, -10457e-8, 481243e-11], [0.8962, -536223e-8, -323831e-10, -543432e-11], [0.8679, -609363e-8, -113898e-9, 332484e-11], [0.835, -698325e-8, -640253e-10, 934959e-12], [0.7986, -755338e-8, -500009e-10, 935324e-12], [0.7597, -798324e-8, -35971e-9, -227626e-11], [0.7186, -851367e-8, -701149e-10, -86303e-10], [0.6732, -986209e-8, -199569e-9, 191974e-10], [0.6213, -0.010418, 883923e-10, 624051e-11], [0.5722, -906601e-8, 182e-6, 624051e-11], [0.5322, -677797e-8, 275608e-9, 624051e-11]], Za = [[-520417e-23, 0.0124, 121431e-23, -845284e-16], [0.062, 0.0124, -126793e-14, 422642e-15], [0.124, 0.0124, 507171e-14, -160604e-14], [0.186, 0.0123999, -190189e-13, 600152e-14], [0.248, 0.0124002, 710039e-13, -224e-10], [0.31, 0.0123992, -264997e-12, 835986e-13], [0.372, 0.0124029, 988983e-12, -311994e-12], [0.434, 0.0123893, -369093e-11, -435621e-12], [0.4958, 0.0123198, -102252e-10, -345523e-12], [0.5571, 0.0121916, -154081e-10, -582288e-12], [0.6176, 0.0119938, -241424e-10, -525327e-12], [0.6769, 0.011713, -320223e-10, -516405e-12], [0.7346, 0.0113541, -397684e-10, -609052e-12], [0.7903, 0.0109107, -489042e-10, -104739e-11], [0.8435, 0.0103431, -64615e-9, -140374e-14], [0.8936, 969686e-8, -64636e-9, -8547e-9], [0.9394, 840947e-8, -192841e-9, -42106e-10], [0.9761, 616527e-8, -256e-6, -42106e-10], [1, 328947e-8, -319159e-9, -42106e-10]], Qa = 0.8487, Ka = 1.3523, Ja = y2 / 5, $a = 1 / Ja, tn = 18, sn = function(t3, s3) {
    return t3[0] + s3 * (t3[1] + s3 * (t3[2] + s3 * t3[3]));
  }, en = function(t3, s3) {
    return t3[1] + s3 * (2 * t3[2] + 3 * s3 * t3[3]);
  };
  function an(t3, s3, i3, e3) {
    for (var a3 = s3; e3; --e3) {
      var n3 = t3(a3);
      if (a3 -= n3, Math.abs(n3) < i3)
        break;
    }
    return a3;
  }
  function nn() {
    this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.long0 = this.long0 || 0, this.es = 0, this.title = this.title || "Robinson";
  }
  function rn(t3) {
    var s3 = yt2(t3.x - this.long0), i3 = Math.abs(t3.y), e3 = Math.floor(i3 * Ja);
    e3 < 0 ? e3 = 0 : e3 >= tn && (e3 = tn - 1), i3 = y2 * (i3 - $a * e3);
    var a3 = { x: sn(Ya[e3], i3) * s3, y: sn(Za[e3], i3) };
    return t3.y < 0 && (a3.y = -a3.y), a3.x = a3.x * this.a * Qa + this.x0, a3.y = a3.y * this.a * Ka + this.y0, a3;
  }
  function hn(t3) {
    var s3 = { x: (t3.x - this.x0) / (this.a * Qa), y: Math.abs(t3.y - this.y0) / (this.a * Ka) };
    if (s3.y >= 1)
      s3.x /= Ya[tn][0], s3.y = t3.y < 0 ? -l2 : l2;
    else {
      var i3 = Math.floor(s3.y * tn);
      for (i3 < 0 ? i3 = 0 : i3 >= tn && (i3 = tn - 1); ; )
        if (Za[i3][0] > s3.y)
          --i3;
        else {
          if (!(Za[i3 + 1][0] <= s3.y))
            break;
          ++i3;
        }
      var e3 = Za[i3], a3 = 5 * (s3.y - e3[0]) / (Za[i3 + 1][0] - e3[0]);
      a3 = an(function(t4) {
        return (sn(e3, t4) - s3.y) / en(e3, t4);
      }, a3, _2, 100), s3.x /= sn(Ya[i3], a3), s3.y = (5 * i3 + a3) * f2, t3.y < 0 && (s3.y = -s3.y);
    }
    return s3.x = yt2(s3.x + this.long0), s3;
  }
  var on = { init: nn, forward: rn, inverse: hn, names: ["Robinson", "robin"] };
  function cn() {
    this.name = "geocent";
  }
  function ln(t3) {
    return es2(t3, this.es, this.a);
  }
  function un(t3) {
    return as2(t3, this.es, this.a, this.b);
  }
  var dn = { init: cn, forward: ln, inverse: un, names: ["Geocentric", "geocentric", "geocent", "Geocent"] }, mn = { N_POLE: 0, S_POLE: 1, EQUIT: 2, OBLIQ: 3 }, _n = { h: { def: 1e5, num: true }, azi: { def: 0, num: true, degrees: true }, tilt: { def: 0, num: true, degrees: true }, long0: { def: 0, num: true }, lat0: { def: 0, num: true } };
  function fn() {
    if (Object.keys(_n).forEach(function(t4) {
      if (void 0 === this[t4])
        this[t4] = _n[t4].def;
      else {
        if (_n[t4].num && isNaN(this[t4]))
          throw new Error("Invalid parameter value, must be numeric " + t4 + " = " + this[t4]);
        _n[t4].num && (this[t4] = parseFloat(this[t4]));
      }
      _n[t4].degrees && (this[t4] = this[t4] * f2);
    }.bind(this)), Math.abs(Math.abs(this.lat0) - l2) < _2 ? this.mode = this.lat0 < 0 ? mn.S_POLE : mn.N_POLE : Math.abs(this.lat0) < _2 ? this.mode = mn.EQUIT : (this.mode = mn.OBLIQ, this.sinph0 = Math.sin(this.lat0), this.cosph0 = Math.cos(this.lat0)), this.pn1 = this.h / this.a, this.pn1 <= 0 || this.pn1 > 1e10)
      throw new Error("Invalid height");
    this.p = 1 + this.pn1, this.rp = 1 / this.p, this.h1 = 1 / this.pn1, this.pfact = (this.p + 1) * this.h1, this.es = 0;
    var t3 = this.tilt, s3 = this.azi;
    this.cg = Math.cos(s3), this.sg = Math.sin(s3), this.cw = Math.cos(t3), this.sw = Math.sin(t3);
  }
  function yn(t3) {
    t3.x -= this.long0;
    var s3, i3, e3, a3, n3 = Math.sin(t3.y), r3 = Math.cos(t3.y), h3 = Math.cos(t3.x);
    switch (this.mode) {
      case mn.OBLIQ:
        i3 = this.sinph0 * n3 + this.cosph0 * r3 * h3;
        break;
      case mn.EQUIT:
        i3 = r3 * h3;
        break;
      case mn.S_POLE:
        i3 = -n3;
        break;
      case mn.N_POLE:
        i3 = n3;
    }
    switch (s3 = (i3 = this.pn1 / (this.p - i3)) * r3 * Math.sin(t3.x), this.mode) {
      case mn.OBLIQ:
        i3 *= this.cosph0 * n3 - this.sinph0 * r3 * h3;
        break;
      case mn.EQUIT:
        i3 *= n3;
        break;
      case mn.N_POLE:
        i3 *= -r3 * h3;
        break;
      case mn.S_POLE:
        i3 *= r3 * h3;
    }
    return a3 = 1 / ((e3 = i3 * this.cg + s3 * this.sg) * this.sw * this.h1 + this.cw), s3 = (s3 * this.cg - i3 * this.sg) * this.cw * a3, i3 = e3 * a3, t3.x = s3 * this.a, t3.y = i3 * this.a, t3;
  }
  function pn(t3) {
    t3.x /= this.a, t3.y /= this.a;
    var s3, i3, e3, a3 = { x: t3.x, y: t3.y };
    e3 = 1 / (this.pn1 - t3.y * this.sw), s3 = this.pn1 * t3.x * e3, i3 = this.pn1 * t3.y * this.cw * e3, t3.x = s3 * this.cg + i3 * this.sg, t3.y = i3 * this.cg - s3 * this.sg;
    var n3 = fi2(t3.x, t3.y);
    if (Math.abs(n3) < _2)
      a3.x = 0, a3.y = t3.y;
    else {
      var r3, h3;
      switch (h3 = 1 - n3 * n3 * this.pfact, h3 = (this.p - Math.sqrt(h3)) / (this.pn1 / n3 + n3 / this.pn1), r3 = Math.sqrt(1 - h3 * h3), this.mode) {
        case mn.OBLIQ:
          a3.y = Math.asin(r3 * this.sinph0 + t3.y * h3 * this.cosph0 / n3), t3.y = (r3 - this.sinph0 * Math.sin(a3.y)) * n3, t3.x *= h3 * this.cosph0;
          break;
        case mn.EQUIT:
          a3.y = Math.asin(t3.y * h3 / n3), t3.y = r3 * n3, t3.x *= h3;
          break;
        case mn.N_POLE:
          a3.y = Math.asin(r3), t3.y = -t3.y;
          break;
        case mn.S_POLE:
          a3.y = -Math.asin(r3);
      }
      a3.x = Math.atan2(t3.x, t3.y);
    }
    return t3.x = a3.x + this.long0, t3.y = a3.y, t3;
  }
  var gn = { init: fn, forward: yn, inverse: pn, names: ["Tilted_Perspective", "tpers"] };
  function Mn() {
    if (this.flip_axis = "x" === this.sweep ? 1 : 0, this.h = Number(this.h), this.radius_g_1 = this.h / this.a, this.radius_g_1 <= 0 || this.radius_g_1 > 1e10)
      throw new Error();
    if (this.radius_g = 1 + this.radius_g_1, this.C = this.radius_g * this.radius_g - 1, 0 !== this.es) {
      var t3 = 1 - this.es, s3 = 1 / t3;
      this.radius_p = Math.sqrt(t3), this.radius_p2 = t3, this.radius_p_inv2 = s3, this.shape = "ellipse";
    } else
      this.radius_p = 1, this.radius_p2 = 1, this.radius_p_inv2 = 1, this.shape = "sphere";
    this.title || (this.title = "Geostationary Satellite View");
  }
  function xn(t3) {
    var s3, i3, e3, a3, n3 = t3.x, r3 = t3.y;
    if (n3 -= this.long0, "ellipse" === this.shape) {
      r3 = Math.atan(this.radius_p2 * Math.tan(r3));
      var h3 = this.radius_p / fi2(this.radius_p * Math.cos(r3), Math.sin(r3));
      if (i3 = h3 * Math.cos(n3) * Math.cos(r3), e3 = h3 * Math.sin(n3) * Math.cos(r3), a3 = h3 * Math.sin(r3), (this.radius_g - i3) * i3 - e3 * e3 - a3 * a3 * this.radius_p_inv2 < 0)
        return t3.x = Number.NaN, t3.y = Number.NaN, t3;
      s3 = this.radius_g - i3, this.flip_axis ? (t3.x = this.radius_g_1 * Math.atan(e3 / fi2(a3, s3)), t3.y = this.radius_g_1 * Math.atan(a3 / s3)) : (t3.x = this.radius_g_1 * Math.atan(e3 / s3), t3.y = this.radius_g_1 * Math.atan(a3 / fi2(e3, s3)));
    } else
      "sphere" === this.shape && (s3 = Math.cos(r3), i3 = Math.cos(n3) * s3, e3 = Math.sin(n3) * s3, a3 = Math.sin(r3), s3 = this.radius_g - i3, this.flip_axis ? (t3.x = this.radius_g_1 * Math.atan(e3 / fi2(a3, s3)), t3.y = this.radius_g_1 * Math.atan(a3 / s3)) : (t3.x = this.radius_g_1 * Math.atan(e3 / s3), t3.y = this.radius_g_1 * Math.atan(a3 / fi2(e3, s3))));
    return t3.x = t3.x * this.a, t3.y = t3.y * this.a, t3;
  }
  function wn(t3) {
    var s3, i3, e3, a3, n3 = -1, r3 = 0, h3 = 0;
    if (t3.x = t3.x / this.a, t3.y = t3.y / this.a, "ellipse" === this.shape) {
      this.flip_axis ? (h3 = Math.tan(t3.y / this.radius_g_1), r3 = Math.tan(t3.x / this.radius_g_1) * fi2(1, h3)) : (r3 = Math.tan(t3.x / this.radius_g_1), h3 = Math.tan(t3.y / this.radius_g_1) * fi2(1, r3));
      var o3 = h3 / this.radius_p;
      if (s3 = r3 * r3 + o3 * o3 + n3 * n3, (e3 = (i3 = 2 * this.radius_g * n3) * i3 - 4 * s3 * this.C) < 0)
        return t3.x = Number.NaN, t3.y = Number.NaN, t3;
      a3 = (-i3 - Math.sqrt(e3)) / (2 * s3), n3 = this.radius_g + a3 * n3, r3 *= a3, h3 *= a3, t3.x = Math.atan2(r3, n3), t3.y = Math.atan(h3 * Math.cos(t3.x) / n3), t3.y = Math.atan(this.radius_p_inv2 * Math.tan(t3.y));
    } else if ("sphere" === this.shape) {
      if (this.flip_axis ? (h3 = Math.tan(t3.y / this.radius_g_1), r3 = Math.tan(t3.x / this.radius_g_1) * Math.sqrt(1 + h3 * h3)) : (r3 = Math.tan(t3.x / this.radius_g_1), h3 = Math.tan(t3.y / this.radius_g_1) * Math.sqrt(1 + r3 * r3)), s3 = r3 * r3 + h3 * h3 + n3 * n3, (e3 = (i3 = 2 * this.radius_g * n3) * i3 - 4 * s3 * this.C) < 0)
        return t3.x = Number.NaN, t3.y = Number.NaN, t3;
      a3 = (-i3 - Math.sqrt(e3)) / (2 * s3), n3 = this.radius_g + a3 * n3, r3 *= a3, h3 *= a3, t3.x = Math.atan2(r3, n3), t3.y = Math.atan(h3 * Math.cos(t3.x) / n3);
    }
    return t3.x = t3.x + this.long0, t3;
  }
  var Sn = { init: Mn, forward: xn, inverse: wn, names: ["Geostationary Satellite View", "Geostationary_Satellite", "geos"] }, En = 1.340264, bn = -0.081106, Pn = 893e-6, vn = 3796e-6, An = Math.sqrt(3) / 2;
  function Gn() {
    this.es = 0, this.long0 = void 0 !== this.long0 ? this.long0 : 0;
  }
  function Cn(t3) {
    var s3 = yt2(t3.x - this.long0), i3 = t3.y, e3 = Math.asin(An * Math.sin(i3)), a3 = e3 * e3, n3 = a3 * a3 * a3;
    return t3.x = s3 * Math.cos(e3) / (An * (En + 3 * bn * a3 + n3 * (7 * Pn + 9 * vn * a3))), t3.y = e3 * (En + bn * a3 + n3 * (Pn + vn * a3)), t3.x = this.a * t3.x + this.x0, t3.y = this.a * t3.y + this.y0, t3;
  }
  function Nn(t3) {
    t3.x = (t3.x - this.x0) / this.a, t3.y = (t3.y - this.y0) / this.a;
    var s3, i3, e3, a3, n3 = 1e-9, r3 = 12, h3 = t3.y;
    for (a3 = 0; a3 < r3 && (h3 -= e3 = (h3 * (En + bn * (s3 = h3 * h3) + (i3 = s3 * s3 * s3) * (Pn + vn * s3)) - t3.y) / (En + 3 * bn * s3 + i3 * (7 * Pn + 9 * vn * s3)), !(Math.abs(e3) < n3)); ++a3)
      ;
    return i3 = (s3 = h3 * h3) * s3 * s3, t3.x = An * t3.x * (En + 3 * bn * s3 + i3 * (7 * Pn + 9 * vn * s3)) / Math.cos(h3), t3.y = Math.asin(Math.sin(h3) / An), t3.x = yt2(t3.x + this.long0), t3;
  }
  var In = { init: Gn, forward: Cn, inverse: Nn, names: ["eqearth", "Equal Earth", "Equal_Earth"] }, zn = 1e-10;
  function Tn() {
    var t3;
    if (this.phi1 = this.lat1, Math.abs(this.phi1) < zn)
      throw new Error();
    this.es ? (this.en = ri2(this.es), this.m1 = hi2(this.phi1, this.am1 = Math.sin(this.phi1), t3 = Math.cos(this.phi1), this.en), this.am1 = t3 / (Math.sqrt(1 - this.es * this.am1 * this.am1) * this.am1), this.inverse = Rn, this.forward = On) : (Math.abs(this.phi1) + zn >= l2 ? this.cphi1 = 0 : this.cphi1 = 1 / Math.tan(this.phi1), this.inverse = Ln, this.forward = qn);
  }
  function On(t3) {
    var s3, i3, e3, a3 = yt2(t3.x - (this.long0 || 0)), n3 = t3.y;
    return s3 = this.am1 + this.m1 - hi2(n3, i3 = Math.sin(n3), e3 = Math.cos(n3), this.en), i3 = e3 * a3 / (s3 * Math.sqrt(1 - this.es * i3 * i3)), t3.x = s3 * Math.sin(i3), t3.y = this.am1 - s3 * Math.cos(i3), t3.x = this.a * t3.x + (this.x0 || 0), t3.y = this.a * t3.y + (this.y0 || 0), t3;
  }
  function Rn(t3) {
    var s3, i3, e3, a3;
    if (t3.x = (t3.x - (this.x0 || 0)) / this.a, t3.y = (t3.y - (this.y0 || 0)) / this.a, i3 = fi2(t3.x, t3.y = this.am1 - t3.y), a3 = ci2(this.am1 + this.m1 - i3, this.es, this.en), (s3 = Math.abs(a3)) < l2)
      s3 = Math.sin(a3), e3 = i3 * Math.atan2(t3.x, t3.y) * Math.sqrt(1 - this.es * s3 * s3) / Math.cos(a3);
    else {
      if (!(Math.abs(s3 - l2) <= zn))
        throw new Error();
      e3 = 0;
    }
    return t3.x = yt2(e3 + (this.long0 || 0)), t3.y = _e2(a3), t3;
  }
  function qn(t3) {
    var s3, i3, e3 = yt2(t3.x - (this.long0 || 0)), a3 = t3.y;
    return i3 = this.cphi1 + this.phi1 - a3, Math.abs(i3) > zn ? (t3.x = i3 * Math.sin(s3 = e3 * Math.cos(a3) / i3), t3.y = this.cphi1 - i3 * Math.cos(s3)) : t3.x = t3.y = 0, t3.x = this.a * t3.x + (this.x0 || 0), t3.y = this.a * t3.y + (this.y0 || 0), t3;
  }
  function Ln(t3) {
    var s3, i3;
    t3.x = (t3.x - (this.x0 || 0)) / this.a, t3.y = (t3.y - (this.y0 || 0)) / this.a;
    var e3 = fi2(t3.x, t3.y = this.cphi1 - t3.y);
    if (i3 = this.cphi1 + this.phi1 - e3, Math.abs(i3) > l2)
      throw new Error();
    return s3 = Math.abs(Math.abs(i3) - l2) <= zn ? 0 : e3 * Math.atan2(t3.x, t3.y) / Math.cos(i3), t3.x = yt2(s3 + (this.long0 || 0)), t3.y = _e2(i3), t3;
  }
  var Bn = { init: Tn, names: ["bonne", "Bonne (Werner lat_1=90)"] };
  function kn(t3) {
    t3.Proj.projections.add(mi2), t3.Proj.projections.add(Pi2), t3.Proj.projections.add(Gi2), t3.Proj.projections.add(Bi2), t3.Proj.projections.add(Fi2), t3.Proj.projections.add(Xi2), t3.Proj.projections.add($i2), t3.Proj.projections.add(ee2), t3.Proj.projections.add(he2), t3.Proj.projections.add(Me2), t3.Proj.projections.add(ze2), t3.Proj.projections.add(Be2), t3.Proj.projections.add(je2), t3.Proj.projections.add(Xe2), t3.Proj.projections.add(Ke2), t3.Proj.projections.add(ia), t3.Proj.projections.add(ra), t3.Proj.projections.add(la), t3.Proj.projections.add(fa), t3.Proj.projections.add(Ma), t3.Proj.projections.add(Ea), t3.Proj.projections.add(Ga), t3.Proj.projections.add(Ra), t3.Proj.projections.add(ka), t3.Proj.projections.add(Xa), t3.Proj.projections.add(on), t3.Proj.projections.add(dn), t3.Proj.projections.add(gn), t3.Proj.projections.add(Sn), t3.Proj.projections.add(In), t3.Proj.projections.add(Bn);
  }
  return ws2.defaultDatum = "WGS84", ws2.Proj = ss2, ws2.WGS84 = new ws2.Proj("WGS84"), ws2.Point = Xs2, ws2.toPoint = ms2, ws2.defs = at2, ws2.nadgrid = Ut2, ws2.transform = ps2, ws2.mgrs = Ns2, ws2.version = "2.17.0", kn(ws2), ws2;
}();
var Me = ge.exports;
let xe = 1;
const we = new Array(2);
class Se extends Ct {
  constructor(t2, s2, i2) {
    super(), t2 || (t2 = "custom_" + xe++), this._name = t2, this._parameters = s2, Me.defs(this._name) || Me.defs(this._name, s2), i2 && i2.isBox3 && (this._geoBoundingBox = i2);
  }
  projectCoordinate(t2, s2, i2) {
    we[0] = t2.x, we[1] = t2.y;
    const e2 = this.geoBoundingBox;
    we[0] < e2.min.x && (we[0] = e2.min.x), we[0] > e2.max.x && (we[0] = e2.max.x), we[1] < e2.min.y && (we[1] = e2.min.y), we[1] > e2.max.y && (we[1] = e2.max.y);
    const a2 = Me("EPSG:4326", this.name, we);
    if (s2 || (s2 = new u()), i2) {
      const i3 = this.projectedBoundingBox;
      s2.x = It(t2.x, a2[0], e2.max.x, i3.max.x), s2.y = It(t2.y, a2[1], e2.max.y, i3.max.y);
    } else
      s2.x = a2[0], s2.y = a2[1];
    return s2.z = t2.z, s2;
  }
  unprojectCoordinate(t2, s2, i2) {
    const e2 = this.projectedBoundingBox;
    we[0] = t2.x, we[1] = t2.y, we[0] < e2.min.x && (we[0] = e2.min.x), we[0] > e2.max.x && (we[0] = e2.max.x), we[1] < e2.min.y && (we[1] = e2.min.y), we[1] > e2.max.y && (we[1] = e2.max.y);
    const a2 = Me(this.name, "EPSG:4326", we);
    if (s2 || (s2 = new u()), i2) {
      const i3 = this.geoBoundingBox;
      s2.x = Nt(t2.x, a2[0], i3.max.x, e2.max.x), s2.y = Nt(t2.y, a2[1], i3.max.y, e2.max.y);
    } else
      s2.x = a2[0], s2.y = a2[1];
    return s2.z = t2.z, s2;
  }
  get name() {
    return this._name;
  }
}
const Ee = {}, be = { "EPSG:5070": { parameters: "+proj=aea +lat_0=23 +lon_0=-96 +lat_1=29.5 +lat_2=45.5 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs", projectBoundingBoxMethod: Gt, geoBoundingBox: [[-172.54, 23.81, 0], [-47.74, 86.46, 0]] }, "EPSG:8857": { parameters: "+proj=eqearth +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs +type=crs", projectBoundingBoxMethod: Gt } };
for (let t2 = 1; t2 <= 60; t2++) {
  let s2 = 6 * (t2 - 1) - 180, i2 = 6 * t2 - 180;
  s2 -= 12, i2 += 12, s2 < -180 && (s2 = -180), i2 > 180 && (i2 = 180), be[`EPSG:${32600 + t2}`] = { projectBoundingBoxMethod: Gt, geoBoundingBox: [[s2, -80, 0], [i2, 84, 0]] }, be[`EPSG:${32700 + t2}`] = { projectBoundingBoxMethod: Gt, geoBoundingBox: [[s2, -80, 0], [i2, 84, 0]] };
}
for (let t2 = 0; t2 < 11; t2++) {
  let s2 = t2 + 13, i2 = 6 * s2 - 3, e2 = 1e6 * s2 + 5e5;
  be[`EPSG:${4491 + t2}`] = { parameters: `+proj=tmerc +lat_0=0 +lon_0=${i2} +k=1 +x_0=${e2} +y_0=0 +ellps=GRS80 +units=m +no_defs +type=crs`, projectBoundingBoxMethod: Gt, geoBoundingBox: [[i2 - 3, 3, 0], [i2 + 3, 54, 0]] }, be[`EPSG:${4502 + t2}`] = { parameters: `+proj=tmerc +lat_0=0 +lon_0=${i2} +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs +type=crs`, projectBoundingBoxMethod: Gt, geoBoundingBox: [[i2 - 3, 3, 0], [i2 + 3, 54, 0]] }, s2 = 25 + 2 * t2, i2 = 3 * s2, e2 = 1e6 * s2 + 5e5, be["EPSG:" + (4513 + 2 * t2)] = { parameters: `+proj=tmerc +lat_0=0 +lon_0=${i2} +k=1 +x_0=${e2} +y_0=0 +ellps=GRS80 +units=m +no_defs +type=crs`, projectBoundingBoxMethod: Gt, geoBoundingBox: [[i2 - 1.5, 3, 0], [i2 + 1.5, 54, 0]] }, be["EPSG:" + (4534 + 2 * t2)] = { parameters: `+proj=tmerc +lat_0=0 +lon_0=${i2} +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs +type=crs`, projectBoundingBoxMethod: Gt, geoBoundingBox: [[i2 - 1.5, 3, 0], [i2 + 1.5, 54, 0]] }, s2 = 25 + 2 * t2 + 1, t2 < 10 && (i2 = 3 * s2, e2 = 1e6 * s2 + 5e5, be["EPSG:" + (4513 + 2 * t2 + 1)] = { parameters: `+proj=tmerc +lat_0=0 +lon_0=${i2} +k=1 +x_0=${e2} +y_0=0 +ellps=GRS80 +units=m +no_defs +type=crs`, projectBoundingBoxMethod: Gt, geoBoundingBox: [[i2 - 1.5, 3, 0], [i2 + 1.5, 54, 0]] }, be["EPSG:" + (4534 + 2 * t2 + 1)] = { parameters: `+proj=tmerc +lat_0=0 +lon_0=${i2} +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs +type=crs`, projectBoundingBoxMethod: Gt, geoBoundingBox: [[i2 - 1.5, 3, 0], [i2 + 1.5, 54, 0]] });
}
const Pe = (t2) => {
  if (t2 = ((t3) => "EPSG:900913" === (t3 = t3.toUpperCase().trim()) ? Mt : "GLOBE" === t3 || "ECEF" === t3 ? xt : t3)(t2), !Ee[t2])
    switch (t2) {
      case Mt:
        Ee[t2] = new kt();
        break;
      case xt:
        Ee[t2] = new re();
        break;
      case wt:
        Ee[t2] = new _e();
        break;
      case gt:
        Ee[t2] = new ye();
        break;
      case St:
        Ee[t2] = new pe();
        break;
      default:
        let s2 = null;
        if (be[t2]) {
          const i2 = be[t2];
          let e2 = null;
          if (i2.geoBoundingBox) {
            const t3 = i2.geoBoundingBox;
            e2 = new p(new u(t3[0][0], t3[0][1], t3[0][2] || 0), new u(t3[1][0], t3[1][1], t3[1][2] || 0));
          }
          s2 = new Se(t2, i2.parameters, e2), i2.projectBoundingBoxMethod && (s2.projectBoundingBoxMethod = i2.projectBoundingBoxMethod);
        }
        if (!s2)
          throw new Error(`Unsupported projection: ${t2}`);
        Ee[t2] = s2;
    }
  return Ee[t2];
};
let ve = new c();
function Ae(t2, s2, i2 = new c()) {
  const e2 = t2.lengthSq();
  if (Math.abs(e2 - 1) > 1e-6)
    throw new Error("vector must be normalized.");
  if (i2.x = t2.x / (Math.abs(t2.x) + Math.abs(t2.y) + Math.abs(t2.z)), i2.y = t2.y / (Math.abs(t2.x) + Math.abs(t2.y) + Math.abs(t2.z)), t2.z < 0) {
    const t3 = i2.x, s3 = i2.y;
    i2.x = (1 - Math.abs(s3)) * (t3 >= 0 ? 1 : -1), i2.y = (1 - Math.abs(t3)) * (s3 >= 0 ? 1 : -1);
  }
  return i2.x = Math.round((0.5 * i2.x + 0.5) * s2), i2.y = Math.round((0.5 * i2.y + 0.5) * s2), i2;
}
class Ge {
  constructor() {
    this.vertexBuffer = void 0, this.index = void 0, this.first = void 0, this.second = void 0, this.ratio = void 0;
  }
  clone(t2) {
    return ht(t2) || (t2 = new Ge()), t2.uBuffer = this.uBuffer, t2.vBuffer = this.vBuffer, t2.heightBuffer = this.heightBuffer, t2.normalBuffer = this.normalBuffer, t2.index = this.index, t2.first = this.first, t2.second = this.second, t2.ratio = this.ratio, t2;
  }
  initializeIndexed(t2, s2, i2, e2, a2) {
    this.uBuffer = t2, this.vBuffer = s2, this.heightBuffer = i2, this.normalBuffer = e2, this.index = a2, this.first = void 0, this.second = void 0, this.ratio = void 0;
  }
  initializeFromClipResult(t2, s2, i2) {
    let e2 = s2 + 1;
    return -1 !== t2[s2] ? i2[t2[s2]].clone(this) : (this.vertexBuffer = void 0, this.index = void 0, this.first = i2[t2[e2]], ++e2, this.second = i2[t2[e2]], ++e2, this.ratio = t2[e2], ++e2), e2;
  }
  getH() {
    return ht(this.index) ? this.heightBuffer[this.index] : o.lerp(this.first.getH(), this.second.getH(), this.ratio);
  }
  getU() {
    return ht(this.index) ? this.uBuffer[this.index] : o.lerp(this.first.getU(), this.second.getU(), this.ratio);
  }
  getV() {
    return ht(this.index) ? this.vBuffer[this.index] : o.lerp(this.first.getV(), this.second.getV(), this.ratio);
  }
  isIndexed() {
    return ht(this.index);
  }
  getKey() {
    return this.isIndexed() ? this.index : JSON.stringify({ first: this.first.getKey(), second: this.second.getKey(), ratio: this.ratio });
  }
  getNormalX() {
    return ht(this.index) ? this.normalBuffer[2 * this.index] : (ve = Te(this, ve), ve.x);
  }
  getNormalY() {
    return ht(this.index) ? this.normalBuffer[2 * this.index + 1] : (ve = Te(this, ve), ve.y);
  }
}
let Ce = -1;
const Ne = [new u(), new u()], Ie = [new u(), new u()], ze = new u();
function Te(t2, s2) {
  ++Ce;
  let i2 = Ne[Ce], e2 = Ie[Ce];
  return i2.copy(Ke(t2.first.getNormalX(), t2.first.getNormalY())), e2.copy(Ke(t2.second.getNormalX(), t2.second.getNormalY())), ze.lerpVectors(i2, e2, t2.ratio), ze.normalize(), function(t3, s3) {
    Ae(t3, 255, s3);
  }(ze, s2), --Ce, s2;
}
const Oe = new c(), Re = [];
Re.push(new Ge()), Re.push(new Ge()), Re.push(new Ge()), Re.push(new Ge()), self.addEventListener("message", (t2) => {
  const s2 = t2.data, { type: i2 } = s2;
  "createTerrainMesh" === i2 ? self.createVerticesFromQuantizedTerrainMesh(s2) : "upsampleTerrainData" === i2 ? self.upsampleQuantizedTerrainMesh(s2) : console.log(s2);
}), self.calculateUvFromPositions = (t2) => {
  const s2 = [];
  for (let i2 = 0, e2 = t2.length - 2; i2 < e2; i2 += 3)
    s2.push(t2[i2], t2[i2 + 1]);
  return s2;
}, self.zigZagDecode = (t2) => t2 >> 1 ^ -(1 & t2), self.decodeIndices = (t2) => {
  let s2 = 0;
  for (let i2 = 0; i2 < t2.length; ++i2) {
    let e2 = t2[i2];
    t2[i2] = s2 - e2, 0 === e2 && ++s2;
  }
};
const qe = 32767, Le = 16383, Be = [], ke = [], De = [], Ue = [], je = [], Fe = [], Ve = [], We = new c(), He = new u(), Xe = new u(), Ye = new u();
new u(0, 0, 0);
const Ze = new c();
self.upsampleQuantizedTerrainMesh = (t2) => {
  const s2 = t2.isEastChild, i2 = t2.isNorthChild, e2 = t2.hasVertexNormals, a2 = s2 ? Le : 0, n2 = s2 ? qe : Le, r2 = i2 ? Le : 0, h2 = i2 ? qe : Le, c2 = De, l2 = Ue, u2 = je, d2 = Fe, m2 = Ve;
  c2.length = 0, l2.length = 0, u2.length = 0, d2.length = 0, m2.length = 0;
  const _2 = {}, f2 = t2.vertices;
  let y2 = t2.indices;
  y2 = y2.subarray(0, t2.indexCountWithoutSkirts);
  let p2 = 0;
  const g2 = t2.vertexCountWithoutSkirts, M2 = t2.minimumHeight, x2 = t2.maximumHeight, w2 = new Array(g2), S2 = new Array(g2), E2 = new Array(g2), b2 = e2 ? new Array(2 * g2) : void 0;
  let P2, v2, A2, G2, C2, N2 = 6;
  for (e2 && (N2 += 3), v2 = 0, A2 = 0; v2 < g2; ++v2, A2 += 2) {
    const t3 = self.decodeTextureCoordinates(f2, v2, N2, We);
    if (P2 = self.decodeHeight(f2, v2, N2), G2 = o.clamp(t3.x * qe | 0, 0, qe), C2 = o.clamp(t3.y * qe | 0, 0, qe), E2[v2] = o.clamp((P2 - M2) / (x2 - M2) * qe | 0, 0, qe), G2 < 20 && (G2 = 0), C2 < 20 && (C2 = 0), qe - G2 < 20 && (G2 = qe), qe - C2 < 20 && (C2 = qe), w2[v2] = G2, S2[v2] = C2, e2) {
      const t4 = self.getOctEncodedNormal(f2, v2, N2, 6, Ze);
      b2[A2] = t4.x, b2[A2 + 1] = t4.y;
    }
    (s2 && G2 >= Le || !s2 && G2 <= Le) && (i2 && C2 >= Le || !i2 && C2 <= Le) && (_2[v2] = p2, c2.push(G2), l2.push(C2), u2.push(E2[v2]), e2 && (d2.push(b2[A2]), d2.push(b2[A2 + 1])), ++p2);
  }
  const I2 = [];
  I2.push(new Ge()), I2.push(new Ge()), I2.push(new Ge());
  const z2 = [];
  let T2, O2;
  for (z2.push(new Ge()), z2.push(new Ge()), z2.push(new Ge()), v2 = 0; v2 < y2.length; v2 += 3) {
    const t3 = y2[v2], a3 = y2[v2 + 1], n3 = y2[v2 + 2], r3 = w2[t3], h3 = w2[a3], o2 = w2[n3];
    I2[0].initializeIndexed(w2, S2, E2, b2, t3), I2[1].initializeIndexed(w2, S2, E2, b2, a3), I2[2].initializeIndexed(w2, S2, E2, b2, n3);
    const f3 = ft.clipTriangleAtAxisAlignedThreshold(Le, s2, r3, h3, o2, Be);
    T2 = 0, T2 >= f3.length || (T2 = z2[0].initializeFromClipResult(f3, T2, I2), T2 >= f3.length || (T2 = z2[1].initializeFromClipResult(f3, T2, I2), T2 >= f3.length || (T2 = z2[2].initializeFromClipResult(f3, T2, I2), O2 = ft.clipTriangleAtAxisAlignedThreshold(Le, i2, z2[0].getV(), z2[1].getV(), z2[2].getV(), ke), $e(c2, l2, u2, d2, m2, _2, O2, z2, e2), T2 < f3.length && (z2[2].clone(z2[1]), z2[2].initializeFromClipResult(f3, T2, I2), O2 = ft.clipTriangleAtAxisAlignedThreshold(Le, i2, z2[0].getV(), z2[1].getV(), z2[2].getV(), ke), $e(c2, l2, u2, d2, m2, _2, O2, z2, e2)))));
  }
  const R2 = s2 ? -32767 : 0, q2 = i2 ? -32767 : 0, L2 = [], B2 = [], k2 = [], D2 = [];
  let U2 = Number.MAX_VALUE, j2 = -U2;
  const F2 = it.clone(t2.childRectangle);
  for (F2.east, F2.west, v2 = 0; v2 < c2.length; v2++)
    G2 = Math.round(c2[v2]), G2 <= a2 ? (L2.push(v2), G2 = 0) : G2 >= n2 ? (k2.push(v2), G2 = qe) : G2 = 2 * G2 + R2, c2[v2] = G2, C2 = Math.round(l2[v2]), C2 <= r2 ? (B2.push(v2), C2 = 0) : C2 >= h2 ? (D2.push(v2), C2 = qe) : C2 = 2 * C2 + q2, l2[v2] = C2, P2 = o.lerp(M2, x2, u2[v2] / qe), U2 = Math.min(U2, P2), j2 = Math.max(j2, P2), u2[v2] = P2;
  const V2 = j2 - U2, W2 = new Uint16Array(c2.length + l2.length + u2.length);
  for (v2 = 0; v2 < c2.length; ++v2)
    W2[v2] = c2[v2];
  let H2 = c2.length;
  for (v2 = 0; v2 < l2.length; ++v2)
    W2[H2 + v2] = l2[v2];
  for (H2 += l2.length, v2 = 0; v2 < u2.length; ++v2) {
    const t3 = qe * (u2[v2] - U2) / V2;
    W2[H2 + v2] = t3;
  }
  const X2 = pt.createTypedArray(c2.length, m2), Y2 = { vertices: W2.buffer, indices: X2.buffer, minimumHeight: U2, maximumHeight: j2, westIndices: L2, southIndices: B2, eastIndices: k2, northIndices: D2 }, Z2 = new Uint8Array(d2), Q2 = [W2.buffer, X2.buffer];
  e2 && (Y2.encodedNormals = Z2, Q2.push(Z2.buffer));
  const K2 = t2.type;
  self.postMessage({ type: "terrainDataUpsampled", tileKey: K2 + "-" + t2.tileKey, content: Y2 }, Q2);
}, self.decodeTextureCoordinates = (t2, s2, i2, e2) => (e2 || (e2 = new c()), s2 *= i2, e2.x = t2[s2 + 4], e2.y = t2[s2 + 5], e2), self.decodeHeight = (t2, s2, i2) => t2[(s2 *= i2) + 3], self.createVerticesFromQuantizedTerrainMesh = (t2) => {
  const s2 = Pe(t2.sourceProjectionName), i2 = Pe(t2.targetProjectionName), e2 = t2.octEncodedNormals, a2 = ht(e2), n2 = t2.tileKey, r2 = t2.tileCenter, h2 = t2.quantizedVertices, l2 = h2.length / 3, d2 = t2.westIndices.length + t2.eastIndices.length + t2.southIndices.length + t2.northIndices.length, m2 = it.clone(t2.rectangle), _2 = m2.west, f2 = m2.south, y2 = m2.east, p2 = m2.north, g2 = t2.minimumHeight, M2 = t2.maximumHeight, x2 = h2.subarray(0, l2), w2 = h2.subarray(l2, 2 * l2), S2 = h2.subarray(2 * l2, 3 * l2), E2 = new Array(l2), b2 = new Array(l2), P2 = new Array(l2), v2 = He;
  v2.x = Number.POSITIVE_INFINITY, v2.y = Number.POSITIVE_INFINITY, v2.z = Number.POSITIVE_INFINITY;
  const A2 = Xe;
  A2.x = Number.NEGATIVE_INFINITY, A2.y = Number.NEGATIVE_INFINITY, A2.z = Number.NEGATIVE_INFINITY;
  let G2 = Number.POSITIVE_INFINITY, C2 = Number.NEGATIVE_INFINITY, N2 = Number.POSITIVE_INFINITY, I2 = Number.NEGATIVE_INFINITY;
  for (let t3 = 0; t3 < l2; t3++) {
    const s3 = x2[t3], e3 = w2[t3], a3 = s3 / qe, n3 = e3 / qe, r3 = o.lerp(g2, M2, S2[t3] / qe);
    Ye.x = o.lerp(_2, y2, a3), Ye.y = o.lerp(f2, p2, n3), Ye.z = r3, G2 = Math.min(Ye.x, G2), C2 = Math.max(Ye.x, C2), N2 = Math.min(Ye.y, N2), I2 = Math.max(Ye.y, I2), Ye.x = o.radToDeg(Ye.x), Ye.y = o.radToDeg(Ye.y);
    let h3 = i2.projectCoordinate(Ye, new u());
    E2[t3] = new c(a3, n3), b2[t3] = r3, P2[t3] = h3;
  }
  const z2 = t2.westIndices.slice().sort((t3, s3) => E2[t3].y - E2[s3].y), T2 = t2.eastIndices.slice().sort((t3, s3) => E2[s3].y - E2[t3].y), O2 = t2.southIndices.slice().sort((t3, s3) => E2[s3].x - E2[t3].x), R2 = t2.northIndices.slice().sort((t3, s3) => E2[t3].x - E2[s3].x), q2 = 637e4 / (2 << t2.level) / 2, L2 = Math.max(0, 2 * (d2 - 4)), B2 = t2.indices.length + 3 * L2, k2 = pt.createTypedArray(l2 + L2, B2);
  k2.set(t2.indices, 0);
  const D2 = 1e-4, U2 = (C2 - G2) * D2, j2 = (I2 - N2) * D2, F2 = -U2, V2 = U2, W2 = j2, H2 = -j2;
  let X2 = 6;
  a2 && (X2 += 3);
  let Y2 = 0;
  const Z2 = new Float32Array(l2 * X2 + d2 * X2);
  for (let t3 = 0, s3 = l2; t3 < s3; t3++) {
    if (a2) {
      const s4 = 2 * t3;
      Oe.x = e2[s4], Oe.y = e2[s4 + 1];
    }
    Y2 = self.encode(Z2, Y2, r2, P2[t3], E2[t3], b2[t3], Oe, a2);
  }
  let Q2 = t2.indices.length, K2 = P2.length, J2 = self.addSkirt(Z2, K2, k2, r2, Y2, E2, b2, z2, q2, Q2, F2, 0, m2, s2, i2, e2, a2);
  Q2 = J2.offset, Y2 = J2.bufferIndex, K2 += z2.length, J2 = self.addSkirt(Z2, K2, k2, r2, Y2, E2, b2, O2, q2, Q2, 0, H2, m2, s2, i2, e2, a2), Q2 = J2.offset, Y2 = J2.bufferIndex, K2 += O2.length, J2 = self.addSkirt(Z2, K2, k2, r2, Y2, E2, b2, T2, q2, Q2, V2, 0, m2, s2, i2, e2, a2), Q2 = J2.offset, Y2 = J2.bufferIndex, K2 += T2.length, self.addSkirt(Z2, K2, k2, r2, Y2, E2, b2, R2, q2, Q2, 0, W2, m2, s2, i2, e2, a2);
  const $2 = { vertices: Z2, bufferIndex: Y2, indexCountWithoutSkirts: t2.indices.length, indices: k2, westIndicesSouthToNorth: z2, southIndicesEastToWest: O2, eastIndicesNorthToSouth: T2, northIndicesWestToEast: R2, minimumHeight: g2, maximumHeight: M2 }, tt2 = [Z2.buffer, k2.buffer], st2 = t2.type;
  self.postMessage({ type: "terrainMeshCreated", tileKey: st2 + "-" + n2, content: $2 }, tt2);
};
const Qe = new u();
function Ke(t2, s2, i2 = 255) {
  let e2 = t2 / i2 * 2 - 1, a2 = s2 / i2 * 2 - 1, n2 = 1 - Math.abs(e2) - Math.abs(a2);
  const r2 = Qe.set(e2, a2, n2);
  if (n2 < 0) {
    const t3 = e2, s3 = a2;
    r2.x = (1 - Math.abs(s3)) * (t3 >= 0 ? 1 : -1), r2.y = (1 - Math.abs(t3)) * (s3 >= 0 ? 1 : -1);
  }
  return r2;
}
self.encode = (t2, s2, i2, e2, a2, n2, r2, h2) => {
  const o2 = a2.x, c2 = a2.y;
  if (_t.subtract(e2, i2, ze), t2[s2++] = ze.x, t2[s2++] = ze.y, t2[s2++] = ze.z, t2[s2++] = n2, t2[s2++] = o2, t2[s2++] = c2, h2) {
    const i3 = Ke(r2.x, r2.y);
    t2[s2++] = i3.x, t2[s2++] = i3.y, t2[s2++] = i3.z;
  }
  return s2;
};
const Je = new u();
function $e(t2, s2, i2, e2, a2, n2, r2, h2, o2) {
  if (0 === r2.length)
    return;
  let c2 = 0, l2 = 0;
  for (; l2 < r2.length; )
    l2 = Re[c2++].initializeFromClipResult(r2, l2, h2);
  for (let a3 = 0; a3 < c2; ++a3) {
    const r3 = Re[a3];
    if (r3.isIndexed())
      r3.newIndex = n2[r3.index], r3.uBuffer = t2, r3.vBuffer = s2, r3.heightBuffer = i2, o2 && (r3.normalBuffer = e2);
    else {
      const a4 = r3.getKey();
      if (ht(n2[a4]))
        r3.newIndex = n2[a4];
      else {
        const h3 = t2.length;
        t2.push(r3.getU()), s2.push(r3.getV()), i2.push(r3.getH()), o2 && (e2.push(r3.getNormalX()), e2.push(r3.getNormalY())), r3.newIndex = h3, n2[a4] = h3;
      }
    }
  }
  3 === c2 ? (a2.push(Re[0].newIndex), a2.push(Re[1].newIndex), a2.push(Re[2].newIndex)) : 4 === c2 && (a2.push(Re[0].newIndex), a2.push(Re[1].newIndex), a2.push(Re[2].newIndex), a2.push(Re[0].newIndex), a2.push(Re[2].newIndex), a2.push(Re[3].newIndex));
}
self.getOctEncodedNormal = (t2, s2, i2, e2, a2) => {
  ht(a2) || (a2 = new c());
  const n2 = s2 * i2 + e2, r2 = t2[n2], h2 = t2[n2 + 1], o2 = t2[n2 + 2];
  return Ae(Je.set(r2, h2, o2).normalize(), 255, a2);
}, self.addSkirt = (t2, s2, i2, e2, a2, n2, r2, h2, c2, l2, u2, d2, m2, _2, f2, y2, p2) => {
  const g2 = m2.north, M2 = m2.south;
  let x2 = m2.east;
  const w2 = m2.west;
  x2 < w2 && (x2 += st.TWO_PI);
  const S2 = h2.length;
  let E2 = h2[0];
  for (let m3 = 0; m3 < S2; m3++) {
    const _3 = h2[m3], S3 = r2[_3], b2 = n2[_3];
    if (p2) {
      const t3 = 2 * _3;
      Oe.x = y2[t3], Oe.y = y2[t3 + 1];
    }
    Ye.x = o.radToDeg(o.lerp(w2, x2, b2.x) + u2), Ye.y = o.radToDeg(o.lerp(M2, g2, b2.y) + d2), Ye.z = S3 - 2 * c2;
    const P2 = f2.projectCoordinate(Ye, ze);
    if (a2 = self.encode(t2, a2, e2, P2, b2, Ye.z, Oe, p2), 0 === m3)
      continue;
    const v2 = E2, A2 = s2 + m3 - 1, G2 = _3, C2 = s2 + m3;
    i2[l2++] = v2, i2[l2++] = G2, i2[l2++] = A2, i2[l2++] = A2, i2[l2++] = G2, i2[l2++] = C2, E2 = _3;
  }
  return { offset: l2, bufferIndex: a2 };
};
