var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
function clamp$1(t, e, s) {
  return Math.max(e, Math.min(s, t));
}
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const REVISION = "179", WebGLCoordinateSystem = 2e3, WebGPUCoordinateSystem = 2001, _lut = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let _seed = 1234567;
const DEG2RAD = Math.PI / 180, RAD2DEG = 180 / Math.PI;
function generateUUID() {
  const t = 4294967295 * Math.random() | 0, e = 4294967295 * Math.random() | 0, s = 4294967295 * Math.random() | 0, i = 4294967295 * Math.random() | 0;
  return (_lut[255 & t] + _lut[t >> 8 & 255] + _lut[t >> 16 & 255] + _lut[t >> 24 & 255] + "-" + _lut[255 & e] + _lut[e >> 8 & 255] + "-" + _lut[e >> 16 & 15 | 64] + _lut[e >> 24 & 255] + "-" + _lut[63 & s | 128] + _lut[s >> 8 & 255] + "-" + _lut[s >> 16 & 255] + _lut[s >> 24 & 255] + _lut[255 & i] + _lut[i >> 8 & 255] + _lut[i >> 16 & 255] + _lut[i >> 24 & 255]).toLowerCase();
}
function clamp(t, e, s) {
  return Math.max(e, Math.min(s, t));
}
function euclideanModulo(t, e) {
  return (t % e + e) % e;
}
function mapLinear(t, e, s, i, r) {
  return i + (t - e) * (r - i) / (s - e);
}
function inverseLerp(t, e, s) {
  return t !== e ? (s - t) / (e - t) : 0;
}
function lerp(t, e, s) {
  return (1 - s) * t + s * e;
}
function damp(t, e, s, i) {
  return lerp(t, e, 1 - Math.exp(-s * i));
}
function pingpong(t, e = 1) {
  return e - Math.abs(euclideanModulo(t, 2 * e) - e);
}
function smoothstep(t, e, s) {
  return t <= e ? 0 : t >= s ? 1 : (t = (t - e) / (s - e)) * t * (3 - 2 * t);
}
function smootherstep(t, e, s) {
  return t <= e ? 0 : t >= s ? 1 : (t = (t - e) / (s - e)) * t * t * (t * (6 * t - 15) + 10);
}
function randInt(t, e) {
  return t + Math.floor(Math.random() * (e - t + 1));
}
function randFloat(t, e) {
  return t + Math.random() * (e - t);
}
function randFloatSpread(t) {
  return t * (0.5 - Math.random());
}
function seededRandom(t) {
  void 0 !== t && (_seed = t);
  let e = _seed += 1831565813;
  return e = Math.imul(e ^ e >>> 15, 1 | e), e ^= e + Math.imul(e ^ e >>> 7, 61 | e), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function degToRad(t) {
  return t * DEG2RAD;
}
function radToDeg(t) {
  return t * RAD2DEG;
}
function isPowerOfTwo(t) {
  return !(t & t - 1) && 0 !== t;
}
function ceilPowerOfTwo(t) {
  return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2));
}
function floorPowerOfTwo(t) {
  return Math.pow(2, Math.floor(Math.log(t) / Math.LN2));
}
function setQuaternionFromProperEuler(t, e, s, i, r) {
  const a = Math.cos, n = Math.sin, o = a(s / 2), h = n(s / 2), c = a((e + i) / 2), l = n((e + i) / 2), u = a((e - i) / 2), d = n((e - i) / 2), _ = a((i - e) / 2), m = n((i - e) / 2);
  switch (r) {
    case "XYX":
      t.set(o * l, h * u, h * d, o * c);
      break;
    case "YZY":
      t.set(h * d, o * l, h * u, o * c);
      break;
    case "ZXZ":
      t.set(h * u, h * d, o * l, o * c);
      break;
    case "XZX":
      t.set(o * l, h * m, h * _, o * c);
      break;
    case "YXY":
      t.set(h * _, o * l, h * m, o * c);
      break;
    case "ZYZ":
      t.set(h * m, h * _, o * l, o * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
  }
}
function denormalize(t, e) {
  switch (e.constructor) {
    case Float32Array:
      return t;
    case Uint32Array:
      return t / 4294967295;
    case Uint16Array:
      return t / 65535;
    case Uint8Array:
      return t / 255;
    case Int32Array:
      return Math.max(t / 2147483647, -1);
    case Int16Array:
      return Math.max(t / 32767, -1);
    case Int8Array:
      return Math.max(t / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function normalize(t, e) {
  switch (e.constructor) {
    case Float32Array:
      return t;
    case Uint32Array:
      return Math.round(4294967295 * t);
    case Uint16Array:
      return Math.round(65535 * t);
    case Uint8Array:
      return Math.round(255 * t);
    case Int32Array:
      return Math.round(2147483647 * t);
    case Int16Array:
      return Math.round(32767 * t);
    case Int8Array:
      return Math.round(127 * t);
    default:
      throw new Error("Invalid component type.");
  }
}
const MathUtils = { DEG2RAD, RAD2DEG, generateUUID, clamp, euclideanModulo, mapLinear, inverseLerp, lerp, damp, pingpong, smoothstep, smootherstep, randInt, randFloat, randFloatSpread, seededRandom, degToRad, radToDeg, isPowerOfTwo, ceilPowerOfTwo, floorPowerOfTwo, setQuaternionFromProperEuler, normalize, denormalize };
class Vector2 {
  constructor(t = 0, e = 0) {
    Vector2.prototype.isVector2 = true, this.x = t, this.y = e;
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, e) {
    return this.x = t, this.y = e, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    const e = this.x, s = this.y, i = t.elements;
    return this.x = i[0] * e + i[3] * s + i[6], this.y = i[1] * e + i[4] * s + i[7], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
  }
  clamp(t, e) {
    return this.x = clamp(this.x, t.x, e.x), this.y = clamp(this.y, t.y, e.y), this;
  }
  clampScalar(t, e) {
    return this.x = clamp(this.x, t, e), this.y = clamp(this.y, t, e), this;
  }
  clampLength(t, e) {
    const s = this.length();
    return this.divideScalar(s || 1).multiplyScalar(clamp(s, t, e));
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
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
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
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (0 === e)
      return Math.PI / 2;
    const s = this.dot(t) / e;
    return Math.acos(clamp(s, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, s = this.y - t.y;
    return e * e + s * s;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
  }
  lerpVectors(t, e, s) {
    return this.x = t.x + (e.x - t.x) * s, this.y = t.y + (e.y - t.y) * s, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this;
  }
  rotateAround(t, e) {
    const s = Math.cos(e), i = Math.sin(e), r = this.x - t.x, a = this.y - t.y;
    return this.x = r * s - a * i + t.x, this.y = r * i + a * s + t.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Quaternion$1 {
  constructor(t = 0, e = 0, s = 0, i = 1) {
    this.isQuaternion = true, this._x = t, this._y = e, this._z = s, this._w = i;
  }
  static slerpFlat(t, e, s, i, r, a, n) {
    let o = s[i + 0], h = s[i + 1], c = s[i + 2], l = s[i + 3];
    const u = r[a + 0], d = r[a + 1], _ = r[a + 2], m = r[a + 3];
    if (0 === n)
      return t[e + 0] = o, t[e + 1] = h, t[e + 2] = c, void (t[e + 3] = l);
    if (1 === n)
      return t[e + 0] = u, t[e + 1] = d, t[e + 2] = _, void (t[e + 3] = m);
    if (l !== m || o !== u || h !== d || c !== _) {
      let t2 = 1 - n;
      const e2 = o * u + h * d + c * _ + l * m, s2 = e2 >= 0 ? 1 : -1, i2 = 1 - e2 * e2;
      if (i2 > Number.EPSILON) {
        const r3 = Math.sqrt(i2), a2 = Math.atan2(r3, e2 * s2);
        t2 = Math.sin(t2 * a2) / r3, n = Math.sin(n * a2) / r3;
      }
      const r2 = n * s2;
      if (o = o * t2 + u * r2, h = h * t2 + d * r2, c = c * t2 + _ * r2, l = l * t2 + m * r2, t2 === 1 - n) {
        const t3 = 1 / Math.sqrt(o * o + h * h + c * c + l * l);
        o *= t3, h *= t3, c *= t3, l *= t3;
      }
    }
    t[e] = o, t[e + 1] = h, t[e + 2] = c, t[e + 3] = l;
  }
  static multiplyQuaternionsFlat(t, e, s, i, r, a) {
    const n = s[i], o = s[i + 1], h = s[i + 2], c = s[i + 3], l = r[a], u = r[a + 1], d = r[a + 2], _ = r[a + 3];
    return t[e] = n * _ + c * l + o * d - h * u, t[e + 1] = o * _ + c * u + h * l - n * d, t[e + 2] = h * _ + c * d + n * u - o * l, t[e + 3] = c * _ - n * l - o * u - h * d, t;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(t) {
    this._w = t, this._onChangeCallback();
  }
  set(t, e, s, i) {
    return this._x = t, this._y = e, this._z = s, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
  }
  setFromEuler(t, e = true) {
    const s = t._x, i = t._y, r = t._z, a = t._order, n = Math.cos, o = Math.sin, h = n(s / 2), c = n(i / 2), l = n(r / 2), u = o(s / 2), d = o(i / 2), _ = o(r / 2);
    switch (a) {
      case "XYZ":
        this._x = u * c * l + h * d * _, this._y = h * d * l - u * c * _, this._z = h * c * _ + u * d * l, this._w = h * c * l - u * d * _;
        break;
      case "YXZ":
        this._x = u * c * l + h * d * _, this._y = h * d * l - u * c * _, this._z = h * c * _ - u * d * l, this._w = h * c * l + u * d * _;
        break;
      case "ZXY":
        this._x = u * c * l - h * d * _, this._y = h * d * l + u * c * _, this._z = h * c * _ + u * d * l, this._w = h * c * l - u * d * _;
        break;
      case "ZYX":
        this._x = u * c * l - h * d * _, this._y = h * d * l + u * c * _, this._z = h * c * _ - u * d * l, this._w = h * c * l + u * d * _;
        break;
      case "YZX":
        this._x = u * c * l + h * d * _, this._y = h * d * l + u * c * _, this._z = h * c * _ - u * d * l, this._w = h * c * l - u * d * _;
        break;
      case "XZY":
        this._x = u * c * l - h * d * _, this._y = h * d * l - u * c * _, this._z = h * c * _ + u * d * l, this._w = h * c * l + u * d * _;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return true === e && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t, e) {
    const s = e / 2, i = Math.sin(s);
    return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(s), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t) {
    const e = t.elements, s = e[0], i = e[4], r = e[8], a = e[1], n = e[5], o = e[9], h = e[2], c = e[6], l = e[10], u = s + n + l;
    if (u > 0) {
      const t2 = 0.5 / Math.sqrt(u + 1);
      this._w = 0.25 / t2, this._x = (c - o) * t2, this._y = (r - h) * t2, this._z = (a - i) * t2;
    } else if (s > n && s > l) {
      const t2 = 2 * Math.sqrt(1 + s - n - l);
      this._w = (c - o) / t2, this._x = 0.25 * t2, this._y = (i + a) / t2, this._z = (r + h) / t2;
    } else if (n > l) {
      const t2 = 2 * Math.sqrt(1 + n - s - l);
      this._w = (r - h) / t2, this._x = (i + a) / t2, this._y = 0.25 * t2, this._z = (o + c) / t2;
    } else {
      const t2 = 2 * Math.sqrt(1 + l - s - n);
      this._w = (a - i) / t2, this._x = (r + h) / t2, this._y = (o + c) / t2, this._z = 0.25 * t2;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t, e) {
    let s = t.dot(e) + 1;
    return s < 1e-8 ? (s = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = s) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = s)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = s), this.normalize();
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(clamp(this.dot(t), -1, 1)));
  }
  rotateTowards(t, e) {
    const s = this.angleTo(t);
    if (0 === s)
      return this;
    const i = Math.min(1, e / s);
    return this.slerp(t, i), this;
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
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let t = this.length();
    return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
  }
  multiply(t) {
    return this.multiplyQuaternions(this, t);
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  multiplyQuaternions(t, e) {
    const s = t._x, i = t._y, r = t._z, a = t._w, n = e._x, o = e._y, h = e._z, c = e._w;
    return this._x = s * c + a * n + i * h - r * o, this._y = i * c + a * o + r * n - s * h, this._z = r * c + a * h + s * o - i * n, this._w = a * c - s * n - i * o - r * h, this._onChangeCallback(), this;
  }
  slerp(t, e) {
    if (0 === e)
      return this;
    if (1 === e)
      return this.copy(t);
    const s = this._x, i = this._y, r = this._z, a = this._w;
    let n = a * t._w + s * t._x + i * t._y + r * t._z;
    if (n < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, n = -n) : this.copy(t), n >= 1)
      return this._w = a, this._x = s, this._y = i, this._z = r, this;
    const o = 1 - n * n;
    if (o <= Number.EPSILON) {
      const t2 = 1 - e;
      return this._w = t2 * a + e * this._w, this._x = t2 * s + e * this._x, this._y = t2 * i + e * this._y, this._z = t2 * r + e * this._z, this.normalize(), this;
    }
    const h = Math.sqrt(o), c = Math.atan2(h, n), l = Math.sin((1 - e) * c) / h, u = Math.sin(e * c) / h;
    return this._w = a * l + this._w * u, this._x = s * l + this._x * u, this._y = i * l + this._y * u, this._z = r * l + this._z * u, this._onChangeCallback(), this;
  }
  slerpQuaternions(t, e, s) {
    return this.copy(t).slerp(e, s);
  }
  random() {
    const t = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), s = Math.random(), i = Math.sqrt(1 - s), r = Math.sqrt(s);
    return this.set(i * Math.sin(t), i * Math.cos(t), r * Math.sin(e), r * Math.cos(e));
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
  }
  fromArray(t, e = 0) {
    return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
  }
  fromBufferAttribute(t, e) {
    return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class Vector3$1 {
  constructor(t = 0, e = 0, s = 0) {
    Vector3$1.prototype.isVector3 = true, this.x = t, this.y = e, this.z = s;
  }
  set(t, e, s) {
    return void 0 === s && (s = this.z), this.x = t, this.y = e, this.z = s, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this;
  }
  multiplyVectors(t, e) {
    return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
  }
  applyEuler(t) {
    return this.applyQuaternion(_quaternion$4.setFromEuler(t));
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(_quaternion$4.setFromAxisAngle(t, e));
  }
  applyMatrix3(t) {
    const e = this.x, s = this.y, i = this.z, r = t.elements;
    return this.x = r[0] * e + r[3] * s + r[6] * i, this.y = r[1] * e + r[4] * s + r[7] * i, this.z = r[2] * e + r[5] * s + r[8] * i, this;
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const e = this.x, s = this.y, i = this.z, r = t.elements, a = 1 / (r[3] * e + r[7] * s + r[11] * i + r[15]);
    return this.x = (r[0] * e + r[4] * s + r[8] * i + r[12]) * a, this.y = (r[1] * e + r[5] * s + r[9] * i + r[13]) * a, this.z = (r[2] * e + r[6] * s + r[10] * i + r[14]) * a, this;
  }
  applyQuaternion(t) {
    const e = this.x, s = this.y, i = this.z, r = t.x, a = t.y, n = t.z, o = t.w, h = 2 * (a * i - n * s), c = 2 * (n * e - r * i), l = 2 * (r * s - a * e);
    return this.x = e + o * h + a * l - n * c, this.y = s + o * c + n * h - r * l, this.z = i + o * l + r * c - a * h, this;
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  transformDirection(t) {
    const e = this.x, s = this.y, i = this.z, r = t.elements;
    return this.x = r[0] * e + r[4] * s + r[8] * i, this.y = r[1] * e + r[5] * s + r[9] * i, this.z = r[2] * e + r[6] * s + r[10] * i, this.normalize();
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
  }
  clamp(t, e) {
    return this.x = clamp(this.x, t.x, e.x), this.y = clamp(this.y, t.y, e.y), this.z = clamp(this.z, t.z, e.z), this;
  }
  clampScalar(t, e) {
    return this.x = clamp(this.x, t, e), this.y = clamp(this.y, t, e), this.z = clamp(this.z, t, e), this;
  }
  clampLength(t, e) {
    const s = this.length();
    return this.divideScalar(s || 1).multiplyScalar(clamp(s, t, e));
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
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
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
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
  }
  lerpVectors(t, e, s) {
    return this.x = t.x + (e.x - t.x) * s, this.y = t.y + (e.y - t.y) * s, this.z = t.z + (e.z - t.z) * s, this;
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, e) {
    const s = t.x, i = t.y, r = t.z, a = e.x, n = e.y, o = e.z;
    return this.x = i * o - r * n, this.y = r * a - s * o, this.z = s * n - i * a, this;
  }
  projectOnVector(t) {
    const e = t.lengthSq();
    if (0 === e)
      return this.set(0, 0, 0);
    const s = t.dot(this) / e;
    return this.copy(t).multiplyScalar(s);
  }
  projectOnPlane(t) {
    return _vector$c.copy(this).projectOnVector(t), this.sub(_vector$c);
  }
  reflect(t) {
    return this.sub(_vector$c.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (0 === e)
      return Math.PI / 2;
    const s = this.dot(t) / e;
    return Math.acos(clamp(s, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, s = this.y - t.y, i = this.z - t.z;
    return e * e + s * s + i * i;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, e, s) {
    const i = Math.sin(e) * t;
    return this.x = i * Math.sin(s), this.y = Math.cos(e) * t, this.z = i * Math.cos(s), this;
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, e, s) {
    return this.x = t * Math.sin(e), this.y = s, this.z = t * Math.cos(e), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this;
  }
  setFromMatrixScale(t) {
    const e = this.setFromMatrixColumn(t, 0).length(), s = this.setFromMatrixColumn(t, 1).length(), i = this.setFromMatrixColumn(t, 2).length();
    return this.x = e, this.y = s, this.z = i, this;
  }
  setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, 4 * e);
  }
  setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, 3 * e);
  }
  setFromEuler(t) {
    return this.x = t._x, this.y = t._y, this.z = t._z, this;
  }
  setFromColor(t) {
    return this.x = t.r, this.y = t.g, this.z = t.b, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const t = Math.random() * Math.PI * 2, e = 2 * Math.random() - 1, s = Math.sqrt(1 - e * e);
    return this.x = s * Math.cos(t), this.y = e, this.z = s * Math.sin(t), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const _vector$c = new Vector3$1(), _quaternion$4 = new Quaternion$1();
class Matrix3 {
  constructor(t, e, s, i, r, a, n, o, h) {
    Matrix3.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], void 0 !== t && this.set(t, e, s, i, r, a, n, o, h);
  }
  set(t, e, s, i, r, a, n, o, h) {
    const c = this.elements;
    return c[0] = t, c[1] = i, c[2] = n, c[3] = e, c[4] = r, c[5] = o, c[6] = s, c[7] = a, c[8] = h, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(t) {
    const e = this.elements, s = t.elements;
    return e[0] = s[0], e[1] = s[1], e[2] = s[2], e[3] = s[3], e[4] = s[4], e[5] = s[5], e[6] = s[6], e[7] = s[7], e[8] = s[8], this;
  }
  extractBasis(t, e, s) {
    return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), s.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(t) {
    const e = t.elements;
    return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const s = t.elements, i = e.elements, r = this.elements, a = s[0], n = s[3], o = s[6], h = s[1], c = s[4], l = s[7], u = s[2], d = s[5], _ = s[8], m = i[0], p = i[3], f = i[6], y = i[1], g = i[4], M = i[7], x = i[2], w = i[5], S = i[8];
    return r[0] = a * m + n * y + o * x, r[3] = a * p + n * g + o * w, r[6] = a * f + n * M + o * S, r[1] = h * m + c * y + l * x, r[4] = h * p + c * g + l * w, r[7] = h * f + c * M + l * S, r[2] = u * m + d * y + _ * x, r[5] = u * p + d * g + _ * w, r[8] = u * f + d * M + _ * S, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], s = t[1], i = t[2], r = t[3], a = t[4], n = t[5], o = t[6], h = t[7], c = t[8];
    return e * a * c - e * n * h - s * r * c + s * n * o + i * r * h - i * a * o;
  }
  invert() {
    const t = this.elements, e = t[0], s = t[1], i = t[2], r = t[3], a = t[4], n = t[5], o = t[6], h = t[7], c = t[8], l = c * a - n * h, u = n * o - c * r, d = h * r - a * o, _ = e * l + s * u + i * d;
    if (0 === _)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const m = 1 / _;
    return t[0] = l * m, t[1] = (i * h - c * s) * m, t[2] = (n * s - i * a) * m, t[3] = u * m, t[4] = (c * e - i * o) * m, t[5] = (i * r - n * e) * m, t[6] = d * m, t[7] = (s * o - h * e) * m, t[8] = (a * e - s * r) * m, this;
  }
  transpose() {
    let t;
    const e = this.elements;
    return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    const e = this.elements;
    return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
  }
  setUvTransform(t, e, s, i, r, a, n) {
    const o = Math.cos(r), h = Math.sin(r);
    return this.set(s * o, s * h, -s * (o * a + h * n) + a + t, -i * h, i * o, -i * (-h * a + o * n) + n + e, 0, 0, 1), this;
  }
  scale(t, e) {
    return this.premultiply(_m3.makeScale(t, e)), this;
  }
  rotate(t) {
    return this.premultiply(_m3.makeRotation(-t)), this;
  }
  translate(t, e) {
    return this.premultiply(_m3.makeTranslation(t, e)), this;
  }
  makeTranslation(t, e) {
    return t.isVector2 ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1) : this.set(1, 0, t, 0, 1, e, 0, 0, 1), this;
  }
  makeRotation(t) {
    const e = Math.cos(t), s = Math.sin(t);
    return this.set(e, -s, 0, s, e, 0, 0, 0, 1), this;
  }
  makeScale(t, e) {
    return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this;
  }
  equals(t) {
    const e = this.elements, s = t.elements;
    for (let t2 = 0; t2 < 9; t2++)
      if (e[t2] !== s[t2])
        return false;
    return true;
  }
  fromArray(t, e = 0) {
    for (let s = 0; s < 9; s++)
      this.elements[s] = t[s + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const s = this.elements;
    return t[e] = s[0], t[e + 1] = s[1], t[e + 2] = s[2], t[e + 3] = s[3], t[e + 4] = s[4], t[e + 5] = s[5], t[e + 6] = s[6], t[e + 7] = s[7], t[e + 8] = s[8], t;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const _m3 = new Matrix3();
class Vector4 {
  constructor(t = 0, e = 0, s = 0, i = 1) {
    Vector4.prototype.isVector4 = true, this.x = t, this.y = e, this.z = s, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  set(t, e, s, i) {
    return this.x = t, this.y = e, this.z = s, this.w = i, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this.w = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setW(t) {
    return this.w = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      case 3:
        this.w = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this.w += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
  }
  applyMatrix4(t) {
    const e = this.x, s = this.y, i = this.z, r = this.w, a = t.elements;
    return this.x = a[0] * e + a[4] * s + a[8] * i + a[12] * r, this.y = a[1] * e + a[5] * s + a[9] * i + a[13] * r, this.z = a[2] * e + a[6] * s + a[10] * i + a[14] * r, this.w = a[3] * e + a[7] * s + a[11] * i + a[15] * r, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this.w /= t.w, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    const e = Math.sqrt(1 - t.w * t.w);
    return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
  }
  setAxisAngleFromRotationMatrix(t) {
    let e, s, i, r;
    const a = 0.01, n = 0.1, o = t.elements, h = o[0], c = o[4], l = o[8], u = o[1], d = o[5], _ = o[9], m = o[2], p = o[6], f = o[10];
    if (Math.abs(c - u) < a && Math.abs(l - m) < a && Math.abs(_ - p) < a) {
      if (Math.abs(c + u) < n && Math.abs(l + m) < n && Math.abs(_ + p) < n && Math.abs(h + d + f - 3) < n)
        return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const t2 = (h + 1) / 2, o2 = (d + 1) / 2, y2 = (f + 1) / 2, g = (c + u) / 4, M = (l + m) / 4, x = (_ + p) / 4;
      return t2 > o2 && t2 > y2 ? t2 < a ? (s = 0, i = 0.707106781, r = 0.707106781) : (s = Math.sqrt(t2), i = g / s, r = M / s) : o2 > y2 ? o2 < a ? (s = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(o2), s = g / i, r = x / i) : y2 < a ? (s = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(y2), s = M / r, i = x / r), this.set(s, i, r, e), this;
    }
    let y = Math.sqrt((p - _) * (p - _) + (l - m) * (l - m) + (u - c) * (u - c));
    return Math.abs(y) < 1e-3 && (y = 1), this.x = (p - _) / y, this.y = (l - m) / y, this.z = (u - c) / y, this.w = Math.acos((h + d + f - 1) / 2), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this.w = e[15], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
  }
  clamp(t, e) {
    return this.x = clamp(this.x, t.x, e.x), this.y = clamp(this.y, t.y, e.y), this.z = clamp(this.z, t.z, e.z), this.w = clamp(this.w, t.w, e.w), this;
  }
  clampScalar(t, e) {
    return this.x = clamp(this.x, t, e), this.y = clamp(this.y, t, e), this.z = clamp(this.z, t, e), this.w = clamp(this.w, t, e), this;
  }
  clampLength(t, e) {
    const s = this.length();
    return this.divideScalar(s || 1).multiplyScalar(clamp(s, t, e));
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
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
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
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
  }
  lerpVectors(t, e, s) {
    return this.x = t.x + (e.x - t.x) * s, this.y = t.y + (e.y - t.y) * s, this.z = t.z + (e.z - t.z) * s, this.w = t.w + (e.w - t.w) * s, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Box3 {
  constructor(t = new Vector3$1(1 / 0, 1 / 0, 1 / 0), e = new Vector3$1(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = t, this.max = e;
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromArray(t) {
    this.makeEmpty();
    for (let e = 0, s = t.length; e < s; e += 3)
      this.expandByPoint(_vector$b.fromArray(t, e));
    return this;
  }
  setFromBufferAttribute(t) {
    this.makeEmpty();
    for (let e = 0, s = t.count; e < s; e++)
      this.expandByPoint(_vector$b.fromBufferAttribute(t, e));
    return this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, s = t.length; e < s; e++)
      this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const s = _vector$b.copy(e).multiplyScalar(0.5);
    return this.min.copy(t).sub(s), this.max.copy(t).add(s), this;
  }
  setFromObject(t, e = false) {
    return this.makeEmpty(), this.expandByObject(t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  expandByObject(t, e = false) {
    t.updateWorldMatrix(false, false);
    const s = t.geometry;
    if (void 0 !== s) {
      const i2 = s.getAttribute("position");
      if (true === e && void 0 !== i2 && true !== t.isInstancedMesh)
        for (let e2 = 0, s2 = i2.count; e2 < s2; e2++)
          true === t.isMesh ? t.getVertexPosition(e2, _vector$b) : _vector$b.fromBufferAttribute(i2, e2), _vector$b.applyMatrix4(t.matrixWorld), this.expandByPoint(_vector$b);
      else
        void 0 !== t.boundingBox ? (null === t.boundingBox && t.computeBoundingBox(), _box$4.copy(t.boundingBox)) : (null === s.boundingBox && s.computeBoundingBox(), _box$4.copy(s.boundingBox)), _box$4.applyMatrix4(t.matrixWorld), this.union(_box$4);
    }
    const i = t.children;
    for (let t2 = 0, s2 = i.length; t2 < s2; t2++)
      this.expandByObject(i[t2], e);
    return this;
  }
  containsPoint(t) {
    return t.x >= this.min.x && t.x <= this.max.x && t.y >= this.min.y && t.y <= this.max.y && t.z >= this.min.z && t.z <= this.max.z;
  }
  containsBox(t) {
    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
  }
  getParameter(t, e) {
    return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(t) {
    return t.max.x >= this.min.x && t.min.x <= this.max.x && t.max.y >= this.min.y && t.min.y <= this.max.y && t.max.z >= this.min.z && t.min.z <= this.max.z;
  }
  intersectsSphere(t) {
    return this.clampPoint(t.center, _vector$b), _vector$b.distanceToSquared(t.center) <= t.radius * t.radius;
  }
  intersectsPlane(t) {
    let e, s;
    return t.normal.x > 0 ? (e = t.normal.x * this.min.x, s = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, s = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, s += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, s += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, s += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, s += t.normal.z * this.min.z), e <= -t.constant && s >= -t.constant;
  }
  intersectsTriangle(t) {
    if (this.isEmpty())
      return false;
    this.getCenter(_center$1), _extents.subVectors(this.max, _center$1), _v0$2.subVectors(t.a, _center$1), _v1$7.subVectors(t.b, _center$1), _v2$4.subVectors(t.c, _center$1), _f0.subVectors(_v1$7, _v0$2), _f1.subVectors(_v2$4, _v1$7), _f2.subVectors(_v0$2, _v2$4);
    let e = [0, -_f0.z, _f0.y, 0, -_f1.z, _f1.y, 0, -_f2.z, _f2.y, _f0.z, 0, -_f0.x, _f1.z, 0, -_f1.x, _f2.z, 0, -_f2.x, -_f0.y, _f0.x, 0, -_f1.y, _f1.x, 0, -_f2.y, _f2.x, 0];
    return !!satForAxes(e, _v0$2, _v1$7, _v2$4, _extents) && (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!satForAxes(e, _v0$2, _v1$7, _v2$4, _extents) && (_triangleNormal.crossVectors(_f0, _f1), e = [_triangleNormal.x, _triangleNormal.y, _triangleNormal.z], satForAxes(e, _v0$2, _v1$7, _v2$4, _extents)));
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, _vector$b).distanceTo(t);
  }
  getBoundingSphere(t) {
    return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = 0.5 * this.getSize(_vector$b).length()), t;
  }
  intersect(t) {
    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  applyMatrix4(t) {
    return this.isEmpty() || (_points[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), _points[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), _points[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), _points[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), _points[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), _points[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), _points[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), _points[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(_points)), this;
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
  toJSON() {
    return { min: this.min.toArray(), max: this.max.toArray() };
  }
  fromJSON(t) {
    return this.min.fromArray(t.min), this.max.fromArray(t.max), this;
  }
}
const _points = [new Vector3$1(), new Vector3$1(), new Vector3$1(), new Vector3$1(), new Vector3$1(), new Vector3$1(), new Vector3$1(), new Vector3$1()], _vector$b = new Vector3$1(), _box$4 = new Box3(), _v0$2 = new Vector3$1(), _v1$7 = new Vector3$1(), _v2$4 = new Vector3$1(), _f0 = new Vector3$1(), _f1 = new Vector3$1(), _f2 = new Vector3$1(), _center$1 = new Vector3$1(), _extents = new Vector3$1(), _triangleNormal = new Vector3$1(), _testAxis = new Vector3$1();
function satForAxes(t, e, s, i, r) {
  for (let a = 0, n = t.length - 3; a <= n; a += 3) {
    _testAxis.fromArray(t, a);
    const n2 = r.x * Math.abs(_testAxis.x) + r.y * Math.abs(_testAxis.y) + r.z * Math.abs(_testAxis.z), o = e.dot(_testAxis), h = s.dot(_testAxis), c = i.dot(_testAxis);
    if (Math.max(-Math.max(o, h, c), Math.min(o, h, c)) > n2)
      return false;
  }
  return true;
}
const _vector$a = new Vector3$1(), _segCenter = new Vector3$1(), _segDir = new Vector3$1(), _diff = new Vector3$1(), _edge1 = new Vector3$1(), _edge2 = new Vector3$1(), _normal$1 = new Vector3$1();
class Ray {
  constructor(t = new Vector3$1(), e = new Vector3$1(0, 0, -1)) {
    this.origin = t, this.direction = e;
  }
  set(t, e) {
    return this.origin.copy(t), this.direction.copy(e), this;
  }
  copy(t) {
    return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
  }
  at(t, e) {
    return e.copy(this.origin).addScaledVector(this.direction, t);
  }
  lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(), this;
  }
  recast(t) {
    return this.origin.copy(this.at(t, _vector$a)), this;
  }
  closestPointToPoint(t, e) {
    e.subVectors(t, this.origin);
    const s = e.dot(this.direction);
    return s < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, s);
  }
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  distanceSqToPoint(t) {
    const e = _vector$a.subVectors(t, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(t) : (_vector$a.copy(this.origin).addScaledVector(this.direction, e), _vector$a.distanceToSquared(t));
  }
  distanceSqToSegment(t, e, s, i) {
    _segCenter.copy(t).add(e).multiplyScalar(0.5), _segDir.copy(e).sub(t).normalize(), _diff.copy(this.origin).sub(_segCenter);
    const r = 0.5 * t.distanceTo(e), a = -this.direction.dot(_segDir), n = _diff.dot(this.direction), o = -_diff.dot(_segDir), h = _diff.lengthSq(), c = Math.abs(1 - a * a);
    let l, u, d, _;
    if (c > 0)
      if (l = a * o - n, u = a * n - o, _ = r * c, l >= 0)
        if (u >= -_)
          if (u <= _) {
            const t2 = 1 / c;
            l *= t2, u *= t2, d = l * (l + a * u + 2 * n) + u * (a * l + u + 2 * o) + h;
          } else
            u = r, l = Math.max(0, -(a * u + n)), d = -l * l + u * (u + 2 * o) + h;
        else
          u = -r, l = Math.max(0, -(a * u + n)), d = -l * l + u * (u + 2 * o) + h;
      else
        u <= -_ ? (l = Math.max(0, -(-a * r + n)), u = l > 0 ? -r : Math.min(Math.max(-r, -o), r), d = -l * l + u * (u + 2 * o) + h) : u <= _ ? (l = 0, u = Math.min(Math.max(-r, -o), r), d = u * (u + 2 * o) + h) : (l = Math.max(0, -(a * r + n)), u = l > 0 ? r : Math.min(Math.max(-r, -o), r), d = -l * l + u * (u + 2 * o) + h);
    else
      u = a > 0 ? -r : r, l = Math.max(0, -(a * u + n)), d = -l * l + u * (u + 2 * o) + h;
    return s && s.copy(this.origin).addScaledVector(this.direction, l), i && i.copy(_segCenter).addScaledVector(_segDir, u), d;
  }
  intersectSphere(t, e) {
    _vector$a.subVectors(t.center, this.origin);
    const s = _vector$a.dot(this.direction), i = _vector$a.dot(_vector$a) - s * s, r = t.radius * t.radius;
    if (i > r)
      return null;
    const a = Math.sqrt(r - i), n = s - a, o = s + a;
    return o < 0 ? null : n < 0 ? this.at(o, e) : this.at(n, e);
  }
  intersectsSphere(t) {
    return !(t.radius < 0) && this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  distanceToPlane(t) {
    const e = t.normal.dot(this.direction);
    if (0 === e)
      return 0 === t.distanceToPoint(this.origin) ? 0 : null;
    const s = -(this.origin.dot(t.normal) + t.constant) / e;
    return s >= 0 ? s : null;
  }
  intersectPlane(t, e) {
    const s = this.distanceToPlane(t);
    return null === s ? null : this.at(s, e);
  }
  intersectsPlane(t) {
    const e = t.distanceToPoint(this.origin);
    if (0 === e)
      return true;
    return t.normal.dot(this.direction) * e < 0;
  }
  intersectBox(t, e) {
    let s, i, r, a, n, o;
    const h = 1 / this.direction.x, c = 1 / this.direction.y, l = 1 / this.direction.z, u = this.origin;
    return h >= 0 ? (s = (t.min.x - u.x) * h, i = (t.max.x - u.x) * h) : (s = (t.max.x - u.x) * h, i = (t.min.x - u.x) * h), c >= 0 ? (r = (t.min.y - u.y) * c, a = (t.max.y - u.y) * c) : (r = (t.max.y - u.y) * c, a = (t.min.y - u.y) * c), s > a || r > i ? null : ((r > s || isNaN(s)) && (s = r), (a < i || isNaN(i)) && (i = a), l >= 0 ? (n = (t.min.z - u.z) * l, o = (t.max.z - u.z) * l) : (n = (t.max.z - u.z) * l, o = (t.min.z - u.z) * l), s > o || n > i ? null : ((n > s || s != s) && (s = n), (o < i || i != i) && (i = o), i < 0 ? null : this.at(s >= 0 ? s : i, e)));
  }
  intersectsBox(t) {
    return null !== this.intersectBox(t, _vector$a);
  }
  intersectTriangle(t, e, s, i, r) {
    _edge1.subVectors(e, t), _edge2.subVectors(s, t), _normal$1.crossVectors(_edge1, _edge2);
    let a, n = this.direction.dot(_normal$1);
    if (n > 0) {
      if (i)
        return null;
      a = 1;
    } else {
      if (!(n < 0))
        return null;
      a = -1, n = -n;
    }
    _diff.subVectors(this.origin, t);
    const o = a * this.direction.dot(_edge2.crossVectors(_diff, _edge2));
    if (o < 0)
      return null;
    const h = a * this.direction.dot(_edge1.cross(_diff));
    if (h < 0)
      return null;
    if (o + h > n)
      return null;
    const c = -a * _diff.dot(_normal$1);
    return c < 0 ? null : this.at(c / n, r);
  }
  applyMatrix4(t) {
    return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
  }
  equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Matrix4 {
  constructor(t, e, s, i, r, a, n, o, h, c, l, u, d, _, m, p) {
    Matrix4.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], void 0 !== t && this.set(t, e, s, i, r, a, n, o, h, c, l, u, d, _, m, p);
  }
  set(t, e, s, i, r, a, n, o, h, c, l, u, d, _, m, p) {
    const f = this.elements;
    return f[0] = t, f[4] = e, f[8] = s, f[12] = i, f[1] = r, f[5] = a, f[9] = n, f[13] = o, f[2] = h, f[6] = c, f[10] = l, f[14] = u, f[3] = d, f[7] = _, f[11] = m, f[15] = p, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Matrix4().fromArray(this.elements);
  }
  copy(t) {
    const e = this.elements, s = t.elements;
    return e[0] = s[0], e[1] = s[1], e[2] = s[2], e[3] = s[3], e[4] = s[4], e[5] = s[5], e[6] = s[6], e[7] = s[7], e[8] = s[8], e[9] = s[9], e[10] = s[10], e[11] = s[11], e[12] = s[12], e[13] = s[13], e[14] = s[14], e[15] = s[15], this;
  }
  copyPosition(t) {
    const e = this.elements, s = t.elements;
    return e[12] = s[12], e[13] = s[13], e[14] = s[14], this;
  }
  setFromMatrix3(t) {
    const e = t.elements;
    return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(t, e, s) {
    return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), s.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(t, e, s) {
    return this.set(t.x, e.x, s.x, 0, t.y, e.y, s.y, 0, t.z, e.z, s.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(t) {
    const e = this.elements, s = t.elements, i = 1 / _v1$5.setFromMatrixColumn(t, 0).length(), r = 1 / _v1$5.setFromMatrixColumn(t, 1).length(), a = 1 / _v1$5.setFromMatrixColumn(t, 2).length();
    return e[0] = s[0] * i, e[1] = s[1] * i, e[2] = s[2] * i, e[3] = 0, e[4] = s[4] * r, e[5] = s[5] * r, e[6] = s[6] * r, e[7] = 0, e[8] = s[8] * a, e[9] = s[9] * a, e[10] = s[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    const e = this.elements, s = t.x, i = t.y, r = t.z, a = Math.cos(s), n = Math.sin(s), o = Math.cos(i), h = Math.sin(i), c = Math.cos(r), l = Math.sin(r);
    if ("XYZ" === t.order) {
      const t2 = a * c, s2 = a * l, i2 = n * c, r2 = n * l;
      e[0] = o * c, e[4] = -o * l, e[8] = h, e[1] = s2 + i2 * h, e[5] = t2 - r2 * h, e[9] = -n * o, e[2] = r2 - t2 * h, e[6] = i2 + s2 * h, e[10] = a * o;
    } else if ("YXZ" === t.order) {
      const t2 = o * c, s2 = o * l, i2 = h * c, r2 = h * l;
      e[0] = t2 + r2 * n, e[4] = i2 * n - s2, e[8] = a * h, e[1] = a * l, e[5] = a * c, e[9] = -n, e[2] = s2 * n - i2, e[6] = r2 + t2 * n, e[10] = a * o;
    } else if ("ZXY" === t.order) {
      const t2 = o * c, s2 = o * l, i2 = h * c, r2 = h * l;
      e[0] = t2 - r2 * n, e[4] = -a * l, e[8] = i2 + s2 * n, e[1] = s2 + i2 * n, e[5] = a * c, e[9] = r2 - t2 * n, e[2] = -a * h, e[6] = n, e[10] = a * o;
    } else if ("ZYX" === t.order) {
      const t2 = a * c, s2 = a * l, i2 = n * c, r2 = n * l;
      e[0] = o * c, e[4] = i2 * h - s2, e[8] = t2 * h + r2, e[1] = o * l, e[5] = r2 * h + t2, e[9] = s2 * h - i2, e[2] = -h, e[6] = n * o, e[10] = a * o;
    } else if ("YZX" === t.order) {
      const t2 = a * o, s2 = a * h, i2 = n * o, r2 = n * h;
      e[0] = o * c, e[4] = r2 - t2 * l, e[8] = i2 * l + s2, e[1] = l, e[5] = a * c, e[9] = -n * c, e[2] = -h * c, e[6] = s2 * l + i2, e[10] = t2 - r2 * l;
    } else if ("XZY" === t.order) {
      const t2 = a * o, s2 = a * h, i2 = n * o, r2 = n * h;
      e[0] = o * c, e[4] = -l, e[8] = h * c, e[1] = t2 * l + r2, e[5] = a * c, e[9] = s2 * l - i2, e[2] = i2 * l - s2, e[6] = n * c, e[10] = r2 * l + t2;
    }
    return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(_zero, t, _one);
  }
  lookAt(t, e, s) {
    const i = this.elements;
    return _z.subVectors(t, e), 0 === _z.lengthSq() && (_z.z = 1), _z.normalize(), _x.crossVectors(s, _z), 0 === _x.lengthSq() && (1 === Math.abs(s.z) ? _z.x += 1e-4 : _z.z += 1e-4, _z.normalize(), _x.crossVectors(s, _z)), _x.normalize(), _y.crossVectors(_z, _x), i[0] = _x.x, i[4] = _y.x, i[8] = _z.x, i[1] = _x.y, i[5] = _y.y, i[9] = _z.y, i[2] = _x.z, i[6] = _y.z, i[10] = _z.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const s = t.elements, i = e.elements, r = this.elements, a = s[0], n = s[4], o = s[8], h = s[12], c = s[1], l = s[5], u = s[9], d = s[13], _ = s[2], m = s[6], p = s[10], f = s[14], y = s[3], g = s[7], M = s[11], x = s[15], w = i[0], S = i[4], C = i[8], E = i[12], P = i[1], b = i[5], A2 = i[9], v = i[13], T = i[2], I = i[6], z = i[10], O = i[14], N = i[3], G = i[7], R = i[11], L = i[15];
    return r[0] = a * w + n * P + o * T + h * N, r[4] = a * S + n * b + o * I + h * G, r[8] = a * C + n * A2 + o * z + h * R, r[12] = a * E + n * v + o * O + h * L, r[1] = c * w + l * P + u * T + d * N, r[5] = c * S + l * b + u * I + d * G, r[9] = c * C + l * A2 + u * z + d * R, r[13] = c * E + l * v + u * O + d * L, r[2] = _ * w + m * P + p * T + f * N, r[6] = _ * S + m * b + p * I + f * G, r[10] = _ * C + m * A2 + p * z + f * R, r[14] = _ * E + m * v + p * O + f * L, r[3] = y * w + g * P + M * T + x * N, r[7] = y * S + g * b + M * I + x * G, r[11] = y * C + g * A2 + M * z + x * R, r[15] = y * E + g * v + M * O + x * L, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], s = t[4], i = t[8], r = t[12], a = t[1], n = t[5], o = t[9], h = t[13], c = t[2], l = t[6], u = t[10], d = t[14];
    return t[3] * (+r * o * l - i * h * l - r * n * u + s * h * u + i * n * d - s * o * d) + t[7] * (+e * o * d - e * h * u + r * a * u - i * a * d + i * h * c - r * o * c) + t[11] * (+e * h * l - e * n * d - r * a * l + s * a * d + r * n * c - s * h * c) + t[15] * (-i * n * c - e * o * l + e * n * u + i * a * l - s * a * u + s * o * c);
  }
  transpose() {
    const t = this.elements;
    let e;
    return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
  }
  setPosition(t, e, s) {
    const i = this.elements;
    return t.isVector3 ? (i[12] = t.x, i[13] = t.y, i[14] = t.z) : (i[12] = t, i[13] = e, i[14] = s), this;
  }
  invert() {
    const t = this.elements, e = t[0], s = t[1], i = t[2], r = t[3], a = t[4], n = t[5], o = t[6], h = t[7], c = t[8], l = t[9], u = t[10], d = t[11], _ = t[12], m = t[13], p = t[14], f = t[15], y = l * p * h - m * u * h + m * o * d - n * p * d - l * o * f + n * u * f, g = _ * u * h - c * p * h - _ * o * d + a * p * d + c * o * f - a * u * f, M = c * m * h - _ * l * h + _ * n * d - a * m * d - c * n * f + a * l * f, x = _ * l * o - c * m * o - _ * n * u + a * m * u + c * n * p - a * l * p, w = e * y + s * g + i * M + r * x;
    if (0 === w)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const S = 1 / w;
    return t[0] = y * S, t[1] = (m * u * r - l * p * r - m * i * d + s * p * d + l * i * f - s * u * f) * S, t[2] = (n * p * r - m * o * r + m * i * h - s * p * h - n * i * f + s * o * f) * S, t[3] = (l * o * r - n * u * r - l * i * h + s * u * h + n * i * d - s * o * d) * S, t[4] = g * S, t[5] = (c * p * r - _ * u * r + _ * i * d - e * p * d - c * i * f + e * u * f) * S, t[6] = (_ * o * r - a * p * r - _ * i * h + e * p * h + a * i * f - e * o * f) * S, t[7] = (a * u * r - c * o * r + c * i * h - e * u * h - a * i * d + e * o * d) * S, t[8] = M * S, t[9] = (_ * l * r - c * m * r - _ * s * d + e * m * d + c * s * f - e * l * f) * S, t[10] = (a * m * r - _ * n * r + _ * s * h - e * m * h - a * s * f + e * n * f) * S, t[11] = (c * n * r - a * l * r - c * s * h + e * l * h + a * s * d - e * n * d) * S, t[12] = x * S, t[13] = (c * m * i - _ * l * i + _ * s * u - e * m * u - c * s * p + e * l * p) * S, t[14] = (_ * n * i - a * m * i - _ * s * o + e * m * o + a * s * p - e * n * p) * S, t[15] = (a * l * i - c * n * i + c * s * o - e * l * o - a * s * u + e * n * u) * S, this;
  }
  scale(t) {
    const e = this.elements, s = t.x, i = t.y, r = t.z;
    return e[0] *= s, e[4] *= i, e[8] *= r, e[1] *= s, e[5] *= i, e[9] *= r, e[2] *= s, e[6] *= i, e[10] *= r, e[3] *= s, e[7] *= i, e[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], s = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, s, i));
  }
  makeTranslation(t, e, s) {
    return t.isVector3 ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1) : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, s, 0, 0, 0, 1), this;
  }
  makeRotationX(t) {
    const e = Math.cos(t), s = Math.sin(t);
    return this.set(1, 0, 0, 0, 0, e, -s, 0, 0, s, e, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(t) {
    const e = Math.cos(t), s = Math.sin(t);
    return this.set(e, 0, s, 0, 0, 1, 0, 0, -s, 0, e, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(t) {
    const e = Math.cos(t), s = Math.sin(t);
    return this.set(e, -s, 0, 0, s, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(t, e) {
    const s = Math.cos(e), i = Math.sin(e), r = 1 - s, a = t.x, n = t.y, o = t.z, h = r * a, c = r * n;
    return this.set(h * a + s, h * n - i * o, h * o + i * n, 0, h * n + i * o, c * n + s, c * o - i * a, 0, h * o - i * n, c * o + i * a, r * o * o + s, 0, 0, 0, 0, 1), this;
  }
  makeScale(t, e, s) {
    return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, s, 0, 0, 0, 0, 1), this;
  }
  makeShear(t, e, s, i, r, a) {
    return this.set(1, s, r, 0, t, 1, a, 0, e, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(t, e, s) {
    const i = this.elements, r = e._x, a = e._y, n = e._z, o = e._w, h = r + r, c = a + a, l = n + n, u = r * h, d = r * c, _ = r * l, m = a * c, p = a * l, f = n * l, y = o * h, g = o * c, M = o * l, x = s.x, w = s.y, S = s.z;
    return i[0] = (1 - (m + f)) * x, i[1] = (d + M) * x, i[2] = (_ - g) * x, i[3] = 0, i[4] = (d - M) * w, i[5] = (1 - (u + f)) * w, i[6] = (p + y) * w, i[7] = 0, i[8] = (_ + g) * S, i[9] = (p - y) * S, i[10] = (1 - (u + m)) * S, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this;
  }
  decompose(t, e, s) {
    const i = this.elements;
    let r = _v1$5.set(i[0], i[1], i[2]).length();
    const a = _v1$5.set(i[4], i[5], i[6]).length(), n = _v1$5.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r), t.x = i[12], t.y = i[13], t.z = i[14], _m1$2.copy(this);
    const o = 1 / r, h = 1 / a, c = 1 / n;
    return _m1$2.elements[0] *= o, _m1$2.elements[1] *= o, _m1$2.elements[2] *= o, _m1$2.elements[4] *= h, _m1$2.elements[5] *= h, _m1$2.elements[6] *= h, _m1$2.elements[8] *= c, _m1$2.elements[9] *= c, _m1$2.elements[10] *= c, e.setFromRotationMatrix(_m1$2), s.x = r, s.y = a, s.z = n, this;
  }
  makePerspective(t, e, s, i, r, a, n = WebGLCoordinateSystem, o = false) {
    const h = this.elements, c = 2 * r / (e - t), l = 2 * r / (s - i), u = (e + t) / (e - t), d = (s + i) / (s - i);
    let _, m;
    if (o)
      _ = r / (a - r), m = a * r / (a - r);
    else if (n === WebGLCoordinateSystem)
      _ = -(a + r) / (a - r), m = -2 * a * r / (a - r);
    else {
      if (n !== WebGPUCoordinateSystem)
        throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + n);
      _ = -a / (a - r), m = -a * r / (a - r);
    }
    return h[0] = c, h[4] = 0, h[8] = u, h[12] = 0, h[1] = 0, h[5] = l, h[9] = d, h[13] = 0, h[2] = 0, h[6] = 0, h[10] = _, h[14] = m, h[3] = 0, h[7] = 0, h[11] = -1, h[15] = 0, this;
  }
  makeOrthographic(t, e, s, i, r, a, n = WebGLCoordinateSystem, o = false) {
    const h = this.elements, c = 2 / (e - t), l = 2 / (s - i), u = -(e + t) / (e - t), d = -(s + i) / (s - i);
    let _, m;
    if (o)
      _ = 1 / (a - r), m = a / (a - r);
    else if (n === WebGLCoordinateSystem)
      _ = -2 / (a - r), m = -(a + r) / (a - r);
    else {
      if (n !== WebGPUCoordinateSystem)
        throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + n);
      _ = -1 / (a - r), m = -r / (a - r);
    }
    return h[0] = c, h[4] = 0, h[8] = 0, h[12] = u, h[1] = 0, h[5] = l, h[9] = 0, h[13] = d, h[2] = 0, h[6] = 0, h[10] = _, h[14] = m, h[3] = 0, h[7] = 0, h[11] = 0, h[15] = 1, this;
  }
  equals(t) {
    const e = this.elements, s = t.elements;
    for (let t2 = 0; t2 < 16; t2++)
      if (e[t2] !== s[t2])
        return false;
    return true;
  }
  fromArray(t, e = 0) {
    for (let s = 0; s < 16; s++)
      this.elements[s] = t[s + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const s = this.elements;
    return t[e] = s[0], t[e + 1] = s[1], t[e + 2] = s[2], t[e + 3] = s[3], t[e + 4] = s[4], t[e + 5] = s[5], t[e + 6] = s[6], t[e + 7] = s[7], t[e + 8] = s[8], t[e + 9] = s[9], t[e + 10] = s[10], t[e + 11] = s[11], t[e + 12] = s[12], t[e + 13] = s[13], t[e + 14] = s[14], t[e + 15] = s[15], t;
  }
}
const _v1$5 = new Vector3$1(), _m1$2 = new Matrix4(), _zero = new Vector3$1(0, 0, 0), _one = new Vector3$1(1, 1, 1), _x = new Vector3$1(), _y = new Vector3$1(), _z = new Vector3$1(), _vector1 = new Vector3$1(), _vector2 = new Vector3$1(), _normalMatrix = new Matrix3();
class Plane {
  constructor(t = new Vector3$1(1, 0, 0), e = 0) {
    this.isPlane = true, this.normal = t, this.constant = e;
  }
  set(t, e) {
    return this.normal.copy(t), this.constant = e, this;
  }
  setComponents(t, e, s, i) {
    return this.normal.set(t, e, s), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(t, e) {
    return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
  }
  setFromCoplanarPoints(t, e, s) {
    const i = _vector1.subVectors(s, e).cross(_vector2.subVectors(t, e)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, t), this;
  }
  copy(t) {
    return this.normal.copy(t.normal), this.constant = t.constant, this;
  }
  normalize() {
    const t = 1 / this.normal.length();
    return this.normal.multiplyScalar(t), this.constant *= t, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(t) {
    return this.normal.dot(t) + this.constant;
  }
  distanceToSphere(t) {
    return this.distanceToPoint(t.center) - t.radius;
  }
  projectPoint(t, e) {
    return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
  }
  intersectLine(t, e) {
    const s = t.delta(_vector1), i = this.normal.dot(s);
    if (0 === i)
      return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
    const r = -(t.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : e.copy(t.start).addScaledVector(s, r);
  }
  intersectsLine(t) {
    const e = this.distanceToPoint(t.start), s = this.distanceToPoint(t.end);
    return e < 0 && s > 0 || s < 0 && e > 0;
  }
  intersectsBox(t) {
    return t.intersectsPlane(this);
  }
  intersectsSphere(t) {
    return t.intersectsPlane(this);
  }
  coplanarPoint(t) {
    return t.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(t, e) {
    const s = e || _normalMatrix.getNormalMatrix(t), i = this.coplanarPoint(_vector1).applyMatrix4(t), r = this.normal.applyMatrix3(s).normalize();
    return this.constant = -i.dot(r), this;
  }
  translate(t) {
    return this.constant -= t.dot(this.normal), this;
  }
  equals(t) {
    return t.normal.equals(this.normal) && t.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
"undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: REVISION } })), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = REVISION);
class Quaternion {
  constructor(t = 0, e = 0, s = 0, i = 1) {
    this.isQuaternion = true, this._x = t, this._y = e, this._z = s, this._w = i;
  }
  static slerpFlat(t, e, s, i, r, a, n) {
    let o = s[i + 0], h = s[i + 1], c = s[i + 2], l = s[i + 3];
    const u = r[a + 0], d = r[a + 1], _ = r[a + 2], m = r[a + 3];
    if (0 === n)
      return t[e + 0] = o, t[e + 1] = h, t[e + 2] = c, void (t[e + 3] = l);
    if (1 === n)
      return t[e + 0] = u, t[e + 1] = d, t[e + 2] = _, void (t[e + 3] = m);
    if (l !== m || o !== u || h !== d || c !== _) {
      let t2 = 1 - n;
      const e2 = o * u + h * d + c * _ + l * m, s2 = e2 >= 0 ? 1 : -1, i2 = 1 - e2 * e2;
      if (i2 > Number.EPSILON) {
        const r3 = Math.sqrt(i2), a2 = Math.atan2(r3, e2 * s2);
        t2 = Math.sin(t2 * a2) / r3, n = Math.sin(n * a2) / r3;
      }
      const r2 = n * s2;
      if (o = o * t2 + u * r2, h = h * t2 + d * r2, c = c * t2 + _ * r2, l = l * t2 + m * r2, t2 === 1 - n) {
        const t3 = 1 / Math.sqrt(o * o + h * h + c * c + l * l);
        o *= t3, h *= t3, c *= t3, l *= t3;
      }
    }
    t[e] = o, t[e + 1] = h, t[e + 2] = c, t[e + 3] = l;
  }
  static multiplyQuaternionsFlat(t, e, s, i, r, a) {
    const n = s[i], o = s[i + 1], h = s[i + 2], c = s[i + 3], l = r[a], u = r[a + 1], d = r[a + 2], _ = r[a + 3];
    return t[e] = n * _ + c * l + o * d - h * u, t[e + 1] = o * _ + c * u + h * l - n * d, t[e + 2] = h * _ + c * d + n * u - o * l, t[e + 3] = c * _ - n * l - o * u - h * d, t;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(t) {
    this._w = t, this._onChangeCallback();
  }
  set(t, e, s, i) {
    return this._x = t, this._y = e, this._z = s, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
  }
  setFromEuler(t, e = true) {
    const s = t._x, i = t._y, r = t._z, a = t._order, n = Math.cos, o = Math.sin, h = n(s / 2), c = n(i / 2), l = n(r / 2), u = o(s / 2), d = o(i / 2), _ = o(r / 2);
    switch (a) {
      case "XYZ":
        this._x = u * c * l + h * d * _, this._y = h * d * l - u * c * _, this._z = h * c * _ + u * d * l, this._w = h * c * l - u * d * _;
        break;
      case "YXZ":
        this._x = u * c * l + h * d * _, this._y = h * d * l - u * c * _, this._z = h * c * _ - u * d * l, this._w = h * c * l + u * d * _;
        break;
      case "ZXY":
        this._x = u * c * l - h * d * _, this._y = h * d * l + u * c * _, this._z = h * c * _ + u * d * l, this._w = h * c * l - u * d * _;
        break;
      case "ZYX":
        this._x = u * c * l - h * d * _, this._y = h * d * l + u * c * _, this._z = h * c * _ - u * d * l, this._w = h * c * l + u * d * _;
        break;
      case "YZX":
        this._x = u * c * l + h * d * _, this._y = h * d * l + u * c * _, this._z = h * c * _ - u * d * l, this._w = h * c * l - u * d * _;
        break;
      case "XZY":
        this._x = u * c * l - h * d * _, this._y = h * d * l - u * c * _, this._z = h * c * _ + u * d * l, this._w = h * c * l + u * d * _;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return true === e && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t, e) {
    const s = e / 2, i = Math.sin(s);
    return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(s), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t) {
    const e = t.elements, s = e[0], i = e[4], r = e[8], a = e[1], n = e[5], o = e[9], h = e[2], c = e[6], l = e[10], u = s + n + l;
    if (u > 0) {
      const t2 = 0.5 / Math.sqrt(u + 1);
      this._w = 0.25 / t2, this._x = (c - o) * t2, this._y = (r - h) * t2, this._z = (a - i) * t2;
    } else if (s > n && s > l) {
      const t2 = 2 * Math.sqrt(1 + s - n - l);
      this._w = (c - o) / t2, this._x = 0.25 * t2, this._y = (i + a) / t2, this._z = (r + h) / t2;
    } else if (n > l) {
      const t2 = 2 * Math.sqrt(1 + n - s - l);
      this._w = (r - h) / t2, this._x = (i + a) / t2, this._y = 0.25 * t2, this._z = (o + c) / t2;
    } else {
      const t2 = 2 * Math.sqrt(1 + l - s - n);
      this._w = (a - i) / t2, this._x = (r + h) / t2, this._y = (o + c) / t2, this._z = 0.25 * t2;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t, e) {
    let s = t.dot(e) + 1;
    return s < 1e-8 ? (s = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = s) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = s)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = s), this.normalize();
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(clamp$1(this.dot(t), -1, 1)));
  }
  rotateTowards(t, e) {
    const s = this.angleTo(t);
    if (0 === s)
      return this;
    const i = Math.min(1, e / s);
    return this.slerp(t, i), this;
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
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let t = this.length();
    return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
  }
  multiply(t) {
    return this.multiplyQuaternions(this, t);
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  multiplyQuaternions(t, e) {
    const s = t._x, i = t._y, r = t._z, a = t._w, n = e._x, o = e._y, h = e._z, c = e._w;
    return this._x = s * c + a * n + i * h - r * o, this._y = i * c + a * o + r * n - s * h, this._z = r * c + a * h + s * o - i * n, this._w = a * c - s * n - i * o - r * h, this._onChangeCallback(), this;
  }
  slerp(t, e) {
    if (0 === e)
      return this;
    if (1 === e)
      return this.copy(t);
    const s = this._x, i = this._y, r = this._z, a = this._w;
    let n = a * t._w + s * t._x + i * t._y + r * t._z;
    if (n < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, n = -n) : this.copy(t), n >= 1)
      return this._w = a, this._x = s, this._y = i, this._z = r, this;
    const o = 1 - n * n;
    if (o <= Number.EPSILON) {
      const t2 = 1 - e;
      return this._w = t2 * a + e * this._w, this._x = t2 * s + e * this._x, this._y = t2 * i + e * this._y, this._z = t2 * r + e * this._z, this.normalize(), this;
    }
    const h = Math.sqrt(o), c = Math.atan2(h, n), l = Math.sin((1 - e) * c) / h, u = Math.sin(e * c) / h;
    return this._w = a * l + this._w * u, this._x = s * l + this._x * u, this._y = i * l + this._y * u, this._z = r * l + this._z * u, this._onChangeCallback(), this;
  }
  slerpQuaternions(t, e, s) {
    return this.copy(t).slerp(e, s);
  }
  random() {
    const t = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), s = Math.random(), i = Math.sqrt(1 - s), r = Math.sqrt(s);
    return this.set(i * Math.sin(t), i * Math.cos(t), r * Math.sin(e), r * Math.cos(e));
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
  }
  fromArray(t, e = 0) {
    return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
  }
  fromBufferAttribute(t, e) {
    return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class Vector3 {
  constructor(t = 0, e = 0, s = 0) {
    Vector3.prototype.isVector3 = true, this.x = t, this.y = e, this.z = s;
  }
  set(t, e, s) {
    return void 0 === s && (s = this.z), this.x = t, this.y = e, this.z = s, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this;
  }
  multiplyVectors(t, e) {
    return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
  }
  applyEuler(t) {
    return this.applyQuaternion(_quaternion.setFromEuler(t));
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(_quaternion.setFromAxisAngle(t, e));
  }
  applyMatrix3(t) {
    const e = this.x, s = this.y, i = this.z, r = t.elements;
    return this.x = r[0] * e + r[3] * s + r[6] * i, this.y = r[1] * e + r[4] * s + r[7] * i, this.z = r[2] * e + r[5] * s + r[8] * i, this;
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const e = this.x, s = this.y, i = this.z, r = t.elements, a = 1 / (r[3] * e + r[7] * s + r[11] * i + r[15]);
    return this.x = (r[0] * e + r[4] * s + r[8] * i + r[12]) * a, this.y = (r[1] * e + r[5] * s + r[9] * i + r[13]) * a, this.z = (r[2] * e + r[6] * s + r[10] * i + r[14]) * a, this;
  }
  applyQuaternion(t) {
    const e = this.x, s = this.y, i = this.z, r = t.x, a = t.y, n = t.z, o = t.w, h = 2 * (a * i - n * s), c = 2 * (n * e - r * i), l = 2 * (r * s - a * e);
    return this.x = e + o * h + a * l - n * c, this.y = s + o * c + n * h - r * l, this.z = i + o * l + r * c - a * h, this;
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  transformDirection(t) {
    const e = this.x, s = this.y, i = this.z, r = t.elements;
    return this.x = r[0] * e + r[4] * s + r[8] * i, this.y = r[1] * e + r[5] * s + r[9] * i, this.z = r[2] * e + r[6] * s + r[10] * i, this.normalize();
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
  }
  clamp(t, e) {
    return this.x = clamp$1(this.x, t.x, e.x), this.y = clamp$1(this.y, t.y, e.y), this.z = clamp$1(this.z, t.z, e.z), this;
  }
  clampScalar(t, e) {
    return this.x = clamp$1(this.x, t, e), this.y = clamp$1(this.y, t, e), this.z = clamp$1(this.z, t, e), this;
  }
  clampLength(t, e) {
    const s = this.length();
    return this.divideScalar(s || 1).multiplyScalar(clamp$1(s, t, e));
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
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
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
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
  }
  lerpVectors(t, e, s) {
    return this.x = t.x + (e.x - t.x) * s, this.y = t.y + (e.y - t.y) * s, this.z = t.z + (e.z - t.z) * s, this;
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, e) {
    const s = t.x, i = t.y, r = t.z, a = e.x, n = e.y, o = e.z;
    return this.x = i * o - r * n, this.y = r * a - s * o, this.z = s * n - i * a, this;
  }
  projectOnVector(t) {
    const e = t.lengthSq();
    if (0 === e)
      return this.set(0, 0, 0);
    const s = t.dot(this) / e;
    return this.copy(t).multiplyScalar(s);
  }
  projectOnPlane(t) {
    return _vector$1.copy(this).projectOnVector(t), this.sub(_vector$1);
  }
  reflect(t) {
    return this.sub(_vector$1.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (0 === e)
      return Math.PI / 2;
    const s = this.dot(t) / e;
    return Math.acos(clamp$1(s, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, s = this.y - t.y, i = this.z - t.z;
    return e * e + s * s + i * i;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, e, s) {
    const i = Math.sin(e) * t;
    return this.x = i * Math.sin(s), this.y = Math.cos(e) * t, this.z = i * Math.cos(s), this;
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, e, s) {
    return this.x = t * Math.sin(e), this.y = s, this.z = t * Math.cos(e), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this;
  }
  setFromMatrixScale(t) {
    const e = this.setFromMatrixColumn(t, 0).length(), s = this.setFromMatrixColumn(t, 1).length(), i = this.setFromMatrixColumn(t, 2).length();
    return this.x = e, this.y = s, this.z = i, this;
  }
  setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, 4 * e);
  }
  setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, 3 * e);
  }
  setFromEuler(t) {
    return this.x = t._x, this.y = t._y, this.z = t._z, this;
  }
  setFromColor(t) {
    return this.x = t.r, this.y = t.g, this.z = t.b, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const t = Math.random() * Math.PI * 2, e = 2 * Math.random() - 1, s = Math.sqrt(1 - e * e);
    return this.x = s * Math.cos(t), this.y = e, this.z = s * Math.sin(t), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const _vector$1 = new Vector3(), _quaternion = new Quaternion();
function defined$2(t) {
  return null != t;
}
function defined$1(t) {
  return null != t;
}
function defaultValue(t, e) {
  return null != t ? t : e;
}
function DeveloperError(t) {
  let e;
  this.name = "DeveloperError", this.message = t;
  try {
    throw new Error();
  } catch (t2) {
    e = t2.stack;
  }
  this.stack = e;
}
Object.freeze({}), Object.freeze(new Matrix4()), defaultValue.EMPTY_OBJECT = Object.freeze({}), defined$1(Object.create) && (DeveloperError.prototype = Object.create(Error.prototype), DeveloperError.prototype.constructor = DeveloperError), DeveloperError.prototype.toString = function() {
  let t = this.name + ": " + this.message;
  return defined$1(this.stack) && (t += "\n" + this.stack.toString()), t;
}, DeveloperError.throwInstantiationError = function() {
  throw new DeveloperError("This function defines an interface and should not be called directly.");
};
const _CesiumMath = class {
  static equalsEpsilon(t, e, s, i) {
    s = defaultValue(s, 0), i = defaultValue(i, s);
    const r = Math.abs(t - e);
    return r <= i || r <= s * Math.max(Math.abs(t), Math.abs(e));
  }
  static toRadians(t) {
    return MathUtils.degToRad(t);
  }
  static clamp(t, e, s) {
    return t < e ? e : t > s ? s : t;
  }
  static acosClamped(t) {
    return Math.acos(_CesiumMath.clamp(t, -1, 1));
  }
  static asinClamped(t) {
    return Math.asin(_CesiumMath.clamp(t, -1, 1));
  }
  static sign(t) {
    return Math.sign(t);
  }
  static zeroToTwoPi(t) {
    if (t >= 0 && t <= _CesiumMath.TWO_PI)
      return t;
    const e = _CesiumMath.mod(t, _CesiumMath.TWO_PI);
    return Math.abs(e) < _CesiumMath.EPSILON14 && Math.abs(t) > _CesiumMath.EPSILON14 ? _CesiumMath.TWO_PI : e;
  }
  static mod(t, e) {
    return _CesiumMath.sign(t) === _CesiumMath.sign(e) && Math.abs(t) < Math.abs(e) ? t : (t % e + e) % e;
  }
  static chordLength(t, e) {
    return 2 * e * Math.sin(0.5 * t);
  }
  static negativePiToPi(t) {
    if (!defined$1(t))
      throw new DeveloperError("angle is required.");
    return t >= -_CesiumMath.PI && t <= _CesiumMath.PI ? t : _CesiumMath.zeroToTwoPi(t + _CesiumMath.PI) - _CesiumMath.PI;
  }
  static normalize(t, e, s) {
    return 0 === (s = Math.max(s - e, 0)) ? 0 : _CesiumMath.clamp((t - e) / s, 0, 1);
  }
};
let CesiumMath = _CesiumMath;
__publicField(CesiumMath, "EPSILON1", 0.1);
__publicField(CesiumMath, "EPSILON2", 0.01);
__publicField(CesiumMath, "EPSILON3", 1e-3);
__publicField(CesiumMath, "EPSILON4", 1e-4);
__publicField(CesiumMath, "EPSILON5", 1e-5);
__publicField(CesiumMath, "EPSILON6", 1e-6);
__publicField(CesiumMath, "EPSILON7", 1e-7);
__publicField(CesiumMath, "EPSILON8", 1e-8);
__publicField(CesiumMath, "EPSILON9", 1e-9);
__publicField(CesiumMath, "EPSILON10", 1e-10);
__publicField(CesiumMath, "EPSILON11", 1e-11);
__publicField(CesiumMath, "EPSILON12", 1e-12);
__publicField(CesiumMath, "EPSILON13", 1e-13);
__publicField(CesiumMath, "EPSILON14", 1e-14);
__publicField(CesiumMath, "EPSILON15", 1e-15);
__publicField(CesiumMath, "EPSILON16", 1e-16);
__publicField(CesiumMath, "EPSILON17", 1e-17);
__publicField(CesiumMath, "EPSILON18", 1e-18);
__publicField(CesiumMath, "EPSILON19", 1e-19);
__publicField(CesiumMath, "EPSILON20", 1e-20);
__publicField(CesiumMath, "EPSILON21", 1e-21);
__publicField(CesiumMath, "PI", Math.PI);
__publicField(CesiumMath, "ONE_OVER_PI", 1 / Math.PI);
__publicField(CesiumMath, "PI_OVER_TWO", Math.PI / 2);
__publicField(CesiumMath, "PI_OVER_THREE", Math.PI / 3);
__publicField(CesiumMath, "PI_OVER_FOUR", Math.PI / 4);
__publicField(CesiumMath, "PI_OVER_SIX", Math.PI / 6);
__publicField(CesiumMath, "THREE_PI_OVER_TWO", 3 * Math.PI / 2);
__publicField(CesiumMath, "TWO_PI", 2 * Math.PI);
__publicField(CesiumMath, "ONE_OVER_TWO_PI", 1 / (2 * Math.PI));
__publicField(CesiumMath, "RADIANS_PER_DEGREE", Math.PI / 180);
function isClosed(t) {
  return isPointEqual(t[0], t[t.length - 1]);
}
function isPointEqual(t, e, s = 1e-6) {
  return getDistance(t, e) < s;
}
function getDistance(t, e) {
  return Math.sqrt(Math.pow(t[0] - e[0], 2) + Math.pow(t[1] - e[1], 2) + Math.pow((t[2] || 0) - (e[2] || 0), 2));
}
function isAOConcaveAngle(t, e, s) {
  const i = [s[0] - e[0], s[1] - e[1]], r = [t[0] - e[0], t[1] - e[1]];
  return (i[0] * r[0] + i[1] * r[1]) / Math.sqrt((i[0] * i[0] + i[1] * i[1]) * (r[0] * r[0] + r[1] * r[1])) > -0.866 && -i[1] * r[0] + i[0] * r[1] < 0;
}
new Vector3(), new Vector3(), new Vector3(), new Vector3(), new Vector3(), new Vector3(), new Vector3(), new Vector3(), new Vector3(), new Vector3();
const _centerIn = new Vector3$1(), _lastPosition = new Vector3$1(), _currentPosition = new Vector3$1(), _lineNormal = new Vector3$1(), _offset = new Vector3$1(), _segmentLines3D = (t, e, s, i, r, a, n, o, h, c, l, u, d, _, m, p) => {
  const f = d.targetCenter, y = d.targetProjection, { sourceProjectionName: g, targetProjectionName: M } = d;
  let x = 0;
  _centerIn.fromArray(f), _lastPosition.fromArray(n), _currentPosition.fromArray(o);
  let w = u.value;
  r.push(w, w), a.push(w, 1, w, 0);
  const S = y.getProjectedSurfaceNormal(_lastPosition, _lineNormal), C = _offset.copy(_currentPosition).sub(_lastPosition), E = _lineNormal.crossVectors(S, C).normalize();
  g !== M && (_lastPosition.sub(_centerIn), _currentPosition.sub(_centerIn)), s.push(E.x, E.y, E.z, -E.x, -E.y, -E.z), t.push(_lastPosition.x, _lastPosition.y, _lastPosition.z, _lastPosition.x, _lastPosition.y, _lastPosition.z), e.push(h, h), x += 2, l || (i.push(c + 0 - 2, c + 1 - 2, c + 2 - 2), i.push(c + 2 - 2, c + 1 - 2, c + 3 - 2)), i.push(c, c + 1, c + 2), s.push(E.x, E.y, E.z, -E.x, -E.y, -E.z), t.push(_currentPosition.x, _currentPosition.y, _currentPosition.z, _currentPosition.x, _currentPosition.y, _currentPosition.z), e.push(h, h);
  return w += (m && p ? getDistance(m, p) : getDistance(n, o)) / _, r.push(w, w), a.push(w, 1, w, 0), u.value = w, x += 2, i.push(c + 2, c + 1, c + 3), 4;
};
function lineToMesh(t, e, s, i, r = 1, a) {
  let n = t;
  if (!Array.isArray(t[0])) {
    n = [];
    for (let e2 = 0; e2 < t.length; e2 += 3)
      n.push([t[e2], t[e2 + 1], t[e2 + 2]]);
  }
  let o = 0, h = null, c = null, l = null;
  const u = [], d = [], _ = [], m = [], p = [], f = [];
  let y;
  const g = { value: 0 }, M = a || n;
  let x = true;
  for (let t2 = 1, i2 = n.length - 1; t2 <= i2; t2++) {
    h = l || n[t2 - 1], c = n[t2];
    const i3 = l ? a ? a[n.indexOf(l)] : l : M[t2 - 1], y2 = M[t2], w = M[t2 + 1];
    if (w && isPointEqual(y2, w)) {
      l = h;
      continue;
    }
    let S = 0;
    S = _segmentLines3D(u, m, d, _, p, f, h, c, e, o, x, g, s, r, i3, y2), -1 !== S && (o += S, l = null), x = false;
  }
  for (let t2 = 0; t2 < f.length; t2++)
    t2 % 2 == 0 && (f[t2] = g.value - f[t2]);
  return i && (y = new Array(p.length).fill(g.value)), { vertices: u, indices: _, normals: d, widths: m, lengths: p, totalLengths: y, uvs: f };
}
function fillFlatArray(t, e, s) {
  s || (s = e.length);
  const i = s * t, r = new Array(i);
  for (let t2 = 0, a = i - s + 1; t2 < a; t2 += s)
    for (let i2 = 0; i2 < s; i2++)
      r[t2 + i2] = e[i2];
  return r;
}
function reFetch(t = "", e = {}, s = 3) {
  return function t2(e2, i) {
    return s--, fetch(e2, i).then((t3) => {
      if (200 === t3.status)
        return t3;
      if (404 === t3.status)
        throw new Error("404");
    }).catch((r) => {
      if (i.signal && "AbortError" === r.name)
        throw r;
      if (s > 0)
        return t2(e2, i);
      throw r;
    });
  }(t, e);
}
let POI_TYPE$1 = 3, LINK_TYPE$1 = 4, POLY_TYPE$1 = 7, HREGION_TYPE$1 = 8, GAOQING_ROAD_TYPE$1 = 15, GAOQING_LINE_TYPE$1 = 16, GAOQING_ARROW_TYPE$1 = 18, TEXTURE_TYPE$1 = 19, GAOQING_GRADIENT_TYPE$1 = 20, PILLAR_TYPE = 24, BUILDING_MESH_TYPE = 25, decodeBlockUnit = function() {
  let t, e, s = new TextDecoder("utf-8"), i = 1;
  function r(e2, i2) {
    let r2 = {}, n2 = d(e2, 0, i2[0], i2[0] + i2[1]);
    return r2.indoorFloors = function(t2, e3) {
      let s2 = [], i3 = d(t2, 0, e3[0], e3[0] + e3[1]);
      for (let e4 = 0; e4 < i3.length; e4++)
        s2[e4] = a(t2, i3[e4]);
      return s2;
    }(e2, n2[0]), r2.indoorDes = function(e3, i3) {
      let r3 = i3[0] / 4, a2 = t[r3], n3 = { glassStyleid: t[r3 + 1], twinkleNorm: t[r3 + 2], selectedFloorStyleid: t[r3 + 3] }, o2 = d(e3, a2 + 1, i3[0], i3[0] + i3[1]);
      n3.indoorBid = String.fromCharCode.apply(String, new Uint8Array(e3, o2[0][0], o2[0][1])), n3.indoorDefaultflr = String.fromCharCode.apply(String, new Uint8Array(e3, o2[1][0], o2[1][1]));
      let h2 = d(e3, 0, o2[2][0], o2[2][0] + o2[2][1]);
      n3.indoorBoundary = [];
      for (let t2 = 0; t2 < h2.length; t2++)
        n3.indoorBoundary[t2] = l(e3, h2[t2], POLY_TYPE$1);
      let c2 = d(e3, 0, o2[3][0], o2[3][0] + o2[3][1]);
      n3.indoorFloors = [];
      for (let t2 = 0; t2 < c2.length; t2++)
        n3.indoorFloors[t2] = String.fromCharCode.apply(String, new Uint8Array(e3, c2[t2][0], c2[t2][1]));
      n3.mpoiName = s.decode(new Uint8Array(e3, o2[4][0], o2[4][1])), n3.mpoi = new Uint32Array(e3, o2[5][0], o2[5][1] / 4);
      let u2 = d(e3, 0, o2[6][0], o2[6][1]);
      n3.indoorBoundaryUp = [];
      for (let t2 = 0; t2 < u2.length; t2++)
        n3.indoorBoundaryUp[t2] = l(e3, u2[t2], POLY_TYPE$1);
      return n3.indoorEachfloorHeight = new Int32Array(e3, o2[7][0], o2[7][1] / 4), n3;
    }(e2, n2[1]), r2;
  }
  function a(s2, i2) {
    let r2 = i2[0] / 4, a2 = t[r2], n2 = { currentFloorIdx: e[r2 + 1] }, h2 = d(s2, a2 + 1, i2[0], i2[0] + i2[1]);
    return n2.currentFloor = String.fromCharCode.apply(String, new Uint8Array(s2, h2[0][0], h2[0][1])), n2.geolayer = o(s2, h2[1]), n2;
  }
  function n(i2, r2) {
    let a2 = r2[0] / 4, n2 = t[a2], o2 = { styleId: e[a2 + 1], rank: e[a2 + 2], nameLen: e[a2 + 3] }, h2 = d(i2, n2 + 1, r2[0], r2[0] + r2[1]);
    h2[0][1] && (o2.name = s.decode(new Uint8Array(i2, h2[0][0], h2[0][1]))), o2.x = new Int32Array(i2, h2[1][0], h2[1][1] / 4), o2.angle = new Uint16Array(i2, h2[2][0], h2[2][1] / 2), o2.reverse = new Uint16Array(i2, h2[3][0], h2[3][1] / 2), o2.tracer = new Uint16Array(i2, h2[4][0], h2[4][1] / 2), o2.zvector = new Int16Array(i2, h2[5][0], h2[5][1] / 2);
    let c2 = d(i2, 0, h2[6][0], h2[6][0] + h2[6][1]);
    o2.pos = [];
    for (let t2 = 0; t2 < c2.length; t2++)
      o2.pos[t2] = new Uint16Array(i2, c2[t2][0], c2[t2][1] / 2);
    return o2;
  }
  function o(t2, e2) {
    let s2 = [], i2 = d(t2, 0, e2[0], e2[0] + e2[1]);
    for (let e3 = 0; e3 < i2.length; e3++)
      s2[e3] = h(t2, i2[e3]);
    return s2;
  }
  function h(e2, s2) {
    let i2 = {}, r2 = s2[0] / 4, a2 = t[r2];
    i2.catalogType = t[r2 + 1], i2.rank = t[r2 + 2];
    let n2 = d(e2, a2 + 1, s2[0], s2[0] + s2[1]);
    if (n2.length)
      if (i2.catalogType === GAOQING_ARROW_TYPE$1)
        i2.arrowp = { x: new Int32Array(e2, n2[0][0], n2[0][1] / 4), tracer: new Int32Array(e2, n2[1][0], n2[1][1] / 4), zvector: new Int16Array(e2, n2[2][0], n2[2][1] / 2) };
      else {
        i2.geoobjectsetSet = [];
        for (let t2 = 0; t2 < n2.length; t2++)
          i2.geoobjectsetSet[t2] = c(e2, n2[t2], i2.catalogType);
      }
    return i2;
  }
  function c(e2, s2, i2) {
    let r2 = {}, a2 = s2[0] / 4, n2 = t[a2];
    r2.styleId = t[a2 + 1];
    let o2 = d(e2, n2 + 1, s2[0], s2[0] + s2[1]);
    r2.geoObjectSet = [];
    for (let t2 = 0; t2 < o2.length; t2++)
      r2.geoObjectSet[t2] = l(e2, o2[t2], i2);
    return r2;
  }
  function l(e2, r2, a2) {
    let n2 = {}, o2 = r2[0] / 4, h2 = t[o2];
    if (n2.tracer = t[o2 + 1], a2 === POLY_TYPE$1 || a2 === GAOQING_ROAD_TYPE$1) {
      let s2 = d(e2, h2 + 1, r2[0], r2[0] + r2[1]);
      if (n2.surfaceType = t[o2 + 2], n2.midPoints = new Int32Array(e2, s2[0][0], s2[0][1] / 4), n2.zvector = i > 1 ? new Int16Array(e2, s2[1][0], s2[1][1] / 2) : new Uint16Array(e2, s2[1][0], s2[1][1] / 2), n2.indices = new Uint16Array(e2, s2[2][0], s2[2][1] / 2), s2[3]) {
        let t2 = d(e2, 0, s2[3][0], s2[3][0] + s2[3][1]);
        if (t2.length) {
          n2.border = [];
          for (let s3 = 0; s3 < t2.length; s3++)
            n2.border[s3] = u(e2, t2[s3]);
        }
      }
    } else if (a2 === LINK_TYPE$1 || a2 === GAOQING_LINE_TYPE$1 || a2 === TEXTURE_TYPE$1) {
      let s2 = d(e2, h2 + 1, r2[0], r2[0] + r2[1]);
      n2.width = t[o2 + 2], n2.midPoints = new Int32Array(e2, s2[0][0], s2[0][1] / 4), n2.zvector = i > 1 ? new Int16Array(e2, s2[1][0], s2[1][1] / 2) : new Uint16Array(e2, s2[1][0], s2[1][1] / 2), n2.parsedPoints = new Int16Array(e2, s2[2][0], s2[2][1] / 2), n2.turningDir = new Int8Array(e2, s2[3][0], s2[3][1]);
    } else if (a2 === GAOQING_GRADIENT_TYPE$1) {
      let t2 = d(e2, h2 + 1, r2[0], r2[0] + r2[1]);
      n2.midPoints = new Int32Array(e2, t2[0][0], t2[0][1] / 4), n2.gradientPos = new Int32Array(e2, t2[1][0], t2[1][1] / 4), n2.gradientStyleId = new Uint32Array(e2, t2[2][0], t2[2][1] / 4), n2.zvector = i > 1 ? new Int16Array(e2, t2[3][0], t2[3][1] / 2) : new Uint16Array(e2, t2[3][0], t2[3][1] / 2), n2.indices = new Uint16Array(e2, t2[4][0], t2[4][1] / 2);
    } else if (a2 === BUILDING_MESH_TYPE) {
      let t2 = d(e2, h2 + 1, r2[0], r2[0] + r2[1]);
      n2.buildingBid = String.fromCharCode.apply(String, new Uint8Array(e2, t2[0][0], t2[0][1])), n2.vertex = new Int32Array(e2, t2[1][0], t2[1][1] / 4), n2.normal = new Int32Array(e2, t2[2][0], t2[2][1] / 4);
      let s2 = d(e2, 0, t2[3][0], t2[3][0] + t2[3][1]);
      n2.submesh = [];
      for (let t3 = 0; t3 < s2.length; t3++)
        n2.submesh[t3] = new Uint32Array(e2, s2[t3][0], s2[t3][1] / 4);
    } else if (a2 === PILLAR_TYPE)
      n2.tracer = t[o2], n2.z = t[o2 + 1], n2.radius = t[o2 + 2], n2.x = t[o2 + 3], n2.y = t[o2 + 4];
    else if (a2 === HREGION_TYPE$1) {
      let s2 = d(e2, h2 + 1, r2[0], r2[0] + r2[1]);
      if (n2.altitude = t[o2 + 2], n2.midPoints = new Int32Array(e2, s2[0][0], s2[0][1] / 4), n2.indices = new Uint16Array(e2, s2[1][0], s2[1][1] / 2), s2[2]) {
        let t2 = d(e2, 0, s2[2][0], s2[2][0] + s2[2][1]);
        if (t2.length) {
          n2.border = [];
          for (let s3 = 0; s3 < t2.length; s3++)
            n2.border[s3] = u(e2, t2[s3]);
        }
      }
    } else if (a2 === POI_TYPE$1) {
      let i2 = d(e2, h2 + 1, r2[0], r2[0] + r2[1]);
      n2.posx = t[o2 + 2], n2.posy = t[o2 + 3], n2.rank = t[o2 + 4], n2.direction = t[o2 + 5], i2[0][1] && (n2.uid = String.fromCharCode.apply(String, new Uint8Array(e2, i2[0][0], i2[0][1]))), i2[1][1] && (n2.name = s.decode(new Uint8Array(e2, i2[1][0], i2[1][1])).replace(/\\\\/g, "\\"));
      let a3 = d(e2, 0, i2[2][0], i2[2][0] + i2[2][1]);
      n2.pos = [];
      for (let t2 = 0; t2 < a3.length; t2++)
        n2.pos[t2] = new Uint16Array(e2, a3[t2][0], a3[t2][1] / 2);
    }
    return n2;
  }
  function u(t2, e2) {
    let s2 = d(t2, 0, e2[0], e2[0] + e2[1]);
    return { parsedPoints: new Int16Array(t2, s2[0][0], s2[0][1] / 2), splitIndices: new Uint16Array(t2, s2[1][0], s2[1][1] / 2), turningDir: new Int8Array(t2, s2[2][0], s2[2][1] / 2) };
  }
  function d(e2, s2, i2, r2) {
    let a2 = i2 / 4, n2 = t[a2 + s2], o2 = 4 * (n2 + s2 + 1) + i2, h2 = [];
    if (o2 > r2)
      return h2;
    for (let e3 = 0; e3 < n2; e3++) {
      let i3 = t[a2 + s2 + 1 + e3], r3 = o2 + i3;
      h2[e3] = [o2, i3], o2 = r3 % 4 != 0 ? r3 + 4 - r3 % 4 : r3;
    }
    return h2;
  }
  return function(a2) {
    let h2 = {};
    t = new Uint32Array(a2), e = new Int32Array(a2), i = t[0], h2.version = t[0];
    let c2 = t[1];
    h2.height = t[2], h2.indoorheight = t[3];
    let l2 = d(a2, c2 + 1 + 1, 0, a2.byteLength);
    return h2.geolayer = o(a2, l2[0]), h2.indoorBuildings = function(t2, e2) {
      let s2 = [], i2 = d(t2, 0, e2[0], e2[0] + e2[1]);
      for (let e3 = 0; e3 < i2.length; e3++)
        s2[e3] = r(t2, i2[e3]);
      return s2;
    }(a2, l2[1]), h2.labelp = function(t2, e2) {
      let s2 = [], i2 = d(t2, 0, e2[0], e2[0] + e2[1]);
      for (let e3 = 0; e3 < i2.length; e3++)
        s2[e3] = n(t2, i2[e3]);
      return s2;
    }(a2, l2[2]), l2[3][1] && (h2.png = s.decode(new Uint8Array(a2, l2[3][0], l2[3][1]))), l2[4][1] && (h2.indoorpng = s.decode(new Uint8Array(a2, l2[4][0], l2[4][1]))), t = null, e = null, h2;
  };
}();
const _CoordTransformer = class {
  static _cacheKey(t, e) {
    return `${t}->${e}`;
  }
  static _clearPathCache() {
    _CoordTransformer._pathCache.clear();
  }
  static _findTransformPath(t, e, s = /* @__PURE__ */ new Set()) {
    const i = _CoordTransformer._cacheKey(t, e);
    if (_CoordTransformer._pathCache.has(i))
      return _CoordTransformer._pathCache.get(i);
    if (s.has(t))
      return _CoordTransformer._pathCache.set(i, null), null;
    if (s.add(t), _CoordTransformer._registeredTransformers[t] && _CoordTransformer._registeredTransformers[t][e]) {
      const s2 = [t, e];
      return _CoordTransformer._pathCache.set(i, s2), s2;
    }
    if (_CoordTransformer._registeredTransformers[t])
      for (const r of Object.keys(_CoordTransformer._registeredTransformers[t])) {
        const a = _CoordTransformer._findTransformPath(r, e, new Set(s));
        if (a) {
          const e2 = [t, ...a];
          return _CoordTransformer._pathCache.set(i, e2), e2;
        }
      }
    return _CoordTransformer._pathCache.set(i, null), null;
  }
  static transform(t, e, s, i) {
    if (t === e)
      return i.copy(s), i;
    const r = _CoordTransformer._findTransformPath(t, e);
    if (!r)
      return i.copy(s), i;
    let a = s;
    for (let t2 = 0; t2 < r.length - 1; t2++) {
      const e2 = r[t2], s2 = r[t2 + 1];
      a = _CoordTransformer._registeredTransformers[e2][s2](a, i);
    }
    return a;
  }
  static register(t, e, s) {
    _CoordTransformer._registeredTransformers[t] || (_CoordTransformer._registeredTransformers[t] = {}), _CoordTransformer._registeredTransformers[t][e] = s, _CoordTransformer._clearPathCache();
  }
  static unregister(t, e) {
    _CoordTransformer._registeredTransformers[t] && (delete _CoordTransformer._registeredTransformers[t][e], _CoordTransformer._clearPathCache());
  }
  static canTransform(t, e) {
    if (t === e)
      return false;
    return null !== _CoordTransformer._findTransformPath(t, e);
  }
  static serialize() {
    const t = {};
    for (const e of Object.keys(_CoordTransformer._registeredTransformers)) {
      t[e] = {};
      for (const s of Object.keys(_CoordTransformer._registeredTransformers[e]))
        t[e][s] = _CoordTransformer._registeredTransformers[e][s].toString();
    }
    return JSON.stringify(t);
  }
  static deserialize(json) {
    const result = JSON.parse(json);
    for (const srcCoord of Object.keys(result))
      for (const targetCoord of Object.keys(result[srcCoord]))
        _CoordTransformer.register(srcCoord, targetCoord, eval(result[srcCoord][targetCoord]));
  }
};
let CoordTransformer = _CoordTransformer;
__publicField(CoordTransformer, "_registeredTransformers", {});
__publicField(CoordTransformer, "_pathCache", /* @__PURE__ */ new Map());
const PROJECTION_GEO = "EPSG:4326", PROJECTION_WEB_MERCATOR = "EPSG:3857", PROJECTION_ECEF = "EPSG:4978", PROJECTION_BD_MERCATOR = "BD:MERCATOR", PROJECTION_SCREEN_PIXEL = "SCREEN_PIXEL", angleBetweenScratch$1 = new Vector2(), angleBetweenScratch2$1 = new Vector2();
const _Cartesian2 = class {
  static clone(t, e) {
    return e.copy(t), e;
  }
  static fromElements(t, e, s) {
    return s || (s = new Vector2()), s.set(t, e), s;
  }
  static lerp(t, e, s, i) {
    return i || (i = new Vector2()), i.lerpVectors(t, e, s), i;
  }
  static equalsEpsilon(t, e, s, i) {
    return t === e || defined$1(t) && defined$1(e) && CesiumMath.equalsEpsilon(t.x, e.x, s, i) && CesiumMath.equalsEpsilon(t.y, e.y, s, i);
  }
  static equals(t, e) {
    return t.equals(e);
  }
  static dot(t, e) {
    return t.dot(e);
  }
  static normalize(t, e) {
    return t === e ? (t.normalize(), t) : (e.copy(t), e.normalize(), e);
  }
  static add(t, e, s) {
    return s || (s = new Vector2()), s.addVectors(t, e);
  }
  static multiplyByScalar(t, e, s) {
    return s || (s = new Vector2()), s.copy(t).multiplyScalar(e), s;
  }
  static subtract(t, e, s) {
    return s || (s = new Vector2()), s.subVectors(t, e), s;
  }
  static distance(t, e) {
    return t.distanceTo(e);
  }
  static angleBetween(t, e) {
    return _Cartesian2.normalize(t, angleBetweenScratch$1), _Cartesian2.normalize(e, angleBetweenScratch2$1), CesiumMath.acosClamped(_Cartesian2.dot(angleBetweenScratch$1, angleBetweenScratch2$1));
  }
};
let Cartesian2 = _Cartesian2;
__publicField(Cartesian2, "ZERO", new Vector2());
Cartesian2.fromCartesian3 = Cartesian2.clone, Cartesian2.fromCartesian4 = Cartesian2.clone;
const mostOrthogonalAxisScratch = new Vector3$1();
let scratchN$1 = new Vector3$1(), scratchK$1 = new Vector3$1();
const wgs84RadiiSquared = new Vector3$1(40680631590769, 40680631590769, 40408299984661445e-3), angleBetweenScratch = new Vector3$1(), angleBetweenScratch2 = new Vector3$1();
const _Cartesian3 = class {
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
  static clone(t, e) {
    if (t)
      return e.copy(t), e;
  }
  static equals(t, e) {
    return !(!defined$1(t) || !defined$1(e)) && t.equals(e);
  }
  static normalize(t, e) {
    return t === e ? (t.normalize(), t) : (e.copy(t), e.normalize(), e);
  }
  static add(t, e, s) {
    return s || (s = new Vector3$1()), s.addVectors(t, e);
  }
  static dot(t, e) {
    return t.dot(e);
  }
  static cross(t, e, s) {
    return s || (s = new Vector3$1()), s.crossVectors(t, e), s;
  }
  static magnitudeSquared(t) {
    return t.lengthSq();
  }
  static multiplyByScalar(t, e, s) {
    return s || (s = new Vector3$1()), s.copy(t).multiplyScalar(e), s;
  }
  static divideByScalar(t, e, s) {
    return s || (s = new Vector3$1()), s.x = t.x / e, s.y = t.y / e, s.z = t.z / e, s;
  }
  static subtract(t, e, s) {
    return s || (s = new Vector3$1()), s.subVectors(t, e), s;
  }
  static distance(t, e) {
    return t.distanceTo(e);
  }
  static negate(t, e) {
    return e || (e = new Vector3$1()), e.copy(t), e.negate(), e;
  }
  static multiplyComponents(t, e, s) {
    return s || (s = new Vector3$1()), s.multiplyVectors(t, e), s;
  }
  static magnitude(t) {
    return t.length();
  }
  static equalsEpsilon(t, e, s, i) {
    return t === e || defined$1(t) && defined$1(e) && CesiumMath.equalsEpsilon(t.x, e.x, s, i) && CesiumMath.equalsEpsilon(t.y, e.y, s, i) && CesiumMath.equalsEpsilon(t.z, e.z, s, i);
  }
  static fromCartesian4(t, e) {
    return e || (e = new Vector3$1()), e.set(t.x, t.y, t.z), e;
  }
  static fromElements(t, e, s, i) {
    return i || (i = new Vector3$1()), i.set(t, e, s), i;
  }
  static fromRadians(t, e, s, i, r) {
    s = defaultValue(s, 0);
    const a = defined$1(i) ? i.radiiSquared : wgs84RadiiSquared, n = Math.cos(e);
    scratchN$1.x = n * Math.cos(t), scratchN$1.y = n * Math.sin(t), scratchN$1.z = Math.sin(e), scratchN$1 = _Cartesian3.normalize(scratchN$1, scratchN$1), _Cartesian3.multiplyComponents(a, scratchN$1, scratchK$1);
    const o = Math.sqrt(_Cartesian3.dot(scratchN$1, scratchK$1));
    return scratchK$1 = _Cartesian3.divideByScalar(scratchK$1, o, scratchK$1), scratchN$1 = _Cartesian3.multiplyByScalar(scratchN$1, s, scratchN$1), defined$1(r) || (r = new Vector3$1()), _Cartesian3.add(scratchK$1, scratchN$1, r);
  }
  static angleBetween(t, e) {
    _Cartesian3.normalize(t, angleBetweenScratch), _Cartesian3.normalize(e, angleBetweenScratch2);
    const s = _Cartesian3.dot(angleBetweenScratch, angleBetweenScratch2), i = _Cartesian3.magnitude(_Cartesian3.cross(angleBetweenScratch, angleBetweenScratch2, angleBetweenScratch));
    return Math.atan2(i, s);
  }
  static fromDegrees(t, e, s, i, r) {
    return t = CesiumMath.toRadians(t), e = CesiumMath.toRadians(e), _Cartesian3.fromRadians(t, e, s, i, r);
  }
};
let Cartesian3 = _Cartesian3;
__publicField(Cartesian3, "ZERO", Object.freeze(new Vector3$1()));
__publicField(Cartesian3, "UNIT_X", Object.freeze(new Vector3$1(1, 0, 0)));
__publicField(Cartesian3, "UNIT_Y", Object.freeze(new Vector3$1(0, 1, 0)));
__publicField(Cartesian3, "UNIT_Z", Object.freeze(new Vector3$1(0, 0, 1)));
__publicField(Cartesian3, "abs", function(t, e) {
  return e.x = Math.abs(t.x), e.y = Math.abs(t.y), e.z = Math.abs(t.z), e;
});
__publicField(Cartesian3, "mostOrthogonalAxis", function(t, e) {
  const s = _Cartesian3.normalize(t, mostOrthogonalAxisScratch);
  return _Cartesian3.abs(s, s), e = s.x <= s.y ? s.x <= s.z ? _Cartesian3.clone(_Cartesian3.UNIT_X, e) : _Cartesian3.clone(_Cartesian3.UNIT_Z, e) : s.y <= s.z ? _Cartesian3.clone(_Cartesian3.UNIT_Y, e) : _Cartesian3.clone(_Cartesian3.UNIT_Z, e);
});
class Rectangle {
  constructor(t, e, s, i) {
    this.west = t || 0, this.south = e || 0, this.east = s || 0, this.north = i || 0;
  }
  get width() {
    return Rectangle.computeWidth(this);
  }
  get height() {
    return Rectangle.computeHeight(this);
  }
}
Rectangle.fromDegrees = function(t, e, s, i, r) {
  return t = MathUtils.degToRad(defaultValue(t, 0)), e = MathUtils.degToRad(defaultValue(e, 0)), s = MathUtils.degToRad(defaultValue(s, 0)), i = MathUtils.degToRad(defaultValue(i, 0)), defined$1(r) ? (r.west = t, r.south = e, r.east = s, r.north = i, r) : new Rectangle(t, e, s, i);
}, Rectangle.computeWidth = function(t) {
  let e = t.east;
  const s = t.west;
  return e < s && (e += CesiumMath.TWO_PI), e - s;
}, Rectangle.computeHeight = function(t) {
  return t.north - t.south;
}, Rectangle.clone = function(t, e) {
  if (defined$1(t))
    return defined$1(e) ? (e.west = t.west, e.south = t.south, e.east = t.east, e.north = t.north, e) : new Rectangle(t.west, t.south, t.east, t.north);
}, Rectangle.southwest = function(t, e) {
  return defined$1(e) ? (e.x = t.west, e.y = t.south, e.z = 0, e) : new Vector3$1(t.west, t.south);
}, Rectangle.northeast = function(t, e) {
  return defined$1(e) ? (e.x = t.east, e.y = t.north, e.z = 0, e) : new Vector3$1(t.east, t.north);
}, Rectangle.southeast = function(t, e) {
  return defined$1(e) ? (e.x = t.east, e.y = t.south, e.z = 0, e) : new Vector3$1(t.east, t.south);
}, Rectangle.northwest = function(t, e) {
  return defined$1(e) ? (e.x = t.west, e.y = t.north, e.z = 0, e) : new Vector3$1(t.west, t.north);
}, Rectangle.center = function(t, e) {
  let s = t.east;
  const i = t.west;
  s < i && (s += CesiumMath.TWO_PI);
  const r = CesiumMath.negativePiToPi(0.5 * (i + s)), a = 0.5 * (t.south + t.north);
  return defined$1(e) ? (e.x = r, e.y = a, e.z = 0, e) : new Vector3$1(r, a);
}, Rectangle.contains = function(t, e) {
  let s = e.x;
  const i = e.y, r = t.west;
  let a = t.east;
  return a < r && (a += CesiumMath.TWO_PI, s < 0 && (s += CesiumMath.TWO_PI)), (s > r || CesiumMath.equalsEpsilon(s, r, CesiumMath.EPSILON14)) && (s < a || CesiumMath.equalsEpsilon(s, a, CesiumMath.EPSILON14)) && i >= t.south && i <= t.north;
};
const maxPI = Math.PI + 1e-5, minPI = -Math.PI - 1e-5, maxPIOverTwo = CesiumMath.PI_OVER_TWO + 1e-5, minPIOverTwo = -CesiumMath.PI_OVER_TWO - 1e-5;
Rectangle.fromBox = function(t, e, s = false) {
  const i = t.min, r = t.max;
  let a = i.x / 180 * Math.PI, n = i.y / 180 * Math.PI, o = r.x / 180 * Math.PI, h = r.y / 180 * Math.PI;
  return s && (a < minPI && (a = -Math.PI), a > maxPI && (a = Math.PI), n < minPIOverTwo && (n = -CesiumMath.PI_OVER_TWO), n > maxPIOverTwo && (n = CesiumMath.PI_OVER_TWO), o > maxPI && (o = Math.PI), o < minPI && (o = -Math.PI), h > maxPIOverTwo && (h = CesiumMath.PI_OVER_TWO), h < minPIOverTwo && (h = -CesiumMath.PI_OVER_TWO)), defined$1(e) ? (e.west = a, e.south = n, e.east = o, e.north = h, e) : new Rectangle(a, n, o, h);
}, Rectangle.MAX_VALUE = Object.freeze(new Rectangle(-Math.PI, -CesiumMath.PI_OVER_TWO, Math.PI, CesiumMath.PI_OVER_TWO));
const scaleToGeodeticSurfaceIntersection = new Vector3$1(), scaleToGeodeticSurfaceGradient = new Vector3$1();
function scaleToGeodeticSurface(t, e, s, i, r) {
  const a = t.x, n = t.y, o = t.z, h = e.x, c = e.y, l = e.z, u = a * a * h * h, d = n * n * c * c, _ = o * o * l * l, m = u + d + _, p = Math.sqrt(1 / m), f = scaleToGeodeticSurfaceIntersection.copy(t).multiplyScalar(p);
  if (m < i)
    return r || (r = new Vector3$1()), isFinite(p) ? r.copy(f) : void 0;
  const y = s.x, g = s.y, M = s.z, x = scaleToGeodeticSurfaceGradient;
  x.x = f.x * y * 2, x.y = f.y * g * 2, x.z = f.z * M * 2;
  let w, S, C, E, P, b, A2, v, T, I, z, O = (1 - p) * t.length() / (0.5 * x.length()), N = 0;
  do {
    O -= N, C = 1 / (1 + O * y), E = 1 / (1 + O * g), P = 1 / (1 + O * M), b = C * C, A2 = E * E, v = P * P, T = b * C, I = A2 * E, z = v * P, w = u * b + d * A2 + _ * v - 1, S = u * T * y + d * I * g + _ * z * M, N = w / (-2 * S);
  } while (Math.abs(w) > 1e-12);
  return r ? (r.x = a * C, r.y = n * E, r.z = o * P, r) : new Vector3$1(a * C, n * E, o * P);
}
const cartesianToCartographicN = new Vector3$1(), cartesianToCartographicP = new Vector3$1(), cartesianToCartographicH = new Vector3$1(), wgs84OneOverRadii = new Vector3$1(1 / 6378137, 1 / 6378137, 1 / 6356752314245179e-9), wgs84OneOverRadiiSquared = new Vector3$1(1 / 40680631590769, 1 / 40680631590769, 1 / 40408299984661445e-3), wgs84CenterToleranceSquared = CesiumMath.EPSILON1;
const _Cartographic = class {
  static fromRadians(t, e, s, i) {
    return s = defaultValue(s, 0), defined$1(i) ? (i.x = t, i.y = e, i.z = s, i) : new Vector3$1(t, e, s);
  }
  static fromDegrees(t, e, s, i) {
    return t = CesiumMath.toRadians(t), e = CesiumMath.toRadians(e), _Cartographic.fromRadians(t, e, s, i);
  }
  static fromCartesian(t, e, s) {
    const i = defined$1(e) ? e.oneOverRadii : wgs84OneOverRadii, r = defined$1(e) ? e.oneOverRadiiSquared : wgs84OneOverRadiiSquared, a = scaleToGeodeticSurface(t, i, r, defined$1(e) ? e._centerToleranceSquared : wgs84CenterToleranceSquared, cartesianToCartographicP);
    if (!defined$1(a))
      return;
    let n = Cartesian3.multiplyComponents(a, r, cartesianToCartographicN);
    n = Cartesian3.normalize(n, n);
    const o = Cartesian3.subtract(t, a, cartesianToCartographicH), h = Math.atan2(n.y, n.x), c = Math.asin(n.z), l = CesiumMath.sign(Cartesian3.dot(o, t)) * Cartesian3.magnitude(o);
    return defined$1(s) ? (s.x = h, s.y = c, s.z = l, s) : new Vector3$1(h, c, l);
  }
  static toCartesian(t, e, s) {
    return Cartesian3.fromRadians(t.x, t.y, t.z, e, s);
  }
  static clone(t, e) {
    if (defined$1(t))
      return defined$1(e) ? (e.x = t.x, e.y = t.y, e.z = t.z, e) : new Vector3$1(t.x, t.y, t.z);
  }
  static equals(t, e) {
    return t === e || defined$1(t) && defined$1(e) && t.x === e.x && t.y === e.y && t.z === e.z;
  }
  static equalsEpsilon(t, e, s) {
    return s = defaultValue(s, 0), t === e || defined$1(t) && defined$1(e) && CesiumMath.equalsEpsilon(t.x, e.x, s) && CesiumMath.equalsEpsilon(t.y, e.y, s) && CesiumMath.equalsEpsilon(t.z, e.z, s);
  }
};
let Cartographic = _Cartographic;
__publicField(Cartographic, "fromRadians", function(t, e, s, i) {
  return s = defaultValue(s, 0), defined$1(i) ? (i.x = t, i.y = e, i.z = s, i) : new Vector3$1(t, e, s);
});
__publicField(Cartographic, "fromDegrees", function(t, e, s, i) {
  return t = CesiumMath.toRadians(t), e = CesiumMath.toRadians(e), _Cartographic.fromRadians(t, e, s, i);
});
__publicField(Cartographic, "ZERO", Object.freeze(new Vector3$1(0, 0, 0)));
const _inputVector3 = new Vector3$1(), _outputVector3 = new Vector3$1();
class Ellipsoid {
  constructor(t, e, s) {
    this._radii = new Vector3$1(t, e, s), this._radiiSquared = new Vector3$1(t * t, e * e, s * s), this._radiiToTheFourth = new Vector3$1(t * t * t * t, e * e * e * e, s * s * s * s), this._oneOverRadii = new Vector3$1(0 === t ? 0 : 1 / t, 0 === e ? 0 : 1 / e, 0 === s ? 0 : 1 / s), this._oneOverRadiiSquared = new Vector3$1(0 === t ? 0 : 1 / (t * t), 0 === e ? 0 : 1 / (e * e), 0 === s ? 0 : 1 / (s * s)), this._minimumRadius = Math.min(t, e, s), this._maximumRadius = Math.max(t, e, s), this._centerToleranceSquared = 0.1, 0 !== this._radiiSquared.z && (this._squaredXOverSquaredZ = this._radiiSquared.x / this._radiiSquared.z);
  }
  static fromCartesian3(t) {
    return new Ellipsoid(t.x, t.y, t.z);
  }
  geodeticSurfaceNormalCartographic(t, e) {
    e || (e = new Vector3$1());
    const s = t.x, i = t.y, r = Math.cos(i), a = r * Math.cos(s), n = r * Math.sin(s), o = Math.sin(i);
    return e.set(a, n, o), e.normalize(), e;
  }
  cartographicDegreeToCartesian(t, e) {
    return _inputVector3.set(MathUtils.degToRad(t.x), MathUtils.degToRad(t.y), t.z), this.cartographicToCartesian(_inputVector3, e);
  }
  cartographicToCartesian(t, e) {
    const s = this.geodeticSurfaceNormalCartographic(t);
    e || (e = new Vector3$1()), e.multiplyVectors(this._radiiSquared, s);
    const i = Math.sqrt(s.clone().dot(e));
    return e.divideScalar(i), s.multiplyScalar(t.z), e.add(s), e;
  }
  cartesianToCartographicDegree(t, e) {
    const s = this.cartesianToCartographic(t, e);
    if (s)
      return (e = s).x = MathUtils.radToDeg(e.x), e.y = MathUtils.radToDeg(e.y), e;
  }
  scaleToGeodeticSurface(t, e) {
    return scaleToGeodeticSurface(t, this._oneOverRadii, this._oneOverRadiiSquared, this._centerToleranceSquared, e);
  }
  scaleToGeocentricSurface(t, e) {
    e || (e = new Vector3$1());
    const s = t.x, i = t.y, r = t.z, a = this._oneOverRadiiSquared, n = 1 / Math.sqrt(s * s * a.x + i * i * a.y + r * r * a.z);
    return e.copy(t).multiplyScalar(n);
  }
  cartesianToCartographic(t, e) {
    const s = this.scaleToGeodeticSurface(t, _outputVector3);
    if (!s)
      return;
    const i = this.geodeticSurfaceNormal(s), r = t.clone();
    r.sub(s);
    const a = Math.atan2(i.y, i.x), n = Math.asin(i.z), o = Math.sign(r.dot(t)) * r.length();
    return e || (e = new Vector3$1()), e.set(a, n, o), e;
  }
  geodeticSurfaceNormal(t, e) {
    return defined$1(e) || (e = new Vector3$1()), e.multiplyVectors(t, this._oneOverRadiiSquared), e.normalize(), e;
  }
  getSurfaceNormalIntersectionWithZAxis(t, e, s) {
    e = defaultValue(e, 0);
    const i = this._squaredXOverSquaredZ;
    if (defined$1(s) || (s = new Vector3$1()), s.x = 0, s.y = 0, s.z = t.z * (1 - i), !(Math.abs(s.z) >= this._radii.z - e))
      return s;
  }
  transformPositionToScaledSpace(t, e) {
    return Cartesian3.multiplyComponents(t, this._oneOverRadii, e);
  }
  static clone(t, e) {
    if (!t)
      return;
    const s = t._radii;
    return e ? (Cartesian3.clone(s, e._radii), Cartesian3.clone(t._radiiSquared, e._radiiSquared), Cartesian3.clone(t._radiiToTheFourth, e._radiiToTheFourth), Cartesian3.clone(t._oneOverRadii, e._oneOverRadii), Cartesian3.clone(t._oneOverRadiiSquared, e._oneOverRadiiSquared), e._minimumRadius = t._minimumRadius, e._maximumRadius = t._maximumRadius, e._centerToleranceSquared = t._centerToleranceSquared, e) : new Ellipsoid(s.x, s.y, s.z);
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
Ellipsoid.WGS84 = Object.freeze(new Ellipsoid(6378137, 6378137, 6356752314245179e-9));
let scratchHPRQuaternion$1 = new Quaternion$1(), scratchHeadingQuaternion = new Quaternion$1(), scratchPitchQuaternion = new Quaternion$1(), scratchRollQuaternion = new Quaternion$1(), fromAxisAngleScratch = new Vector3$1();
class StaticQuaternion {
  static fromAxisAngle(t, e, s) {
    return s || (s = new Quaternion$1()), fromAxisAngleScratch.copy(t), fromAxisAngleScratch.normalize(), s.setFromAxisAngle(fromAxisAngleScratch, e), s;
  }
  static multiply(t, e, s) {
    return s || (s = new Quaternion$1()), s.multiplyQuaternions(t, e), s;
  }
  static fromHeadingPitchRoll(t, e) {
    return scratchRollQuaternion = StaticQuaternion.fromAxisAngle(Cartesian3.UNIT_X, t.roll, scratchHPRQuaternion$1), scratchPitchQuaternion = StaticQuaternion.fromAxisAngle(Cartesian3.UNIT_Y, -t.pitch, e), e = StaticQuaternion.multiply(scratchPitchQuaternion, scratchRollQuaternion, scratchPitchQuaternion), scratchHeadingQuaternion = StaticQuaternion.fromAxisAngle(Cartesian3.UNIT_Z, -t.heading, scratchHPRQuaternion$1), StaticQuaternion.multiply(scratchHeadingQuaternion, e, e);
  }
}
class StaticMatrix4 {
  static clone(t, e) {
    return e.copy(t), e;
  }
  static inverseTransformation(t, e) {
    return e.copy(t).invert(), e;
  }
  static multiplyByPoint(t, e, s) {
    const i = t.elements, r = e.x, a = e.y, n = e.z, o = i[0] * r + i[4] * a + i[8] * n + i[12], h = i[1] * r + i[5] * a + i[9] * n + i[13], c = i[2] * r + i[6] * a + i[10] * n + i[14];
    return s.x = o, s.y = h, s.z = c, s;
  }
  static multiplyByPointAsVector(t, e, s) {
    const i = t.elements, r = e.x, a = e.y, n = e.z, o = i[0] * r + i[4] * a + i[8] * n, h = i[1] * r + i[5] * a + i[9] * n, c = i[2] * r + i[6] * a + i[10] * n;
    return s.x = o, s.y = h, s.z = c, s;
  }
  static computeViewportTransformation(t, e, s, i) {
    defined$1(i) || (i = new Matrix4()), t = defaultValue(t, defaultValue.EMPTY_OBJECT);
    const r = defaultValue(t.x, 0), a = defaultValue(t.y, 0), n = defaultValue(t.width, 0), o = defaultValue(t.height, 0);
    e = defaultValue(e, 0);
    const h = 0.5 * n, c = 0.5 * o, l = 0.5 * ((s = defaultValue(s, 1)) - e), u = h, d = c, _ = l, m = r + h, p = a + c, f = e + l, y = i.elements;
    return y[0] = u, y[1] = 0, y[2] = 0, y[3] = 0, y[4] = 0, y[5] = d, y[6] = 0, y[7] = 0, y[8] = 0, y[9] = 0, y[10] = _, y[11] = 0, y[12] = m, y[13] = p, y[14] = f, y[15] = 1, i;
  }
  static equals(t, e) {
    return t.equals(e);
  }
  static multiplyByVector(t, e, s) {
    return s || (s = new Vector4()), s.copy(e), s.applyMatrix4(t), s;
  }
  static getColumn(t, e, s) {
    const i = t.elements, r = 4 * e, a = i[r], n = i[r + 1], o = i[r + 2], h = i[r + 3];
    return s.x = a, s.y = n, s.z = o, s.w = h, s;
  }
  static fromTranslationQuaternionRotationScale(t, e, s, i) {
    i || (i = new Matrix4());
    const r = s.x, a = s.y, n = s.z, o = e.x * e.x, h = e.x * e.y, c = e.x * e.z, l = e.x * e.w, u = e.y * e.y, d = e.y * e.z, _ = e.y * e.w, m = e.z * e.z, p = e.z * e.w, f = e.w * e.w, y = o - u - m + f, g = 2 * (h - p), M = 2 * (c + _), x = 2 * (h + p), w = -o + u - m + f, S = 2 * (d - l), C = 2 * (c - _), E = 2 * (d + l), P = -o - u + m + f, b = i.elements;
    return b[0] = y * r, b[1] = x * r, b[2] = C * r, b[3] = 0, b[4] = g * a, b[5] = w * a, b[6] = E * a, b[7] = 0, b[8] = M * n, b[9] = S * n, b[10] = P * n, b[11] = 0, b[12] = t.x, b[13] = t.y, b[14] = t.z, b[15] = 1, i;
  }
}
__publicField(StaticMatrix4, "IDENTITY", Object.freeze(new Matrix4()));
StaticMatrix4.ZERO = Object.freeze(new Matrix4(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
const Transforms = {}, scratchHPRQuaternion = new Quaternion$1(), scratchScale$1 = new Vector3$1(1, 1, 1), scratchHPRMatrix4 = new Matrix4(), vectorProductLocalFrame = { up: { south: "east", north: "west", west: "south", east: "north" }, down: { south: "west", north: "east", west: "north", east: "south" }, south: { up: "west", down: "east", west: "down", east: "up" }, north: { up: "east", down: "west", west: "up", east: "down" }, west: { up: "north", down: "south", north: "down", south: "up" }, east: { up: "south", down: "north", north: "up", south: "down" } };
let degeneratePositionLocalFrame = { north: [-1, 0, 0], east: [0, 1, 0], up: [0, 0, 1], south: [1, 0, 0], west: [0, -1, 0], down: [0, 0, -1] }, localFrameToFixedFrameCache = {}, scratchCalculateCartesian = { east: new Vector3$1(), north: new Vector3$1(), up: new Vector3$1(), west: new Vector3$1(), south: new Vector3$1(), down: new Vector3$1() }, scratchFirstCartesian = new Vector3$1(), scratchSecondCartesian = new Vector3$1(), scratchThirdCartesian = new Vector3$1();
const defined = (t) => void 0 !== t, zeroVector3 = new Vector3$1(), mathSign = (t) => 0 === (t = +t) ? t : t > 0 ? 1 : -1, scratchN = new Vector3$1(), scratchK = new Vector3$1(), radianToEcef = function(t, e, s = 0, i) {
  const r = new Vector3$1(40680631590769, 40680631590769, 40408299984661445e-3), a = Math.cos(e);
  scratchN.x = a * Math.cos(t), scratchN.y = a * Math.sin(t), scratchN.z = Math.sin(e), scratchN.normalize(), scratchK.multiplyVectors(r, scratchN);
  const n = Math.sqrt(scratchN.dot(scratchK));
  return scratchK.divideScalar(n), scratchN.multiplyScalar(s), defined(i) || (i = new Vector3$1()), i.addVectors(scratchK, scratchN);
}, lnglatToEcef = (t, e, s = 0, i) => radianToEcef(t * Math.PI / 180, e * Math.PI / 180, s, i);
function Interval(t, e) {
  this.start = defaultValue(t, 0), this.stop = defaultValue(e, 0);
}
Transforms.lnglatToEcef = lnglatToEcef, Transforms.radianToEcef = radianToEcef, Transforms.localFrameToFixedFrameGenerator = function(t, e) {
  if (!vectorProductLocalFrame.hasOwnProperty(t) || !vectorProductLocalFrame[t].hasOwnProperty(e))
    throw new Error("firstAxis and secondAxis must be east, north, up, west, south or down.");
  let s, i = vectorProductLocalFrame[t][e], r = t + e;
  return defined(localFrameToFixedFrameCache[r]) ? s = localFrameToFixedFrameCache[r] : (s = function(s2, r2, a) {
    if (!defined(s2))
      throw new Error("origin is required.");
    if (defined(a) || (a = new Matrix4()), s2.equals(zeroVector3))
      scratchFirstCartesian.fromArray(degeneratePositionLocalFrame[t]), scratchSecondCartesian.fromArray(degeneratePositionLocalFrame[e]), scratchThirdCartesian.fromArray(degeneratePositionLocalFrame[i]);
    else if (Math.abs(s2.x) < 1e-14 && Math.abs(s2.y) < 1e-14) {
      let r3 = mathSign(s2.z);
      scratchFirstCartesian.fromArray(degeneratePositionLocalFrame[t]), "east" !== t && "west" !== t && scratchFirstCartesian.multiplyScalar(r3), scratchSecondCartesian.fromArray(degeneratePositionLocalFrame[e]), "east" !== e && "west" !== e && scratchSecondCartesian.multiplyScalar(r3), scratchThirdCartesian.fromArray(degeneratePositionLocalFrame[i]), "east" !== i && "west" !== i && scratchThirdCartesian.multiplyScalar(r3);
    } else {
      (r2 = r2 || Ellipsoid.WGS84).geodeticSurfaceNormal(s2, scratchCalculateCartesian.up);
      let a2 = scratchCalculateCartesian.up, n2 = scratchCalculateCartesian.east;
      n2.x = -s2.y, n2.y = s2.x, n2.z = 0, scratchCalculateCartesian.east.copy(n2).normalize(), scratchCalculateCartesian.north.crossVectors(a2, n2), scratchCalculateCartesian.down.copy(scratchCalculateCartesian.up).multiplyScalar(-1), scratchCalculateCartesian.west.copy(scratchCalculateCartesian.east).multiplyScalar(-1), scratchCalculateCartesian.south.copy(scratchCalculateCartesian.north).multiplyScalar(-1), scratchFirstCartesian = scratchCalculateCartesian[t], scratchSecondCartesian = scratchCalculateCartesian[e], scratchThirdCartesian = scratchCalculateCartesian[i];
    }
    const n = a.elements;
    return n[0] = scratchFirstCartesian.x, n[1] = scratchFirstCartesian.y, n[2] = scratchFirstCartesian.z, n[3] = 0, n[4] = scratchSecondCartesian.x, n[5] = scratchSecondCartesian.y, n[6] = scratchSecondCartesian.z, n[7] = 0, n[8] = scratchThirdCartesian.x, n[9] = scratchThirdCartesian.y, n[10] = scratchThirdCartesian.z, n[11] = 0, n[12] = s2.x, n[13] = s2.y, n[14] = s2.z, n[15] = 1, a;
  }, localFrameToFixedFrameCache[r] = s), s;
}, Transforms.eastNorthUpToFixedFrame = Transforms.localFrameToFixedFrameGenerator("east", "north"), Transforms.headingPitchRollToFixedFrame = function(t, e, s, i, r) {
  i = i || Transforms.eastNorthUpToFixedFrame;
  const a = StaticQuaternion.fromHeadingPitchRoll(e, scratchHPRQuaternion), n = StaticMatrix4.fromTranslationQuaternionRotationScale(Cartesian3.ZERO, a, scratchScale$1, scratchHPRMatrix4);
  return (r = i(t, s, r)).multiply(n);
}, Transforms.northEastDownToFixedFrame = Transforms.localFrameToFixedFrameGenerator("north", "east"), Transforms.northUpEastToFixedFrame = Transforms.localFrameToFixedFrameGenerator("north", "up"), Transforms.northWestUpToFixedFrame = Transforms.localFrameToFixedFrameGenerator("north", "west");
class StaticMatrix3 {
  static fromQuaternion(t, e) {
    const s = t.x * t.x, i = t.x * t.y, r = t.x * t.z, a = t.x * t.w, n = t.y * t.y, o = t.y * t.z, h = t.y * t.w, c = t.z * t.z, l = t.z * t.w, u = t.w * t.w, d = s - n - c + u, _ = 2 * (i - l), m = 2 * (r + h), p = 2 * (i + l), f = -s + n - c + u, y = 2 * (o - a), g = 2 * (r - h), M = 2 * (o + a), x = -s - n + c + u;
    return e || (e = new Matrix3()), e.set(d, _, m, p, f, y, g, M, x), e;
  }
  static getColumn(t, e, s) {
    const i = t.elements, r = 3 * e, a = i[r], n = i[r + 1], o = i[r + 2];
    return s.x = a, s.y = n, s.z = o, s;
  }
  static multiplyByVector(t, e, s) {
    return s || (s = new Vector3$1()), s.copy(e), s.applyMatrix3(t), s;
  }
  static multiplyByScale(t, e, s) {
    s || (s = new Matrix3());
    const i = s.elements, r = t.elements;
    return i[0] = r[0] * e.x, i[1] = r[1] * e.x, i[2] = r[2] * e.x, i[3] = r[3] * e.y, i[4] = r[4] * e.y, i[5] = r[5] * e.y, i[6] = r[6] * e.z, i[7] = r[7] * e.z, i[8] = r[8] * e.z, s;
  }
  static transpose(t, e) {
    return e || (e = new Matrix3()), e.copy(t).transpose(), e;
  }
  static fromScale(t, e) {
    e || (e = new Matrix3());
    const s = e.elements;
    return s[0] = t.x, s[1] = 0, s[2] = 0, s[3] = 0, s[4] = t.y, s[5] = 0, s[6] = 0, s[7] = 0, s[8] = t.z, e;
  }
  static multiply(t, e, s) {
    s || (s = new Matrix3());
    const i = t.elements, r = e.elements, a = s.elements, n = i[0], o = i[3], h = i[6], c = i[1], l = i[4], u = i[7], d = i[2], _ = i[5], m = i[8], p = r[0], f = r[3], y = r[6], g = r[1], M = r[4], x = r[7], w = r[2], S = r[5], C = r[8];
    return a[0] = n * p + o * g + h * w, a[3] = n * f + o * M + h * S, a[6] = n * y + o * x + h * C, a[1] = c * p + l * g + u * w, a[4] = c * f + l * M + u * S, a[7] = c * y + l * x + u * C, a[2] = d * p + _ * g + m * w, a[5] = d * f + _ * M + m * S, a[8] = d * y + _ * x + m * C, s;
  }
  static clone(t, e) {
    if (defined$1(t))
      return defined$1(e) ? (e.clone(t), e) : new Matrix3(t[0], t[3], t[6], t[1], t[4], t[7], t[2], t[5], t[8]);
  }
  static setColumn(t, e, s, i) {
    const r = (i = StaticMatrix3.clone(t, i)).elements, a = 3 * e;
    return r[a] = s.x, r[a + 1] = s.y, r[a + 2] = s.z, i;
  }
}
StaticMatrix3.ZERO = Matrix3.ZERO = Object.freeze(new Matrix3(0, 0, 0, 0, 0, 0, 0, 0, 0)), StaticMatrix3.COLUMN0ROW0 = 0, StaticMatrix3.COLUMN0ROW1 = 1, StaticMatrix3.COLUMN0ROW2 = 2, StaticMatrix3.COLUMN1ROW0 = 3, StaticMatrix3.COLUMN1ROW1 = 4, StaticMatrix3.COLUMN1ROW2 = 5, StaticMatrix3.COLUMN2ROW0 = 6, StaticMatrix3.COLUMN2ROW1 = 7, StaticMatrix3.COLUMN2ROW2 = 8;
var QuadraticRealPolynomial = {};
function addWithCancellationCheck$1(t, e, s) {
  var i = t + e;
  return CesiumMath.sign(t) !== CesiumMath.sign(e) && Math.abs(i / Math.max(Math.abs(t), Math.abs(e))) < s ? 0 : i;
}
QuadraticRealPolynomial.computeDiscriminant = function(t, e, s) {
  if ("number" != typeof t)
    throw new DeveloperError("a is a required number.");
  if ("number" != typeof e)
    throw new DeveloperError("b is a required number.");
  if ("number" != typeof s)
    throw new DeveloperError("c is a required number.");
  return e * e - 4 * t * s;
}, QuadraticRealPolynomial.computeRealRoots = function(t, e, s) {
  if ("number" != typeof t)
    throw new DeveloperError("a is a required number.");
  if ("number" != typeof e)
    throw new DeveloperError("b is a required number.");
  if ("number" != typeof s)
    throw new DeveloperError("c is a required number.");
  var i;
  if (0 === t)
    return 0 === e ? [] : [-s / e];
  if (0 === e) {
    if (0 === s)
      return [0, 0];
    var r = Math.abs(s), a = Math.abs(t);
    if (r < a && r / a < CesiumMath.EPSILON14)
      return [0, 0];
    if (r > a && a / r < CesiumMath.EPSILON14)
      return [];
    if ((i = -s / t) < 0)
      return [];
    var n = Math.sqrt(i);
    return [-n, n];
  }
  if (0 === s)
    return (i = -e / t) < 0 ? [i, 0] : [0, i];
  var o = addWithCancellationCheck$1(e * e, -(4 * t * s), CesiumMath.EPSILON14);
  if (o < 0)
    return [];
  var h = -0.5 * addWithCancellationCheck$1(e, CesiumMath.sign(e) * Math.sqrt(o), CesiumMath.EPSILON14);
  return e > 0 ? [h / t, s / h] : [s / h, h / t];
};
var CubicRealPolynomial = {};
function computeRealRoots(t, e, s, i) {
  var r, a, n = t, o = e / 3, h = s / 3, c = i, l = n * h, u = o * c, d = o * o, _ = h * h, m = n * h - d, p = n * c - o * h, f = o * c - _, y = 4 * m * f - p * p;
  if (y < 0) {
    var g, M, x;
    d * u >= l * _ ? (g = n, M = m, x = -2 * o * m + n * p) : (g = c, M = f, x = -c * p + 2 * h * f);
    var w = -(x < 0 ? -1 : 1) * Math.abs(g) * Math.sqrt(-y), S = (a = -x + w) / 2, C = S < 0 ? -Math.pow(-S, 1 / 3) : Math.pow(S, 1 / 3), E = a === w ? -C : -M / C;
    return r = M <= 0 ? C + E : -x / (C * C + E * E + M), d * u >= l * _ ? [(r - o) / n] : [-c / (r + h)];
  }
  var P = m, b = -2 * o * m + n * p, A2 = f, v = -c * p + 2 * h * f, T = Math.sqrt(y), I = Math.sqrt(3) / 2, z = Math.abs(Math.atan2(n * T, -b) / 3);
  r = 2 * Math.sqrt(-P);
  var O = Math.cos(z);
  a = r * O;
  var N = r * (-O / 2 - I * Math.sin(z)), G = a + N > 2 * o ? a - o : N - o, R = n, L = G / R;
  z = Math.abs(Math.atan2(c * T, -v) / 3);
  var $ = -c, V = (a = (r = 2 * Math.sqrt(-A2)) * (O = Math.cos(z))) + (N = r * (-O / 2 - I * Math.sin(z))) < 2 * h ? a + h : N + h, q = $ / V, j = -G * V - R * $, D = (h * j - o * (G * $)) / (-o * j + h * (R * V));
  return L <= D ? L <= q ? D <= q ? [L, D, q] : [L, q, D] : [q, L, D] : L <= q ? [D, L, q] : D <= q ? [D, q, L] : [q, D, L];
}
CubicRealPolynomial.computeDiscriminant = function(t, e, s, i) {
  if ("number" != typeof t)
    throw new DeveloperError("a is a required number.");
  if ("number" != typeof e)
    throw new DeveloperError("b is a required number.");
  if ("number" != typeof s)
    throw new DeveloperError("c is a required number.");
  if ("number" != typeof i)
    throw new DeveloperError("d is a required number.");
  var r = e * e, a = s * s;
  return 18 * t * e * s * i + r * a - 27 * (t * t) * (i * i) - 4 * (t * a * s + r * e * i);
}, CubicRealPolynomial.computeRealRoots = function(t, e, s, i) {
  if ("number" != typeof t)
    throw new DeveloperError("a is a required number.");
  if ("number" != typeof e)
    throw new DeveloperError("b is a required number.");
  if ("number" != typeof s)
    throw new DeveloperError("c is a required number.");
  if ("number" != typeof i)
    throw new DeveloperError("d is a required number.");
  var r, a;
  if (0 === t)
    return QuadraticRealPolynomial.computeRealRoots(e, s, i);
  if (0 === e) {
    if (0 === s) {
      if (0 === i)
        return [0, 0, 0];
      var n = (a = -i / t) < 0 ? -Math.pow(-a, 1 / 3) : Math.pow(a, 1 / 3);
      return [n, n, n];
    }
    return 0 === i ? 0 === (r = QuadraticRealPolynomial.computeRealRoots(t, 0, s)).Length ? [0] : [r[0], 0, r[1]] : computeRealRoots(t, 0, s, i);
  }
  return 0 === s ? 0 === i ? (a = -e / t) < 0 ? [a, 0, 0] : [0, 0, a] : computeRealRoots(t, e, 0, i) : 0 === i ? 0 === (r = QuadraticRealPolynomial.computeRealRoots(t, e, s)).length ? [0] : r[1] <= 0 ? [r[0], r[1], 0] : r[0] >= 0 ? [0, r[0], r[1]] : [r[0], 0, r[1]] : computeRealRoots(t, e, s, i);
};
var QuarticRealPolynomial = {};
function original(t, e, s, i) {
  var r = t * t, a = e - 3 * r / 8, n = s - e * t / 2 + r * t / 8, o = i - s * t / 4 + e * r / 16 - 3 * r * r / 256, h = CubicRealPolynomial.computeRealRoots(1, 2 * a, a * a - 4 * o, -n * n);
  if (h.length > 0) {
    var c = -t / 4, l = h[h.length - 1];
    if (Math.abs(l) < CesiumMath.EPSILON14) {
      var u = QuadraticRealPolynomial.computeRealRoots(1, a, o);
      if (2 === u.length) {
        var d, _ = u[0], m = u[1];
        if (_ >= 0 && m >= 0) {
          var p = Math.sqrt(_), f = Math.sqrt(m);
          return [c - f, c - p, c + p, c + f];
        }
        if (_ >= 0 && m < 0)
          return [c - (d = Math.sqrt(_)), c + d];
        if (_ < 0 && m >= 0)
          return [c - (d = Math.sqrt(m)), c + d];
      }
      return [];
    }
    if (l > 0) {
      var y = Math.sqrt(l), g = (a + l - n / y) / 2, M = (a + l + n / y) / 2, x = QuadraticRealPolynomial.computeRealRoots(1, y, g), w = QuadraticRealPolynomial.computeRealRoots(1, -y, M);
      return 0 !== x.length ? (x[0] += c, x[1] += c, 0 !== w.length ? (w[0] += c, w[1] += c, x[1] <= w[0] ? [x[0], x[1], w[0], w[1]] : w[1] <= x[0] ? [w[0], w[1], x[0], x[1]] : x[0] >= w[0] && x[1] <= w[1] ? [w[0], x[0], x[1], w[1]] : w[0] >= x[0] && w[1] <= x[1] ? [x[0], w[0], w[1], x[1]] : x[0] > w[0] && x[0] < w[1] ? [w[0], x[0], w[1], x[1]] : [x[0], w[0], x[1], w[1]]) : x) : 0 !== w.length ? (w[0] += c, w[1] += c, w) : [];
    }
  }
  return [];
}
function neumark(t, e, s, i) {
  var r = t * t, a = -2 * e, n = s * t + e * e - 4 * i, o = r * i - s * e * t + s * s, h = CubicRealPolynomial.computeRealRoots(1, a, n, o);
  if (h.length > 0) {
    var c, l, u, d, _, m, p = h[0], f = e - p, y = f * f, g = t / 2, M = f / 2, x = y - 4 * i, w = y + 4 * Math.abs(i), S = r - 4 * p, C = r + 4 * Math.abs(p);
    if (p < 0 || x * C < S * w) {
      var E = Math.sqrt(S);
      c = E / 2, l = 0 === E ? 0 : (t * M - s) / E;
    } else {
      var P = Math.sqrt(x);
      c = 0 === P ? 0 : (t * M - s) / P, l = P / 2;
    }
    0 === g && 0 === c ? (u = 0, d = 0) : CesiumMath.sign(g) === CesiumMath.sign(c) ? d = p / (u = g + c) : u = p / (d = g - c), 0 === M && 0 === l ? (_ = 0, m = 0) : CesiumMath.sign(M) === CesiumMath.sign(l) ? m = i / (_ = M + l) : _ = i / (m = M - l);
    var b = QuadraticRealPolynomial.computeRealRoots(1, u, _), A2 = QuadraticRealPolynomial.computeRealRoots(1, d, m);
    if (0 !== b.length)
      return 0 !== A2.length ? b[1] <= A2[0] ? [b[0], b[1], A2[0], A2[1]] : A2[1] <= b[0] ? [A2[0], A2[1], b[0], b[1]] : b[0] >= A2[0] && b[1] <= A2[1] ? [A2[0], b[0], b[1], A2[1]] : A2[0] >= b[0] && A2[1] <= b[1] ? [b[0], A2[0], A2[1], b[1]] : b[0] > A2[0] && b[0] < A2[1] ? [A2[0], b[0], A2[1], b[1]] : [b[0], A2[0], b[1], A2[1]] : b;
    if (0 !== A2.length)
      return A2;
  }
  return [];
}
QuarticRealPolynomial.computeDiscriminant = function(t, e, s, i, r) {
  if ("number" != typeof t)
    throw new DeveloperError("a is a required number.");
  if ("number" != typeof e)
    throw new DeveloperError("b is a required number.");
  if ("number" != typeof s)
    throw new DeveloperError("c is a required number.");
  if ("number" != typeof i)
    throw new DeveloperError("d is a required number.");
  if ("number" != typeof r)
    throw new DeveloperError("e is a required number.");
  var a = t * t, n = e * e, o = n * e, h = s * s, c = h * s, l = i * i, u = l * i, d = r * r;
  return n * h * l - 4 * o * u - 4 * t * c * l + 18 * t * e * s * u - 27 * a * l * l + 256 * (a * t) * (d * r) + r * (18 * o * s * i - 4 * n * c + 16 * t * h * h - 80 * t * e * h * i - 6 * t * n * l + 144 * a * s * l) + d * (144 * t * n * s - 27 * n * n - 128 * a * h - 192 * a * e * i);
}, QuarticRealPolynomial.computeRealRoots = function(t, e, s, i, r) {
  if ("number" != typeof t)
    throw new DeveloperError("a is a required number.");
  if ("number" != typeof e)
    throw new DeveloperError("b is a required number.");
  if ("number" != typeof s)
    throw new DeveloperError("c is a required number.");
  if ("number" != typeof i)
    throw new DeveloperError("d is a required number.");
  if ("number" != typeof r)
    throw new DeveloperError("e is a required number.");
  if (Math.abs(t) < CesiumMath.EPSILON15)
    return CubicRealPolynomial.computeRealRoots(e, s, i, r);
  var a = e / t, n = s / t, o = i / t, h = r / t, c = a < 0 ? 1 : 0;
  switch (c += n < 0 ? c + 1 : c, c += o < 0 ? c + 1 : c, c += h < 0 ? c + 1 : c) {
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
      return original(a, n, o, h);
    case 1:
    case 2:
    case 5:
    case 8:
    case 11:
      return neumark(a, n, o, h);
    default:
      return;
  }
};
var IntersectionTests = { rayPlane: function(t, e, s) {
  if (!defined$1(t))
    throw new DeveloperError("ray is required.");
  if (!defined$1(e))
    throw new DeveloperError("plane is required.");
  defined$1(s) || (s = new Vector3$1());
  var i = t.origin, r = t.direction, a = e.normal, n = Cartesian3.dot(a, r);
  if (!(Math.abs(n) < CesiumMath.EPSILON15)) {
    var o = (-e.constant - Cartesian3.dot(a, i)) / n;
    if (!(o < 0))
      return s = Cartesian3.multiplyByScalar(r, o, s), Cartesian3.add(i, s, s);
  }
} }, scratchEdge0 = new Vector3$1(), scratchEdge1 = new Vector3$1(), scratchPVec = new Vector3$1(), scratchTVec = new Vector3$1(), scratchQVec = new Vector3$1();
IntersectionTests.rayTriangleParametric = function(t, e, s, i, r) {
  if (!defined$1(t))
    throw new DeveloperError("ray is required.");
  if (!defined$1(e))
    throw new DeveloperError("p0 is required.");
  if (!defined$1(s))
    throw new DeveloperError("p1 is required.");
  if (!defined$1(i))
    throw new DeveloperError("p2 is required.");
  r = defaultValue(r, false);
  var a, n, o, h, c, l = t.origin, u = t.direction, d = Cartesian3.subtract(s, e, scratchEdge0), _ = Cartesian3.subtract(i, e, scratchEdge1), m = Cartesian3.cross(u, _, scratchPVec), p = Cartesian3.dot(d, m);
  if (r) {
    if (p < CesiumMath.EPSILON6)
      return;
    if (a = Cartesian3.subtract(l, e, scratchTVec), (o = Cartesian3.dot(a, m)) < 0 || o > p)
      return;
    if (n = Cartesian3.cross(a, d, scratchQVec), (h = Cartesian3.dot(u, n)) < 0 || o + h > p)
      return;
    c = Cartesian3.dot(_, n) / p;
  } else {
    if (Math.abs(p) < CesiumMath.EPSILON6)
      return;
    var f = 1 / p;
    if (a = Cartesian3.subtract(l, e, scratchTVec), (o = Cartesian3.dot(a, m) * f) < 0 || o > 1)
      return;
    if (n = Cartesian3.cross(a, d, scratchQVec), (h = Cartesian3.dot(u, n) * f) < 0 || o + h > 1)
      return;
    c = Cartesian3.dot(_, n) * f;
  }
  return c;
}, IntersectionTests.rayTriangle = function(t, e, s, i, r, a) {
  var n = IntersectionTests.rayTriangleParametric(t, e, s, i, r);
  if (defined$1(n) && !(n < 0))
    return defined$1(a) || (a = new Vector3$1()), Cartesian3.multiplyByScalar(t.direction, n, a), Cartesian3.add(t.origin, a, a);
};
var scratchLineSegmentTriangleRay = new Ray();
function solveQuadratic(t, e, s, i) {
  var r = e * e - 4 * t * s;
  if (!(r < 0)) {
    if (r > 0) {
      var a = 1 / (2 * t), n = Math.sqrt(r), o = (-e + n) * a, h = (-e - n) * a;
      return o < h ? (i.root0 = o, i.root1 = h) : (i.root0 = h, i.root1 = o), i;
    }
    var c = -e / (2 * t);
    if (0 !== c)
      return i.root0 = i.root1 = c, i;
  }
}
IntersectionTests.lineSegmentTriangle = function(t, e, s, i, r, a, n) {
  if (!defined$1(t))
    throw new DeveloperError("v0 is required.");
  if (!defined$1(e))
    throw new DeveloperError("v1 is required.");
  if (!defined$1(s))
    throw new DeveloperError("p0 is required.");
  if (!defined$1(i))
    throw new DeveloperError("p1 is required.");
  if (!defined$1(r))
    throw new DeveloperError("p2 is required.");
  var o = scratchLineSegmentTriangleRay;
  Cartesian3.clone(t, o.origin), Cartesian3.subtract(e, t, o.direction), Cartesian3.normalize(o.direction, o.direction);
  var h = IntersectionTests.rayTriangleParametric(o, s, i, r, a);
  if (!(!defined$1(h) || h < 0 || h > Cartesian3.distance(t, e)))
    return defined$1(n) || (n = new Vector3$1()), Cartesian3.multiplyByScalar(o.direction, h, n), Cartesian3.add(o.origin, n, n);
};
var raySphereRoots = { root0: 0, root1: 0 };
function raySphere(t, e, s) {
  defined$1(s) || (s = new Interval());
  var i = t.origin, r = t.direction, a = e.center, n = e.radius * e.radius, o = Cartesian3.subtract(i, a, scratchPVec), h = solveQuadratic(Cartesian3.dot(r, r), 2 * Cartesian3.dot(r, o), Cartesian3.magnitudeSquared(o) - n, raySphereRoots);
  if (defined$1(h))
    return s.start = h.root0, s.stop = h.root1, s;
}
IntersectionTests.raySphere = function(t, e, s) {
  if (!defined$1(t))
    throw new DeveloperError("ray is required.");
  if (!defined$1(e))
    throw new DeveloperError("sphere is required.");
  if (defined$1(s = raySphere(t, e, s)) && !(s.stop < 0))
    return s.start = Math.max(s.start, 0), s;
};
var scratchLineSegmentRay = new Ray();
IntersectionTests.lineSegmentSphere = function(t, e, s, i) {
  if (!defined$1(t))
    throw new DeveloperError("p0 is required.");
  if (!defined$1(e))
    throw new DeveloperError("p1 is required.");
  if (!defined$1(s))
    throw new DeveloperError("sphere is required.");
  var r = scratchLineSegmentRay;
  Cartesian3.clone(t, r.origin);
  var a = Cartesian3.subtract(e, t, r.direction), n = Cartesian3.magnitude(a);
  if (Cartesian3.normalize(a, a), !(!defined$1(i = raySphere(r, s, i)) || i.stop < 0 || i.start > n))
    return i.start = Math.max(i.start, 0), i.stop = Math.min(i.stop, n), i;
};
var scratchQ = new Vector3$1(), scratchW = new Vector3$1();
function addWithCancellationCheck(t, e, s) {
  var i = t + e;
  return CesiumMath.sign(t) !== CesiumMath.sign(e) && Math.abs(i / Math.max(Math.abs(t), Math.abs(e))) < s ? 0 : i;
}
function quadraticVectorExpression(t, e, s, i, r) {
  var a, n = i * i, o = r * r, h = (t[StaticMatrix3.COLUMN1ROW1] - t[StaticMatrix3.COLUMN2ROW2]) * o, c = r * (i * addWithCancellationCheck(t[StaticMatrix3.COLUMN1ROW0], t[StaticMatrix3.COLUMN0ROW1], CesiumMath.EPSILON15) + e.y), l = t[StaticMatrix3.COLUMN0ROW0] * n + t[StaticMatrix3.COLUMN2ROW2] * o + i * e.x + s, u = o * addWithCancellationCheck(t[StaticMatrix3.COLUMN2ROW1], t[StaticMatrix3.COLUMN1ROW2], CesiumMath.EPSILON15), d = r * (i * addWithCancellationCheck(t[StaticMatrix3.COLUMN2ROW0], t[StaticMatrix3.COLUMN0ROW2]) + e.z), _ = [];
  if (0 === d && 0 === u) {
    if (0 === (a = QuadraticRealPolynomial.computeRealRoots(h, c, l)).length)
      return _;
    var m = a[0], p = Math.sqrt(Math.max(1 - m * m, 0));
    if (_.push(new Vector3$1(i, r * m, r * -p)), _.push(new Vector3$1(i, r * m, r * p)), 2 === a.length) {
      var f = a[1], y = Math.sqrt(Math.max(1 - f * f, 0));
      _.push(new Vector3$1(i, r * f, r * -y)), _.push(new Vector3$1(i, r * f, r * y));
    }
    return _;
  }
  var g = d * d, M = u * u, x = d * u, w = h * h + M, S = 2 * (c * h + x), C = 2 * l * h + c * c - M + g, E = 2 * (l * c - x), P = l * l - g;
  if (0 === w && 0 === S && 0 === C && 0 === E)
    return _;
  var b = (a = QuarticRealPolynomial.computeRealRoots(w, S, C, E, P)).length;
  if (0 === b)
    return _;
  for (var A2 = 0; A2 < b; ++A2) {
    var v = a[A2], T = v * v, I = Math.max(1 - T, 0), z = Math.sqrt(I), O = (CesiumMath.sign(h) === CesiumMath.sign(l) ? addWithCancellationCheck(h * T + l, c * v, CesiumMath.EPSILON12) : CesiumMath.sign(l) === CesiumMath.sign(c * v) ? addWithCancellationCheck(h * T, c * v + l, CesiumMath.EPSILON12) : addWithCancellationCheck(h * T + c * v, l, CesiumMath.EPSILON12)) * addWithCancellationCheck(u * v, d, CesiumMath.EPSILON15);
    O < 0 ? _.push(new Vector3$1(i, r * v, r * z)) : O > 0 ? _.push(new Vector3$1(i, r * v, r * -z)) : 0 !== z ? (_.push(new Vector3$1(i, r * v, r * -z)), _.push(new Vector3$1(i, r * v, r * z)), ++A2) : _.push(new Vector3$1(i, r * v, r * z));
  }
  return _;
}
IntersectionTests.rayEllipsoid = function(t, e) {
  if (!defined$1(t))
    throw new DeveloperError("ray is required.");
  if (!defined$1(e))
    throw new DeveloperError("ellipsoid is required.");
  var s, i, r, a, n, o = e.oneOverRadii, h = Cartesian3.multiplyComponents(o, t.origin, scratchQ), c = Cartesian3.multiplyComponents(o, t.direction, scratchW), l = Cartesian3.magnitudeSquared(h), u = Cartesian3.dot(h, c);
  if (l > 1) {
    if (u >= 0)
      return;
    var d = u * u;
    if (s = l - 1, d < (r = (i = Cartesian3.magnitudeSquared(c)) * s))
      return;
    if (d > r) {
      a = u * u - r;
      var _ = (n = -u + Math.sqrt(a)) / i, m = s / n;
      return _ < m ? new Interval(_, m) : { start: m, stop: _ };
    }
    var p = Math.sqrt(s / i);
    return new Interval(p, p);
  }
  return l < 1 ? (s = l - 1, a = u * u - (r = (i = Cartesian3.magnitudeSquared(c)) * s), new Interval(0, (n = -u + Math.sqrt(a)) / i)) : u < 0 ? new Interval(0, -u / (i = Cartesian3.magnitudeSquared(c))) : void 0;
};
var firstAxisScratch = new Vector3$1(), secondAxisScratch = new Vector3$1(), thirdAxisScratch = new Vector3$1(), referenceScratch = new Vector3$1(), bCart = new Vector3$1(), bScratch = new Matrix3(), btScratch = new Matrix3(), diScratch = new Matrix3(), dScratch = new Matrix3(), cScratch = new Matrix3(), tempMatrix = new Matrix3(), aScratch = new Matrix3(), sScratch = new Vector3$1(), closestScratch = new Vector3$1(), surfPointScratch = new Vector3$1();
IntersectionTests.grazingAltitudeLocation = function(t, e) {
  if (!defined$1(t))
    throw new DeveloperError("ray is required.");
  if (!defined$1(e))
    throw new DeveloperError("ellipsoid is required.");
  var s = t.origin, i = t.direction;
  if (!Cartesian3.equals(s, Cartesian3.ZERO)) {
    var r = e.geodeticSurfaceNormal(s, firstAxisScratch);
    if (Cartesian3.dot(i, r) >= 0)
      return s;
  }
  var a = defined$1(this.rayEllipsoid(t, e)), n = e.transformPositionToScaledSpace(i, firstAxisScratch), o = Cartesian3.normalize(n, n), h = Cartesian3.mostOrthogonalAxis(n, referenceScratch), c = Cartesian3.normalize(Cartesian3.cross(h, o, secondAxisScratch), secondAxisScratch), l = Cartesian3.normalize(Cartesian3.cross(o, c, thirdAxisScratch), thirdAxisScratch), u = bScratch;
  u[0] = o.x, u[1] = o.y, u[2] = o.z, u[3] = c.x, u[4] = c.y, u[5] = c.z, u[6] = l.x, u[7] = l.y, u[8] = l.z;
  var d = StaticMatrix3.transpose(u, btScratch), _ = StaticMatrix3.fromScale(e.radii, diScratch), m = StaticMatrix3.fromScale(e.oneOverRadii, dScratch), p = cScratch;
  p[0] = 0, p[1] = -i.z, p[2] = i.y, p[3] = i.z, p[4] = 0, p[5] = -i.x, p[6] = -i.y, p[7] = i.x, p[8] = 0;
  var f, y, g = StaticMatrix3.multiply(StaticMatrix3.multiply(d, m, tempMatrix), p, tempMatrix), M = StaticMatrix3.multiply(StaticMatrix3.multiply(g, _, aScratch), u, aScratch), x = StaticMatrix3.multiplyByVector(g, s, bCart), w = quadraticVectorExpression(M, Cartesian3.negate(x, firstAxisScratch), 0, 0, 1), S = w.length;
  if (S > 0) {
    for (var C = Cartesian3.clone(Cartesian3.ZERO, closestScratch), E = Number.NEGATIVE_INFINITY, P = 0; P < S; ++P) {
      f = StaticMatrix3.multiplyByVector(_, StaticMatrix3.multiplyByVector(u, w[P], sScratch), sScratch);
      var b = Cartesian3.normalize(Cartesian3.subtract(f, s, referenceScratch), referenceScratch), A2 = Cartesian3.dot(b, i);
      A2 > E && (E = A2, C = Cartesian3.clone(f, C));
    }
    var v = e.cartesianToCartographic(C, surfPointScratch);
    return E = CesiumMath.clamp(E, 0, 1), y = Cartesian3.magnitude(Cartesian3.subtract(C, s, referenceScratch)) * Math.sqrt(1 - E * E), y = a ? -y : y, v.z = y, e.cartographicToCartesian(v, new Vector3$1());
  }
};
var lineSegmentPlaneDifference = new Vector3$1();
IntersectionTests.lineSegmentPlane = function(t, e, s, i) {
  if (!defined$1(t))
    throw new DeveloperError("endPoint0 is required.");
  if (!defined$1(e))
    throw new DeveloperError("endPoint1 is required.");
  if (!defined$1(s))
    throw new DeveloperError("plane is required.");
  defined$1(i) || (i = new Vector3$1());
  var r = Cartesian3.subtract(e, t, lineSegmentPlaneDifference), a = s.normal, n = Cartesian3.dot(a, r);
  if (!(Math.abs(n) < CesiumMath.EPSILON6)) {
    var o = Cartesian3.dot(a, t), h = -(s.constant + o) / n;
    if (!(h < 0 || h > 1))
      return Cartesian3.multiplyByScalar(r, h, i), Cartesian3.add(t, i, i), i;
  }
}, IntersectionTests.trianglePlaneIntersection = function(t, e, s, i) {
  if (!(defined$1(t) && defined$1(e) && defined$1(s) && defined$1(i)))
    throw new DeveloperError("p0, p1, p2, and plane are required.");
  var r, a, n = i.normal, o = i.constant, h = Cartesian3.dot(n, t) + o < 0, c = Cartesian3.dot(n, e) + o < 0, l = Cartesian3.dot(n, s) + o < 0, u = 0;
  if (u += h ? 1 : 0, u += c ? 1 : 0, 1 !== (u += l ? 1 : 0) && 2 !== u || (r = new Vector3$1(), a = new Vector3$1()), 1 === u) {
    if (h)
      return IntersectionTests.lineSegmentPlane(t, e, i, r), IntersectionTests.lineSegmentPlane(t, s, i, a), { positions: [t, e, s, r, a], indices: [0, 3, 4, 1, 2, 4, 1, 4, 3] };
    if (c)
      return IntersectionTests.lineSegmentPlane(e, s, i, r), IntersectionTests.lineSegmentPlane(e, t, i, a), { positions: [t, e, s, r, a], indices: [1, 3, 4, 2, 0, 4, 2, 4, 3] };
    if (l)
      return IntersectionTests.lineSegmentPlane(s, t, i, r), IntersectionTests.lineSegmentPlane(s, e, i, a), { positions: [t, e, s, r, a], indices: [2, 3, 4, 0, 1, 4, 0, 4, 3] };
  } else if (2 === u) {
    if (!h)
      return IntersectionTests.lineSegmentPlane(e, t, i, r), IntersectionTests.lineSegmentPlane(s, t, i, a), { positions: [t, e, s, r, a], indices: [1, 2, 4, 1, 4, 3, 0, 3, 4] };
    if (!c)
      return IntersectionTests.lineSegmentPlane(s, e, i, r), IntersectionTests.lineSegmentPlane(t, e, i, a), { positions: [t, e, s, r, a], indices: [2, 0, 4, 2, 4, 3, 1, 3, 4] };
    if (!l)
      return IntersectionTests.lineSegmentPlane(t, s, i, r), IntersectionTests.lineSegmentPlane(e, s, i, a), { positions: [t, e, s, r, a], indices: [0, 1, 4, 0, 4, 3, 2, 3, 4] };
  }
};
class Cartesian4 {
  static clone(t, e) {
    return e || (e = new Vector4()), e.copy(t), e;
  }
  static fromElements(t, e, s, i, r) {
    return r || (r = new Vector4()), r.set(t, e, s, i), r;
  }
  static lerp(t, e, s, i) {
    return i || (i = new Vector4()), i.lerpVectors(t, e, s), i;
  }
  static equals(t, e) {
    return t.equals(e);
  }
  static normalize(t, e) {
    return t === e ? (t.normalize(), t) : (e.copy(t), e.normalize(), e);
  }
  static add(t, e, s) {
    return s || (s = new Vector4()), s.addVectors(t, e);
  }
  static multiplyByScalar(t, e, s) {
    return s || (s = new Vector4()), s.copy(t).multiplyScalar(e), s;
  }
  static subtract(t, e, s) {
    return s || (s = new Vector4()), s.subVectors(t, e), s;
  }
  static distance(t, e) {
    return t.distanceTo(e);
  }
}
__publicField(Cartesian4, "ZERO", new Vector4(0, 0, 0, 0));
__publicField(Cartesian4, "UNIT_W", Object.freeze(new Vector4(0, 0, 0, 1)));
const scratchNormal = new Vector3$1(), scratchCartesian$1 = new Vector3$1(), scratchInverseTranspose = new Matrix4(), scratchPlaneCartesian4 = new Vector4(0, 0, 0, 0), scratchTransformNormal = new Vector3$1();
class StaticPlane {
  static fromPointNormal(t, e, s) {
    return s || (s = new Plane()), s.setFromNormalAndCoplanarPoint(e, t), s;
  }
  static fromCartesian4(t, e) {
    const s = Cartesian3.fromCartesian4(t, scratchNormal), i = t.w;
    if (!CesiumMath.equalsEpsilon(Cartesian3.magnitude(s), 1, CesiumMath.EPSILON6))
      throw new Error("normal must be normalized.");
    return defined$1(e) ? (Cartesian3.clone(s, e.normal), e.constant = i, e) : new StaticPlane(s, i);
  }
  static getPointDistance(t, e) {
    return Cartesian3.dot(t.normal, e) + t.constant;
  }
  static projectPointOntoPlane(t, e, s) {
    defined$1(s) || (s = new Vector3$1());
    const i = StaticPlane.getPointDistance(t, e), r = Cartesian3.multiplyByScalar(t.normal, i, scratchCartesian$1);
    return Cartesian3.subtract(e, r, s);
  }
  static transform(t, e, s) {
    const i = t.normal, r = t.constant, a = Matrix4.inverseTranspose(e, scratchInverseTranspose);
    let n = Cartesian4.fromElements(i.x, i.y, i.z, r, scratchPlaneCartesian4);
    n = Matrix4.multiplyByVector(a, n, n);
    const o = Cartesian3.fromCartesian4(n, scratchTransformNormal);
    return n = Cartesian4.divideByScalar(n, Cartesian3.magnitude(o), n), Plane.fromCartesian4(n, s);
  }
  static clone(t, e) {
    return defined$1(e) ? (Cartesian3.clone(t.normal, e.normal), e.constant = t.constant, e) : new StaticPlane(t.normal, t.constant);
  }
  static equals(t, e) {
    return t.constant === e.constant && Cartesian3.equals(t.normal, e.normal);
  }
}
Plane.ORIGIN_XY_PLANE = Object.freeze(new StaticPlane(Cartesian3.UNIT_Z, 0)), Plane.ORIGIN_YZ_PLANE = Object.freeze(new StaticPlane(Cartesian3.UNIT_X, 0)), Plane.ORIGIN_ZX_PLANE = Object.freeze(new StaticPlane(Cartesian3.UNIT_Y, 0));
const scratchCart4 = new Vector4(0, 0, 0, 0), scratchProjectPointOntoPlaneRay$1 = new Ray(), scratchProjectPointOntoPlaneCartesian3$1 = new Vector3$1();
class EllipsoidTangentPlane {
  constructor(t, e) {
    if (!defined$1(t = (e = defaultValue(e, Ellipsoid.WGS84)).scaleToGeodeticSurface(t)))
      throw new DeveloperError("origin must not be at the center of the ellipsoid.");
    const s = Transforms.eastNorthUpToFixedFrame(t, e);
    this._ellipsoid = e, this._origin = t, this._xAxis = Cartesian3.fromCartesian4(StaticMatrix4.getColumn(s, 0, scratchCart4)), this._yAxis = Cartesian3.fromCartesian4(StaticMatrix4.getColumn(s, 1, scratchCart4));
    const i = Cartesian3.fromCartesian4(StaticMatrix4.getColumn(s, 2, scratchCart4));
    this._plane = StaticPlane.fromPointNormal(t, i);
  }
  static fromPoints(t, e) {
    let s = t[0].x, i = t[0].y, r = t[0].z, a = t[0].x, n = t[0].y, o = t[0].z;
    for (let e2 = 0; e2 < t.length; e2++) {
      const h2 = t[e2], c2 = h2.x, l2 = h2.y, u2 = h2.z;
      s = Math.min(c2, s), a = Math.max(c2, a), i = Math.min(l2, i), n = Math.max(l2, n), r = Math.min(u2, r), o = Math.max(u2, o);
    }
    const h = new Vector3$1(s, i, r), c = new Vector3$1(a, n, o), l = new Box3(h, c);
    let u = new Vector3$1();
    return u = l.getCenter(u), new EllipsoidTangentPlane(u, e);
  }
  projectPointToNearestOnPlane(t, e) {
    defined$1(e) || (e = new Cartesian2());
    const s = scratchProjectPointOntoPlaneRay$1;
    s.origin = t, Cartesian3.clone(this._plane.normal, s.direction);
    let i = IntersectionTests.rayPlane(s, this._plane, scratchProjectPointOntoPlaneCartesian3$1);
    if (defined$1(i) || (Cartesian3.negate(s.direction, s.direction), i = IntersectionTests.rayPlane(s, this._plane, scratchProjectPointOntoPlaneCartesian3$1)), defined$1(i)) {
      const t2 = Cartesian3.subtract(i, this._origin, i), s2 = Cartesian3.dot(this._xAxis, t2), r = Cartesian3.dot(this._yAxis, t2);
      return defined$1(e) ? (e.x = s2, e.y = r, e) : new Vector2(s2, r);
    }
  }
  projectPointsOntoPlane(t, e) {
    defined$1(e) || (e = []);
    let s = 0;
    const i = t.length;
    for (let r = 0; r < i; r++) {
      const i2 = this.projectPointOntoPlane(t[r], e[s]);
      i2 && (e[s] = i2, s++);
    }
    return e.length = s, e;
  }
  projectPointOntoPlane(t, e) {
    const s = scratchProjectPointOntoPlaneRay$1;
    s.origin = t, Cartesian3.normalize(t, s.direction);
    let i = IntersectionTests.rayPlane(s, this._plane, scratchProjectPointOntoPlaneCartesian3$1);
    if (defined$1(i) || (Cartesian3.negate(s.direction, s.direction), i = IntersectionTests.rayPlane(s, this._plane, scratchProjectPointOntoPlaneCartesian3$1)), defined$1(i)) {
      const t2 = Cartesian3.subtract(i, this._origin, i), s2 = Cartesian3.dot(this._xAxis, t2), r = Cartesian3.dot(this._yAxis, t2);
      return defined$1(e) ? (e.x = s2, e.y = r, e) : new Vector2(s2, r);
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
const scratchCartographic = new Vector3$1(), scratchCartesian = new Vector3$1(), scratchProjectPointOntoPlaneRay = new Ray(), scratchProjectPointOntoPlaneRayDirection = new Vector3$1(), scratchProjectPointOntoPlaneCartesian3 = new Vector3$1();
const _Stereographic = class {
  constructor(t, e) {
    this.position = t, this.position || (t = new Vector2()), this.tangentPlane = e, this.tangentPlane || (this.tangentPlane = _Stereographic.NORTH_POLE_TANGENT_PLANE);
  }
  getLatitude(t) {
    t || (t = Ellipsoid.WGS84), scratchCartographic.x = this.longitude, scratchCartographic.y = this.conformalLatitude, scratchCartographic.z = 0;
    const e = this.ellipsoid.cartographicToCartesian(scratchCartographic, scratchCartesian);
    return t.cartesianToCartographic(e, scratchCartographic), scratchCartographic.y;
  }
  static fromCartesian(t, e) {
    const s = t.z < 0 ? -1 : 1;
    let i = _Stereographic.NORTH_POLE_TANGENT_PLANE, r = _Stereographic.SOUTH_POLE;
    s < 0 && (i = _Stereographic.SOUTH_POLE_TANGENT_PLANE, r = _Stereographic.NORTH_POLE);
    const a = scratchProjectPointOntoPlaneRay;
    a.origin = i.ellipsoid.scaleToGeocentricSurface(t, a.origin), a.direction = Cartesian3.subtract(a.origin, r, scratchProjectPointOntoPlaneRayDirection), Cartesian3.normalize(a.direction, a.direction);
    const n = IntersectionTests.rayPlane(a, i.plane, scratchProjectPointOntoPlaneCartesian3), o = Cartesian3.subtract(n, r, n), h = Cartesian3.dot(i.xAxis, o), c = s * Cartesian3.dot(i.yAxis, o);
    return e ? (e.position = new Vector2(h, c), e.tangentPlane = i, e) : new _Stereographic(new Vector2(h, c), i);
  }
  clone(t) {
    return _Stereographic.clone(this, t);
  }
  static clone(t, e) {
    if (t)
      return e ? (e.position = t.position, e.tangentPlane = t.tangentPlane, e) : new _Stereographic(t.position, t.tangentPlane);
  }
  get ellipsoid() {
    return this.tangentPlane.ellipsoid;
  }
  get x() {
    return this.position.x;
  }
  get y() {
    return this.position.y;
  }
  get conformalLatitude() {
    const t = this.position.length(), e = 2 * this.ellipsoid.maximumRadius;
    return this.tangentPlane.plane.normal.z * (CesiumMath.PI_OVER_TWO - 2 * Math.atan2(t, e));
  }
  get longitude() {
    let t = CesiumMath.PI_OVER_TWO + Math.atan2(this.y, this.x);
    return t > Math.PI && (t -= CesiumMath.TWO_PI), t;
  }
};
let Stereographic = _Stereographic;
__publicField(Stereographic, "HALF_UNIT_SPHERE", Object.freeze(new Ellipsoid(0.5, 0.5, 0.5)));
__publicField(Stereographic, "NORTH_POLE", Object.freeze(new Vector3$1(0, 0, 0.5)));
__publicField(Stereographic, "SOUTH_POLE", Object.freeze(new Vector3$1(0, 0, -0.5)));
__publicField(Stereographic, "NORTH_POLE_TANGENT_PLANE", Object.freeze(new EllipsoidTangentPlane(_Stereographic.NORTH_POLE, _Stereographic.HALF_UNIT_SPHERE)));
__publicField(Stereographic, "SOUTH_POLE_TANGENT_PLANE", Object.freeze(new EllipsoidTangentPlane(_Stereographic.SOUTH_POLE, _Stereographic.HALF_UNIT_SPHERE)));
function sortPolygonPoints(t) {
  if (t.length < 3)
    throw new Error("\u70B9\u7684\u6570\u91CF\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E3\u4E2A\u624D\u80FD\u5F62\u6210\u591A\u8FB9\u5F62");
  const e = calculateCentroid(t), s = t.map((t2, s2) => ({ index: s2, angle: Math.atan2(t2.y - e.y, t2.x - e.x) }));
  return s.sort((t2, e2) => t2.angle - e2.angle), s.map((t2) => t2.index);
}
function calculateCentroid(t, e) {
  e || (e = new Vector2());
  const s = t.length;
  let i = 0, r = 0;
  return t.forEach((t2) => {
    i += t2.x, r += t2.y;
  }), e.set(i / s, r / s);
}
function getLineIntersection(t, e, s, i, r, a) {
  const n = t.x, o = t.y, h = e.x, c = e.y, l = s.x, u = s.y, d = i.x, _ = i.y, m = (n - h) * (u - _) - (o - c) * (l - d);
  if (Math.abs(m) < 1e-4)
    return null;
  const p = ((n - l) * (u - _) - (o - u) * (l - d)) / m, f = -((n - h) * (o - u) - (o - c) * (n - l)) / m;
  return p >= 0 && p <= 1 && f >= 0 && f <= 1 ? { point: t.clone().lerp(e, p), uv: r.clone().lerp(a, p) } : null;
}
function isPointInTriangle(t, e, s, i) {
  const r = s.x - e.x, a = s.y - e.y, n = i.x - e.x, o = i.y - e.y, h = t.x - e.x, c = t.y - e.y, l = r * o - a * n, u = (h * o - c * n) / l, d = (r * c - a * h) / l;
  return u >= 0 && d >= 0 && u + d <= 1;
}
function isPointInRectangle(t, e, s, i, r) {
  return t.x >= e && t.x <= s && t.y >= i && t.y <= r;
}
function getRectanglePoints(t, e, s, i) {
  return [new Vector3$1(t, s, 0), new Vector3$1(e, s, 0), new Vector3$1(e, i, 0), new Vector3$1(t, i, 0)];
}
function getRectangleEdges(t) {
  return [[t[0], t[1]], [t[1], t[2]], [t[2], t[3]], [t[3], t[0]]];
}
function calculateIntersection(t, e, s) {
  const i = [];
  t.forEach((t2, r2) => {
    if (isPointInRectangle(t2, s[0].x, s[2].x, s[0].y, s[2].y)) {
      const s2 = t2.x + "," + t2.y + "," + t2.z;
      i[s2] || (i[s2] = { point: t2, uv: e[r2] });
    }
  });
  const r = Math.min(t[0].x, Math.min(t[1].x, t[2].x)), a = Math.max(t[0].x, Math.max(t[1].x, t[2].x)), n = Math.min(t[0].y, Math.min(t[1].y, t[2].y)), o = Math.max(t[0].y, Math.max(t[1].y, t[2].y)), h = Math.min(e[0].x, Math.min(e[1].x, e[2].x)), c = Math.max(e[0].x, Math.max(e[1].x, e[2].x)), l = Math.min(e[0].y, Math.min(e[1].y, e[2].y)), u = Math.max(e[0].y, Math.max(e[1].y, e[2].y)), d = a - r, _ = o - n, m = c - h, p = u - l;
  s.forEach((e2) => {
    if (isPointInTriangle(e2, ...t)) {
      const t2 = e2.x + "," + e2.y + "," + e2.z;
      if (!i[t2]) {
        const s2 = h + m * (e2.x - r) / d, a2 = l + p * (e2.y - n) / _;
        i[t2] = { point: e2, uv: new Vector2(s2, a2) };
      }
    }
  });
  const f = getRectangleEdges(s);
  return [[0, 1], [1, 2], [2, 0]].forEach(([s2, r2]) => {
    f.forEach(([a2, n2]) => {
      const o2 = getLineIntersection(t[s2], t[r2], a2, n2, e[s2], e[r2]);
      if (o2) {
        const { point: t2 } = o2, e2 = t2.x + "," + t2.y + "," + t2.z;
        i[e2] || (i[e2] = o2);
      }
    });
  }), Object.values(i);
}
new Stereographic(), new Stereographic(), new Vector2(), new Vector2(), new Stereographic(), new Vector2();
const subdivisionV0Scratch = new Vector3$1(), subdivisionV1Scratch = new Vector3$1(), subdivisionV2Scratch = new Vector3$1();
new Vector3$1(), new Vector3$1(), new Vector3$1();
const subdivisionMidScratch = new Vector3$1(), subdivisionT0Scratch = new Vector2(), subdivisionT1Scratch = new Vector2(), subdivisionT2Scratch = new Vector2(), subdivideWithRange = (t, e, s, i, r, a, n, o, h) => {
  const c = [];
  for (let e2 = 0; e2 < t.length; e2++) {
    const i2 = t[e2];
    h[`${i2.x},${i2.y},${i2.z}`] = s[e2];
    isPointInRectangle(i2, o[0], o[1], o[0], o[1]) && c.push(e2);
  }
  if (3 === c.length)
    return false;
  const l = getRectanglePoints(o[0], o[1], o[0], o[1]), u = calculateIntersection([t[0], t[1], t[2]], e, l), d = u.map((t2) => t2.point), _ = u.map((t2) => t2.uv);
  if (d.length > 2) {
    const t2 = sortPolygonPoints(d), e2 = [];
    for (let s2 = 0, n2 = t2.length; s2 < n2; s2++) {
      const n3 = t2[s2], o2 = d[n3], c2 = _[n3], l2 = `${o2.x},${o2.y},${o2.z}`;
      defined$2(h[l2]) || (r.push(o2.x, o2.y, o2.z), i && a.push(c2.x, c2.y), h[l2] = r.length / 3 - 1);
      const u2 = h[l2];
      e2.push(u2);
    }
    3 === d.length ? n.push(e2[1], e2[2], e2[0]) : 4 === d.length ? n.push(e2[2], e2[3], e2[0], e2[0], e2[1], e2[2]) : 5 === d.length && n.push(e2[3], e2[4], e2[0], e2[0], e2[1], e2[2], e2[2], e2[3], e2[0]);
  }
  return true;
}, subdivideMesh = (t, e, s, i, r = 0, a = [-0.501, 0.501]) => {
  const n = !!s, o = Array.from(e);
  let h = 0;
  const c = t.length;
  let l = null, u = null;
  if (Array.isArray(t[0])) {
    l = [];
    let e2 = 0;
    for (h = 0; h < c; h++) {
      const s2 = t[h];
      l[e2++] = s2[0], l[e2++] = s2[1], l[e2++] = s2[2];
    }
  } else
    l = t.slice(0);
  if (n) {
    if (Array.isArray(s[0])) {
      u = [];
      let t2 = 0;
      for (h = 0; h < s.length; h++) {
        const e2 = s[h];
        u[t2++] = e2[0], u[t2++] = e2[1];
      }
    } else
      u = s.slice(0);
  }
  const d = [], _ = {}, m = {}, p = i * i;
  for (; o.length > 0; ) {
    const t2 = o.pop(), e2 = o.pop(), s2 = o.pop(), i2 = subdivisionV0Scratch.fromArray(l, 3 * s2), c2 = subdivisionV1Scratch.fromArray(l, 3 * e2), f = subdivisionV2Scratch.fromArray(l, 3 * t2);
    let y, g, M;
    n && (y = subdivisionT0Scratch.fromArray(u, 2 * s2), g = subdivisionT1Scratch.fromArray(u, 2 * e2), M = subdivisionT2Scratch.fromArray(u, 2 * t2));
    const x = Cartesian3.magnitudeSquared(Cartesian3.subtract(i2, c2, subdivisionMidScratch)), w = Cartesian3.magnitudeSquared(Cartesian3.subtract(c2, f, subdivisionMidScratch)), S = Cartesian3.magnitudeSquared(Cartesian3.subtract(f, i2, subdivisionMidScratch)), C = Math.max(x, w, S);
    let E, P, b;
    if (C > p)
      x === C ? (E = `${Math.min(s2, e2)} ${Math.max(s2, e2)}`, h = _[E], null == h && (P = Cartesian3.add(i2, c2, subdivisionMidScratch), Cartesian3.multiplyByScalar(P, 0.5, P), l.push(P.x, P.y, P.z), h = l.length / 3 - 1, _[E] = h, n && (b = Cartesian2.add(y, g, subdivisionMidScratch), Cartesian2.multiplyByScalar(b, 0.5, b), u.push(b.x, b.y))), o.push(s2, h, t2), o.push(h, e2, t2)) : w === C ? (E = `${Math.min(e2, t2)} ${Math.max(e2, t2)}`, h = _[E], h || (P = Cartesian3.add(c2, f, subdivisionMidScratch), Cartesian3.multiplyByScalar(P, 0.5, P), l.push(P.x, P.y, P.z), h = l.length / 3 - 1, _[E] = h, n && (b = Cartesian2.add(g, M, subdivisionMidScratch), Cartesian2.multiplyByScalar(b, 0.5, b), u.push(b.x, b.y))), o.push(e2, h, s2), o.push(h, t2, s2)) : S === C && (E = `${Math.min(t2, s2)} ${Math.max(t2, s2)}`, h = _[E], h || (P = Cartesian3.add(f, i2, subdivisionMidScratch), Cartesian3.multiplyByScalar(P, 0.5, P), l.push(P.x, P.y, P.z), h = l.length / 3 - 1, _[E] = h, n && (b = Cartesian2.add(M, y, subdivisionMidScratch), Cartesian2.multiplyByScalar(b, 0.5, b), u.push(b.x, b.y))), o.push(t2, h, e2), o.push(h, s2, e2));
    else {
      if (subdivideWithRange([i2, c2, f], [y, g, M], [s2, e2, t2], n, l, u, o, a, m))
        continue;
      d.push(s2 + r), d.push(e2 + r), d.push(t2 + r);
    }
  }
  return { vertices: l, uvs: u, indices: d };
}, _pointIn$1 = new Vector3$1(), _pointOut$1 = new Vector3$1(), reprojectCoordinate = (t, e, s, i, r, a) => {
  let n = CoordTransformer.canTransform(t, e);
  return s !== i && s && i || n ? (s.unprojectCoordinate(r, _pointOut$1), n ? CoordTransformer.transform(t, e, _pointOut$1, _pointIn$1) : _pointIn$1.copy(_pointOut$1), i.projectCoordinate(_pointIn$1, a), a) : (a.copy(r), a);
}, projectVertices = (t, e, s = true, i = true, r = false) => {
  if (!e.forceProjectCoordinates && !r && e.targetProjectionName === e.sourceProjectionName)
    return;
  const a = e.sourceProjection, n = e.targetProjection, o = e.sourceCoordType, h = e.targetCoordType, [c, l, u] = e.targetCenter, d = e.forceUseGeoBoundingBox || a.isGeo, _ = d ? e.geoBoundingBox : e.projectedBoundingBox;
  let m, p, f, y;
  if (_.isBox3) {
    const t2 = _.min, e2 = _.max;
    m = t2.x, p = t2.y, f = e2.x, y = e2.y;
  } else
    [m, p, , f, y] = _;
  const g = f - m, M = y - p;
  if (s)
    for (let e2 = 0, s2 = t.length - 2; e2 < s2; e2 += 3) {
      const s3 = t[e2], r2 = t[e2 + 1], _2 = t[e2 + 2];
      _pointIn$1.set(m + (s3 + 0.5) * g, p + (r2 + 0.5) * M, _2), d ? (o !== h && CoordTransformer.transform(o, h, _pointIn$1, _pointIn$1), n.projectCoordinate(_pointIn$1, _pointOut$1)) : reprojectCoordinate(o, h, a, n, _pointIn$1, _pointOut$1), t[e2] = _pointOut$1.x, t[e2 + 1] = _pointOut$1.y, t[e2 + 2] = _pointOut$1.z, i && (t[e2] -= c, t[e2 + 1] -= l, t[e2 + 2] -= u);
    }
  else
    for (let e2 = 0, s2 = t.length; e2 < s2; e2 += 1) {
      const s3 = t[e2], r2 = s3[0], _2 = s3[1], f2 = s3[2];
      _pointIn$1.set(m + (r2 + 0.5) * g, p + (_2 + 0.5) * M, f2), d ? (o !== h && CoordTransformer.transform(o, h, _pointIn$1, _pointIn$1), n.projectCoordinate(_pointIn$1, _pointOut$1)) : reprojectCoordinate(o, h, a, n, _pointIn$1, _pointOut$1), s3[0] = _pointOut$1.x, s3[1] = _pointOut$1.y, s3[2] = _pointOut$1.z, i && (s3[0] -= c, s3[1] -= l, s3[2] -= u);
    }
}, subdivideVertices = (t, e, s, i) => {
  if (i.sourceProjectionName === i.targetProjectionName)
    return { vertices: t, indices: e, uvs: s };
  const r = Math.max(2, 16 - i.z);
  return subdivideMesh(t, e, s, 1 / r);
}, defaultGeoBoundingBox = new Box3(new Vector3$1(-180, -90, -100), new Vector3$1(180, 90, 100));
defaultGeoBoundingBox.isDefault = true, Object.freeze(defaultGeoBoundingBox), Object.freeze(defaultGeoBoundingBox.min), Object.freeze(defaultGeoBoundingBox.max);
const _tempVector3In = new Vector3$1(), _tempVector3Out = new Vector3$1(), projectBoundingBoxMethods = { MIN_MAX: 1, FOUR_CORNERS: 2, FOUR_CORNERS_WITH_EQUATOR: 3 };
class Projection {
  constructor() {
    __publicField(this, "isProjection", true);
    __publicField(this, "isGeo", false);
    __publicField(this, "isAxisAligned", false);
    __publicField(this, "projectBoundingBoxMethod", projectBoundingBoxMethods.MIN_MAX);
  }
  projectCoordinate(t, e) {
    throw new Error("projectCoordinate() must be implemented in derived classes");
  }
  unprojectCoordinate(t, e) {
    throw new Error("unprojectCoordinate() must be implemented in derived classes");
  }
  geoBoxToProjectedBox(t, e, s = true) {
    if (e || (e = new Box3()), this.projectBoundingBoxMethod === projectBoundingBoxMethods.MIN_MAX)
      this.projectCoordinate(t.min, e.min, s), this.projectCoordinate(t.max, e.max, s);
    else if (this.projectBoundingBoxMethod === projectBoundingBoxMethods.FOUR_CORNERS || this.projectBoundingBoxMethod === projectBoundingBoxMethods.FOUR_CORNERS_WITH_EQUATOR) {
      let { x: i, y: r, z: a } = t.min, { x: n, y: o, z: h } = t.max;
      _tempVector3In.set(i, r, a), this.projectCoordinate(_tempVector3In, _tempVector3Out, s), e.expandByPoint(_tempVector3Out), _tempVector3In.set(n, o, h), this.projectCoordinate(_tempVector3In, _tempVector3Out, s), e.expandByPoint(_tempVector3Out), _tempVector3In.set(i, o, 0), this.projectCoordinate(_tempVector3In, _tempVector3Out, s), e.expandByPoint(_tempVector3Out), _tempVector3In.set(n, r, 0), this.projectCoordinate(_tempVector3In, _tempVector3Out, s), e.expandByPoint(_tempVector3Out), this.projectBoundingBoxMethod === projectBoundingBoxMethods.FOUR_CORNERS_WITH_EQUATOR && r < 0 && o > 0 && (_tempVector3In.set(i, 0, 0), this.projectCoordinate(_tempVector3In, _tempVector3Out, s), e.expandByPoint(_tempVector3Out), _tempVector3In.set(n, 0, 0), this.projectCoordinate(_tempVector3In, _tempVector3Out, s), e.expandByPoint(_tempVector3Out));
    }
    return e;
  }
  getGeodeticSurfaceNormal(t, e) {
    return e || (e = new Vector3$1()), e.set(0, 0, 1), e;
  }
  getProjectedSurfaceNormal(t, e) {
    return e || (e = new Vector3$1()), e.set(0, 0, 1), e;
  }
  projectedBoxToGeoBox(t, e, s = true) {
    return e || (e = new Box3()), this.unprojectCoordinate(t.min, e.min, s), this.unprojectCoordinate(t.max, e.max, s), e;
  }
  equals(t) {
    return !!t && this.name === t.name;
  }
  localFrameToFixedFrame(t, e) {
    return e || (e = new Matrix4()), e.identity(), e.setPosition(t), e;
  }
  get geoBoundingBox() {
    return this._geoBoundingBox || defaultGeoBoundingBox;
  }
  get projectedBoundingBox() {
    if (!this._projectedBoundingBox) {
      const t = this.geoBoundingBox;
      this._projectedBoundingBox = this.geoBoxToProjectedBox(t, null, false);
    }
    return this._projectedBoundingBox;
  }
}
const extendUnprojectCoordinate = (t, e, s, i, r = false) => {
  if (Math.abs(t) < i)
    return e;
  const a = t > 0 ? 1 : -1;
  if (r)
    return a * s;
  return a * (s * (1 + (Math.abs(t) - i) / i));
}, extendProjectCoordinate = (t, e, s, i, r = false) => {
  if (Math.abs(t) < s)
    return e;
  const a = t > 0 ? 1 : -1;
  if (r)
    return a * i;
  return a * (i * (1 + (Math.abs(t) - s) / s));
}, D2R = Math.PI / 180, A = 6378137, MAXEXTENT = 20037508, R2D = 180 / Math.PI, MAXLON = 85.0511287798;
function toMercator(t, e = null, s = false) {
  var i = Math.abs(t[0]) <= 180 ? t[0] : t[0] - 360 * sign(t[0]);
  const r = e || [0, 0];
  return r[0] = A * i * D2R, r[1] = A * Math.log(Math.tan(0.25 * Math.PI + 0.5 * t[1] * D2R)), s ? (r[0] = extendProjectCoordinate(t[0], r[0], 180, MAXEXTENT), r[1] = extendProjectCoordinate(t[1], r[1], MAXLON, MAXEXTENT)) : (r[0] > MAXEXTENT && (r[0] = MAXEXTENT), r[0] < -MAXEXTENT && (r[0] = -MAXEXTENT), r[1] > MAXEXTENT && (r[1] = MAXEXTENT), r[1] < -MAXEXTENT && (r[1] = -MAXEXTENT)), r;
}
function toWgs84(t, e, s = false) {
  const i = e || [0, 0];
  return i[0] = t[0] * R2D / A, i[1] = (0.5 * Math.PI - 2 * Math.atan(Math.exp(-t[1] / A))) * R2D, s && (i[0] = extendUnprojectCoordinate(t[0], i[0], 180, MAXEXTENT), i[1] = extendUnprojectCoordinate(t[1], i[1], MAXLON, MAXEXTENT)), i;
}
function sign(t) {
  return t < 0 ? -1 : t > 0 ? 1 : 0;
}
const _tempCoordinate = [0, 0], _inputArray$1 = [0, 0];
class WebMercatorProjection extends Projection {
  constructor() {
    super(...arguments);
    __publicField(this, "name", PROJECTION_WEB_MERCATOR);
    __publicField(this, "isAxisAligned", true);
  }
  projectCoordinate(t, e, s = false) {
    _inputArray$1[0] = t.x, _inputArray$1[1] = t.y, s || (_inputArray$1[0] < -180 && (_inputArray$1[0] = -180), _inputArray$1[0] > 180 && (_inputArray$1[0] = 180), _inputArray$1[1] < -85.0511287798 && (_inputArray$1[1] = -85.0511287798), _inputArray$1[1] > 85.0511287798 && (_inputArray$1[1] = 85.0511287798));
    const i = toMercator(_inputArray$1, _tempCoordinate, s);
    return e || (e = new Vector3$1()), e.x = i[0], e.y = i[1], e.z = t.z, e;
  }
  unprojectCoordinate(t, e, s = false) {
    const i = toWgs84([t.x, t.y], _tempCoordinate, s);
    return e || (e = new Vector3$1()), e.x = i[0], e.y = i[1], e.z = t.z, e;
  }
}
const Intersect = { OUTSIDE: -1, INTERSECTING: 0, INSIDE: 1 };
var Intersect$1 = Object.freeze(Intersect);
class OrientedBoundingBox {
  constructor(t, e) {
    this.isOrientedBoundingBox = true, this.center = Cartesian3.clone(defaultValue(t, Cartesian3.ZERO), new Vector3$1()), this.halfAxes = StaticMatrix3.clone(defaultValue(e, StaticMatrix3.ZERO));
  }
  intersectPlane(t) {
    return OrientedBoundingBox.intersectPlane(this, t);
  }
  distanceSquaredTo(t) {
    return OrientedBoundingBox.distanceSquaredTo(this, t);
  }
  computeCorners(t) {
    return OrientedBoundingBox.computeCorners(this, t);
  }
  getCenter(t) {
    return defined$1(t) ? (t.copy(this.center), t) : this.center.clone();
  }
  intersectsObb(t) {
    const e = this.center, s = t.center, i = this.halfAxes, r = t.halfAxes, a = new Vector3$1().subVectors(s, e), n = new Vector3$1(i.elements[0], i.elements[1], i.elements[2]), o = new Vector3$1(i.elements[3], i.elements[4], i.elements[5]), h = new Vector3$1(i.elements[6], i.elements[7], i.elements[8]), c = new Vector3$1(r.elements[0], r.elements[1], r.elements[2]), l = new Vector3$1(r.elements[3], r.elements[4], r.elements[5]), u = new Vector3$1(r.elements[6], r.elements[7], r.elements[8]), d = n.length(), _ = o.length(), m = h.length();
    n.normalize(), o.normalize(), h.normalize();
    const p = c.length(), f = l.length(), y = u.length();
    let g, M, x;
    return c.normalize(), l.normalize(), u.normalize(), g = d, M = p * Math.abs(n.dot(c)) + f * Math.abs(n.dot(l)) + y * Math.abs(n.dot(u)), x = Math.abs(a.dot(n)), !(x > g + M) && (g = _, M = p * Math.abs(o.dot(c)) + f * Math.abs(o.dot(l)) + y * Math.abs(o.dot(u)), x = Math.abs(a.dot(o)), !(x > g + M) && (g = m, M = p * Math.abs(h.dot(c)) + f * Math.abs(h.dot(l)) + y * Math.abs(h.dot(u)), x = Math.abs(a.dot(h)), !(x > g + M) && (g = d * Math.abs(c.dot(n)) + _ * Math.abs(c.dot(o)) + m * Math.abs(c.dot(h)), M = p, x = Math.abs(a.dot(c)), !(x > g + M) && (g = d * Math.abs(l.dot(n)) + _ * Math.abs(l.dot(o)) + m * Math.abs(l.dot(h)), M = f, x = Math.abs(a.dot(l)), !(x > g + M) && (g = d * Math.abs(u.dot(n)) + _ * Math.abs(u.dot(o)) + m * Math.abs(u.dot(h)), M = y, x = Math.abs(a.dot(u)), !(x > g + M))))));
  }
}
const scratchOffset = new Vector3$1(), scratchScale = new Vector3$1();
function fromPlaneExtents(t, e, s, i, r, a, n, o, h, c, l) {
  if (!(defined$1(r) && defined$1(a) && defined$1(n) && defined$1(o) && defined$1(h) && defined$1(c)))
    throw new DeveloperError("all extents (minimum/maximum X/Y/Z) are required.");
  defined$1(l) || (l = new OrientedBoundingBox());
  const u = l.halfAxes;
  StaticMatrix3.setColumn(u, 0, e, u), StaticMatrix3.setColumn(u, 1, s, u), StaticMatrix3.setColumn(u, 2, i, u);
  let d = scratchOffset;
  d.x = (r + a) / 2, d.y = (n + o) / 2, d.z = (h + c) / 2;
  const _ = scratchScale;
  _.x = (a - r) / 2, _.y = (o - n) / 2, _.z = (c - h) / 2;
  const m = l.center;
  return d = StaticMatrix3.multiplyByVector(u, d, d), Cartesian3.add(t, d, m), StaticMatrix3.multiplyByScale(u, _, u), l;
}
const scratchRectangleCenterCartographic = new Vector3$1(), scratchRectangleCenter = new Vector3$1(), scratchPerimeterCartographicNC = new Vector3$1(), scratchPerimeterCartographicNW = new Vector3$1(), scratchPerimeterCartographicCW = new Vector3$1(), scratchPerimeterCartographicSW = new Vector3$1(), scratchPerimeterCartographicSC = new Vector3$1(), scratchPerimeterCartesianNC = new Vector3$1(), scratchPerimeterCartesianNW = new Vector3$1(), scratchPerimeterCartesianCW = new Vector3$1(), scratchPerimeterCartesianSW = new Vector3$1(), scratchPerimeterCartesianSC = new Vector3$1(), scratchPerimeterProjectedNC = new Vector2(), scratchPerimeterProjectedNW = new Vector2(), scratchPerimeterProjectedCW = new Vector2(), scratchPerimeterProjectedSW = new Vector2(), scratchPerimeterProjectedSC = new Vector2(), scratchPlaneOrigin = new Vector3$1(), scratchPlaneNormal = new Vector3$1(), scratchPlaneXAxis = new Vector3$1(), scratchHorizonCartesian = new Vector3$1(), scratchHorizonProjected = new Vector2(), scratchMaxY = new Vector3$1(), scratchMinY = new Vector3$1(), scratchZ = new Vector3$1(), scratchPlane = new Plane(new Vector3$1(1, 0, 0), 0);
OrientedBoundingBox.fromRectangle = function(t, e, s, i, r) {
  if (!defined$1(t))
    throw new DeveloperError("rectangle is required");
  if (t.width < 0 || t.width > CesiumMath.TWO_PI)
    throw new DeveloperError("Rectangle width must be between 0 and 2 * pi");
  if (t.height < 0 || t.height > CesiumMath.PI)
    throw new DeveloperError("Rectangle height must be between 0 and pi");
  if (defined$1(i) && !CesiumMath.equalsEpsilon(i.radii.x, i.radii.y, CesiumMath.EPSILON15))
    throw new DeveloperError("Ellipsoid must be an ellipsoid of revolution (radii.x == radii.y)");
  let a, n, o, h, c, l, u;
  if (e = defaultValue(e, 0), s = defaultValue(s, 0), i = defaultValue(i, Ellipsoid.WGS84), t.width <= CesiumMath.PI) {
    const d2 = Rectangle.center(t, scratchRectangleCenterCartographic), _2 = i.cartographicToCartesian(d2, scratchRectangleCenter), m2 = new EllipsoidTangentPlane(_2, i);
    u = m2.plane;
    const p2 = d2.x, f2 = t.south < 0 && t.north > 0 ? 0 : d2.y, y2 = Cartographic.fromRadians(p2, t.north, s, scratchPerimeterCartographicNC), g2 = Cartographic.fromRadians(t.west, t.north, s, scratchPerimeterCartographicNW), M2 = Cartographic.fromRadians(t.west, f2, s, scratchPerimeterCartographicCW), x2 = Cartographic.fromRadians(t.west, t.south, s, scratchPerimeterCartographicSW), w2 = Cartographic.fromRadians(p2, t.south, s, scratchPerimeterCartographicSC), S = i.cartographicToCartesian(y2, scratchPerimeterCartesianNC);
    let C = i.cartographicToCartesian(g2, scratchPerimeterCartesianNW);
    const E = i.cartographicToCartesian(M2, scratchPerimeterCartesianCW);
    let P = i.cartographicToCartesian(x2, scratchPerimeterCartesianSW);
    const b = i.cartographicToCartesian(w2, scratchPerimeterCartesianSC), A2 = m2.projectPointToNearestOnPlane(S, scratchPerimeterProjectedNC), v = m2.projectPointToNearestOnPlane(C, scratchPerimeterProjectedNW), T = m2.projectPointToNearestOnPlane(E, scratchPerimeterProjectedCW), I = m2.projectPointToNearestOnPlane(P, scratchPerimeterProjectedSW), z = m2.projectPointToNearestOnPlane(b, scratchPerimeterProjectedSC);
    return a = Math.min(v.x, T.x, I.x), n = -a, h = Math.max(v.y, A2.y), o = Math.min(I.y, z.y), g2.z = x2.z = e, C = i.cartographicToCartesian(g2, scratchPerimeterCartesianNW), P = i.cartographicToCartesian(x2, scratchPerimeterCartesianSW), c = Math.min(StaticPlane.getPointDistance(u, C), StaticPlane.getPointDistance(u, P)), l = s, fromPlaneExtents(m2.origin, m2.xAxis, m2.yAxis, m2.zAxis, a, n, o, h, c, l, r);
  }
  const d = t.south > 0, _ = t.north < 0, m = d ? t.south : _ ? t.north : 0, p = Rectangle.center(t, scratchRectangleCenterCartographic).x, f = Cartesian3.fromRadians(p, m, s, i, scratchPlaneOrigin);
  f.z = 0;
  const y = Math.abs(f.x) < CesiumMath.EPSILON10 && Math.abs(f.y) < CesiumMath.EPSILON10 ? Cartesian3.UNIT_X : Cartesian3.normalize(f, scratchPlaneNormal), g = Cartesian3.UNIT_Z, M = Cartesian3.cross(y, g, scratchPlaneXAxis);
  u = StaticPlane.fromPointNormal(f, y, scratchPlane);
  const x = Cartesian3.fromRadians(p + CesiumMath.PI_OVER_TWO, m, s, i, scratchHorizonCartesian);
  n = Cartesian3.dot(StaticPlane.projectPointOntoPlane(u, x, scratchHorizonProjected), M), a = -n, h = Cartesian3.fromRadians(0, t.north, _ ? e : s, i, scratchMaxY).z, o = Cartesian3.fromRadians(0, t.south, d ? e : s, i, scratchMinY).z;
  const w = Cartesian3.fromRadians(t.east, m, s, i, scratchZ);
  return c = StaticPlane.getPointDistance(u, w), l = 0, fromPlaneExtents(f, M, g, y, a, n, o, h, c, l, r);
};
const scratchCartesianU = new Vector3$1(), scratchCartesianV = new Vector3$1(), scratchCartesianW = new Vector3$1(), scratchValidAxis2 = new Vector3$1(), scratchValidAxis3 = new Vector3$1(), scratchPPrime = new Vector3$1();
OrientedBoundingBox.distanceSquaredTo = function(t, e) {
  if (!defined$1(t))
    throw new DeveloperError("box is required.");
  if (!defined$1(e))
    throw new DeveloperError("cartesian is required.");
  const s = Cartesian3.subtract(e, t.center, scratchOffset), i = t.halfAxes;
  let r = StaticMatrix3.getColumn(i, 0, scratchCartesianU), a = StaticMatrix3.getColumn(i, 1, scratchCartesianV), n = StaticMatrix3.getColumn(i, 2, scratchCartesianW);
  const o = Cartesian3.magnitude(r), h = Cartesian3.magnitude(a), c = Cartesian3.magnitude(n);
  let l = true, u = true, d = true;
  o > 0 ? Cartesian3.divideByScalar(r, o, r) : l = false, h > 0 ? Cartesian3.divideByScalar(a, h, a) : u = false, c > 0 ? Cartesian3.divideByScalar(n, c, n) : d = false;
  const _ = !l + !u + !d;
  let m, p, f;
  if (1 === _) {
    let t2 = r;
    m = a, p = n, u ? d || (t2 = n, p = r) : (t2 = a, m = r), f = Cartesian3.cross(m, p, scratchValidAxis3), t2 === r ? r = f : t2 === a ? a = f : t2 === n && (n = f);
  } else if (2 === _) {
    m = r, u ? m = a : d && (m = n);
    let t2 = Cartesian3.UNIT_Y;
    Cartesian3.equalsEpsilon(t2, m, CesiumMath.EPSILON3) && (t2 = Cartesian3.UNIT_X), p = Cartesian3.cross(m, t2, scratchValidAxis2), Cartesian3.normalize(p, p), f = Cartesian3.cross(m, p, scratchValidAxis3), Cartesian3.normalize(f, f), m === r ? (a = p, n = f) : m === a ? (n = p, r = f) : m === n && (r = p, a = f);
  } else
    3 === _ && (r = Cartesian3.UNIT_X, a = Cartesian3.UNIT_Y, n = Cartesian3.UNIT_Z);
  const y = scratchPPrime;
  y.x = Cartesian3.dot(s, r), y.y = Cartesian3.dot(s, a), y.z = Cartesian3.dot(s, n);
  let g, M = 0;
  return y.x < -o ? (g = y.x + o, M += g * g) : y.x > o && (g = y.x - o, M += g * g), y.y < -h ? (g = y.y + h, M += g * g) : y.y > h && (g = y.y - h, M += g * g), y.z < -c ? (g = y.z + c, M += g * g) : y.z > c && (g = y.z - c, M += g * g), M;
}, OrientedBoundingBox.intersectPlane = function(t, e) {
  if (!defined$1(t))
    throw new DeveloperError("box is required.");
  if (!defined$1(e))
    throw new DeveloperError("plane is required.");
  const s = t.center, i = e.normal, r = t.halfAxes, a = i.x, n = i.y, o = i.z, h = r.elements, c = Math.abs(a * h[StaticMatrix3.COLUMN0ROW0] + n * h[StaticMatrix3.COLUMN0ROW1] + o * h[StaticMatrix3.COLUMN0ROW2]) + Math.abs(a * h[StaticMatrix3.COLUMN1ROW0] + n * h[StaticMatrix3.COLUMN1ROW1] + o * h[StaticMatrix3.COLUMN1ROW2]) + Math.abs(a * h[StaticMatrix3.COLUMN2ROW0] + n * h[StaticMatrix3.COLUMN2ROW1] + o * h[StaticMatrix3.COLUMN2ROW2]), l = Cartesian3.dot(i.clone(), s) + e.constant;
  return l <= -c ? Intersect$1.OUTSIDE : l >= c ? Intersect$1.INSIDE : Intersect$1.INTERSECTING;
};
const scratchXAxis = new Vector3$1(), scratchYAxis = new Vector3$1(), scratchZAxis = new Vector3$1();
OrientedBoundingBox.computeCorners = function(t, e) {
  defined$1(e) || (e = [new Vector3$1(), new Vector3$1(), new Vector3$1(), new Vector3$1(), new Vector3$1(), new Vector3$1(), new Vector3$1(), new Vector3$1()]);
  const s = t.center, i = t.halfAxes, r = StaticMatrix3.getColumn(i, 0, scratchXAxis), a = StaticMatrix3.getColumn(i, 1, scratchYAxis), n = StaticMatrix3.getColumn(i, 2, scratchZAxis);
  return Cartesian3.clone(s, e[0]), Cartesian3.subtract(e[0], r, e[0]), Cartesian3.subtract(e[0], a, e[0]), Cartesian3.subtract(e[0], n, e[0]), Cartesian3.clone(s, e[1]), Cartesian3.subtract(e[1], r, e[1]), Cartesian3.subtract(e[1], a, e[1]), Cartesian3.add(e[1], n, e[1]), Cartesian3.clone(s, e[2]), Cartesian3.subtract(e[2], r, e[2]), Cartesian3.add(e[2], a, e[2]), Cartesian3.subtract(e[2], n, e[2]), Cartesian3.clone(s, e[3]), Cartesian3.subtract(e[3], r, e[3]), Cartesian3.add(e[3], a, e[3]), Cartesian3.add(e[3], n, e[3]), Cartesian3.clone(s, e[4]), Cartesian3.add(e[4], r, e[4]), Cartesian3.subtract(e[4], a, e[4]), Cartesian3.subtract(e[4], n, e[4]), Cartesian3.clone(s, e[5]), Cartesian3.add(e[5], r, e[5]), Cartesian3.subtract(e[5], a, e[5]), Cartesian3.add(e[5], n, e[5]), Cartesian3.clone(s, e[6]), Cartesian3.add(e[6], r, e[6]), Cartesian3.add(e[6], a, e[6]), Cartesian3.subtract(e[6], n, e[6]), Cartesian3.clone(s, e[7]), Cartesian3.add(e[7], r, e[7]), Cartesian3.add(e[7], a, e[7]), Cartesian3.add(e[7], n, e[7]), e;
}, OrientedBoundingBox.fromGeoBoundingBox = function(t, e) {
  if (!defined$1(t))
    throw new DeveloperError("geoBoundingBox is required.");
  const s = t.min, i = t.max, r = Rectangle.fromBox(t, null, true);
  return OrientedBoundingBox.fromRectangle(r, s.z, i.z, null, e);
};
class ECEFProjection extends Projection {
  constructor() {
    super(...arguments);
    __publicField(this, "name", PROJECTION_ECEF);
  }
  projectCoordinate(t, e) {
    return Ellipsoid.WGS84.cartographicDegreeToCartesian(t, e);
  }
  unprojectCoordinate(t, e) {
    return Ellipsoid.WGS84.cartesianToCartographicDegree(t, e);
  }
  getGeodeticSurfaceNormal(t, e) {
    e || (e = new Vector3$1());
    return Ellipsoid.WGS84.geodeticSurfaceNormalCartographic(t, e);
  }
  getProjectedSurfaceNormal(t, e) {
    e || (e = new Vector3$1());
    return Ellipsoid.WGS84.geodeticSurfaceNormal(t, e);
  }
  geoBoxToProjectedBox(t, e) {
    return e || (e = new OrientedBoundingBox()), e = OrientedBoundingBox.fromGeoBoundingBox(t, e);
  }
  getLODSacleOfGeoBoundingBox(t) {
    if (t.min.y > 85 || t.max.y < -85)
      return 0;
    const e = (t.min.y + t.max.y) / 2;
    return Math.cos(MathUtils.degToRad(e));
  }
  localFrameToFixedFrame(t, e) {
    return e || (e = new Matrix4()), Transforms.eastNorthUpToFixedFrame(t, null, e), e;
  }
}
function MercatorProjection() {
}
function extend(t, e) {
  for (let s in e)
    t[s] = e[s];
}
function Point(t, e) {
  this.lng = t, this.lat = e;
}
function Pixel(t, e) {
  this.x = t, this.y = e;
}
extend(Point.prototype, { equals: function(t) {
  return this.lat === t.lat && this.lng === t.lng;
}, clone: function() {
  return new Point(this.lat, this.lng);
}, getLngSpan: function(t) {
  let e = this.lng, s = Math.abs(t - e);
  return s > 180 && (s = 360 - s), s;
}, sub: function(t) {
  return new Point(this.lat - t.lat, this.lng - t.lng);
}, toString: function() {
  return "Point";
} }), extend(MercatorProjection, { EARTHRADIUS: 637099681e-2, MCBAND: [1289059486e-2, 836237787e-2, 5591021, 348198983e-2, 167804312e-2, 0], LLBAND: [75, 60, 45, 30, 15, 0], MC2LL: [[1410526172116255e-23, 898305509648872e-20, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 173379812e-1], [-7435856389565537e-24, 8983055097726239e-21, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1026014486e-2], [-3030883460898826e-23, 898305509983578e-20, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 685681737e-2], [-1981981304930552e-23, 8983055099779535e-21, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 448277706e-2], [309191371068437e-23, 8983055096812155e-21, 6995724062e-14, 23.10934304144901, -23663490511e-14, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 25551644e-1], [2890871144776878e-24, 8983055095805407e-21, -3068298e-14, 7.47137025468032, -353937994e-14, -0.02145144861037, -1234426596e-14, 10322952773e-14, -323890364e-14, 826088.5]], LL2MC: [[-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5], [8277824516172526e-19, 111320.7020463578, 6477955746671607e-7, -4082003173641316e-6, 1077490566351142e-5, -1517187553151559e-5, 1205306533862167e-5, -5124939663577472e-6, 9133119359512032e-7, 67.5], [0.00337398766765, 111320.7020202162, 4481351045890365e-9, -2339375119931662e-8, 7968221547186455e-8, -1159649932797253e-7, 9723671115602145e-8, -4366194633752821e-8, 8477230501135234e-9, 52.5], [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837749470245e-9, 992013.7397791013, -122195221711287e-8, 1340652697009075e-9, -620943.6990984312, 144416.9293806241, 37.5], [-3441963504368392e-19, 111320.7020576856, 278.2353980772752, 2485758690035394e-9, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5], [-3218135878613132e-19, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]], getDistanceByMC: function(t, e) {
  if (!t || !e)
    return 0;
  let s, i, r, a;
  return (t = this.convertMC2LL(t)) ? (s = this.toRadians(t.lng), i = this.toRadians(t.lat), (e = this.convertMC2LL(e)) ? (r = this.toRadians(e.lng), a = this.toRadians(e.lat), this.getDistance(s, r, i, a)) : 0) : 0;
}, getDistanceByLL: function(t, e) {
  if (!t || !e)
    return 0;
  let s, i, r, a;
  return t.lng = this.getLoop(t.lng, -180, 180), t.lat = this.getRange(t.lat, -74, 74), e.lng = this.getLoop(e.lng, -180, 180), e.lat = this.getRange(e.lat, -74, 74), s = this.toRadians(t.lng), r = this.toRadians(t.lat), i = this.toRadians(e.lng), a = this.toRadians(e.lat), this.getDistance(s, i, r, a);
}, convertMC2LL: function(t) {
  if (null == t)
    return new Point(0, 0);
  if (t.lng < 180 && t.lng > -180 && t.lat < 90 && t.lat > -90)
    return t;
  let e, s;
  e = new Point(Math.abs(t.lng), Math.abs(t.lat));
  for (let t2 = 0; t2 < this.MCBAND.length; t2++)
    if (e.lat >= this.MCBAND[t2]) {
      s = this.MC2LL[t2];
      break;
    }
  let i = this.convertor(t, s);
  return t = new Point(i.lng.toFixed(6), i.lat.toFixed(6));
}, convertLL2MC: function(t) {
  if (null == t)
    return new Point(0, 0);
  if (t.lng > 180 || t.lng < -180 || t.lat > 90 || t.lat < -90)
    return t;
  let e, s;
  t.lng = this.getLoop(t.lng, -180, 180), t.lat = this.getRange(t.lat, -74, 74), e = new Point(t.lng, t.lat);
  for (var i = 0; i < this.LLBAND.length; i++)
    if (e.lat >= this.LLBAND[i]) {
      s = this.LL2MC[i];
      break;
    }
  if (!s) {
    for (i = 0; i < this.LLBAND.length; i++)
      if (e.lat <= -this.LLBAND[i]) {
        s = this.LL2MC[i];
        break;
      }
  }
  let r = this.convertor(t, s);
  return t = new Point(Number(r.lng), Number(r.lat));
}, convertor: function(t, e) {
  if (!t || !e)
    return;
  let s = e[0] + e[1] * Math.abs(t.lng), i = Math.abs(t.lat) / e[9], r = e[2] + e[3] * i + e[4] * i * i + e[5] * i * i * i + e[6] * i * i * i * i + e[7] * i * i * i * i * i + e[8] * i * i * i * i * i * i;
  return s *= t.lng < 0 ? -1 : 1, r *= t.lat < 0 ? -1 : 1, new Point(s, r);
}, getDistance: function(t, e, s, i) {
  return this.EARTHRADIUS * Math.acos(Math.sin(s) * Math.sin(i) + Math.cos(s) * Math.cos(i) * Math.cos(e - t));
}, toRadians: function(t) {
  return Math.PI * t / 180;
}, toDegrees: function(t) {
  return 180 * t / Math.PI;
}, getRange: function(t, e, s) {
  return null != e && (t = Math.max(t, e)), null != s && (t = Math.min(t, s)), t;
}, getLoop: function(t, e, s) {
  for (; t > s; )
    t -= s - e;
  for (; t < e; )
    t += s - e;
  return t;
} }), extend(MercatorProjection.prototype, { lngLatToMercator: function(t) {
  return MercatorProjection.convertLL2MC(t);
}, lngLatToPoint: function(t) {
  let e = MercatorProjection.convertLL2MC(t);
  return new Pixel(e.lng, e.lat);
}, mercatorToLngLat: function(t) {
  return MercatorProjection.convertMC2LL(t);
}, pointToLngLat: function(t) {
  let e = new Point(t.x, t.y);
  return MercatorProjection.convertMC2LL(e);
}, pointToPixel: function(t, e, s, i, r) {
  if (!t)
    return;
  t = this.lngLatToMercator(t, r);
  let a = this.getZoomUnits(e);
  return new Pixel(Math.round((t.lng - s.lng) / a + i.width / 2), Math.round((s.lat - t.lat) / a + i.height / 2));
}, pixelToPoint: function(t, e, s, i, r) {
  if (!t)
    return;
  let a = this.getZoomUnits(e), n = new Point(s.lng + a * (t.x - i.width / 2), s.lat - a * (t.y - i.height / 2));
  return this.mercatorToLngLat(n, r);
}, getZoomUnits: function(t) {
  return Math.pow(2, 18 - t);
} });
const MAX_X = 2003772636e-2, MAX_Y = 1247410417e-2, MAX_LAT = 74, MIN_LAT = -MAX_LAT, _tempInput = new Vector3$1();
class BaiduMercatorProjection extends Projection {
  constructor() {
    super(...arguments);
    __publicField(this, "name", PROJECTION_BD_MERCATOR);
    __publicField(this, "isAxisAligned", true);
    __publicField(this, "unprojectCoordinate", (t, e, s) => {
      e || (e = new Vector3$1()), _tempInput.copy(t), t.x < -MAX_X && (_tempInput.x = -MAX_X), t.x > MAX_X && (_tempInput.x = MAX_X), t.y < -MAX_Y && (_tempInput.y = -MAX_Y), t.y > MAX_Y && (_tempInput.y = MAX_Y);
      const i = MercatorProjection.convertMC2LL({ lng: _tempInput.x, lat: _tempInput.y });
      return e.set(Number(i.lng), Number(i.lat), _tempInput.z), s && (e.x = extendUnprojectCoordinate(t.x, e.x, 180, MAX_X), e.y = extendUnprojectCoordinate(t.y, e.y, MAX_LAT, MAX_Y)), e;
    });
  }
  projectCoordinate(t, e, s = false) {
    e || (e = new Vector3$1()), _tempInput.copy(t), t.x < -180 && (_tempInput.x = -180), t.x > 180 && (_tempInput.x = 180), t.y < MIN_LAT && (_tempInput.y = MIN_LAT), t.y > MAX_LAT && (_tempInput.y = MAX_LAT);
    const i = MercatorProjection.convertLL2MC({ lng: _tempInput.x, lat: _tempInput.y });
    return e.set(Number(i.lng), Number(i.lat), _tempInput.z), s && (e.x = extendProjectCoordinate(t.x, e.x, 180, MAX_X), e.y = extendProjectCoordinate(t.y, e.y, MAX_LAT, MAX_Y)), e;
  }
}
const scaleFactor = 6378137 * Math.PI / 180;
class GeoProjection extends Projection {
  constructor() {
    super(...arguments);
    __publicField(this, "name", PROJECTION_GEO);
    __publicField(this, "isGeo", true);
    __publicField(this, "isAxisAligned", true);
  }
  projectCoordinate(t, e) {
    return e || (e = new Vector3$1()), e.x = t.x * scaleFactor, e.y = t.y * scaleFactor, e.z = t.z, e;
  }
  unprojectCoordinate(t, e) {
    return e || (e = new Vector3$1()), e.x = t.x / scaleFactor, e.y = t.y / scaleFactor, e.z = t.z, e;
  }
}
class ScreenPixelProjection extends Projection {
  constructor() {
    super(...arguments);
    __publicField(this, "name", PROJECTION_SCREEN_PIXEL);
    __publicField(this, "isAxisAligned", true);
  }
  projectCoordinate(t, e) {
    return e || (e = new Vector3$1()), e.x = t.x, e.y = -t.y, e.z = t.z, e;
  }
  unprojectCoordinate(t, e) {
    return e || (e = new Vector3$1()), e.x = t.x, e.y = -t.y, e.z = t.z, e;
  }
}
var commonjsGlobal = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, proj4Src = { exports: {} };
proj4Src.exports = function() {
  function t(t2) {
    t2("EPSG:4326", "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"), t2("EPSG:4269", "+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"), t2("EPSG:3857", "+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs");
    for (var e2 = 1; e2 <= 60; ++e2)
      t2("EPSG:" + (32600 + e2), "+proj=utm +zone=" + e2 + " +datum=WGS84 +units=m"), t2("EPSG:" + (32700 + e2), "+proj=utm +zone=" + e2 + " +south +datum=WGS84 +units=m");
    t2.WGS84 = t2["EPSG:4326"], t2["EPSG:3785"] = t2["EPSG:3857"], t2.GOOGLE = t2["EPSG:3857"], t2["EPSG:900913"] = t2["EPSG:3857"], t2["EPSG:102113"] = t2["EPSG:3857"];
  }
  var e = 1, s = 2, i = 3, r = 4, a = 5, n = 6378137, o = 6356752314e-3, h = 0.0066943799901413165, c = 484813681109536e-20, l = Math.PI / 2, u = 0.16666666666666666, d = 0.04722222222222222, _ = 0.022156084656084655, m = 1e-10, p = 0.017453292519943295, f = 57.29577951308232, y = Math.PI / 4, g = 2 * Math.PI, M = 3.14159265359, x = { greenwich: 0, lisbon: -9.131906111111, paris: 2.337229166667, bogota: -74.080916666667, madrid: -3.687938888889, rome: 12.452333333333, bern: 7.439583333333, jakarta: 106.807719444444, ferro: -17.666666666667, brussels: 4.367975, stockholm: 18.058277777778, athens: 23.7163375, oslo: 10.722916666667 }, w = { mm: { to_meter: 1e-3 }, cm: { to_meter: 0.01 }, ft: { to_meter: 0.3048 }, "us-ft": { to_meter: 1200 / 3937 }, fath: { to_meter: 1.8288 }, kmi: { to_meter: 1852 }, "us-ch": { to_meter: 20.1168402336805 }, "us-mi": { to_meter: 1609.34721869444 }, km: { to_meter: 1e3 }, "ind-ft": { to_meter: 0.30479841 }, "ind-yd": { to_meter: 0.91439523 }, mi: { to_meter: 1609.344 }, yd: { to_meter: 0.9144 }, ch: { to_meter: 20.1168 }, link: { to_meter: 0.201168 }, dm: { to_meter: 0.1 }, in: { to_meter: 0.0254 }, "ind-ch": { to_meter: 20.11669506 }, "us-in": { to_meter: 0.025400050800101 }, "us-yd": { to_meter: 0.914401828803658 } }, S = /[\s_\-\/\(\)]/g;
  function C(t2, e2) {
    if (t2[e2])
      return t2[e2];
    for (var s2, i2 = Object.keys(t2), r2 = e2.toLowerCase().replace(S, ""), a2 = -1; ++a2 < i2.length; )
      if ((s2 = i2[a2]).toLowerCase().replace(S, "") === r2)
        return t2[s2];
  }
  function E(t2) {
    var e2, s2, i2, r2 = {}, a2 = t2.split("+").map(function(t3) {
      return t3.trim();
    }).filter(function(t3) {
      return t3;
    }).reduce(function(t3, e3) {
      var s3 = e3.split("=");
      return s3.push(true), t3[s3[0].toLowerCase()] = s3[1], t3;
    }, {}), n2 = { proj: "projName", datum: "datumCode", rf: function(t3) {
      r2.rf = parseFloat(t3);
    }, lat_0: function(t3) {
      r2.lat0 = t3 * p;
    }, lat_1: function(t3) {
      r2.lat1 = t3 * p;
    }, lat_2: function(t3) {
      r2.lat2 = t3 * p;
    }, lat_ts: function(t3) {
      r2.lat_ts = t3 * p;
    }, lon_0: function(t3) {
      r2.long0 = t3 * p;
    }, lon_1: function(t3) {
      r2.long1 = t3 * p;
    }, lon_2: function(t3) {
      r2.long2 = t3 * p;
    }, alpha: function(t3) {
      r2.alpha = parseFloat(t3) * p;
    }, gamma: function(t3) {
      r2.rectified_grid_angle = parseFloat(t3) * p;
    }, lonc: function(t3) {
      r2.longc = t3 * p;
    }, x_0: function(t3) {
      r2.x0 = parseFloat(t3);
    }, y_0: function(t3) {
      r2.y0 = parseFloat(t3);
    }, k_0: function(t3) {
      r2.k0 = parseFloat(t3);
    }, k: function(t3) {
      r2.k0 = parseFloat(t3);
    }, a: function(t3) {
      r2.a = parseFloat(t3);
    }, b: function(t3) {
      r2.b = parseFloat(t3);
    }, r: function(t3) {
      r2.a = r2.b = parseFloat(t3);
    }, r_a: function() {
      r2.R_A = true;
    }, zone: function(t3) {
      r2.zone = parseInt(t3, 10);
    }, south: function() {
      r2.utmSouth = true;
    }, towgs84: function(t3) {
      r2.datum_params = t3.split(",").map(function(t4) {
        return parseFloat(t4);
      });
    }, to_meter: function(t3) {
      r2.to_meter = parseFloat(t3);
    }, units: function(t3) {
      r2.units = t3;
      var e3 = C(w, t3);
      e3 && (r2.to_meter = e3.to_meter);
    }, from_greenwich: function(t3) {
      r2.from_greenwich = t3 * p;
    }, pm: function(t3) {
      var e3 = C(x, t3);
      r2.from_greenwich = (e3 || parseFloat(t3)) * p;
    }, nadgrids: function(t3) {
      "@null" === t3 ? r2.datumCode = "none" : r2.nadgrids = t3;
    }, axis: function(t3) {
      var e3 = "ewnsud";
      3 === t3.length && -1 !== e3.indexOf(t3.substr(0, 1)) && -1 !== e3.indexOf(t3.substr(1, 1)) && -1 !== e3.indexOf(t3.substr(2, 1)) && (r2.axis = t3);
    }, approx: function() {
      r2.approx = true;
    } };
    for (e2 in a2)
      s2 = a2[e2], e2 in n2 ? "function" == typeof (i2 = n2[e2]) ? i2(s2) : r2[i2] = s2 : r2[e2] = s2;
    return "string" == typeof r2.datumCode && "WGS84" !== r2.datumCode && (r2.datumCode = r2.datumCode.toLowerCase()), r2;
  }
  class P {
    static getId(t2) {
      const e2 = t2.find((t3) => Array.isArray(t3) && "ID" === t3[0]);
      return e2 && e2.length >= 3 ? { authority: e2[1], code: parseInt(e2[2], 10) } : null;
    }
    static convertUnit(t2, e2 = "unit") {
      if (!t2 || t2.length < 3)
        return { type: e2, name: "unknown", conversion_factor: null };
      const s2 = t2[1], i2 = parseFloat(t2[2]) || null, r2 = t2.find((t3) => Array.isArray(t3) && "ID" === t3[0]);
      return { type: e2, name: s2, conversion_factor: i2, id: r2 ? { authority: r2[1], code: parseInt(r2[2], 10) } : null };
    }
    static convertAxis(t2) {
      var _a2;
      const e2 = t2[1] || "Unknown";
      let s2;
      const i2 = e2.match(/^\((.)\)$/);
      if (i2) {
        const t3 = i2[1].toUpperCase();
        if ("E" === t3)
          s2 = "east";
        else if ("N" === t3)
          s2 = "north";
        else {
          if ("U" !== t3)
            throw new Error(`Unknown axis abbreviation: ${t3}`);
          s2 = "up";
        }
      } else
        s2 = ((_a2 = t2[2]) == null ? void 0 : _a2.toLowerCase()) || "unknown";
      const r2 = t2.find((t3) => Array.isArray(t3) && "ORDER" === t3[0]), a2 = r2 ? parseInt(r2[1], 10) : null, n2 = t2.find((t3) => Array.isArray(t3) && ("LENGTHUNIT" === t3[0] || "ANGLEUNIT" === t3[0] || "SCALEUNIT" === t3[0]));
      return { name: e2, direction: s2, unit: this.convertUnit(n2), order: a2 };
    }
    static extractAxes(t2) {
      return t2.filter((t3) => Array.isArray(t3) && "AXIS" === t3[0]).map((t3) => this.convertAxis(t3)).sort((t3, e2) => (t3.order || 0) - (e2.order || 0));
    }
    static convert(t2, e2 = {}) {
      switch (t2[0]) {
        case "PROJCRS":
          e2.type = "ProjectedCRS", e2.name = t2[1], e2.base_crs = t2.find((t3) => Array.isArray(t3) && "BASEGEOGCRS" === t3[0]) ? this.convert(t2.find((t3) => Array.isArray(t3) && "BASEGEOGCRS" === t3[0])) : null, e2.conversion = t2.find((t3) => Array.isArray(t3) && "CONVERSION" === t3[0]) ? this.convert(t2.find((t3) => Array.isArray(t3) && "CONVERSION" === t3[0])) : null;
          const s2 = t2.find((t3) => Array.isArray(t3) && "CS" === t3[0]);
          s2 && (e2.coordinate_system = { type: s2[1], axis: this.extractAxes(t2) });
          const i2 = t2.find((t3) => Array.isArray(t3) && "LENGTHUNIT" === t3[0]);
          if (i2) {
            const t3 = this.convertUnit(i2);
            e2.coordinate_system.unit = t3;
          }
          e2.id = this.getId(t2);
          break;
        case "BASEGEOGCRS":
        case "GEOGCRS":
          e2.type = "GeographicCRS", e2.name = t2[1];
          const r2 = t2.find((t3) => Array.isArray(t3) && ("DATUM" === t3[0] || "ENSEMBLE" === t3[0]));
          if (r2) {
            const s3 = this.convert(r2);
            "ENSEMBLE" === r2[0] ? e2.datum_ensemble = s3 : e2.datum = s3;
            const i3 = t2.find((t3) => Array.isArray(t3) && "PRIMEM" === t3[0]);
            i3 && "Greenwich" !== i3[1] && (s3.prime_meridian = { name: i3[1], longitude: parseFloat(i3[2]) });
          }
          e2.coordinate_system = { type: "ellipsoidal", axis: this.extractAxes(t2) }, e2.id = this.getId(t2);
          break;
        case "DATUM":
          e2.type = "GeodeticReferenceFrame", e2.name = t2[1], e2.ellipsoid = t2.find((t3) => Array.isArray(t3) && "ELLIPSOID" === t3[0]) ? this.convert(t2.find((t3) => Array.isArray(t3) && "ELLIPSOID" === t3[0])) : null;
          break;
        case "ENSEMBLE":
          e2.type = "DatumEnsemble", e2.name = t2[1], e2.members = t2.filter((t3) => Array.isArray(t3) && "MEMBER" === t3[0]).map((t3) => ({ type: "DatumEnsembleMember", name: t3[1], id: this.getId(t3) }));
          const a2 = t2.find((t3) => Array.isArray(t3) && "ENSEMBLEACCURACY" === t3[0]);
          a2 && (e2.accuracy = parseFloat(a2[1]));
          const n2 = t2.find((t3) => Array.isArray(t3) && "ELLIPSOID" === t3[0]);
          n2 && (e2.ellipsoid = this.convert(n2)), e2.id = this.getId(t2);
          break;
        case "ELLIPSOID":
          e2.type = "Ellipsoid", e2.name = t2[1], e2.semi_major_axis = parseFloat(t2[2]), e2.inverse_flattening = parseFloat(t2[3]), t2.find((t3) => Array.isArray(t3) && "LENGTHUNIT" === t3[0]) && this.convert(t2.find((t3) => Array.isArray(t3) && "LENGTHUNIT" === t3[0]), e2);
          break;
        case "CONVERSION":
          e2.type = "Conversion", e2.name = t2[1], e2.method = t2.find((t3) => Array.isArray(t3) && "METHOD" === t3[0]) ? this.convert(t2.find((t3) => Array.isArray(t3) && "METHOD" === t3[0])) : null, e2.parameters = t2.filter((t3) => Array.isArray(t3) && "PARAMETER" === t3[0]).map((t3) => this.convert(t3));
          break;
        case "METHOD":
          e2.type = "Method", e2.name = t2[1], e2.id = this.getId(t2);
          break;
        case "PARAMETER":
          e2.type = "Parameter", e2.name = t2[1], e2.value = parseFloat(t2[2]), e2.unit = this.convertUnit(t2.find((t3) => Array.isArray(t3) && ("LENGTHUNIT" === t3[0] || "ANGLEUNIT" === t3[0] || "SCALEUNIT" === t3[0]))), e2.id = this.getId(t2);
          break;
        case "BOUNDCRS":
          e2.type = "BoundCRS";
          const o2 = t2.find((t3) => Array.isArray(t3) && "SOURCECRS" === t3[0]);
          if (o2) {
            const t3 = o2.find((t4) => Array.isArray(t4));
            e2.source_crs = t3 ? this.convert(t3) : null;
          }
          const h2 = t2.find((t3) => Array.isArray(t3) && "TARGETCRS" === t3[0]);
          if (h2) {
            const t3 = h2.find((t4) => Array.isArray(t4));
            e2.target_crs = t3 ? this.convert(t3) : null;
          }
          const c2 = t2.find((t3) => Array.isArray(t3) && "ABRIDGEDTRANSFORMATION" === t3[0]);
          e2.transformation = c2 ? this.convert(c2) : null;
          break;
        case "ABRIDGEDTRANSFORMATION":
          if (e2.type = "Transformation", e2.name = t2[1], e2.method = t2.find((t3) => Array.isArray(t3) && "METHOD" === t3[0]) ? this.convert(t2.find((t3) => Array.isArray(t3) && "METHOD" === t3[0])) : null, e2.parameters = t2.filter((t3) => Array.isArray(t3) && ("PARAMETER" === t3[0] || "PARAMETERFILE" === t3[0])).map((t3) => "PARAMETER" === t3[0] ? this.convert(t3) : "PARAMETERFILE" === t3[0] ? { name: t3[1], value: t3[2], id: { authority: "EPSG", code: 8656 } } : void 0), 7 === e2.parameters.length) {
            const t3 = e2.parameters[6];
            "Scale difference" === t3.name && (t3.value = Math.round(1e12 * (t3.value - 1)) / 1e6);
          }
          e2.id = this.getId(t2);
          break;
        case "AXIS":
          e2.coordinate_system || (e2.coordinate_system = { type: "unspecified", axis: [] }), e2.coordinate_system.axis.push(this.convertAxis(t2));
          break;
        case "LENGTHUNIT":
          const l2 = this.convertUnit(t2, "LinearUnit");
          e2.coordinate_system && e2.coordinate_system.axis && e2.coordinate_system.axis.forEach((t3) => {
            t3.unit || (t3.unit = l2);
          }), l2.conversion_factor && 1 !== l2.conversion_factor && e2.semi_major_axis && (e2.semi_major_axis = { value: e2.semi_major_axis, unit: l2 });
          break;
        default:
          e2.keyword = t2[0];
      }
      return e2;
    }
  }
  class b extends P {
    static convert(t2, e2 = {}) {
      var _a2;
      return super.convert(t2, e2), "Cartesian" === ((_a2 = e2.coordinate_system) == null ? void 0 : _a2.subtype) && delete e2.coordinate_system, e2.usage && delete e2.usage, e2;
    }
  }
  class A2 extends P {
    static convert(t2, e2 = {}) {
      var _a2, _b, _c;
      super.convert(t2, e2);
      const s2 = t2.find((t3) => Array.isArray(t3) && "CS" === t3[0]);
      s2 && (e2.coordinate_system = { subtype: s2[1], axis: this.extractAxes(t2) });
      const i2 = t2.find((t3) => Array.isArray(t3) && "USAGE" === t3[0]);
      return i2 && (e2.usage = { scope: (_a2 = i2.find((t3) => Array.isArray(t3) && "SCOPE" === t3[0])) == null ? void 0 : _a2[1], area: (_b = i2.find((t3) => Array.isArray(t3) && "AREA" === t3[0])) == null ? void 0 : _b[1], bbox: (_c = i2.find((t3) => Array.isArray(t3) && "BBOX" === t3[0])) == null ? void 0 : _c.slice(1) }), e2;
    }
  }
  function v(t2) {
    return t2.find((t3) => Array.isArray(t3) && "USAGE" === t3[0]) ? "2019" : (t2.find((t3) => Array.isArray(t3) && "CS" === t3[0]) || "BOUNDCRS" === t2[0] || "PROJCRS" === t2[0] || t2[0], "2015");
  }
  function T(t2) {
    return ("2019" === v(t2) ? A2 : b).convert(t2);
  }
  function I(t2) {
    const e2 = t2.toUpperCase();
    return e2.includes("PROJCRS") || e2.includes("GEOGCRS") || e2.includes("BOUNDCRS") || e2.includes("VERTCRS") || e2.includes("LENGTHUNIT") || e2.includes("ANGLEUNIT") || e2.includes("SCALEUNIT") ? "WKT2" : (e2.includes("PROJCS") || e2.includes("GEOGCS") || e2.includes("LOCAL_CS") || e2.includes("VERT_CS") || e2.includes("UNIT"), "WKT1");
  }
  var z = 1, O = 2, N = 3, G = 4, R = 5, L = -1, $ = /\s/, V = /[A-Za-z]/, q = /[A-Za-z84_]/, j = /[,\]]/, D = /[\d\.E\-\+]/;
  function B(t2) {
    if ("string" != typeof t2)
      throw new Error("not a string");
    this.text = t2.trim(), this.level = 0, this.place = 0, this.root = null, this.stack = [], this.currentObject = null, this.state = z;
  }
  function k(t2) {
    return new B(t2).output();
  }
  function F(t2, e2, s2) {
    Array.isArray(e2) && (s2.unshift(e2), e2 = null);
    var i2 = e2 ? {} : t2, r2 = s2.reduce(function(t3, e3) {
      return U(e3, t3), t3;
    }, i2);
    e2 && (t2[e2] = r2);
  }
  function U(t2, e2) {
    if (Array.isArray(t2)) {
      var s2 = t2.shift();
      if ("PARAMETER" === s2 && (s2 = t2.shift()), 1 === t2.length)
        return Array.isArray(t2[0]) ? (e2[s2] = {}, void U(t2[0], e2[s2])) : void (e2[s2] = t2[0]);
      if (t2.length)
        if ("TOWGS84" !== s2) {
          if ("AXIS" === s2)
            return s2 in e2 || (e2[s2] = []), void e2[s2].push(t2);
          var i2;
          switch (Array.isArray(s2) || (e2[s2] = {}), s2) {
            case "UNIT":
            case "PRIMEM":
            case "VERT_DATUM":
              return e2[s2] = { name: t2[0].toLowerCase(), convert: t2[1] }, void (3 === t2.length && U(t2[2], e2[s2]));
            case "SPHEROID":
            case "ELLIPSOID":
              return e2[s2] = { name: t2[0], a: t2[1], rf: t2[2] }, void (4 === t2.length && U(t2[3], e2[s2]));
            case "EDATUM":
            case "ENGINEERINGDATUM":
            case "LOCAL_DATUM":
            case "DATUM":
            case "VERT_CS":
            case "VERTCRS":
            case "VERTICALCRS":
              return t2[0] = ["name", t2[0]], void F(e2, s2, t2);
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
              return t2[0] = ["name", t2[0]], F(e2, s2, t2), void (e2[s2].type = s2);
            default:
              for (i2 = -1; ++i2 < t2.length; )
                if (!Array.isArray(t2[i2]))
                  return U(t2, e2[s2]);
              return F(e2, s2, t2);
          }
        } else
          e2[s2] = t2;
      else
        e2[s2] = true;
    } else
      e2[t2] = true;
  }
  B.prototype.readCharicter = function() {
    var t2 = this.text[this.place++];
    if (this.state !== G)
      for (; $.test(t2); ) {
        if (this.place >= this.text.length)
          return;
        t2 = this.text[this.place++];
      }
    switch (this.state) {
      case z:
        return this.neutral(t2);
      case O:
        return this.keyword(t2);
      case G:
        return this.quoted(t2);
      case R:
        return this.afterquote(t2);
      case N:
        return this.number(t2);
      case L:
        return;
    }
  }, B.prototype.afterquote = function(t2) {
    if ('"' === t2)
      return this.word += '"', void (this.state = G);
    if (j.test(t2))
      return this.word = this.word.trim(), void this.afterItem(t2);
    throw new Error(`havn't handled "` + t2 + '" in afterquote yet, index ' + this.place);
  }, B.prototype.afterItem = function(t2) {
    return "," === t2 ? (null !== this.word && this.currentObject.push(this.word), this.word = null, void (this.state = z)) : "]" === t2 ? (this.level--, null !== this.word && (this.currentObject.push(this.word), this.word = null), this.state = z, this.currentObject = this.stack.pop(), void (this.currentObject || (this.state = L))) : void 0;
  }, B.prototype.number = function(t2) {
    if (!D.test(t2)) {
      if (j.test(t2))
        return this.word = parseFloat(this.word), void this.afterItem(t2);
      throw new Error(`havn't handled "` + t2 + '" in number yet, index ' + this.place);
    }
    this.word += t2;
  }, B.prototype.quoted = function(t2) {
    '"' !== t2 ? this.word += t2 : this.state = R;
  }, B.prototype.keyword = function(t2) {
    if (q.test(t2))
      this.word += t2;
    else {
      if ("[" === t2) {
        var e2 = [];
        return e2.push(this.word), this.level++, null === this.root ? this.root = e2 : this.currentObject.push(e2), this.stack.push(this.currentObject), this.currentObject = e2, void (this.state = z);
      }
      if (!j.test(t2))
        throw new Error(`havn't handled "` + t2 + '" in keyword yet, index ' + this.place);
      this.afterItem(t2);
    }
  }, B.prototype.neutral = function(t2) {
    if (V.test(t2))
      return this.word = t2, void (this.state = O);
    if ('"' === t2)
      return this.word = "", void (this.state = G);
    if (D.test(t2))
      return this.word = t2, void (this.state = N);
    if (!j.test(t2))
      throw new Error(`havn't handled "` + t2 + '" in neutral yet, index ' + this.place);
    this.afterItem(t2);
  }, B.prototype.output = function() {
    for (; this.place < this.text.length; )
      this.readCharicter();
    if (this.state === L)
      return this.root;
    throw new Error('unable to parse string "' + this.text + '". State is ' + this.state);
  };
  var W = 0.017453292519943295;
  function Y(t2) {
    return t2 * W;
  }
  function Q(t2) {
    const e2 = (t2.projName || "").toLowerCase().replace(/_/g, " ");
    t2.long0 || !t2.longc || "albers conic equal area" !== e2 && "lambert azimuthal equal area" !== e2 || (t2.long0 = t2.longc), t2.lat_ts || !t2.lat1 || "stereographic south pole" !== e2 && "polar stereographic (variant b)" !== e2 ? t2.lat_ts || !t2.lat0 || "polar stereographic" !== e2 && "polar stereographic (variant a)" !== e2 || (t2.lat_ts = t2.lat0, t2.lat0 = Y(t2.lat0 > 0 ? 90 : -90), delete t2.lat1) : (t2.lat0 = Y(t2.lat1 > 0 ? 90 : -90), t2.lat_ts = t2.lat1, delete t2.lat1);
  }
  function X(t2) {
    let e2 = { units: null, to_meter: void 0 };
    return "string" == typeof t2 ? (e2.units = t2.toLowerCase(), "metre" === e2.units && (e2.units = "meter"), "meter" === e2.units && (e2.to_meter = 1)) : (t2 == null ? void 0 : t2.name) && (e2.units = t2.name.toLowerCase(), "metre" === e2.units && (e2.units = "meter"), e2.to_meter = t2.conversion_factor), e2;
  }
  function H(t2) {
    return "object" == typeof t2 ? t2.value * t2.unit.conversion_factor : t2;
  }
  function Z(t2, e2) {
    t2.ellipsoid.radius ? (e2.a = t2.ellipsoid.radius, e2.rf = 0) : (e2.a = H(t2.ellipsoid.semi_major_axis), void 0 !== t2.ellipsoid.inverse_flattening ? e2.rf = t2.ellipsoid.inverse_flattening : void 0 !== t2.ellipsoid.semi_major_axis && void 0 !== t2.ellipsoid.semi_minor_axis && (e2.rf = e2.a / (e2.a - H(t2.ellipsoid.semi_minor_axis))));
  }
  function K(t2, e2 = {}) {
    var _a2;
    return t2 && "object" == typeof t2 ? "BoundCRS" === t2.type ? (K(t2.source_crs, e2), t2.transformation && ("NTv2" === ((_a2 = t2.transformation.method) == null ? void 0 : _a2.name) ? e2.nadgrids = t2.transformation.parameters[0].value : e2.datum_params = t2.transformation.parameters.map((t3) => t3.value)), e2) : (Object.keys(t2).forEach((s2) => {
      var _a3, _b, _c;
      const i2 = t2[s2];
      if (null !== i2)
        switch (s2) {
          case "name":
            if (e2.srsCode)
              break;
            e2.name = i2, e2.srsCode = i2;
            break;
          case "type":
            "GeographicCRS" === i2 ? e2.projName = "longlat" : "ProjectedCRS" === i2 && (e2.projName = (_b = (_a3 = t2.conversion) == null ? void 0 : _a3.method) == null ? void 0 : _b.name);
            break;
          case "datum":
          case "datum_ensemble":
            i2.ellipsoid && (e2.ellps = i2.ellipsoid.name, Z(i2, e2)), i2.prime_meridian && (e2.from_greenwich = i2.prime_meridian.longitude * Math.PI / 180);
            break;
          case "ellipsoid":
            e2.ellps = i2.name, Z(i2, e2);
            break;
          case "prime_meridian":
            e2.long0 = (i2.longitude || 0) * Math.PI / 180;
            break;
          case "coordinate_system":
            if (i2.axis) {
              if (e2.axis = i2.axis.map((t3) => {
                const e3 = t3.direction;
                if ("east" === e3)
                  return "e";
                if ("north" === e3)
                  return "n";
                if ("west" === e3)
                  return "w";
                if ("south" === e3)
                  return "s";
                throw new Error(`Unknown axis direction: ${e3}`);
              }).join("") + "u", i2.unit) {
                const { units: t3, to_meter: s3 } = X(i2.unit);
                e2.units = t3, e2.to_meter = s3;
              } else if ((_c = i2.axis[0]) == null ? void 0 : _c.unit) {
                const { units: t3, to_meter: s3 } = X(i2.axis[0].unit);
                e2.units = t3, e2.to_meter = s3;
              }
            }
            break;
          case "id":
            i2.authority && i2.code && (e2.title = i2.authority + ":" + i2.code);
            break;
          case "conversion":
            i2.method && i2.method.name && (e2.projName = i2.method.name), i2.parameters && i2.parameters.forEach((t3) => {
              const s3 = t3.name.toLowerCase().replace(/\s+/g, "_"), i3 = t3.value;
              t3.unit && t3.unit.conversion_factor ? e2[s3] = i3 * t3.unit.conversion_factor : "degree" === t3.unit ? e2[s3] = i3 * Math.PI / 180 : e2[s3] = i3;
            });
            break;
          case "unit":
            i2.name && (e2.units = i2.name.toLowerCase(), "metre" === e2.units && (e2.units = "meter")), i2.conversion_factor && (e2.to_meter = i2.conversion_factor);
            break;
          case "base_crs":
            K(i2, e2), e2.datumCode = i2.id ? i2.id.authority + "_" + i2.id.code : i2.name;
        }
    }), void 0 !== e2.latitude_of_false_origin && (e2.lat0 = e2.latitude_of_false_origin), void 0 !== e2.longitude_of_false_origin && (e2.long0 = e2.longitude_of_false_origin), void 0 !== e2.latitude_of_standard_parallel && (e2.lat0 = e2.latitude_of_standard_parallel, e2.lat1 = e2.latitude_of_standard_parallel), void 0 !== e2.latitude_of_1st_standard_parallel && (e2.lat1 = e2.latitude_of_1st_standard_parallel), void 0 !== e2.latitude_of_2nd_standard_parallel && (e2.lat2 = e2.latitude_of_2nd_standard_parallel), void 0 !== e2.latitude_of_projection_centre && (e2.lat0 = e2.latitude_of_projection_centre), void 0 !== e2.longitude_of_projection_centre && (e2.longc = e2.longitude_of_projection_centre), void 0 !== e2.easting_at_false_origin && (e2.x0 = e2.easting_at_false_origin), void 0 !== e2.northing_at_false_origin && (e2.y0 = e2.northing_at_false_origin), void 0 !== e2.latitude_of_natural_origin && (e2.lat0 = e2.latitude_of_natural_origin), void 0 !== e2.longitude_of_natural_origin && (e2.long0 = e2.longitude_of_natural_origin), void 0 !== e2.longitude_of_origin && (e2.long0 = e2.longitude_of_origin), void 0 !== e2.false_easting && (e2.x0 = e2.false_easting), e2.easting_at_projection_centre && (e2.x0 = e2.easting_at_projection_centre), void 0 !== e2.false_northing && (e2.y0 = e2.false_northing), e2.northing_at_projection_centre && (e2.y0 = e2.northing_at_projection_centre), void 0 !== e2.standard_parallel_1 && (e2.lat1 = e2.standard_parallel_1), void 0 !== e2.standard_parallel_2 && (e2.lat2 = e2.standard_parallel_2), void 0 !== e2.scale_factor_at_natural_origin && (e2.k0 = e2.scale_factor_at_natural_origin), void 0 !== e2.scale_factor_at_projection_centre && (e2.k0 = e2.scale_factor_at_projection_centre), void 0 !== e2.scale_factor_on_pseudo_standard_parallel && (e2.k0 = e2.scale_factor_on_pseudo_standard_parallel), void 0 !== e2.azimuth && (e2.alpha = e2.azimuth), void 0 !== e2.azimuth_at_projection_centre && (e2.alpha = e2.azimuth_at_projection_centre), e2.angle_from_rectified_to_skew_grid && (e2.rectified_grid_angle = e2.angle_from_rectified_to_skew_grid), Q(e2), e2) : t2;
  }
  var J = ["PROJECTEDCRS", "PROJCRS", "GEOGCS", "GEOCCS", "PROJCS", "LOCAL_CS", "GEODCRS", "GEODETICCRS", "GEODETICDATUM", "ENGCRS", "ENGINEERINGCRS"];
  function tt(t2, e2) {
    var s2 = e2[0], i2 = e2[1];
    !(s2 in t2) && i2 in t2 && (t2[s2] = t2[i2], 3 === e2.length && (t2[s2] = e2[2](t2[s2])));
  }
  function et(t2) {
    for (var e2 = Object.keys(t2), s2 = 0, i2 = e2.length; s2 < i2; ++s2) {
      var r2 = e2[s2];
      -1 !== J.indexOf(r2) && st(t2[r2]), "object" == typeof t2[r2] && et(t2[r2]);
    }
  }
  function st(t2) {
    if (t2.AUTHORITY) {
      var e2 = Object.keys(t2.AUTHORITY)[0];
      e2 && e2 in t2.AUTHORITY && (t2.title = e2 + ":" + t2.AUTHORITY[e2]);
    }
    if ("GEOGCS" === t2.type ? t2.projName = "longlat" : "LOCAL_CS" === t2.type ? (t2.projName = "identity", t2.local = true) : "object" == typeof t2.PROJECTION ? t2.projName = Object.keys(t2.PROJECTION)[0] : t2.projName = t2.PROJECTION, t2.AXIS) {
      for (var s2 = "", i2 = 0, r2 = t2.AXIS.length; i2 < r2; ++i2) {
        var a2 = [t2.AXIS[i2][0].toLowerCase(), t2.AXIS[i2][1].toLowerCase()];
        -1 !== a2[0].indexOf("north") || ("y" === a2[0] || "lat" === a2[0]) && "north" === a2[1] ? s2 += "n" : -1 !== a2[0].indexOf("south") || ("y" === a2[0] || "lat" === a2[0]) && "south" === a2[1] ? s2 += "s" : -1 !== a2[0].indexOf("east") || ("x" === a2[0] || "lon" === a2[0]) && "east" === a2[1] ? s2 += "e" : -1 === a2[0].indexOf("west") && ("x" !== a2[0] && "lon" !== a2[0] || "west" !== a2[1]) || (s2 += "w");
      }
      2 === s2.length && (s2 += "u"), 3 === s2.length && (t2.axis = s2);
    }
    t2.UNIT && (t2.units = t2.UNIT.name.toLowerCase(), "metre" === t2.units && (t2.units = "meter"), t2.UNIT.convert && ("GEOGCS" === t2.type ? t2.DATUM && t2.DATUM.SPHEROID && (t2.to_meter = t2.UNIT.convert * t2.DATUM.SPHEROID.a) : t2.to_meter = t2.UNIT.convert));
    var n2 = t2.GEOGCS;
    function o2(e3) {
      return e3 * (t2.to_meter || 1);
    }
    "GEOGCS" === t2.type && (n2 = t2), n2 && (n2.DATUM ? t2.datumCode = n2.DATUM.name.toLowerCase() : t2.datumCode = n2.name.toLowerCase(), "d_" === t2.datumCode.slice(0, 2) && (t2.datumCode = t2.datumCode.slice(2)), "new_zealand_1949" === t2.datumCode && (t2.datumCode = "nzgd49"), "wgs_1984" !== t2.datumCode && "world_geodetic_system_1984" !== t2.datumCode || ("Mercator_Auxiliary_Sphere" === t2.PROJECTION && (t2.sphere = true), t2.datumCode = "wgs84"), "belge_1972" === t2.datumCode && (t2.datumCode = "rnb72"), n2.DATUM && n2.DATUM.SPHEROID && (t2.ellps = n2.DATUM.SPHEROID.name.replace("_19", "").replace(/[Cc]larke\_18/, "clrk"), "international" === t2.ellps.toLowerCase().slice(0, 13) && (t2.ellps = "intl"), t2.a = n2.DATUM.SPHEROID.a, t2.rf = parseFloat(n2.DATUM.SPHEROID.rf, 10)), n2.DATUM && n2.DATUM.TOWGS84 && (t2.datum_params = n2.DATUM.TOWGS84), ~t2.datumCode.indexOf("osgb_1936") && (t2.datumCode = "osgb36"), ~t2.datumCode.indexOf("osni_1952") && (t2.datumCode = "osni52"), (~t2.datumCode.indexOf("tm65") || ~t2.datumCode.indexOf("geodetic_datum_of_1965")) && (t2.datumCode = "ire65"), "ch1903+" === t2.datumCode && (t2.datumCode = "ch1903"), ~t2.datumCode.indexOf("israel") && (t2.datumCode = "isr93")), t2.b && !isFinite(t2.b) && (t2.b = t2.a), t2.rectified_grid_angle && (t2.rectified_grid_angle = Y(t2.rectified_grid_angle)), [["standard_parallel_1", "Standard_Parallel_1"], ["standard_parallel_1", "Latitude of 1st standard parallel"], ["standard_parallel_2", "Standard_Parallel_2"], ["standard_parallel_2", "Latitude of 2nd standard parallel"], ["false_easting", "False_Easting"], ["false_easting", "False easting"], ["false-easting", "Easting at false origin"], ["false_northing", "False_Northing"], ["false_northing", "False northing"], ["false_northing", "Northing at false origin"], ["central_meridian", "Central_Meridian"], ["central_meridian", "Longitude of natural origin"], ["central_meridian", "Longitude of false origin"], ["latitude_of_origin", "Latitude_Of_Origin"], ["latitude_of_origin", "Central_Parallel"], ["latitude_of_origin", "Latitude of natural origin"], ["latitude_of_origin", "Latitude of false origin"], ["scale_factor", "Scale_Factor"], ["k0", "scale_factor"], ["latitude_of_center", "Latitude_Of_Center"], ["latitude_of_center", "Latitude_of_center"], ["lat0", "latitude_of_center", Y], ["longitude_of_center", "Longitude_Of_Center"], ["longitude_of_center", "Longitude_of_center"], ["longc", "longitude_of_center", Y], ["x0", "false_easting", o2], ["y0", "false_northing", o2], ["long0", "central_meridian", Y], ["lat0", "latitude_of_origin", Y], ["lat0", "standard_parallel_1", Y], ["lat1", "standard_parallel_1", Y], ["lat2", "standard_parallel_2", Y], ["azimuth", "Azimuth"], ["alpha", "azimuth", Y], ["srsCode", "name"]].forEach(function(e3) {
      return tt(t2, e3);
    }), Q(t2);
  }
  function it(t2) {
    if ("object" == typeof t2)
      return K(t2);
    const e2 = I(t2);
    var s2 = k(t2);
    if ("WKT2" === e2)
      return K(T(s2));
    var i2 = s2[0], r2 = {};
    return U(s2, r2), et(r2), r2[i2];
  }
  function rt(t2) {
    var e2 = this;
    if (2 === arguments.length) {
      var s2 = arguments[1];
      "string" == typeof s2 ? "+" === s2.charAt(0) ? rt[t2] = E(arguments[1]) : rt[t2] = it(arguments[1]) : rt[t2] = s2;
    } else if (1 === arguments.length) {
      if (Array.isArray(t2))
        return t2.map(function(t3) {
          Array.isArray(t3) ? rt.apply(e2, t3) : rt(t3);
        });
      if ("string" == typeof t2) {
        if (t2 in rt)
          return rt[t2];
      } else
        "EPSG" in t2 ? rt["EPSG:" + t2.EPSG] = t2 : "ESRI" in t2 ? rt["ESRI:" + t2.ESRI] = t2 : "IAU2000" in t2 ? rt["IAU2000:" + t2.IAU2000] = t2 : console.log(t2);
      return;
    }
  }
  function at(t2) {
    return "string" == typeof t2;
  }
  function nt(t2) {
    return t2 in rt;
  }
  function ot(t2) {
    return 0 !== t2.indexOf("+") && -1 !== t2.indexOf("[") || "object" == typeof t2 && !("srsCode" in t2);
  }
  t(rt);
  var ht = ["3857", "900913", "3785", "102113"];
  function ct(t2) {
    var e2 = C(t2, "authority");
    if (e2) {
      var s2 = C(e2, "epsg");
      return s2 && ht.indexOf(s2) > -1;
    }
  }
  function lt(t2) {
    var e2 = C(t2, "extension");
    if (e2)
      return C(e2, "proj4");
  }
  function ut(t2) {
    return "+" === t2[0];
  }
  function dt(t2) {
    if (!at(t2))
      return t2.projName ? t2 : it(t2);
    if (nt(t2))
      return rt[t2];
    if (ot(t2)) {
      var e2 = it(t2);
      if (ct(e2))
        return rt["EPSG:3857"];
      var s2 = lt(e2);
      return s2 ? E(s2) : e2;
    }
    return ut(t2) ? E(t2) : void 0;
  }
  function _t(t2, e2) {
    var s2, i2;
    if (t2 = t2 || {}, !e2)
      return t2;
    for (i2 in e2)
      void 0 !== (s2 = e2[i2]) && (t2[i2] = s2);
    return t2;
  }
  function mt(t2, e2, s2) {
    var i2 = t2 * e2;
    return s2 / Math.sqrt(1 - i2 * i2);
  }
  function pt(t2) {
    return t2 < 0 ? -1 : 1;
  }
  function ft(t2) {
    return Math.abs(t2) <= M ? t2 : t2 - pt(t2) * g;
  }
  function yt(t2, e2, s2) {
    var i2 = t2 * s2, r2 = 0.5 * t2;
    return i2 = Math.pow((1 - i2) / (1 + i2), r2), Math.tan(0.5 * (l - e2)) / i2;
  }
  function gt(t2, e2) {
    for (var s2, i2, r2 = 0.5 * t2, a2 = l - 2 * Math.atan(e2), n2 = 0; n2 <= 15; n2++)
      if (s2 = t2 * Math.sin(a2), a2 += i2 = l - 2 * Math.atan(e2 * Math.pow((1 - s2) / (1 + s2), r2)) - a2, Math.abs(i2) <= 1e-10)
        return a2;
    return -9999;
  }
  function Mt() {
    var t2 = this.b / this.a;
    this.es = 1 - t2 * t2, "x0" in this || (this.x0 = 0), "y0" in this || (this.y0 = 0), this.e = Math.sqrt(this.es), this.lat_ts ? this.sphere ? this.k0 = Math.cos(this.lat_ts) : this.k0 = mt(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) : this.k0 || (this.k ? this.k0 = this.k : this.k0 = 1);
  }
  function xt(t2) {
    var e2, s2, i2 = t2.x, r2 = t2.y;
    if (r2 * f > 90 && r2 * f < -90 && i2 * f > 180 && i2 * f < -180)
      return null;
    if (Math.abs(Math.abs(r2) - l) <= m)
      return null;
    if (this.sphere)
      e2 = this.x0 + this.a * this.k0 * ft(i2 - this.long0), s2 = this.y0 + this.a * this.k0 * Math.log(Math.tan(y + 0.5 * r2));
    else {
      var a2 = Math.sin(r2), n2 = yt(this.e, r2, a2);
      e2 = this.x0 + this.a * this.k0 * ft(i2 - this.long0), s2 = this.y0 - this.a * this.k0 * Math.log(n2);
    }
    return t2.x = e2, t2.y = s2, t2;
  }
  function wt(t2) {
    var e2, s2, i2 = t2.x - this.x0, r2 = t2.y - this.y0;
    if (this.sphere)
      s2 = l - 2 * Math.atan(Math.exp(-r2 / (this.a * this.k0)));
    else {
      var a2 = Math.exp(-r2 / (this.a * this.k0));
      if (-9999 === (s2 = gt(this.e, a2)))
        return null;
    }
    return e2 = ft(this.long0 + i2 / (this.a * this.k0)), t2.x = e2, t2.y = s2, t2;
  }
  function St() {
  }
  function Ct(t2) {
    return t2;
  }
  var Et = [{ init: Mt, forward: xt, inverse: wt, names: ["Mercator", "Popular Visualisation Pseudo Mercator", "Mercator_1SP", "Mercator_Auxiliary_Sphere", "Mercator_Variant_A", "merc"] }, { init: St, forward: Ct, inverse: Ct, names: ["longlat", "identity"] }], Pt = {}, bt = [];
  function At(t2, e2) {
    var s2 = bt.length;
    return t2.names ? (bt[s2] = t2, t2.names.forEach(function(t3) {
      Pt[t3.toLowerCase()] = s2;
    }), this) : (console.log(e2), true);
  }
  function vt(t2) {
    return t2.replace(/[-\(\)\s]+/g, " ").trim().replace(/ /g, "_");
  }
  function Tt(t2) {
    if (!t2)
      return false;
    var e2 = t2.toLowerCase();
    return void 0 !== Pt[e2] && bt[Pt[e2]] || (e2 = vt(e2)) in Pt && bt[Pt[e2]] ? bt[Pt[e2]] : void 0;
  }
  function It() {
    Et.forEach(At);
  }
  var zt = { start: It, add: At, get: Tt }, Ot = { MERIT: { a: 6378137, rf: 298.257, ellipseName: "MERIT 1983" }, SGS85: { a: 6378136, rf: 298.257, ellipseName: "Soviet Geodetic System 85" }, GRS80: { a: 6378137, rf: 298.257222101, ellipseName: "GRS 1980(IUGG, 1980)" }, IAU76: { a: 6378140, rf: 298.257, ellipseName: "IAU 1976" }, airy: { a: 6377563396e-3, b: 635625691e-2, ellipseName: "Airy 1830" }, APL4: { a: 6378137, rf: 298.25, ellipseName: "Appl. Physics. 1965" }, NWL9D: { a: 6378145, rf: 298.25, ellipseName: "Naval Weapons Lab., 1965" }, mod_airy: { a: 6377340189e-3, b: 6356034446e-3, ellipseName: "Modified Airy" }, andrae: { a: 637710443e-2, rf: 300, ellipseName: "Andrae 1876 (Den., Iclnd.)" }, aust_SA: { a: 6378160, rf: 298.25, ellipseName: "Australian Natl & S. Amer. 1969" }, GRS67: { a: 6378160, rf: 298.247167427, ellipseName: "GRS 67(IUGG 1967)" }, bessel: { a: 6377397155e-3, rf: 299.1528128, ellipseName: "Bessel 1841" }, bess_nam: { a: 6377483865e-3, rf: 299.1528128, ellipseName: "Bessel 1841 (Namibia)" }, clrk66: { a: 63782064e-1, b: 63565838e-1, ellipseName: "Clarke 1866" }, clrk80: { a: 6378249145e-3, rf: 293.4663, ellipseName: "Clarke 1880 mod." }, clrk80ign: { a: 63782492e-1, b: 6356515, rf: 293.4660213, ellipseName: "Clarke 1880 (IGN)" }, clrk58: { a: 6378293645208759e-9, rf: 294.2606763692654, ellipseName: "Clarke 1858" }, CPM: { a: 63757387e-1, rf: 334.29, ellipseName: "Comm. des Poids et Mesures 1799" }, delmbr: { a: 6376428, rf: 311.5, ellipseName: "Delambre 1810 (Belgium)" }, engelis: { a: 637813605e-2, rf: 298.2566, ellipseName: "Engelis 1985" }, evrst30: { a: 6377276345e-3, rf: 300.8017, ellipseName: "Everest 1830" }, evrst48: { a: 6377304063e-3, rf: 300.8017, ellipseName: "Everest 1948" }, evrst56: { a: 6377301243e-3, rf: 300.8017, ellipseName: "Everest 1956" }, evrst69: { a: 6377295664e-3, rf: 300.8017, ellipseName: "Everest 1969" }, evrstSS: { a: 6377298556e-3, rf: 300.8017, ellipseName: "Everest (Sabah & Sarawak)" }, fschr60: { a: 6378166, rf: 298.3, ellipseName: "Fischer (Mercury Datum) 1960" }, fschr60m: { a: 6378155, rf: 298.3, ellipseName: "Fischer 1960" }, fschr68: { a: 6378150, rf: 298.3, ellipseName: "Fischer 1968" }, helmert: { a: 6378200, rf: 298.3, ellipseName: "Helmert 1906" }, hough: { a: 6378270, rf: 297, ellipseName: "Hough" }, intl: { a: 6378388, rf: 297, ellipseName: "International 1909 (Hayford)" }, kaula: { a: 6378163, rf: 298.24, ellipseName: "Kaula 1961" }, lerch: { a: 6378139, rf: 298.257, ellipseName: "Lerch 1979" }, mprts: { a: 6397300, rf: 191, ellipseName: "Maupertius 1738" }, new_intl: { a: 63781575e-1, b: 63567722e-1, ellipseName: "New International 1967" }, plessis: { a: 6376523, rf: 6355863, ellipseName: "Plessis 1817 (France)" }, krass: { a: 6378245, rf: 298.3, ellipseName: "Krassovsky, 1942" }, SEasia: { a: 6378155, b: 63567733205e-4, ellipseName: "Southeast Asia" }, walbeck: { a: 6376896, b: 63558348467e-4, ellipseName: "Walbeck" }, WGS60: { a: 6378165, rf: 298.3, ellipseName: "WGS 60" }, WGS66: { a: 6378145, rf: 298.25, ellipseName: "WGS 66" }, WGS7: { a: 6378135, rf: 298.26, ellipseName: "WGS 72" }, WGS84: { a: 6378137, rf: 298.257223563, ellipseName: "WGS 84" }, sphere: { a: 6370997, b: 6370997, ellipseName: "Normal Sphere (r=6370997)" } };
  const Nt = Ot.WGS84;
  function Gt(t2, e2, s2, i2) {
    var r2 = t2 * t2, a2 = e2 * e2, n2 = (r2 - a2) / r2, o2 = 0;
    return i2 ? (r2 = (t2 *= 1 - n2 * (u + n2 * (d + n2 * _))) * t2, n2 = 0) : o2 = Math.sqrt(n2), { es: n2, e: o2, ep2: (r2 - a2) / a2 };
  }
  function Rt(t2, e2, s2, i2, r2) {
    if (!t2) {
      var a2 = C(Ot, i2);
      a2 || (a2 = Nt), t2 = a2.a, e2 = a2.b, s2 = a2.rf;
    }
    return s2 && !e2 && (e2 = (1 - 1 / s2) * t2), (0 === s2 || Math.abs(t2 - e2) < m) && (r2 = true, e2 = t2), { a: t2, b: e2, rf: s2, sphere: r2 };
  }
  var Lt = { wgs84: { towgs84: "0,0,0", ellipse: "WGS84", datumName: "WGS84" }, ch1903: { towgs84: "674.374,15.056,405.346", ellipse: "bessel", datumName: "swiss" }, ggrs87: { towgs84: "-199.87,74.79,246.62", ellipse: "GRS80", datumName: "Greek_Geodetic_Reference_System_1987" }, nad83: { towgs84: "0,0,0", ellipse: "GRS80", datumName: "North_American_Datum_1983" }, nad27: { nadgrids: "@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat", ellipse: "clrk66", datumName: "North_American_Datum_1927" }, potsdam: { towgs84: "598.1,73.7,418.2,0.202,0.045,-2.455,6.7", ellipse: "bessel", datumName: "Potsdam Rauenberg 1950 DHDN" }, carthage: { towgs84: "-263.0,6.0,431.0", ellipse: "clark80", datumName: "Carthage 1934 Tunisia" }, hermannskogel: { towgs84: "577.326,90.129,463.919,5.137,1.474,5.297,2.4232", ellipse: "bessel", datumName: "Hermannskogel" }, mgi: { towgs84: "577.326,90.129,463.919,5.137,1.474,5.297,2.4232", ellipse: "bessel", datumName: "Militar-Geographische Institut" }, osni52: { towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15", ellipse: "airy", datumName: "Irish National" }, ire65: { towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15", ellipse: "mod_airy", datumName: "Ireland 1965" }, rassadiran: { towgs84: "-133.63,-157.5,-158.62", ellipse: "intl", datumName: "Rassadiran" }, nzgd49: { towgs84: "59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993", ellipse: "intl", datumName: "New Zealand Geodetic Datum 1949" }, osgb36: { towgs84: "446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894", ellipse: "airy", datumName: "Ordnance Survey of Great Britain 1936" }, s_jtsk: { towgs84: "589,76,480", ellipse: "bessel", datumName: "S-JTSK (Ferro)" }, beduaram: { towgs84: "-106,-87,188", ellipse: "clrk80", datumName: "Beduaram" }, gunung_segara: { towgs84: "-403,684,41", ellipse: "bessel", datumName: "Gunung Segara Jakarta" }, rnb72: { towgs84: "106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1", ellipse: "intl", datumName: "Reseau National Belge 1972" }, EPSG_5451: { towgs84: "6.41,-49.05,-11.28,1.5657,0.5242,6.9718,-5.7649" }, IGNF_LURESG: { towgs84: "-192.986,13.673,-39.309,-0.4099,-2.9332,2.6881,0.43" }, EPSG_4614: { towgs84: "-119.4248,-303.65872,-11.00061,1.164298,0.174458,1.096259,3.657065" }, EPSG_4615: { towgs84: "-494.088,-312.129,279.877,-1.423,-1.013,1.59,-0.748" }, ESRI_37241: { towgs84: "-76.822,257.457,-12.817,2.136,-0.033,-2.392,-0.031" }, ESRI_37249: { towgs84: "-440.296,58.548,296.265,1.128,10.202,4.559,-0.438" }, ESRI_37245: { towgs84: "-511.151,-181.269,139.609,1.05,2.703,1.798,3.071" }, EPSG_4178: { towgs84: "24.9,-126.4,-93.2,-0.063,-0.247,-0.041,1.01" }, EPSG_4622: { towgs84: "-472.29,-5.63,-304.12,0.4362,-0.8374,0.2563,1.8984" }, EPSG_4625: { towgs84: "126.93,547.94,130.41,-2.7867,5.1612,-0.8584,13.8227" }, EPSG_5252: { towgs84: "0.023,0.036,-0.068,0.00176,0.00912,-0.01136,0.00439" }, EPSG_4314: { towgs84: "597.1,71.4,412.1,0.894,0.068,-1.563,7.58" }, EPSG_4282: { towgs84: "-178.3,-316.7,-131.5,5.278,6.077,10.979,19.166" }, EPSG_4231: { towgs84: "-83.11,-97.38,-117.22,0.0276,-0.2167,0.2147,0.1218" }, EPSG_4274: { towgs84: "-230.994,102.591,25.199,0.633,-0.239,0.9,1.95" }, EPSG_4134: { towgs84: "-180.624,-225.516,173.919,-0.81,-1.898,8.336,16.71006" }, EPSG_4254: { towgs84: "18.38,192.45,96.82,0.056,-0.142,-0.2,-0.0013" }, EPSG_4159: { towgs84: "-194.513,-63.978,-25.759,-3.4027,3.756,-3.352,-0.9175" }, EPSG_4687: { towgs84: "0.072,-0.507,-0.245,0.0183,-0.0003,0.007,-0.0093" }, EPSG_4227: { towgs84: "-83.58,-397.54,458.78,-17.595,-2.847,4.256,3.225" }, EPSG_4746: { towgs84: "599.4,72.4,419.2,-0.062,-0.022,-2.723,6.46" }, EPSG_4745: { towgs84: "612.4,77,440.2,-0.054,0.057,-2.797,2.55" }, EPSG_6311: { towgs84: "8.846,-4.394,-1.122,-0.00237,-0.146528,0.130428,0.783926" }, EPSG_4289: { towgs84: "565.7381,50.4018,465.2904,-1.91514,1.60363,-9.09546,4.07244" }, EPSG_4230: { towgs84: "-68.863,-134.888,-111.49,-0.53,-0.14,0.57,-3.4" }, EPSG_4154: { towgs84: "-123.02,-158.95,-168.47" }, EPSG_4156: { towgs84: "570.8,85.7,462.8,4.998,1.587,5.261,3.56" }, EPSG_4299: { towgs84: "482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15" }, EPSG_4179: { towgs84: "33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84" }, EPSG_4313: { towgs84: "-106.8686,52.2978,-103.7239,0.3366,-0.457,1.8422,-1.2747" }, EPSG_4194: { towgs84: "163.511,127.533,-159.789" }, EPSG_4195: { towgs84: "105,326,-102.5" }, EPSG_4196: { towgs84: "-45,417,-3.5" }, EPSG_4611: { towgs84: "-162.619,-276.959,-161.764,0.067753,-2.243649,-1.158827,-1.094246" }, EPSG_4633: { towgs84: "137.092,131.66,91.475,-1.9436,-11.5993,-4.3321,-7.4824" }, EPSG_4641: { towgs84: "-408.809,366.856,-412.987,1.8842,-0.5308,2.1655,-121.0993" }, EPSG_4643: { towgs84: "-480.26,-438.32,-643.429,16.3119,20.1721,-4.0349,-111.7002" }, EPSG_4300: { towgs84: "482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15" }, EPSG_4188: { towgs84: "482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15" }, EPSG_4660: { towgs84: "982.6087,552.753,-540.873,32.39344,-153.25684,-96.2266,16.805" }, EPSG_4662: { towgs84: "97.295,-263.247,310.882,-1.5999,0.8386,3.1409,13.3259" }, EPSG_3906: { towgs84: "577.88891,165.22205,391.18289,4.9145,-0.94729,-13.05098,7.78664" }, EPSG_4307: { towgs84: "-209.3622,-87.8162,404.6198,0.0046,3.4784,0.5805,-1.4547" }, EPSG_6892: { towgs84: "-76.269,-16.683,68.562,-6.275,10.536,-4.286,-13.686" }, EPSG_4690: { towgs84: "221.597,152.441,176.523,2.403,1.3893,0.884,11.4648" }, EPSG_4691: { towgs84: "218.769,150.75,176.75,3.5231,2.0037,1.288,10.9817" }, EPSG_4629: { towgs84: "72.51,345.411,79.241,-1.5862,-0.8826,-0.5495,1.3653" }, EPSG_4630: { towgs84: "165.804,216.213,180.26,-0.6251,-0.4515,-0.0721,7.4111" }, EPSG_4692: { towgs84: "217.109,86.452,23.711,0.0183,-0.0003,0.007,-0.0093" }, EPSG_9333: { towgs84: "0,0,0,-8.393,0.749,-10.276,0" }, EPSG_9059: { towgs84: "0,0,0" }, EPSG_4312: { towgs84: "601.705,84.263,485.227,4.7354,1.3145,5.393,-2.3887" }, EPSG_4123: { towgs84: "-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496" }, EPSG_4309: { towgs84: "-124.45,183.74,44.64,-0.4384,0.5446,-0.9706,-2.1365" }, ESRI_104106: { towgs84: "-283.088,-70.693,117.445,-1.157,0.059,-0.652,-4.058" }, EPSG_4281: { towgs84: "-219.247,-73.802,269.529" }, EPSG_4322: { towgs84: "0,0,4.5" }, EPSG_4324: { towgs84: "0,0,1.9" }, EPSG_4284: { towgs84: "43.822,-108.842,-119.585,1.455,-0.761,0.737,0.549" }, EPSG_4277: { towgs84: "446.448,-125.157,542.06,0.15,0.247,0.842,-20.489" }, EPSG_4207: { towgs84: "-282.1,-72.2,120,-1.529,0.145,-0.89,-4.46" }, EPSG_4688: { towgs84: "347.175,1077.618,2623.677,33.9058,-70.6776,9.4013,186.0647" }, EPSG_4689: { towgs84: "410.793,54.542,80.501,-2.5596,-2.3517,-0.6594,17.3218" }, EPSG_4720: { towgs84: "0,0,4.5" }, EPSG_4273: { towgs84: "278.3,93,474.5,7.889,0.05,-6.61,6.21" }, EPSG_4240: { towgs84: "204.64,834.74,293.8" }, EPSG_4817: { towgs84: "278.3,93,474.5,7.889,0.05,-6.61,6.21" }, ESRI_104131: { towgs84: "426.62,142.62,460.09,4.98,4.49,-12.42,-17.1" }, EPSG_4265: { towgs84: "-104.1,-49.1,-9.9,0.971,-2.917,0.714,-11.68" }, EPSG_4263: { towgs84: "-111.92,-87.85,114.5,1.875,0.202,0.219,0.032" }, EPSG_4298: { towgs84: "-689.5937,623.84046,-65.93566,-0.02331,1.17094,-0.80054,5.88536" }, EPSG_4270: { towgs84: "-253.4392,-148.452,386.5267,0.15605,0.43,-0.1013,-0.0424" }, EPSG_4229: { towgs84: "-121.8,98.1,-10.7" }, EPSG_4220: { towgs84: "-55.5,-348,-229.2" }, EPSG_4214: { towgs84: "12.646,-155.176,-80.863" }, EPSG_4232: { towgs84: "-345,3,223" }, EPSG_4238: { towgs84: "-1.977,-13.06,-9.993,0.364,0.254,0.689,-1.037" }, EPSG_4168: { towgs84: "-170,33,326" }, EPSG_4131: { towgs84: "199,931,318.9" }, EPSG_4152: { towgs84: "-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0" }, EPSG_5228: { towgs84: "572.213,85.334,461.94,4.9732,1.529,5.2484,3.5378" }, EPSG_8351: { towgs84: "485.021,169.465,483.839,7.786342,4.397554,4.102655,0" }, EPSG_4683: { towgs84: "-127.62,-67.24,-47.04,-3.068,4.903,1.578,-1.06" }, EPSG_4133: { towgs84: "0,0,0" }, EPSG_7373: { towgs84: "0.819,-0.5762,-1.6446,-0.00378,-0.03317,0.00318,0.0693" }, EPSG_9075: { towgs84: "-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0" }, EPSG_9072: { towgs84: "-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0" }, EPSG_9294: { towgs84: "1.16835,-1.42001,-2.24431,-0.00822,-0.05508,0.01818,0.23388" }, EPSG_4212: { towgs84: "-267.434,173.496,181.814,-13.4704,8.7154,7.3926,14.7492" }, EPSG_4191: { towgs84: "-44.183,-0.58,-38.489,2.3867,2.7072,-3.5196,-8.2703" }, EPSG_4237: { towgs84: "52.684,-71.194,-13.975,-0.312,-0.1063,-0.3729,1.0191" }, EPSG_4740: { towgs84: "-1.08,-0.27,-0.9" }, EPSG_4124: { towgs84: "419.3836,99.3335,591.3451,0.850389,1.817277,-7.862238,-0.99496" }, EPSG_5681: { towgs84: "584.9636,107.7175,413.8067,1.1155,0.2824,-3.1384,7.9922" }, EPSG_4141: { towgs84: "23.772,17.49,17.859,-0.3132,-1.85274,1.67299,-5.4262" }, EPSG_4204: { towgs84: "-85.645,-273.077,-79.708,2.289,-1.421,2.532,3.194" }, EPSG_4319: { towgs84: "226.702,-193.337,-35.371,-2.229,-4.391,9.238,0.9798" }, EPSG_4200: { towgs84: "24.82,-131.21,-82.66" }, EPSG_4130: { towgs84: "0,0,0" }, EPSG_4127: { towgs84: "-82.875,-57.097,-156.768,-2.158,1.524,-0.982,-0.359" }, EPSG_4149: { towgs84: "674.374,15.056,405.346" }, EPSG_4617: { towgs84: "-0.991,1.9072,0.5129,1.25033e-7,4.6785e-8,5.6529e-8,0" }, EPSG_4663: { towgs84: "-210.502,-66.902,-48.476,2.094,-15.067,-5.817,0.485" }, EPSG_4664: { towgs84: "-211.939,137.626,58.3,-0.089,0.251,0.079,0.384" }, EPSG_4665: { towgs84: "-105.854,165.589,-38.312,-0.003,-0.026,0.024,-0.048" }, EPSG_4666: { towgs84: "631.392,-66.551,481.442,1.09,-4.445,-4.487,-4.43" }, EPSG_4756: { towgs84: "-192.873,-39.382,-111.202,-0.00205,-0.0005,0.00335,0.0188" }, EPSG_4723: { towgs84: "-179.483,-69.379,-27.584,-7.862,8.163,6.042,-13.925" }, EPSG_4726: { towgs84: "8.853,-52.644,180.304,-0.393,-2.323,2.96,-24.081" }, EPSG_4267: { towgs84: "-8.0,160.0,176.0" }, EPSG_5365: { towgs84: "-0.16959,0.35312,0.51846,0.03385,-0.16325,0.03446,0.03693" }, EPSG_4218: { towgs84: "304.5,306.5,-318.1" }, EPSG_4242: { towgs84: "-33.722,153.789,94.959,-8.581,-4.478,4.54,8.95" }, EPSG_4216: { towgs84: "-292.295,248.758,429.447,4.9971,2.99,6.6906,1.0289" }, ESRI_104105: { towgs84: "631.392,-66.551,481.442,1.09,-4.445,-4.487,-4.43" }, ESRI_104129: { towgs84: "0,0,0" }, EPSG_4673: { towgs84: "174.05,-25.49,112.57" }, EPSG_4202: { towgs84: "-124,-60,154" }, EPSG_4203: { towgs84: "-117.763,-51.51,139.061,0.292,0.443,0.277,-0.191" }, EPSG_3819: { towgs84: "595.48,121.69,515.35,4.115,-2.9383,0.853,-3.408" }, EPSG_8694: { towgs84: "-93.799,-132.737,-219.073,-1.844,0.648,-6.37,-0.169" }, EPSG_4145: { towgs84: "275.57,676.78,229.6" }, EPSG_4283: { towgs84: "61.55,-10.87,-40.19,39.4924,32.7221,32.8979,-9.994" }, EPSG_4317: { towgs84: "2.3287,-147.0425,-92.0802,-0.3092483,0.32482185,0.49729934,5.68906266" }, EPSG_4272: { towgs84: "59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993" }, EPSG_4248: { towgs84: "-307.7,265.3,-363.5" }, EPSG_5561: { towgs84: "24,-121,-76" }, EPSG_5233: { towgs84: "-0.293,766.95,87.713,0.195704,1.695068,3.473016,-0.039338" }, ESRI_104130: { towgs84: "-86,-98,-119" }, ESRI_104102: { towgs84: "682,-203,480" }, ESRI_37207: { towgs84: "7,-10,-26" }, EPSG_4675: { towgs84: "59.935,118.4,-10.871" }, ESRI_104109: { towgs84: "-89.121,-348.182,260.871" }, ESRI_104112: { towgs84: "-185.583,-230.096,281.361" }, ESRI_104113: { towgs84: "25.1,-275.6,222.6" }, IGNF_WGS72G: { towgs84: "0,12,6" }, IGNF_NTFG: { towgs84: "-168,-60,320" }, IGNF_EFATE57G: { towgs84: "-127,-769,472" }, IGNF_PGP50G: { towgs84: "324.8,153.6,172.1" }, IGNF_REUN47G: { towgs84: "94,-948,-1262" }, IGNF_CSG67G: { towgs84: "-186,230,110" }, IGNF_GUAD48G: { towgs84: "-467,-16,-300" }, IGNF_TAHI51G: { towgs84: "162,117,154" }, IGNF_TAHAAG: { towgs84: "65,342,77" }, IGNF_NUKU72G: { towgs84: "84,274,65" }, IGNF_PETRELS72G: { towgs84: "365,194,166" }, IGNF_WALL78G: { towgs84: "253,-133,-127" }, IGNF_MAYO50G: { towgs84: "-382,-59,-262" }, IGNF_TANNAG: { towgs84: "-139,-967,436" }, IGNF_IGN72G: { towgs84: "-13,-348,292" }, IGNF_ATIGG: { towgs84: "1118,23,66" }, IGNF_FANGA84G: { towgs84: "150.57,158.33,118.32" }, IGNF_RUSAT84G: { towgs84: "202.13,174.6,-15.74" }, IGNF_KAUE70G: { towgs84: "126.74,300.1,-75.49" }, IGNF_MOP90G: { towgs84: "-10.8,-1.8,12.77" }, IGNF_MHPF67G: { towgs84: "338.08,212.58,-296.17" }, IGNF_TAHI79G: { towgs84: "160.61,116.05,153.69" }, IGNF_ANAA92G: { towgs84: "1.5,3.84,4.81" }, IGNF_MARQUI72G: { towgs84: "330.91,-13.92,58.56" }, IGNF_APAT86G: { towgs84: "143.6,197.82,74.05" }, IGNF_TUBU69G: { towgs84: "237.17,171.61,-77.84" }, IGNF_STPM50G: { towgs84: "11.363,424.148,373.13" }, EPSG_4150: { towgs84: "674.374,15.056,405.346" }, EPSG_4754: { towgs84: "-208.4058,-109.8777,-2.5764" }, ESRI_104101: { towgs84: "374,150,588" }, EPSG_4693: { towgs84: "0,-0.15,0.68" }, EPSG_6207: { towgs84: "293.17,726.18,245.36" }, EPSG_4153: { towgs84: "-133.63,-157.5,-158.62" }, EPSG_4132: { towgs84: "-241.54,-163.64,396.06" }, EPSG_4221: { towgs84: "-154.5,150.7,100.4" }, EPSG_4266: { towgs84: "-80.7,-132.5,41.1" }, EPSG_4193: { towgs84: "-70.9,-151.8,-41.4" }, EPSG_5340: { towgs84: "-0.41,0.46,-0.35" }, EPSG_4246: { towgs84: "-294.7,-200.1,525.5" }, EPSG_4318: { towgs84: "-3.2,-5.7,2.8" }, EPSG_4121: { towgs84: "-199.87,74.79,246.62" }, EPSG_4223: { towgs84: "-260.1,5.5,432.2" }, EPSG_4158: { towgs84: "-0.465,372.095,171.736" }, EPSG_4285: { towgs84: "-128.16,-282.42,21.93" }, EPSG_4613: { towgs84: "-404.78,685.68,45.47" }, EPSG_4607: { towgs84: "195.671,332.517,274.607" }, EPSG_4475: { towgs84: "-381.788,-57.501,-256.673" }, EPSG_4208: { towgs84: "-157.84,308.54,-146.6" }, EPSG_4743: { towgs84: "70.995,-335.916,262.898" }, EPSG_4710: { towgs84: "-323.65,551.39,-491.22" }, EPSG_7881: { towgs84: "-0.077,0.079,0.086" }, EPSG_4682: { towgs84: "283.729,735.942,261.143" }, EPSG_4739: { towgs84: "-156,-271,-189" }, EPSG_4679: { towgs84: "-80.01,253.26,291.19" }, EPSG_4750: { towgs84: "-56.263,16.136,-22.856" }, EPSG_4644: { towgs84: "-10.18,-350.43,291.37" }, EPSG_4695: { towgs84: "-103.746,-9.614,-255.95" }, EPSG_4292: { towgs84: "-355,21,72" }, EPSG_4302: { towgs84: "-61.702,284.488,472.052" }, EPSG_4143: { towgs84: "-124.76,53,466.79" }, EPSG_4606: { towgs84: "-153,153,307" }, EPSG_4699: { towgs84: "-770.1,158.4,-498.2" }, EPSG_4247: { towgs84: "-273.5,110.6,-357.9" }, EPSG_4160: { towgs84: "8.88,184.86,106.69" }, EPSG_4161: { towgs84: "-233.43,6.65,173.64" }, EPSG_9251: { towgs84: "-9.5,122.9,138.2" }, EPSG_9253: { towgs84: "-78.1,101.6,133.3" }, EPSG_4297: { towgs84: "-198.383,-240.517,-107.909" }, EPSG_4269: { towgs84: "0,0,0" }, EPSG_4301: { towgs84: "-147,506,687" }, EPSG_4618: { towgs84: "-59,-11,-52" }, EPSG_4612: { towgs84: "0,0,0" }, EPSG_4678: { towgs84: "44.585,-131.212,-39.544" }, EPSG_4250: { towgs84: "-130,29,364" }, EPSG_4144: { towgs84: "214,804,268" }, EPSG_4147: { towgs84: "-17.51,-108.32,-62.39" }, EPSG_4259: { towgs84: "-254.1,-5.36,-100.29" }, EPSG_4164: { towgs84: "-76,-138,67" }, EPSG_4211: { towgs84: "-378.873,676.002,-46.255" }, EPSG_4182: { towgs84: "-422.651,-172.995,84.02" }, EPSG_4224: { towgs84: "-143.87,243.37,-33.52" }, EPSG_4225: { towgs84: "-205.57,168.77,-4.12" }, EPSG_5527: { towgs84: "-67.35,3.88,-38.22" }, EPSG_4752: { towgs84: "98,390,-22" }, EPSG_4310: { towgs84: "-30,190,89" }, EPSG_9248: { towgs84: "-192.26,65.72,132.08" }, EPSG_4680: { towgs84: "124.5,-63.5,-281" }, EPSG_4701: { towgs84: "-79.9,-158,-168.9" }, EPSG_4706: { towgs84: "-146.21,112.63,4.05" }, EPSG_4805: { towgs84: "682,-203,480" }, EPSG_4201: { towgs84: "-165,-11,206" }, EPSG_4210: { towgs84: "-157,-2,-299" }, EPSG_4183: { towgs84: "-104,167,-38" }, EPSG_4139: { towgs84: "11,72,-101" }, EPSG_4668: { towgs84: "-86,-98,-119" }, EPSG_4717: { towgs84: "-2,151,181" }, EPSG_4732: { towgs84: "102,52,-38" }, EPSG_4280: { towgs84: "-377,681,-50" }, EPSG_4209: { towgs84: "-138,-105,-289" }, EPSG_4261: { towgs84: "31,146,47" }, EPSG_4658: { towgs84: "-73,46,-86" }, EPSG_4721: { towgs84: "265.025,384.929,-194.046" }, EPSG_4222: { towgs84: "-136,-108,-292" }, EPSG_4601: { towgs84: "-255,-15,71" }, EPSG_4602: { towgs84: "725,685,536" }, EPSG_4603: { towgs84: "72,213.7,93" }, EPSG_4605: { towgs84: "9,183,236" }, EPSG_4621: { towgs84: "137,248,-430" }, EPSG_4657: { towgs84: "-28,199,5" }, EPSG_4316: { towgs84: "103.25,-100.4,-307.19" }, EPSG_4642: { towgs84: "-13,-348,292" }, EPSG_4698: { towgs84: "145,-187,103" }, EPSG_4192: { towgs84: "-206.1,-174.7,-87.7" }, EPSG_4311: { towgs84: "-265,120,-358" }, EPSG_4135: { towgs84: "58,-283,-182" }, ESRI_104138: { towgs84: "198,-226,-347" }, EPSG_4245: { towgs84: "-11,851,5" }, EPSG_4142: { towgs84: "-125,53,467" }, EPSG_4213: { towgs84: "-106,-87,188" }, EPSG_4253: { towgs84: "-133,-77,-51" }, EPSG_4129: { towgs84: "-132,-110,-335" }, EPSG_4713: { towgs84: "-77,-128,142" }, EPSG_4239: { towgs84: "217,823,299" }, EPSG_4146: { towgs84: "295,736,257" }, EPSG_4155: { towgs84: "-83,37,124" }, EPSG_4165: { towgs84: "-173,253,27" }, EPSG_4672: { towgs84: "175,-38,113" }, EPSG_4236: { towgs84: "-637,-549,-203" }, EPSG_4251: { towgs84: "-90,40,88" }, EPSG_4271: { towgs84: "-2,374,172" }, EPSG_4175: { towgs84: "-88,4,101" }, EPSG_4716: { towgs84: "298,-304,-375" }, EPSG_4315: { towgs84: "-23,259,-9" }, EPSG_4744: { towgs84: "-242.2,-144.9,370.3" }, EPSG_4244: { towgs84: "-97,787,86" }, EPSG_4293: { towgs84: "616,97,-251" }, EPSG_4714: { towgs84: "-127,-769,472" }, EPSG_4736: { towgs84: "260,12,-147" }, EPSG_6883: { towgs84: "-235,-110,393" }, EPSG_6894: { towgs84: "-63,176,185" }, EPSG_4205: { towgs84: "-43,-163,45" }, EPSG_4256: { towgs84: "41,-220,-134" }, EPSG_4262: { towgs84: "639,405,60" }, EPSG_4604: { towgs84: "174,359,365" }, EPSG_4169: { towgs84: "-115,118,426" }, EPSG_4620: { towgs84: "-106,-129,165" }, EPSG_4184: { towgs84: "-203,141,53" }, EPSG_4616: { towgs84: "-289,-124,60" }, EPSG_9403: { towgs84: "-307,-92,127" }, EPSG_4684: { towgs84: "-133,-321,50" }, EPSG_4708: { towgs84: "-491,-22,435" }, EPSG_4707: { towgs84: "114,-116,-333" }, EPSG_4709: { towgs84: "145,75,-272" }, EPSG_4712: { towgs84: "-205,107,53" }, EPSG_4711: { towgs84: "124,-234,-25" }, EPSG_4718: { towgs84: "230,-199,-752" }, EPSG_4719: { towgs84: "211,147,111" }, EPSG_4724: { towgs84: "208,-435,-229" }, EPSG_4725: { towgs84: "189,-79,-202" }, EPSG_4735: { towgs84: "647,1777,-1124" }, EPSG_4722: { towgs84: "-794,119,-298" }, EPSG_4728: { towgs84: "-307,-92,127" }, EPSG_4734: { towgs84: "-632,438,-609" }, EPSG_4727: { towgs84: "912,-58,1227" }, EPSG_4729: { towgs84: "185,165,42" }, EPSG_4730: { towgs84: "170,42,84" }, EPSG_4733: { towgs84: "276,-57,149" }, ESRI_37218: { towgs84: "230,-199,-752" }, ESRI_37240: { towgs84: "-7,215,225" }, ESRI_37221: { towgs84: "252,-209,-751" }, ESRI_4305: { towgs84: "-123,-206,219" }, ESRI_104139: { towgs84: "-73,-247,227" }, EPSG_4748: { towgs84: "51,391,-36" }, EPSG_4219: { towgs84: "-384,664,-48" }, EPSG_4255: { towgs84: "-333,-222,114" }, EPSG_4257: { towgs84: "-587.8,519.75,145.76" }, EPSG_4646: { towgs84: "-963,510,-359" }, EPSG_6881: { towgs84: "-24,-203,268" }, EPSG_6882: { towgs84: "-183,-15,273" }, EPSG_4715: { towgs84: "-104,-129,239" }, IGNF_RGF93GDD: { towgs84: "0,0,0" }, IGNF_RGM04GDD: { towgs84: "0,0,0" }, IGNF_RGSPM06GDD: { towgs84: "0,0,0" }, IGNF_RGTAAF07GDD: { towgs84: "0,0,0" }, IGNF_RGFG95GDD: { towgs84: "0,0,0" }, IGNF_RGNCG: { towgs84: "0,0,0" }, IGNF_RGPFGDD: { towgs84: "0,0,0" }, IGNF_ETRS89G: { towgs84: "0,0,0" }, IGNF_RGR92GDD: { towgs84: "0,0,0" }, EPSG_4173: { towgs84: "0,0,0" }, EPSG_4180: { towgs84: "0,0,0" }, EPSG_4619: { towgs84: "0,0,0" }, EPSG_4667: { towgs84: "0,0,0" }, EPSG_4075: { towgs84: "0,0,0" }, EPSG_6706: { towgs84: "0,0,0" }, EPSG_7798: { towgs84: "0,0,0" }, EPSG_4661: { towgs84: "0,0,0" }, EPSG_4669: { towgs84: "0,0,0" }, EPSG_8685: { towgs84: "0,0,0" }, EPSG_4151: { towgs84: "0,0,0" }, EPSG_9702: { towgs84: "0,0,0" }, EPSG_4758: { towgs84: "0,0,0" }, EPSG_4761: { towgs84: "0,0,0" }, EPSG_4765: { towgs84: "0,0,0" }, EPSG_8997: { towgs84: "0,0,0" }, EPSG_4023: { towgs84: "0,0,0" }, EPSG_4670: { towgs84: "0,0,0" }, EPSG_4694: { towgs84: "0,0,0" }, EPSG_4148: { towgs84: "0,0,0" }, EPSG_4163: { towgs84: "0,0,0" }, EPSG_4167: { towgs84: "0,0,0" }, EPSG_4189: { towgs84: "0,0,0" }, EPSG_4190: { towgs84: "0,0,0" }, EPSG_4176: { towgs84: "0,0,0" }, EPSG_4659: { towgs84: "0,0,0" }, EPSG_3824: { towgs84: "0,0,0" }, EPSG_3889: { towgs84: "0,0,0" }, EPSG_4046: { towgs84: "0,0,0" }, EPSG_4081: { towgs84: "0,0,0" }, EPSG_4558: { towgs84: "0,0,0" }, EPSG_4483: { towgs84: "0,0,0" }, EPSG_5013: { towgs84: "0,0,0" }, EPSG_5264: { towgs84: "0,0,0" }, EPSG_5324: { towgs84: "0,0,0" }, EPSG_5354: { towgs84: "0,0,0" }, EPSG_5371: { towgs84: "0,0,0" }, EPSG_5373: { towgs84: "0,0,0" }, EPSG_5381: { towgs84: "0,0,0" }, EPSG_5393: { towgs84: "0,0,0" }, EPSG_5489: { towgs84: "0,0,0" }, EPSG_5593: { towgs84: "0,0,0" }, EPSG_6135: { towgs84: "0,0,0" }, EPSG_6365: { towgs84: "0,0,0" }, EPSG_5246: { towgs84: "0,0,0" }, EPSG_7886: { towgs84: "0,0,0" }, EPSG_8431: { towgs84: "0,0,0" }, EPSG_8427: { towgs84: "0,0,0" }, EPSG_8699: { towgs84: "0,0,0" }, EPSG_8818: { towgs84: "0,0,0" }, EPSG_4757: { towgs84: "0,0,0" }, EPSG_9140: { towgs84: "0,0,0" }, EPSG_8086: { towgs84: "0,0,0" }, EPSG_4686: { towgs84: "0,0,0" }, EPSG_4737: { towgs84: "0,0,0" }, EPSG_4702: { towgs84: "0,0,0" }, EPSG_4747: { towgs84: "0,0,0" }, EPSG_4749: { towgs84: "0,0,0" }, EPSG_4674: { towgs84: "0,0,0" }, EPSG_4755: { towgs84: "0,0,0" }, EPSG_4759: { towgs84: "0,0,0" }, EPSG_4762: { towgs84: "0,0,0" }, EPSG_4763: { towgs84: "0,0,0" }, EPSG_4764: { towgs84: "0,0,0" }, EPSG_4166: { towgs84: "0,0,0" }, EPSG_4170: { towgs84: "0,0,0" }, EPSG_5546: { towgs84: "0,0,0" }, EPSG_7844: { towgs84: "0,0,0" }, EPSG_4818: { towgs84: "589,76,480" } };
  for (var $t in Lt) {
    var Vt = Lt[$t];
    Vt.datumName && (Lt[Vt.datumName] = Vt);
  }
  function qt(t2, n2, o2, h2, l2, u2, d2) {
    var _2 = {};
    return _2.datum_type = void 0 === t2 || "none" === t2 ? a : r, n2 && (_2.datum_params = n2.map(parseFloat), 0 === _2.datum_params[0] && 0 === _2.datum_params[1] && 0 === _2.datum_params[2] || (_2.datum_type = e), _2.datum_params.length > 3 && (0 === _2.datum_params[3] && 0 === _2.datum_params[4] && 0 === _2.datum_params[5] && 0 === _2.datum_params[6] || (_2.datum_type = s, _2.datum_params[3] *= c, _2.datum_params[4] *= c, _2.datum_params[5] *= c, _2.datum_params[6] = _2.datum_params[6] / 1e6 + 1))), d2 && (_2.datum_type = i, _2.grids = d2), _2.a = o2, _2.b = h2, _2.es = l2, _2.ep2 = u2, _2;
  }
  var jt = {};
  function Dt(t2, e2, s2) {
    return e2 instanceof ArrayBuffer ? Bt(t2, e2, s2) : { ready: kt(t2, e2) };
  }
  function Bt(t2, e2, s2) {
    var i2 = true;
    void 0 !== s2 && false === s2.includeErrorFields && (i2 = false);
    var r2 = new DataView(e2), a2 = Qt(r2), n2 = Xt(r2, a2), o2 = { header: n2, subgrids: Zt(r2, n2, a2, i2) };
    return jt[t2] = o2, o2;
  }
  async function kt(t2, e2) {
    for (var s2 = [], i2 = await e2.getImageCount(), r2 = i2 - 1; r2 >= 0; r2--) {
      var a2 = await e2.getImage(r2), n2 = await a2.readRasters(), o2 = [a2.getWidth(), a2.getHeight()], h2 = a2.getBoundingBox().map(Wt), c2 = [a2.fileDirectory.ModelPixelScale[0], a2.fileDirectory.ModelPixelScale[1]].map(Wt), l2 = h2[0] + (o2[0] - 1) * c2[0], u2 = h2[3] - (o2[1] - 1) * c2[1], d2 = n2[0], _2 = n2[1], m2 = [];
      for (let t3 = o2[1] - 1; t3 >= 0; t3--)
        for (let e3 = o2[0] - 1; e3 >= 0; e3--) {
          var p2 = t3 * o2[0] + e3;
          m2.push([-Yt(_2[p2]), Yt(d2[p2])]);
        }
      s2.push({ del: c2, lim: o2, ll: [-l2, u2], cvs: m2 });
    }
    var f2 = { header: { nSubgrids: i2 }, subgrids: s2 };
    return jt[t2] = f2, f2;
  }
  function Ft(t2) {
    return void 0 === t2 ? null : t2.split(",").map(Ut);
  }
  function Ut(t2) {
    if (0 === t2.length)
      return null;
    var e2 = "@" === t2[0];
    return e2 && (t2 = t2.slice(1)), "null" === t2 ? { name: "null", mandatory: !e2, grid: null, isNull: true } : { name: t2, mandatory: !e2, grid: jt[t2] || null, isNull: false };
  }
  function Wt(t2) {
    return t2 * Math.PI / 180;
  }
  function Yt(t2) {
    return t2 / 3600 * Math.PI / 180;
  }
  function Qt(t2) {
    var e2 = t2.getInt32(8, false);
    return 11 !== e2 && (11 !== (e2 = t2.getInt32(8, true)) && console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"), true);
  }
  function Xt(t2, e2) {
    return { nFields: t2.getInt32(8, e2), nSubgridFields: t2.getInt32(24, e2), nSubgrids: t2.getInt32(40, e2), shiftType: Ht(t2, 56, 64).trim(), fromSemiMajorAxis: t2.getFloat64(120, e2), fromSemiMinorAxis: t2.getFloat64(136, e2), toSemiMajorAxis: t2.getFloat64(152, e2), toSemiMinorAxis: t2.getFloat64(168, e2) };
  }
  function Ht(t2, e2, s2) {
    return String.fromCharCode.apply(null, new Uint8Array(t2.buffer.slice(e2, s2)));
  }
  function Zt(t2, e2, s2, i2) {
    for (var r2 = 176, a2 = [], n2 = 0; n2 < e2.nSubgrids; n2++) {
      var o2 = Jt(t2, r2, s2), h2 = te(t2, r2, o2, s2, i2), c2 = Math.round(1 + (o2.upperLongitude - o2.lowerLongitude) / o2.longitudeInterval), l2 = Math.round(1 + (o2.upperLatitude - o2.lowerLatitude) / o2.latitudeInterval);
      a2.push({ ll: [Yt(o2.lowerLongitude), Yt(o2.lowerLatitude)], del: [Yt(o2.longitudeInterval), Yt(o2.latitudeInterval)], lim: [c2, l2], count: o2.gridNodeCount, cvs: Kt(h2) });
      var u2 = 16;
      false === i2 && (u2 = 8), r2 += 176 + o2.gridNodeCount * u2;
    }
    return a2;
  }
  function Kt(t2) {
    return t2.map(function(t3) {
      return [Yt(t3.longitudeShift), Yt(t3.latitudeShift)];
    });
  }
  function Jt(t2, e2, s2) {
    return { name: Ht(t2, e2 + 8, e2 + 16).trim(), parent: Ht(t2, e2 + 24, e2 + 24 + 8).trim(), lowerLatitude: t2.getFloat64(e2 + 72, s2), upperLatitude: t2.getFloat64(e2 + 88, s2), lowerLongitude: t2.getFloat64(e2 + 104, s2), upperLongitude: t2.getFloat64(e2 + 120, s2), latitudeInterval: t2.getFloat64(e2 + 136, s2), longitudeInterval: t2.getFloat64(e2 + 152, s2), gridNodeCount: t2.getInt32(e2 + 168, s2) };
  }
  function te(t2, e2, s2, i2, r2) {
    var a2 = e2 + 176, n2 = 16;
    false === r2 && (n2 = 8);
    for (var o2 = [], h2 = 0; h2 < s2.gridNodeCount; h2++) {
      var c2 = { latitudeShift: t2.getFloat32(a2 + h2 * n2, i2), longitudeShift: t2.getFloat32(a2 + h2 * n2 + 4, i2) };
      false !== r2 && (c2.latitudeAccuracy = t2.getFloat32(a2 + h2 * n2 + 8, i2), c2.longitudeAccuracy = t2.getFloat32(a2 + h2 * n2 + 12, i2)), o2.push(c2);
    }
    return o2;
  }
  function ee(t2, e2) {
    if (!(this instanceof ee))
      return new ee(t2);
    e2 = e2 || function(t3) {
      if (t3)
        throw t3;
    };
    var s2 = dt(t2);
    if ("object" == typeof s2) {
      var i2 = ee.projections.get(s2.projName);
      if (i2) {
        if (s2.datumCode && "none" !== s2.datumCode) {
          var r2 = C(Lt, s2.datumCode);
          r2 && (s2.datum_params = s2.datum_params || (r2.towgs84 ? r2.towgs84.split(",") : null), s2.ellps = r2.ellipse, s2.datumName = r2.datumName ? r2.datumName : s2.datumCode);
        }
        s2.k0 = s2.k0 || 1, s2.axis = s2.axis || "enu", s2.ellps = s2.ellps || "wgs84", s2.lat1 = s2.lat1 || s2.lat0;
        var a2 = Rt(s2.a, s2.b, s2.rf, s2.ellps, s2.sphere), n2 = Gt(a2.a, a2.b, a2.rf, s2.R_A), o2 = Ft(s2.nadgrids), h2 = s2.datum || qt(s2.datumCode, s2.datum_params, a2.a, a2.b, n2.es, n2.ep2, o2);
        _t(this, s2), _t(this, i2), this.a = a2.a, this.b = a2.b, this.rf = a2.rf, this.sphere = a2.sphere, this.es = n2.es, this.e = n2.e, this.ep2 = n2.ep2, this.datum = h2, this.init(), e2(null, this);
      } else
        e2("Could not get projection name from: " + t2);
    } else
      e2("Could not parse to valid json: " + t2);
  }
  function se(t2, i2) {
    return t2.datum_type === i2.datum_type && !(t2.a !== i2.a || Math.abs(t2.es - i2.es) > 5e-11) && (t2.datum_type === e ? t2.datum_params[0] === i2.datum_params[0] && t2.datum_params[1] === i2.datum_params[1] && t2.datum_params[2] === i2.datum_params[2] : t2.datum_type !== s || t2.datum_params[0] === i2.datum_params[0] && t2.datum_params[1] === i2.datum_params[1] && t2.datum_params[2] === i2.datum_params[2] && t2.datum_params[3] === i2.datum_params[3] && t2.datum_params[4] === i2.datum_params[4] && t2.datum_params[5] === i2.datum_params[5] && t2.datum_params[6] === i2.datum_params[6]);
  }
  function ie(t2, e2, s2) {
    var i2, r2, a2, n2, o2 = t2.x, h2 = t2.y, c2 = t2.z ? t2.z : 0;
    if (h2 < -l && h2 > -1.001 * l)
      h2 = -l;
    else if (h2 > l && h2 < 1.001 * l)
      h2 = l;
    else {
      if (h2 < -l)
        return { x: -1 / 0, y: -1 / 0, z: t2.z };
      if (h2 > l)
        return { x: 1 / 0, y: 1 / 0, z: t2.z };
    }
    return o2 > Math.PI && (o2 -= 2 * Math.PI), r2 = Math.sin(h2), n2 = Math.cos(h2), a2 = r2 * r2, { x: ((i2 = s2 / Math.sqrt(1 - e2 * a2)) + c2) * n2 * Math.cos(o2), y: (i2 + c2) * n2 * Math.sin(o2), z: (i2 * (1 - e2) + c2) * r2 };
  }
  function re(t2, e2, s2, i2) {
    var r2, a2, n2, o2, h2, c2, l2, u2, d2, _2, m2, p2, f2, y2, g2, M2 = 1e-12, x2 = M2 * M2, w2 = 30, S2 = t2.x, C2 = t2.y, E2 = t2.z ? t2.z : 0;
    if (r2 = Math.sqrt(S2 * S2 + C2 * C2), a2 = Math.sqrt(S2 * S2 + C2 * C2 + E2 * E2), r2 / s2 < M2) {
      if (y2 = 0, a2 / s2 < M2)
        return g2 = -i2, { x: t2.x, y: t2.y, z: t2.z };
    } else
      y2 = Math.atan2(C2, S2);
    n2 = E2 / a2, u2 = (o2 = r2 / a2) * (1 - e2) * (h2 = 1 / Math.sqrt(1 - e2 * (2 - e2) * o2 * o2)), d2 = n2 * h2, f2 = 0;
    do {
      f2++, c2 = e2 * (l2 = s2 / Math.sqrt(1 - e2 * d2 * d2)) / (l2 + (g2 = r2 * u2 + E2 * d2 - l2 * (1 - e2 * d2 * d2))), p2 = (m2 = n2 * (h2 = 1 / Math.sqrt(1 - c2 * (2 - c2) * o2 * o2))) * u2 - (_2 = o2 * (1 - c2) * h2) * d2, u2 = _2, d2 = m2;
    } while (p2 * p2 > x2 && f2 < w2);
    return { x: y2, y: Math.atan(m2 / Math.abs(_2)), z: g2 };
  }
  function ae(t2, i2, r2) {
    if (i2 === e)
      return { x: t2.x + r2[0], y: t2.y + r2[1], z: t2.z + r2[2] };
    if (i2 === s) {
      var a2 = r2[0], n2 = r2[1], o2 = r2[2], h2 = r2[3], c2 = r2[4], l2 = r2[5], u2 = r2[6];
      return { x: u2 * (t2.x - l2 * t2.y + c2 * t2.z) + a2, y: u2 * (l2 * t2.x + t2.y - h2 * t2.z) + n2, z: u2 * (-c2 * t2.x + h2 * t2.y + t2.z) + o2 };
    }
  }
  function ne(t2, i2, r2) {
    if (i2 === e)
      return { x: t2.x - r2[0], y: t2.y - r2[1], z: t2.z - r2[2] };
    if (i2 === s) {
      var a2 = r2[0], n2 = r2[1], o2 = r2[2], h2 = r2[3], c2 = r2[4], l2 = r2[5], u2 = r2[6], d2 = (t2.x - a2) / u2, _2 = (t2.y - n2) / u2, m2 = (t2.z - o2) / u2;
      return { x: d2 + l2 * _2 - c2 * m2, y: -l2 * d2 + _2 + h2 * m2, z: c2 * d2 - h2 * _2 + m2 };
    }
  }
  function oe(t2) {
    return t2 === e || t2 === s;
  }
  function he(t2, e2, s2) {
    if (se(t2, e2))
      return s2;
    if (t2.datum_type === a || e2.datum_type === a)
      return s2;
    var r2 = t2.a, c2 = t2.es;
    if (t2.datum_type === i) {
      if (0 !== ce(t2, false, s2))
        return;
      r2 = n, c2 = h;
    }
    var l2 = e2.a, u2 = e2.b, d2 = e2.es;
    return e2.datum_type === i && (l2 = n, u2 = o, d2 = h), c2 !== d2 || r2 !== l2 || oe(t2.datum_type) || oe(e2.datum_type) ? (s2 = ie(s2, c2, r2), oe(t2.datum_type) && (s2 = ae(s2, t2.datum_type, t2.datum_params)), oe(e2.datum_type) && (s2 = ne(s2, e2.datum_type, e2.datum_params)), s2 = re(s2, d2, l2, u2), e2.datum_type !== i || 0 === ce(e2, true, s2) ? s2 : void 0) : s2;
  }
  function ce(t2, e2, s2) {
    if (null === t2.grids || 0 === t2.grids.length)
      return console.log("Grid shift grids not found"), -1;
    var i2 = { x: -s2.x, y: s2.y }, r2 = { x: Number.NaN, y: Number.NaN }, a2 = [];
    t:
      for (var n2 = 0; n2 < t2.grids.length; n2++) {
        var o2 = t2.grids[n2];
        if (a2.push(o2.name), o2.isNull) {
          r2 = i2;
          break;
        }
        if (null !== o2.grid)
          for (var h2 = o2.grid.subgrids, c2 = 0, l2 = h2.length; c2 < l2; c2++) {
            var u2 = h2[c2], d2 = (Math.abs(u2.del[1]) + Math.abs(u2.del[0])) / 1e4, _2 = u2.ll[0] - d2, m2 = u2.ll[1] - d2, p2 = u2.ll[0] + (u2.lim[0] - 1) * u2.del[0] + d2, y2 = u2.ll[1] + (u2.lim[1] - 1) * u2.del[1] + d2;
            if (!(m2 > i2.y || _2 > i2.x || y2 < i2.y || p2 < i2.x || (r2 = le(i2, e2, u2), isNaN(r2.x))))
              break t;
          }
        else if (o2.mandatory)
          return console.log("Unable to find mandatory grid '" + o2.name + "'"), -1;
      }
    return isNaN(r2.x) ? (console.log("Failed to find a grid shift table for location '" + -i2.x * f + " " + i2.y * f + " tried: '" + a2 + "'"), -1) : (s2.x = -r2.x, s2.y = r2.y, 0);
  }
  function le(t2, e2, s2) {
    var i2 = { x: Number.NaN, y: Number.NaN };
    if (isNaN(t2.x))
      return i2;
    var r2 = { x: t2.x, y: t2.y };
    r2.x -= s2.ll[0], r2.y -= s2.ll[1], r2.x = ft(r2.x - Math.PI) + Math.PI;
    var a2 = ue(r2, s2);
    if (e2) {
      if (isNaN(a2.x))
        return i2;
      a2.x = r2.x - a2.x, a2.y = r2.y - a2.y;
      var n2, o2, h2 = 9, c2 = 1e-12;
      do {
        if (o2 = ue(a2, s2), isNaN(o2.x)) {
          console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");
          break;
        }
        n2 = { x: r2.x - (o2.x + a2.x), y: r2.y - (o2.y + a2.y) }, a2.x += n2.x, a2.y += n2.y;
      } while (h2-- && Math.abs(n2.x) > c2 && Math.abs(n2.y) > c2);
      if (h2 < 0)
        return console.log("Inverse grid shift iterator failed to converge."), i2;
      i2.x = ft(a2.x + s2.ll[0]), i2.y = a2.y + s2.ll[1];
    } else
      isNaN(a2.x) || (i2.x = t2.x + a2.x, i2.y = t2.y + a2.y);
    return i2;
  }
  function ue(t2, e2) {
    var s2, i2 = { x: t2.x / e2.del[0], y: t2.y / e2.del[1] }, r2 = { x: Math.floor(i2.x), y: Math.floor(i2.y) }, a2 = { x: i2.x - 1 * r2.x, y: i2.y - 1 * r2.y }, n2 = { x: Number.NaN, y: Number.NaN };
    if (r2.x < 0 || r2.x >= e2.lim[0])
      return n2;
    if (r2.y < 0 || r2.y >= e2.lim[1])
      return n2;
    s2 = r2.y * e2.lim[0] + r2.x;
    var o2 = { x: e2.cvs[s2][0], y: e2.cvs[s2][1] };
    s2++;
    var h2 = { x: e2.cvs[s2][0], y: e2.cvs[s2][1] };
    s2 += e2.lim[0];
    var c2 = { x: e2.cvs[s2][0], y: e2.cvs[s2][1] };
    s2--;
    var l2 = { x: e2.cvs[s2][0], y: e2.cvs[s2][1] }, u2 = a2.x * a2.y, d2 = a2.x * (1 - a2.y), _2 = (1 - a2.x) * (1 - a2.y), m2 = (1 - a2.x) * a2.y;
    return n2.x = _2 * o2.x + d2 * h2.x + m2 * l2.x + u2 * c2.x, n2.y = _2 * o2.y + d2 * h2.y + m2 * l2.y + u2 * c2.y, n2;
  }
  function de(t2, e2, s2) {
    var i2, r2, a2, n2 = s2.x, o2 = s2.y, h2 = s2.z || 0, c2 = {};
    for (a2 = 0; a2 < 3; a2++)
      if (!e2 || 2 !== a2 || void 0 !== s2.z)
        switch (0 === a2 ? (i2 = n2, r2 = -1 !== "ew".indexOf(t2.axis[a2]) ? "x" : "y") : 1 === a2 ? (i2 = o2, r2 = -1 !== "ns".indexOf(t2.axis[a2]) ? "y" : "x") : (i2 = h2, r2 = "z"), t2.axis[a2]) {
          case "e":
          case "n":
            c2[r2] = i2;
            break;
          case "w":
          case "s":
            c2[r2] = -i2;
            break;
          case "u":
            void 0 !== s2[r2] && (c2.z = i2);
            break;
          case "d":
            void 0 !== s2[r2] && (c2.z = -i2);
            break;
          default:
            return null;
        }
    return c2;
  }
  function _e(t2) {
    var e2 = { x: t2[0], y: t2[1] };
    return t2.length > 2 && (e2.z = t2[2]), t2.length > 3 && (e2.m = t2[3]), e2;
  }
  function me(t2) {
    pe(t2.x), pe(t2.y);
  }
  function pe(t2) {
    if ("function" == typeof Number.isFinite) {
      if (Number.isFinite(t2))
        return;
      throw new TypeError("coordinates must be finite numbers");
    }
    if ("number" != typeof t2 || t2 != t2 || !isFinite(t2))
      throw new TypeError("coordinates must be finite numbers");
  }
  function fe(t2, r2) {
    return (t2.datum.datum_type === e || t2.datum.datum_type === s || t2.datum.datum_type === i) && "WGS84" !== r2.datumCode || (r2.datum.datum_type === e || r2.datum.datum_type === s || r2.datum.datum_type === i) && "WGS84" !== t2.datumCode;
  }
  function ye(t2, e2, s2, i2) {
    var r2, a2 = void 0 !== (s2 = Array.isArray(s2) ? _e(s2) : { x: s2.x, y: s2.y, z: s2.z, m: s2.m }).z;
    if (me(s2), t2.datum && e2.datum && fe(t2, e2) && (s2 = ye(t2, r2 = new ee("WGS84"), s2, i2), t2 = r2), i2 && "enu" !== t2.axis && (s2 = de(t2, false, s2)), "longlat" === t2.projName)
      s2 = { x: s2.x * p, y: s2.y * p, z: s2.z || 0 };
    else if (t2.to_meter && (s2 = { x: s2.x * t2.to_meter, y: s2.y * t2.to_meter, z: s2.z || 0 }), !(s2 = t2.inverse(s2)))
      return;
    if (t2.from_greenwich && (s2.x += t2.from_greenwich), s2 = he(t2.datum, e2.datum, s2))
      return e2.from_greenwich && (s2 = { x: s2.x - e2.from_greenwich, y: s2.y, z: s2.z || 0 }), "longlat" === e2.projName ? s2 = { x: s2.x * f, y: s2.y * f, z: s2.z || 0 } : (s2 = e2.forward(s2), e2.to_meter && (s2 = { x: s2.x / e2.to_meter, y: s2.y / e2.to_meter, z: s2.z || 0 })), i2 && "enu" !== e2.axis ? de(e2, true, s2) : (s2 && !a2 && delete s2.z, s2);
  }
  ee.projections = zt, ee.projections.start();
  var ge = ee("WGS84");
  function Me(t2, e2, s2, i2) {
    var r2, a2, n2;
    return Array.isArray(s2) ? (r2 = ye(t2, e2, s2, i2) || { x: NaN, y: NaN }, s2.length > 2 ? void 0 !== t2.name && "geocent" === t2.name || void 0 !== e2.name && "geocent" === e2.name ? "number" == typeof r2.z ? [r2.x, r2.y, r2.z].concat(s2.slice(3)) : [r2.x, r2.y, s2[2]].concat(s2.slice(3)) : [r2.x, r2.y].concat(s2.slice(2)) : [r2.x, r2.y]) : (a2 = ye(t2, e2, s2, i2), 2 === (n2 = Object.keys(s2)).length || n2.forEach(function(i3) {
      if (void 0 !== t2.name && "geocent" === t2.name || void 0 !== e2.name && "geocent" === e2.name) {
        if ("x" === i3 || "y" === i3 || "z" === i3)
          return;
      } else if ("x" === i3 || "y" === i3)
        return;
      a2[i3] = s2[i3];
    }), a2);
  }
  function xe(t2) {
    return t2 instanceof ee ? t2 : t2.oProj ? t2.oProj : ee(t2);
  }
  function we(t2, e2, s2) {
    t2 = xe(t2);
    var i2, r2 = false;
    return void 0 === e2 ? (e2 = t2, t2 = ge, r2 = true) : (void 0 !== e2.x || Array.isArray(e2)) && (s2 = e2, e2 = t2, t2 = ge, r2 = true), e2 = xe(e2), s2 ? Me(t2, e2, s2) : (i2 = { forward: function(s3, i3) {
      return Me(t2, e2, s3, i3);
    }, inverse: function(s3, i3) {
      return Me(e2, t2, s3, i3);
    } }, r2 && (i2.oProj = e2), i2);
  }
  var Se = 6, Ce = "AJSAJS", Ee = "AFAFAF", Pe = 65, be = 73, Ae = 79, ve = 86, Te = 90, Ie = { forward: ze, inverse: Oe, toPoint: Ne };
  function ze(t2, e2) {
    return e2 = e2 || 5, qe(Le({ lat: t2[1], lon: t2[0] }), e2);
  }
  function Oe(t2) {
    var e2 = $e(ke(t2.toUpperCase()));
    return e2.lat && e2.lon ? [e2.lon, e2.lat, e2.lon, e2.lat] : [e2.left, e2.bottom, e2.right, e2.top];
  }
  function Ne(t2) {
    var e2 = $e(ke(t2.toUpperCase()));
    return e2.lat && e2.lon ? [e2.lon, e2.lat] : [(e2.left + e2.right) / 2, (e2.top + e2.bottom) / 2];
  }
  function Ge(t2) {
    return t2 * (Math.PI / 180);
  }
  function Re(t2) {
    return t2 / Math.PI * 180;
  }
  function Le(t2) {
    var e2, s2, i2, r2, a2, n2, o2, h2 = t2.lat, c2 = t2.lon, l2 = 6378137, u2 = 669438e-8, d2 = 0.9996, _2 = Ge(h2), m2 = Ge(c2);
    o2 = Math.floor((c2 + 180) / 6) + 1, 180 === c2 && (o2 = 60), h2 >= 56 && h2 < 64 && c2 >= 3 && c2 < 12 && (o2 = 32), h2 >= 72 && h2 < 84 && (c2 >= 0 && c2 < 9 ? o2 = 31 : c2 >= 9 && c2 < 21 ? o2 = 33 : c2 >= 21 && c2 < 33 ? o2 = 35 : c2 >= 33 && c2 < 42 && (o2 = 37)), n2 = Ge(6 * (o2 - 1) - 180 + 3), e2 = u2 / (1 - u2), s2 = l2 / Math.sqrt(1 - u2 * Math.sin(_2) * Math.sin(_2)), i2 = Math.tan(_2) * Math.tan(_2), r2 = e2 * Math.cos(_2) * Math.cos(_2);
    var p2 = d2 * s2 * ((a2 = Math.cos(_2) * (m2 - n2)) + (1 - i2 + r2) * a2 * a2 * a2 / 6 + (5 - 18 * i2 + i2 * i2 + 72 * r2 - 58 * e2) * a2 * a2 * a2 * a2 * a2 / 120) + 5e5, f2 = d2 * (l2 * ((1 - u2 / 4 - 3 * u2 * u2 / 64 - 5 * u2 * u2 * u2 / 256) * _2 - (3 * u2 / 8 + 3 * u2 * u2 / 32 + 45 * u2 * u2 * u2 / 1024) * Math.sin(2 * _2) + (15 * u2 * u2 / 256 + 45 * u2 * u2 * u2 / 1024) * Math.sin(4 * _2) - 35 * u2 * u2 * u2 / 3072 * Math.sin(6 * _2)) + s2 * Math.tan(_2) * (a2 * a2 / 2 + (5 - i2 + 9 * r2 + 4 * r2 * r2) * a2 * a2 * a2 * a2 / 24 + (61 - 58 * i2 + i2 * i2 + 600 * r2 - 330 * e2) * a2 * a2 * a2 * a2 * a2 * a2 / 720));
    return h2 < 0 && (f2 += 1e7), { northing: Math.round(f2), easting: Math.round(p2), zoneNumber: o2, zoneLetter: Ve(h2) };
  }
  function $e(t2) {
    var e2 = t2.northing, s2 = t2.easting, i2 = t2.zoneLetter, r2 = t2.zoneNumber;
    if (r2 < 0 || r2 > 60)
      return null;
    var a2, n2, o2, h2, c2, l2, u2, d2, _2, m2 = 0.9996, p2 = 6378137, f2 = 669438e-8, y2 = (1 - Math.sqrt(1 - f2)) / (1 + Math.sqrt(1 - f2)), g2 = s2 - 5e5, M2 = e2;
    i2 < "N" && (M2 -= 1e7), u2 = 6 * (r2 - 1) - 180 + 3, a2 = f2 / (1 - f2), _2 = (d2 = M2 / m2 / (p2 * (1 - f2 / 4 - 3 * f2 * f2 / 64 - 5 * f2 * f2 * f2 / 256))) + (3 * y2 / 2 - 27 * y2 * y2 * y2 / 32) * Math.sin(2 * d2) + (21 * y2 * y2 / 16 - 55 * y2 * y2 * y2 * y2 / 32) * Math.sin(4 * d2) + 151 * y2 * y2 * y2 / 96 * Math.sin(6 * d2), n2 = p2 / Math.sqrt(1 - f2 * Math.sin(_2) * Math.sin(_2)), o2 = Math.tan(_2) * Math.tan(_2), h2 = a2 * Math.cos(_2) * Math.cos(_2), c2 = p2 * (1 - f2) / Math.pow(1 - f2 * Math.sin(_2) * Math.sin(_2), 1.5), l2 = g2 / (n2 * m2);
    var x2 = _2 - n2 * Math.tan(_2) / c2 * (l2 * l2 / 2 - (5 + 3 * o2 + 10 * h2 - 4 * h2 * h2 - 9 * a2) * l2 * l2 * l2 * l2 / 24 + (61 + 90 * o2 + 298 * h2 + 45 * o2 * o2 - 252 * a2 - 3 * h2 * h2) * l2 * l2 * l2 * l2 * l2 * l2 / 720);
    x2 = Re(x2);
    var w2, S2 = (l2 - (1 + 2 * o2 + h2) * l2 * l2 * l2 / 6 + (5 - 2 * h2 + 28 * o2 - 3 * h2 * h2 + 8 * a2 + 24 * o2 * o2) * l2 * l2 * l2 * l2 * l2 / 120) / Math.cos(_2);
    if (S2 = u2 + Re(S2), t2.accuracy) {
      var C2 = $e({ northing: t2.northing + t2.accuracy, easting: t2.easting + t2.accuracy, zoneLetter: t2.zoneLetter, zoneNumber: t2.zoneNumber });
      w2 = { top: C2.lat, right: C2.lon, bottom: x2, left: S2 };
    } else
      w2 = { lat: x2, lon: S2 };
    return w2;
  }
  function Ve(t2) {
    var e2 = "Z";
    return 84 >= t2 && t2 >= 72 ? e2 = "X" : 72 > t2 && t2 >= 64 ? e2 = "W" : 64 > t2 && t2 >= 56 ? e2 = "V" : 56 > t2 && t2 >= 48 ? e2 = "U" : 48 > t2 && t2 >= 40 ? e2 = "T" : 40 > t2 && t2 >= 32 ? e2 = "S" : 32 > t2 && t2 >= 24 ? e2 = "R" : 24 > t2 && t2 >= 16 ? e2 = "Q" : 16 > t2 && t2 >= 8 ? e2 = "P" : 8 > t2 && t2 >= 0 ? e2 = "N" : 0 > t2 && t2 >= -8 ? e2 = "M" : -8 > t2 && t2 >= -16 ? e2 = "L" : -16 > t2 && t2 >= -24 ? e2 = "K" : -24 > t2 && t2 >= -32 ? e2 = "J" : -32 > t2 && t2 >= -40 ? e2 = "H" : -40 > t2 && t2 >= -48 ? e2 = "G" : -48 > t2 && t2 >= -56 ? e2 = "F" : -56 > t2 && t2 >= -64 ? e2 = "E" : -64 > t2 && t2 >= -72 ? e2 = "D" : -72 > t2 && t2 >= -80 && (e2 = "C"), e2;
  }
  function qe(t2, e2) {
    var s2 = "00000" + t2.easting, i2 = "00000" + t2.northing;
    return t2.zoneNumber + t2.zoneLetter + je(t2.easting, t2.northing, t2.zoneNumber) + s2.substr(s2.length - 5, e2) + i2.substr(i2.length - 5, e2);
  }
  function je(t2, e2, s2) {
    var i2 = De(s2);
    return Be(Math.floor(t2 / 1e5), Math.floor(e2 / 1e5) % 20, i2);
  }
  function De(t2) {
    var e2 = t2 % Se;
    return 0 === e2 && (e2 = Se), e2;
  }
  function Be(t2, e2, s2) {
    var i2 = s2 - 1, r2 = Ce.charCodeAt(i2), a2 = Ee.charCodeAt(i2), n2 = r2 + t2 - 1, o2 = a2 + e2, h2 = false;
    return n2 > Te && (n2 = n2 - Te + Pe - 1, h2 = true), (n2 === be || r2 < be && n2 > be || (n2 > be || r2 < be) && h2) && n2++, (n2 === Ae || r2 < Ae && n2 > Ae || (n2 > Ae || r2 < Ae) && h2) && ++n2 === be && n2++, n2 > Te && (n2 = n2 - Te + Pe - 1), o2 > ve ? (o2 = o2 - ve + Pe - 1, h2 = true) : h2 = false, (o2 === be || a2 < be && o2 > be || (o2 > be || a2 < be) && h2) && o2++, (o2 === Ae || a2 < Ae && o2 > Ae || (o2 > Ae || a2 < Ae) && h2) && ++o2 === be && o2++, o2 > ve && (o2 = o2 - ve + Pe - 1), String.fromCharCode(n2) + String.fromCharCode(o2);
  }
  function ke(t2) {
    if (t2 && 0 === t2.length)
      throw "MGRSPoint coverting from nothing";
    for (var e2, s2 = t2.length, i2 = null, r2 = "", a2 = 0; !/[A-Z]/.test(e2 = t2.charAt(a2)); ) {
      if (a2 >= 2)
        throw "MGRSPoint bad conversion from: " + t2;
      r2 += e2, a2++;
    }
    var n2 = parseInt(r2, 10);
    if (0 === a2 || a2 + 3 > s2)
      throw "MGRSPoint bad conversion from: " + t2;
    var o2 = t2.charAt(a2++);
    if (o2 <= "A" || "B" === o2 || "Y" === o2 || o2 >= "Z" || "I" === o2 || "O" === o2)
      throw "MGRSPoint zone letter " + o2 + " not handled: " + t2;
    i2 = t2.substring(a2, a2 += 2);
    for (var h2 = De(n2), c2 = Fe(i2.charAt(0), h2), l2 = Ue(i2.charAt(1), h2); l2 < We(o2); )
      l2 += 2e6;
    var u2 = s2 - a2;
    if (u2 % 2 != 0)
      throw "MGRSPoint has to have an even number \nof digits after the zone letter and two 100km letters - front \nhalf for easting meters, second half for \nnorthing meters" + t2;
    var d2, _2, m2, p2 = u2 / 2, f2 = 0, y2 = 0;
    return p2 > 0 && (d2 = 1e5 / Math.pow(10, p2), _2 = t2.substring(a2, a2 + p2), f2 = parseFloat(_2) * d2, m2 = t2.substring(a2 + p2), y2 = parseFloat(m2) * d2), { easting: f2 + c2, northing: y2 + l2, zoneLetter: o2, zoneNumber: n2, accuracy: d2 };
  }
  function Fe(t2, e2) {
    for (var s2 = Ce.charCodeAt(e2 - 1), i2 = 1e5, r2 = false; s2 !== t2.charCodeAt(0); ) {
      if (++s2 === be && s2++, s2 === Ae && s2++, s2 > Te) {
        if (r2)
          throw "Bad character: " + t2;
        s2 = Pe, r2 = true;
      }
      i2 += 1e5;
    }
    return i2;
  }
  function Ue(t2, e2) {
    if (t2 > "V")
      throw "MGRSPoint given invalid Northing " + t2;
    for (var s2 = Ee.charCodeAt(e2 - 1), i2 = 0, r2 = false; s2 !== t2.charCodeAt(0); ) {
      if (++s2 === be && s2++, s2 === Ae && s2++, s2 > ve) {
        if (r2)
          throw "Bad character: " + t2;
        s2 = Pe, r2 = true;
      }
      i2 += 1e5;
    }
    return i2;
  }
  function We(t2) {
    var e2;
    switch (t2) {
      case "C":
        e2 = 11e5;
        break;
      case "D":
        e2 = 2e6;
        break;
      case "E":
        e2 = 28e5;
        break;
      case "F":
        e2 = 37e5;
        break;
      case "G":
        e2 = 46e5;
        break;
      case "H":
        e2 = 55e5;
        break;
      case "J":
        e2 = 64e5;
        break;
      case "K":
        e2 = 73e5;
        break;
      case "L":
        e2 = 82e5;
        break;
      case "M":
        e2 = 91e5;
        break;
      case "N":
        e2 = 0;
        break;
      case "P":
        e2 = 8e5;
        break;
      case "Q":
        e2 = 17e5;
        break;
      case "R":
        e2 = 26e5;
        break;
      case "S":
        e2 = 35e5;
        break;
      case "T":
        e2 = 44e5;
        break;
      case "U":
        e2 = 53e5;
        break;
      case "V":
        e2 = 62e5;
        break;
      case "W":
        e2 = 7e6;
        break;
      case "X":
        e2 = 79e5;
        break;
      default:
        e2 = -1;
    }
    if (e2 >= 0)
      return e2;
    throw "Invalid zone letter: " + t2;
  }
  function Ye(t2, e2, s2) {
    if (!(this instanceof Ye))
      return new Ye(t2, e2, s2);
    if (Array.isArray(t2))
      this.x = t2[0], this.y = t2[1], this.z = t2[2] || 0;
    else if ("object" == typeof t2)
      this.x = t2.x, this.y = t2.y, this.z = t2.z || 0;
    else if ("string" == typeof t2 && void 0 === e2) {
      var i2 = t2.split(",");
      this.x = parseFloat(i2[0], 10), this.y = parseFloat(i2[1], 10), this.z = parseFloat(i2[2], 10) || 0;
    } else
      this.x = t2, this.y = e2, this.z = s2 || 0;
    console.warn("proj4.Point will be removed in version 3, use proj4.toPoint");
  }
  Ye.fromMGRS = function(t2) {
    return new Ye(Ne(t2));
  }, Ye.prototype.toMGRS = function(t2) {
    return ze([this.x, this.y], t2);
  };
  var Qe = 1, Xe = 0.25, He = 0.046875, Ze = 0.01953125, Ke = 0.01068115234375, Je = 0.75, ts = 0.46875, es = 0.013020833333333334, ss = 0.007120768229166667, is = 0.3645833333333333, rs = 0.005696614583333333, as = 0.3076171875;
  function ns(t2) {
    var e2 = [];
    e2[0] = Qe - t2 * (Xe + t2 * (He + t2 * (Ze + t2 * Ke))), e2[1] = t2 * (Je - t2 * (He + t2 * (Ze + t2 * Ke)));
    var s2 = t2 * t2;
    return e2[2] = s2 * (ts - t2 * (es + t2 * ss)), s2 *= t2, e2[3] = s2 * (is - t2 * rs), e2[4] = s2 * t2 * as, e2;
  }
  function os(t2, e2, s2, i2) {
    return s2 *= e2, e2 *= e2, i2[0] * t2 - s2 * (i2[1] + e2 * (i2[2] + e2 * (i2[3] + e2 * i2[4])));
  }
  var hs = 20;
  function cs(t2, e2, s2) {
    for (var i2 = 1 / (1 - e2), r2 = t2, a2 = hs; a2; --a2) {
      var n2 = Math.sin(r2), o2 = 1 - e2 * n2 * n2;
      if (r2 -= o2 = (os(r2, n2, Math.cos(r2), s2) - t2) * (o2 * Math.sqrt(o2)) * i2, Math.abs(o2) < m)
        return r2;
    }
    return r2;
  }
  function ls() {
    this.x0 = void 0 !== this.x0 ? this.x0 : 0, this.y0 = void 0 !== this.y0 ? this.y0 : 0, this.long0 = void 0 !== this.long0 ? this.long0 : 0, this.lat0 = void 0 !== this.lat0 ? this.lat0 : 0, this.es && (this.en = ns(this.es), this.ml0 = os(this.lat0, Math.sin(this.lat0), Math.cos(this.lat0), this.en));
  }
  function us(t2) {
    var e2, s2, i2, r2 = t2.x, a2 = t2.y, n2 = ft(r2 - this.long0), o2 = Math.sin(a2), h2 = Math.cos(a2);
    if (this.es) {
      var c2 = h2 * n2, l2 = Math.pow(c2, 2), u2 = this.ep2 * Math.pow(h2, 2), d2 = Math.pow(u2, 2), _2 = Math.abs(h2) > m ? Math.tan(a2) : 0, p2 = Math.pow(_2, 2), f2 = Math.pow(p2, 2);
      e2 = 1 - this.es * Math.pow(o2, 2), c2 /= Math.sqrt(e2);
      var y2 = os(a2, o2, h2, this.en);
      s2 = this.a * (this.k0 * c2 * (1 + l2 / 6 * (1 - p2 + u2 + l2 / 20 * (5 - 18 * p2 + f2 + 14 * u2 - 58 * p2 * u2 + l2 / 42 * (61 + 179 * f2 - f2 * p2 - 479 * p2))))) + this.x0, i2 = this.a * (this.k0 * (y2 - this.ml0 + o2 * n2 * c2 / 2 * (1 + l2 / 12 * (5 - p2 + 9 * u2 + 4 * d2 + l2 / 30 * (61 + f2 - 58 * p2 + 270 * u2 - 330 * p2 * u2 + l2 / 56 * (1385 + 543 * f2 - f2 * p2 - 3111 * p2)))))) + this.y0;
    } else {
      var g2 = h2 * Math.sin(n2);
      if (Math.abs(Math.abs(g2) - 1) < m)
        return 93;
      if (s2 = 0.5 * this.a * this.k0 * Math.log((1 + g2) / (1 - g2)) + this.x0, i2 = h2 * Math.cos(n2) / Math.sqrt(1 - Math.pow(g2, 2)), (g2 = Math.abs(i2)) >= 1) {
        if (g2 - 1 > m)
          return 93;
        i2 = 0;
      } else
        i2 = Math.acos(i2);
      a2 < 0 && (i2 = -i2), i2 = this.a * this.k0 * (i2 - this.lat0) + this.y0;
    }
    return t2.x = s2, t2.y = i2, t2;
  }
  function ds(t2) {
    var e2, s2, i2, r2, a2 = (t2.x - this.x0) * (1 / this.a), n2 = (t2.y - this.y0) * (1 / this.a);
    if (this.es)
      if (s2 = cs(e2 = this.ml0 + n2 / this.k0, this.es, this.en), Math.abs(s2) < l) {
        var o2 = Math.sin(s2), h2 = Math.cos(s2), c2 = Math.abs(h2) > m ? Math.tan(s2) : 0, u2 = this.ep2 * Math.pow(h2, 2), d2 = Math.pow(u2, 2), _2 = Math.pow(c2, 2), p2 = Math.pow(_2, 2);
        e2 = 1 - this.es * Math.pow(o2, 2);
        var f2 = a2 * Math.sqrt(e2) / this.k0, y2 = Math.pow(f2, 2);
        i2 = s2 - (e2 *= c2) * y2 / (1 - this.es) * 0.5 * (1 - y2 / 12 * (5 + 3 * _2 - 9 * u2 * _2 + u2 - 4 * d2 - y2 / 30 * (61 + 90 * _2 - 252 * u2 * _2 + 45 * p2 + 46 * u2 - y2 / 56 * (1385 + 3633 * _2 + 4095 * p2 + 1574 * p2 * _2)))), r2 = ft(this.long0 + f2 * (1 - y2 / 6 * (1 + 2 * _2 + u2 - y2 / 20 * (5 + 28 * _2 + 24 * p2 + 8 * u2 * _2 + 6 * u2 - y2 / 42 * (61 + 662 * _2 + 1320 * p2 + 720 * p2 * _2)))) / h2);
      } else
        i2 = l * pt(n2), r2 = 0;
    else {
      var g2 = Math.exp(a2 / this.k0), M2 = 0.5 * (g2 - 1 / g2), x2 = this.lat0 + n2 / this.k0, w2 = Math.cos(x2);
      e2 = Math.sqrt((1 - Math.pow(w2, 2)) / (1 + Math.pow(M2, 2))), i2 = Math.asin(e2), n2 < 0 && (i2 = -i2), r2 = 0 === M2 && 0 === w2 ? 0 : ft(Math.atan2(M2, w2) + this.long0);
    }
    return t2.x = r2, t2.y = i2, t2;
  }
  var _s = { init: ls, forward: us, inverse: ds, names: ["Fast_Transverse_Mercator", "Fast Transverse Mercator"] };
  function ms(t2) {
    var e2 = Math.exp(t2);
    return e2 = (e2 - 1 / e2) / 2;
  }
  function ps(t2, e2) {
    t2 = Math.abs(t2), e2 = Math.abs(e2);
    var s2 = Math.max(t2, e2), i2 = Math.min(t2, e2) / (s2 || 1);
    return s2 * Math.sqrt(1 + Math.pow(i2, 2));
  }
  function fs(t2) {
    var e2 = 1 + t2, s2 = e2 - 1;
    return 0 === s2 ? t2 : t2 * Math.log(e2) / s2;
  }
  function ys(t2) {
    var e2 = Math.abs(t2);
    return e2 = fs(e2 * (1 + e2 / (ps(1, e2) + 1))), t2 < 0 ? -e2 : e2;
  }
  function gs(t2, e2) {
    for (var s2, i2 = 2 * Math.cos(2 * e2), r2 = t2.length - 1, a2 = t2[r2], n2 = 0; --r2 >= 0; )
      s2 = i2 * a2 - n2 + t2[r2], n2 = a2, a2 = s2;
    return e2 + s2 * Math.sin(2 * e2);
  }
  function Ms(t2, e2) {
    for (var s2, i2 = 2 * Math.cos(e2), r2 = t2.length - 1, a2 = t2[r2], n2 = 0; --r2 >= 0; )
      s2 = i2 * a2 - n2 + t2[r2], n2 = a2, a2 = s2;
    return Math.sin(e2) * s2;
  }
  function xs(t2) {
    var e2 = Math.exp(t2);
    return e2 = (e2 + 1 / e2) / 2;
  }
  function ws(t2, e2, s2) {
    for (var i2, r2, a2 = Math.sin(e2), n2 = Math.cos(e2), o2 = ms(s2), h2 = xs(s2), c2 = 2 * n2 * h2, l2 = -2 * a2 * o2, u2 = t2.length - 1, d2 = t2[u2], _2 = 0, m2 = 0, p2 = 0; --u2 >= 0; )
      i2 = m2, r2 = _2, d2 = c2 * (m2 = d2) - i2 - l2 * (_2 = p2) + t2[u2], p2 = l2 * m2 - r2 + c2 * _2;
    return [(c2 = a2 * h2) * d2 - (l2 = n2 * o2) * p2, c2 * p2 + l2 * d2];
  }
  function Ss() {
    if (!this.approx && (isNaN(this.es) || this.es <= 0))
      throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');
    this.approx && (_s.init.apply(this), this.forward = _s.forward, this.inverse = _s.inverse), this.x0 = void 0 !== this.x0 ? this.x0 : 0, this.y0 = void 0 !== this.y0 ? this.y0 : 0, this.long0 = void 0 !== this.long0 ? this.long0 : 0, this.lat0 = void 0 !== this.lat0 ? this.lat0 : 0, this.cgb = [], this.cbg = [], this.utg = [], this.gtu = [];
    var t2 = this.es / (1 + Math.sqrt(1 - this.es)), e2 = t2 / (2 - t2), s2 = e2;
    this.cgb[0] = e2 * (2 + e2 * (-2 / 3 + e2 * (e2 * (116 / 45 + e2 * (26 / 45 + e2 * (-2854 / 675))) - 2))), this.cbg[0] = e2 * (e2 * (2 / 3 + e2 * (4 / 3 + e2 * (-82 / 45 + e2 * (32 / 45 + e2 * (4642 / 4725))))) - 2), s2 *= e2, this.cgb[1] = s2 * (7 / 3 + e2 * (e2 * (-227 / 45 + e2 * (2704 / 315 + e2 * (2323 / 945))) - 1.6)), this.cbg[1] = s2 * (5 / 3 + e2 * (-16 / 15 + e2 * (-13 / 9 + e2 * (904 / 315 + e2 * (-1522 / 945))))), s2 *= e2, this.cgb[2] = s2 * (56 / 15 + e2 * (-136 / 35 + e2 * (-1262 / 105 + e2 * (73814 / 2835)))), this.cbg[2] = s2 * (-26 / 15 + e2 * (34 / 21 + e2 * (1.6 + e2 * (-12686 / 2835)))), s2 *= e2, this.cgb[3] = s2 * (4279 / 630 + e2 * (-332 / 35 + e2 * (-399572 / 14175))), this.cbg[3] = s2 * (1237 / 630 + e2 * (e2 * (-24832 / 14175) - 2.4)), s2 *= e2, this.cgb[4] = s2 * (4174 / 315 + e2 * (-144838 / 6237)), this.cbg[4] = s2 * (-734 / 315 + e2 * (109598 / 31185)), s2 *= e2, this.cgb[5] = s2 * (601676 / 22275), this.cbg[5] = s2 * (444337 / 155925), s2 = Math.pow(e2, 2), this.Qn = this.k0 / (1 + e2) * (1 + s2 * (1 / 4 + s2 * (1 / 64 + s2 / 256))), this.utg[0] = e2 * (e2 * (2 / 3 + e2 * (-37 / 96 + e2 * (1 / 360 + e2 * (81 / 512 + e2 * (-96199 / 604800))))) - 0.5), this.gtu[0] = e2 * (0.5 + e2 * (-2 / 3 + e2 * (5 / 16 + e2 * (41 / 180 + e2 * (-127 / 288 + e2 * (7891 / 37800)))))), this.utg[1] = s2 * (-1 / 48 + e2 * (-1 / 15 + e2 * (437 / 1440 + e2 * (-46 / 105 + e2 * (1118711 / 3870720))))), this.gtu[1] = s2 * (13 / 48 + e2 * (e2 * (557 / 1440 + e2 * (281 / 630 + e2 * (-1983433 / 1935360))) - 0.6)), s2 *= e2, this.utg[2] = s2 * (-17 / 480 + e2 * (37 / 840 + e2 * (209 / 4480 + e2 * (-5569 / 90720)))), this.gtu[2] = s2 * (61 / 240 + e2 * (-103 / 140 + e2 * (15061 / 26880 + e2 * (167603 / 181440)))), s2 *= e2, this.utg[3] = s2 * (-4397 / 161280 + e2 * (11 / 504 + e2 * (830251 / 7257600))), this.gtu[3] = s2 * (49561 / 161280 + e2 * (-179 / 168 + e2 * (6601661 / 7257600))), s2 *= e2, this.utg[4] = s2 * (-4583 / 161280 + e2 * (108847 / 3991680)), this.gtu[4] = s2 * (34729 / 80640 + e2 * (-3418889 / 1995840)), s2 *= e2, this.utg[5] = s2 * (-20648693 / 638668800), this.gtu[5] = 0.6650675310896665 * s2;
    var i2 = gs(this.cbg, this.lat0);
    this.Zb = -this.Qn * (i2 + Ms(this.gtu, 2 * i2));
  }
  function Cs(t2) {
    var e2 = ft(t2.x - this.long0), s2 = t2.y;
    s2 = gs(this.cbg, s2);
    var i2 = Math.sin(s2), r2 = Math.cos(s2), a2 = Math.sin(e2), n2 = Math.cos(e2);
    s2 = Math.atan2(i2, n2 * r2), e2 = Math.atan2(a2 * r2, ps(i2, r2 * n2)), e2 = ys(Math.tan(e2));
    var o2, h2, c2 = ws(this.gtu, 2 * s2, 2 * e2);
    return s2 += c2[0], e2 += c2[1], Math.abs(e2) <= 2.623395162778 ? (o2 = this.a * (this.Qn * e2) + this.x0, h2 = this.a * (this.Qn * s2 + this.Zb) + this.y0) : (o2 = 1 / 0, h2 = 1 / 0), t2.x = o2, t2.y = h2, t2;
  }
  function Es(t2) {
    var e2, s2, i2 = (t2.x - this.x0) * (1 / this.a), r2 = (t2.y - this.y0) * (1 / this.a);
    if (r2 = (r2 - this.Zb) / this.Qn, i2 /= this.Qn, Math.abs(i2) <= 2.623395162778) {
      var a2 = ws(this.utg, 2 * r2, 2 * i2);
      r2 += a2[0], i2 += a2[1], i2 = Math.atan(ms(i2));
      var n2 = Math.sin(r2), o2 = Math.cos(r2), h2 = Math.sin(i2), c2 = Math.cos(i2);
      r2 = Math.atan2(n2 * c2, ps(h2, c2 * o2)), e2 = ft((i2 = Math.atan2(h2, c2 * o2)) + this.long0), s2 = gs(this.cgb, r2);
    } else
      e2 = 1 / 0, s2 = 1 / 0;
    return t2.x = e2, t2.y = s2, t2;
  }
  var Ps = { init: Ss, forward: Cs, inverse: Es, names: ["Extended_Transverse_Mercator", "Extended Transverse Mercator", "etmerc", "Transverse_Mercator", "Transverse Mercator", "Gauss Kruger", "Gauss_Kruger", "tmerc"] };
  function bs(t2, e2) {
    if (void 0 === t2) {
      if ((t2 = Math.floor(30 * (ft(e2) + Math.PI) / Math.PI) + 1) < 0)
        return 0;
      if (t2 > 60)
        return 60;
    }
    return t2;
  }
  function As() {
    var t2 = bs(this.zone, this.long0);
    if (void 0 === t2)
      throw new Error("unknown utm zone");
    this.lat0 = 0, this.long0 = (6 * Math.abs(t2) - 183) * p, this.x0 = 5e5, this.y0 = this.utmSouth ? 1e7 : 0, this.k0 = 0.9996, Ps.init.apply(this), this.forward = Ps.forward, this.inverse = Ps.inverse;
  }
  var vs = { init: As, names: ["Universal Transverse Mercator System", "utm"], dependsOn: "etmerc" };
  function Ts(t2, e2) {
    return Math.pow((1 - t2) / (1 + t2), e2);
  }
  var Is = 20;
  function zs() {
    var t2 = Math.sin(this.lat0), e2 = Math.cos(this.lat0);
    e2 *= e2, this.rc = Math.sqrt(1 - this.es) / (1 - this.es * t2 * t2), this.C = Math.sqrt(1 + this.es * e2 * e2 / (1 - this.es)), this.phic0 = Math.asin(t2 / this.C), this.ratexp = 0.5 * this.C * this.e, this.K = Math.tan(0.5 * this.phic0 + y) / (Math.pow(Math.tan(0.5 * this.lat0 + y), this.C) * Ts(this.e * t2, this.ratexp));
  }
  function Os(t2) {
    var e2 = t2.x, s2 = t2.y;
    return t2.y = 2 * Math.atan(this.K * Math.pow(Math.tan(0.5 * s2 + y), this.C) * Ts(this.e * Math.sin(s2), this.ratexp)) - l, t2.x = this.C * e2, t2;
  }
  function Ns(t2) {
    for (var e2 = 1e-14, s2 = t2.x / this.C, i2 = t2.y, r2 = Math.pow(Math.tan(0.5 * i2 + y) / this.K, 1 / this.C), a2 = Is; a2 > 0 && (i2 = 2 * Math.atan(r2 * Ts(this.e * Math.sin(t2.y), -0.5 * this.e)) - l, !(Math.abs(i2 - t2.y) < e2)); --a2)
      t2.y = i2;
    return a2 ? (t2.x = s2, t2.y = i2, t2) : null;
  }
  var Gs = { init: zs, forward: Os, inverse: Ns };
  function Rs() {
    Gs.init.apply(this), this.rc && (this.sinc0 = Math.sin(this.phic0), this.cosc0 = Math.cos(this.phic0), this.R2 = 2 * this.rc, this.title || (this.title = "Oblique Stereographic Alternative"));
  }
  function Ls(t2) {
    var e2, s2, i2, r2;
    return t2.x = ft(t2.x - this.long0), Gs.forward.apply(this, [t2]), e2 = Math.sin(t2.y), s2 = Math.cos(t2.y), i2 = Math.cos(t2.x), r2 = this.k0 * this.R2 / (1 + this.sinc0 * e2 + this.cosc0 * s2 * i2), t2.x = r2 * s2 * Math.sin(t2.x), t2.y = r2 * (this.cosc0 * e2 - this.sinc0 * s2 * i2), t2.x = this.a * t2.x + this.x0, t2.y = this.a * t2.y + this.y0, t2;
  }
  function $s(t2) {
    var e2, s2, i2, r2, a2;
    if (t2.x = (t2.x - this.x0) / this.a, t2.y = (t2.y - this.y0) / this.a, t2.x /= this.k0, t2.y /= this.k0, a2 = ps(t2.x, t2.y)) {
      var n2 = 2 * Math.atan2(a2, this.R2);
      e2 = Math.sin(n2), s2 = Math.cos(n2), r2 = Math.asin(s2 * this.sinc0 + t2.y * e2 * this.cosc0 / a2), i2 = Math.atan2(t2.x * e2, a2 * this.cosc0 * s2 - t2.y * this.sinc0 * e2);
    } else
      r2 = this.phic0, i2 = 0;
    return t2.x = i2, t2.y = r2, Gs.inverse.apply(this, [t2]), t2.x = ft(t2.x + this.long0), t2;
  }
  var Vs = { init: Rs, forward: Ls, inverse: $s, names: ["Stereographic_North_Pole", "Oblique_Stereographic", "sterea", "Oblique Stereographic Alternative", "Double_Stereographic"] };
  function qs(t2, e2, s2) {
    return e2 *= s2, Math.tan(0.5 * (l + t2)) * Math.pow((1 - e2) / (1 + e2), 0.5 * s2);
  }
  function js() {
    this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.coslat0 = Math.cos(this.lat0), this.sinlat0 = Math.sin(this.lat0), this.sphere ? 1 === this.k0 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= m && (this.k0 = 0.5 * (1 + pt(this.lat0) * Math.sin(this.lat_ts))) : (Math.abs(this.coslat0) <= m && (this.lat0 > 0 ? this.con = 1 : this.con = -1), this.cons = Math.sqrt(Math.pow(1 + this.e, 1 + this.e) * Math.pow(1 - this.e, 1 - this.e)), 1 === this.k0 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= m && Math.abs(Math.cos(this.lat_ts)) > m && (this.k0 = 0.5 * this.cons * mt(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) / yt(this.e, this.con * this.lat_ts, this.con * Math.sin(this.lat_ts))), this.ms1 = mt(this.e, this.sinlat0, this.coslat0), this.X0 = 2 * Math.atan(this.ssfn_(this.lat0, this.sinlat0, this.e)) - l, this.cosX0 = Math.cos(this.X0), this.sinX0 = Math.sin(this.X0));
  }
  function Ds(t2) {
    var e2, s2, i2, r2, a2, n2, o2 = t2.x, h2 = t2.y, c2 = Math.sin(h2), u2 = Math.cos(h2), d2 = ft(o2 - this.long0);
    return Math.abs(Math.abs(o2 - this.long0) - Math.PI) <= m && Math.abs(h2 + this.lat0) <= m ? (t2.x = NaN, t2.y = NaN, t2) : this.sphere ? (e2 = 2 * this.k0 / (1 + this.sinlat0 * c2 + this.coslat0 * u2 * Math.cos(d2)), t2.x = this.a * e2 * u2 * Math.sin(d2) + this.x0, t2.y = this.a * e2 * (this.coslat0 * c2 - this.sinlat0 * u2 * Math.cos(d2)) + this.y0, t2) : (s2 = 2 * Math.atan(this.ssfn_(h2, c2, this.e)) - l, r2 = Math.cos(s2), i2 = Math.sin(s2), Math.abs(this.coslat0) <= m ? (a2 = yt(this.e, h2 * this.con, this.con * c2), n2 = 2 * this.a * this.k0 * a2 / this.cons, t2.x = this.x0 + n2 * Math.sin(o2 - this.long0), t2.y = this.y0 - this.con * n2 * Math.cos(o2 - this.long0), t2) : (Math.abs(this.sinlat0) < m ? (e2 = 2 * this.a * this.k0 / (1 + r2 * Math.cos(d2)), t2.y = e2 * i2) : (e2 = 2 * this.a * this.k0 * this.ms1 / (this.cosX0 * (1 + this.sinX0 * i2 + this.cosX0 * r2 * Math.cos(d2))), t2.y = e2 * (this.cosX0 * i2 - this.sinX0 * r2 * Math.cos(d2)) + this.y0), t2.x = e2 * r2 * Math.sin(d2) + this.x0, t2));
  }
  function Bs(t2) {
    var e2, s2, i2, r2, a2;
    t2.x -= this.x0, t2.y -= this.y0;
    var n2 = Math.sqrt(t2.x * t2.x + t2.y * t2.y);
    if (this.sphere) {
      var o2 = 2 * Math.atan(n2 / (2 * this.a * this.k0));
      return e2 = this.long0, s2 = this.lat0, n2 <= m ? (t2.x = e2, t2.y = s2, t2) : (s2 = Math.asin(Math.cos(o2) * this.sinlat0 + t2.y * Math.sin(o2) * this.coslat0 / n2), e2 = Math.abs(this.coslat0) < m ? this.lat0 > 0 ? ft(this.long0 + Math.atan2(t2.x, -1 * t2.y)) : ft(this.long0 + Math.atan2(t2.x, t2.y)) : ft(this.long0 + Math.atan2(t2.x * Math.sin(o2), n2 * this.coslat0 * Math.cos(o2) - t2.y * this.sinlat0 * Math.sin(o2))), t2.x = e2, t2.y = s2, t2);
    }
    if (Math.abs(this.coslat0) <= m) {
      if (n2 <= m)
        return s2 = this.lat0, e2 = this.long0, t2.x = e2, t2.y = s2, t2;
      t2.x *= this.con, t2.y *= this.con, i2 = n2 * this.cons / (2 * this.a * this.k0), s2 = this.con * gt(this.e, i2), e2 = this.con * ft(this.con * this.long0 + Math.atan2(t2.x, -1 * t2.y));
    } else
      r2 = 2 * Math.atan(n2 * this.cosX0 / (2 * this.a * this.k0 * this.ms1)), e2 = this.long0, n2 <= m ? a2 = this.X0 : (a2 = Math.asin(Math.cos(r2) * this.sinX0 + t2.y * Math.sin(r2) * this.cosX0 / n2), e2 = ft(this.long0 + Math.atan2(t2.x * Math.sin(r2), n2 * this.cosX0 * Math.cos(r2) - t2.y * this.sinX0 * Math.sin(r2)))), s2 = -1 * gt(this.e, Math.tan(0.5 * (l + a2)));
    return t2.x = e2, t2.y = s2, t2;
  }
  var ks = { init: js, forward: Ds, inverse: Bs, names: ["stere", "Stereographic_South_Pole", "Polar_Stereographic_variant_A", "Polar_Stereographic_variant_B", "Polar_Stereographic"], ssfn_: qs };
  function Fs() {
    var t2 = this.lat0;
    this.lambda0 = this.long0;
    var e2 = Math.sin(t2), s2 = this.a, i2 = 1 / this.rf, r2 = 2 * i2 - Math.pow(i2, 2), a2 = this.e = Math.sqrt(r2);
    this.R = this.k0 * s2 * Math.sqrt(1 - r2) / (1 - r2 * Math.pow(e2, 2)), this.alpha = Math.sqrt(1 + r2 / (1 - r2) * Math.pow(Math.cos(t2), 4)), this.b0 = Math.asin(e2 / this.alpha);
    var n2 = Math.log(Math.tan(Math.PI / 4 + this.b0 / 2)), o2 = Math.log(Math.tan(Math.PI / 4 + t2 / 2)), h2 = Math.log((1 + a2 * e2) / (1 - a2 * e2));
    this.K = n2 - this.alpha * o2 + this.alpha * a2 / 2 * h2;
  }
  function Us(t2) {
    var e2 = Math.log(Math.tan(Math.PI / 4 - t2.y / 2)), s2 = this.e / 2 * Math.log((1 + this.e * Math.sin(t2.y)) / (1 - this.e * Math.sin(t2.y))), i2 = -this.alpha * (e2 + s2) + this.K, r2 = 2 * (Math.atan(Math.exp(i2)) - Math.PI / 4), a2 = this.alpha * (t2.x - this.lambda0), n2 = Math.atan(Math.sin(a2) / (Math.sin(this.b0) * Math.tan(r2) + Math.cos(this.b0) * Math.cos(a2))), o2 = Math.asin(Math.cos(this.b0) * Math.sin(r2) - Math.sin(this.b0) * Math.cos(r2) * Math.cos(a2));
    return t2.y = this.R / 2 * Math.log((1 + Math.sin(o2)) / (1 - Math.sin(o2))) + this.y0, t2.x = this.R * n2 + this.x0, t2;
  }
  function Ws(t2) {
    for (var e2 = t2.x - this.x0, s2 = t2.y - this.y0, i2 = e2 / this.R, r2 = 2 * (Math.atan(Math.exp(s2 / this.R)) - Math.PI / 4), a2 = Math.asin(Math.cos(this.b0) * Math.sin(r2) + Math.sin(this.b0) * Math.cos(r2) * Math.cos(i2)), n2 = Math.atan(Math.sin(i2) / (Math.cos(this.b0) * Math.cos(i2) - Math.sin(this.b0) * Math.tan(r2))), o2 = this.lambda0 + n2 / this.alpha, h2 = 0, c2 = a2, l2 = -1e3, u2 = 0; Math.abs(c2 - l2) > 1e-7; ) {
      if (++u2 > 20)
        return;
      h2 = 1 / this.alpha * (Math.log(Math.tan(Math.PI / 4 + a2 / 2)) - this.K) + this.e * Math.log(Math.tan(Math.PI / 4 + Math.asin(this.e * Math.sin(c2)) / 2)), l2 = c2, c2 = 2 * Math.atan(Math.exp(h2)) - Math.PI / 2;
    }
    return t2.x = o2, t2.y = c2, t2;
  }
  var Ys = { init: Fs, forward: Us, inverse: Ws, names: ["somerc"] }, Qs = 1e-7;
  function Xs(t2) {
    var e2 = ["Hotine_Oblique_Mercator", "Hotine_Oblique_Mercator_variant_A", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin"], s2 = "object" == typeof t2.projName ? Object.keys(t2.projName)[0] : t2.projName;
    return "no_uoff" in t2 || "no_off" in t2 || -1 !== e2.indexOf(s2) || -1 !== e2.indexOf(vt(s2));
  }
  function Hs() {
    var t2, e2, s2, i2, r2, a2, n2, o2, h2, c2, u2, d2 = 0, _2 = 0, p2 = 0, f2 = 0, M2 = 0, x2 = 0, w2 = 0;
    this.no_off = Xs(this), this.no_rot = "no_rot" in this;
    var S2 = false;
    "alpha" in this && (S2 = true);
    var C2 = false;
    if ("rectified_grid_angle" in this && (C2 = true), S2 && (w2 = this.alpha), C2 && (d2 = this.rectified_grid_angle), S2 || C2)
      _2 = this.longc;
    else if (p2 = this.long1, M2 = this.lat1, f2 = this.long2, x2 = this.lat2, Math.abs(M2 - x2) <= Qs || (t2 = Math.abs(M2)) <= Qs || Math.abs(t2 - l) <= Qs || Math.abs(Math.abs(this.lat0) - l) <= Qs || Math.abs(Math.abs(x2) - l) <= Qs)
      throw new Error();
    var E2 = 1 - this.es;
    e2 = Math.sqrt(E2), Math.abs(this.lat0) > m ? (o2 = Math.sin(this.lat0), s2 = Math.cos(this.lat0), t2 = 1 - this.es * o2 * o2, this.B = s2 * s2, this.B = Math.sqrt(1 + this.es * this.B * this.B / E2), this.A = this.B * this.k0 * e2 / t2, (r2 = (i2 = this.B * e2 / (s2 * Math.sqrt(t2))) * i2 - 1) <= 0 ? r2 = 0 : (r2 = Math.sqrt(r2), this.lat0 < 0 && (r2 = -r2)), this.E = r2 += i2, this.E *= Math.pow(yt(this.e, this.lat0, o2), this.B)) : (this.B = 1 / e2, this.A = this.k0, this.E = i2 = r2 = 1), S2 || C2 ? (S2 ? (u2 = Math.asin(Math.sin(w2) / i2), C2 || (d2 = w2)) : (u2 = d2, w2 = Math.asin(i2 * Math.sin(u2))), this.lam0 = _2 - Math.asin(0.5 * (r2 - 1 / r2) * Math.tan(u2)) / this.B) : (a2 = Math.pow(yt(this.e, M2, Math.sin(M2)), this.B), n2 = Math.pow(yt(this.e, x2, Math.sin(x2)), this.B), r2 = this.E / a2, h2 = (n2 - a2) / (n2 + a2), c2 = ((c2 = this.E * this.E) - n2 * a2) / (c2 + n2 * a2), (t2 = p2 - f2) < -Math.pi ? f2 -= g : t2 > Math.pi && (f2 += g), this.lam0 = ft(0.5 * (p2 + f2) - Math.atan(c2 * Math.tan(0.5 * this.B * (p2 - f2)) / h2) / this.B), u2 = Math.atan(2 * Math.sin(this.B * ft(p2 - this.lam0)) / (r2 - 1 / r2)), d2 = w2 = Math.asin(i2 * Math.sin(u2))), this.singam = Math.sin(u2), this.cosgam = Math.cos(u2), this.sinrot = Math.sin(d2), this.cosrot = Math.cos(d2), this.rB = 1 / this.B, this.ArB = this.A * this.rB, this.BrA = 1 / this.ArB, this.no_off ? this.u_0 = 0 : (this.u_0 = Math.abs(this.ArB * Math.atan(Math.sqrt(i2 * i2 - 1) / Math.cos(w2))), this.lat0 < 0 && (this.u_0 = -this.u_0)), r2 = 0.5 * u2, this.v_pole_n = this.ArB * Math.log(Math.tan(y - r2)), this.v_pole_s = this.ArB * Math.log(Math.tan(y + r2));
  }
  function Zs(t2) {
    var e2, s2, i2, r2, a2, n2, o2, h2, c2 = {};
    if (t2.x = t2.x - this.lam0, Math.abs(Math.abs(t2.y) - l) > m) {
      if (e2 = 0.5 * ((a2 = this.E / Math.pow(yt(this.e, t2.y, Math.sin(t2.y)), this.B)) - (n2 = 1 / a2)), s2 = 0.5 * (a2 + n2), r2 = Math.sin(this.B * t2.x), i2 = (e2 * this.singam - r2 * this.cosgam) / s2, Math.abs(Math.abs(i2) - 1) < m)
        throw new Error();
      h2 = 0.5 * this.ArB * Math.log((1 - i2) / (1 + i2)), n2 = Math.cos(this.B * t2.x), o2 = Math.abs(n2) < Qs ? this.A * t2.x : this.ArB * Math.atan2(e2 * this.cosgam + r2 * this.singam, n2);
    } else
      h2 = t2.y > 0 ? this.v_pole_n : this.v_pole_s, o2 = this.ArB * t2.y;
    return this.no_rot ? (c2.x = o2, c2.y = h2) : (o2 -= this.u_0, c2.x = h2 * this.cosrot + o2 * this.sinrot, c2.y = o2 * this.cosrot - h2 * this.sinrot), c2.x = this.a * c2.x + this.x0, c2.y = this.a * c2.y + this.y0, c2;
  }
  function Ks(t2) {
    var e2, s2, i2, r2, a2, n2, o2, h2 = {};
    if (t2.x = (t2.x - this.x0) * (1 / this.a), t2.y = (t2.y - this.y0) * (1 / this.a), this.no_rot ? (s2 = t2.y, e2 = t2.x) : (s2 = t2.x * this.cosrot - t2.y * this.sinrot, e2 = t2.y * this.cosrot + t2.x * this.sinrot + this.u_0), r2 = 0.5 * ((i2 = Math.exp(-this.BrA * s2)) - 1 / i2), a2 = 0.5 * (i2 + 1 / i2), o2 = ((n2 = Math.sin(this.BrA * e2)) * this.cosgam + r2 * this.singam) / a2, Math.abs(Math.abs(o2) - 1) < m)
      h2.x = 0, h2.y = o2 < 0 ? -l : l;
    else {
      if (h2.y = this.E / Math.sqrt((1 + o2) / (1 - o2)), h2.y = gt(this.e, Math.pow(h2.y, 1 / this.B)), h2.y === 1 / 0)
        throw new Error();
      h2.x = -this.rB * Math.atan2(r2 * this.cosgam - n2 * this.singam, Math.cos(this.BrA * e2));
    }
    return h2.x += this.lam0, h2;
  }
  var Js = { init: Hs, forward: Zs, inverse: Ks, names: ["Hotine_Oblique_Mercator", "Hotine Oblique Mercator", "Hotine_Oblique_Mercator_variant_A", "Hotine_Oblique_Mercator_Variant_B", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin", "Hotine_Oblique_Mercator_Two_Point_Natural_Origin", "Hotine_Oblique_Mercator_Azimuth_Center", "Oblique_Mercator", "omerc"] };
  function ti() {
    if (this.lat2 || (this.lat2 = this.lat1), this.k0 || (this.k0 = 1), this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, !(Math.abs(this.lat1 + this.lat2) < m)) {
      var t2 = this.b / this.a;
      this.e = Math.sqrt(1 - t2 * t2);
      var e2 = Math.sin(this.lat1), s2 = Math.cos(this.lat1), i2 = mt(this.e, e2, s2), r2 = yt(this.e, this.lat1, e2), a2 = Math.sin(this.lat2), n2 = Math.cos(this.lat2), o2 = mt(this.e, a2, n2), h2 = yt(this.e, this.lat2, a2), c2 = Math.abs(Math.abs(this.lat0) - l) < m ? 0 : yt(this.e, this.lat0, Math.sin(this.lat0));
      Math.abs(this.lat1 - this.lat2) > m ? this.ns = Math.log(i2 / o2) / Math.log(r2 / h2) : this.ns = e2, isNaN(this.ns) && (this.ns = e2), this.f0 = i2 / (this.ns * Math.pow(r2, this.ns)), this.rh = this.a * this.f0 * Math.pow(c2, this.ns), this.title || (this.title = "Lambert Conformal Conic");
    }
  }
  function ei(t2) {
    var e2 = t2.x, s2 = t2.y;
    Math.abs(2 * Math.abs(s2) - Math.PI) <= m && (s2 = pt(s2) * (l - 2 * m));
    var i2, r2, a2 = Math.abs(Math.abs(s2) - l);
    if (a2 > m)
      i2 = yt(this.e, s2, Math.sin(s2)), r2 = this.a * this.f0 * Math.pow(i2, this.ns);
    else {
      if ((a2 = s2 * this.ns) <= 0)
        return null;
      r2 = 0;
    }
    var n2 = this.ns * ft(e2 - this.long0);
    return t2.x = this.k0 * (r2 * Math.sin(n2)) + this.x0, t2.y = this.k0 * (this.rh - r2 * Math.cos(n2)) + this.y0, t2;
  }
  function si(t2) {
    var e2, s2, i2, r2, a2, n2 = (t2.x - this.x0) / this.k0, o2 = this.rh - (t2.y - this.y0) / this.k0;
    this.ns > 0 ? (e2 = Math.sqrt(n2 * n2 + o2 * o2), s2 = 1) : (e2 = -Math.sqrt(n2 * n2 + o2 * o2), s2 = -1);
    var h2 = 0;
    if (0 !== e2 && (h2 = Math.atan2(s2 * n2, s2 * o2)), 0 !== e2 || this.ns > 0) {
      if (s2 = 1 / this.ns, i2 = Math.pow(e2 / (this.a * this.f0), s2), -9999 === (r2 = gt(this.e, i2)))
        return null;
    } else
      r2 = -l;
    return a2 = ft(h2 / this.ns + this.long0), t2.x = a2, t2.y = r2, t2;
  }
  var ii = { init: ti, forward: ei, inverse: si, names: ["Lambert Tangential Conformal Conic Projection", "Lambert_Conformal_Conic", "Lambert_Conformal_Conic_1SP", "Lambert_Conformal_Conic_2SP", "lcc", "Lambert Conic Conformal (1SP)", "Lambert Conic Conformal (2SP)"] };
  function ri() {
    this.a = 6377397155e-3, this.es = 0.006674372230614, this.e = Math.sqrt(this.es), this.lat0 || (this.lat0 = 0.863937979737193), this.long0 || (this.long0 = 0.4334234309119251), this.k0 || (this.k0 = 0.9999), this.s45 = 0.785398163397448, this.s90 = 2 * this.s45, this.fi0 = this.lat0, this.e2 = this.es, this.e = Math.sqrt(this.e2), this.alfa = Math.sqrt(1 + this.e2 * Math.pow(Math.cos(this.fi0), 4) / (1 - this.e2)), this.uq = 1.04216856380474, this.u0 = Math.asin(Math.sin(this.fi0) / this.alfa), this.g = Math.pow((1 + this.e * Math.sin(this.fi0)) / (1 - this.e * Math.sin(this.fi0)), this.alfa * this.e / 2), this.k = Math.tan(this.u0 / 2 + this.s45) / Math.pow(Math.tan(this.fi0 / 2 + this.s45), this.alfa) * this.g, this.k1 = this.k0, this.n0 = this.a * Math.sqrt(1 - this.e2) / (1 - this.e2 * Math.pow(Math.sin(this.fi0), 2)), this.s0 = 1.37008346281555, this.n = Math.sin(this.s0), this.ro0 = this.k1 * this.n0 / Math.tan(this.s0), this.ad = this.s90 - this.uq;
  }
  function ai(t2) {
    var e2, s2, i2, r2, a2, n2, o2, h2 = t2.x, c2 = t2.y, l2 = ft(h2 - this.long0);
    return e2 = Math.pow((1 + this.e * Math.sin(c2)) / (1 - this.e * Math.sin(c2)), this.alfa * this.e / 2), s2 = 2 * (Math.atan(this.k * Math.pow(Math.tan(c2 / 2 + this.s45), this.alfa) / e2) - this.s45), i2 = -l2 * this.alfa, r2 = Math.asin(Math.cos(this.ad) * Math.sin(s2) + Math.sin(this.ad) * Math.cos(s2) * Math.cos(i2)), a2 = Math.asin(Math.cos(s2) * Math.sin(i2) / Math.cos(r2)), n2 = this.n * a2, o2 = this.ro0 * Math.pow(Math.tan(this.s0 / 2 + this.s45), this.n) / Math.pow(Math.tan(r2 / 2 + this.s45), this.n), t2.y = o2 * Math.cos(n2) / 1, t2.x = o2 * Math.sin(n2) / 1, this.czech || (t2.y *= -1, t2.x *= -1), t2;
  }
  function ni(t2) {
    var e2, s2, i2, r2, a2, n2, o2, h2 = t2.x;
    t2.x = t2.y, t2.y = h2, this.czech || (t2.y *= -1, t2.x *= -1), a2 = Math.sqrt(t2.x * t2.x + t2.y * t2.y), r2 = Math.atan2(t2.y, t2.x) / Math.sin(this.s0), i2 = 2 * (Math.atan(Math.pow(this.ro0 / a2, 1 / this.n) * Math.tan(this.s0 / 2 + this.s45)) - this.s45), e2 = Math.asin(Math.cos(this.ad) * Math.sin(i2) - Math.sin(this.ad) * Math.cos(i2) * Math.cos(r2)), s2 = Math.asin(Math.cos(i2) * Math.sin(r2) / Math.cos(e2)), t2.x = this.long0 - s2 / this.alfa, n2 = e2, o2 = 0;
    var c2 = 0;
    do {
      t2.y = 2 * (Math.atan(Math.pow(this.k, -1 / this.alfa) * Math.pow(Math.tan(e2 / 2 + this.s45), 1 / this.alfa) * Math.pow((1 + this.e * Math.sin(n2)) / (1 - this.e * Math.sin(n2)), this.e / 2)) - this.s45), Math.abs(n2 - t2.y) < 1e-10 && (o2 = 1), n2 = t2.y, c2 += 1;
    } while (0 === o2 && c2 < 15);
    return c2 >= 15 ? null : t2;
  }
  var oi = { init: ri, forward: ai, inverse: ni, names: ["Krovak", "krovak"] };
  function hi(t2, e2, s2, i2, r2) {
    return t2 * r2 - e2 * Math.sin(2 * r2) + s2 * Math.sin(4 * r2) - i2 * Math.sin(6 * r2);
  }
  function ci(t2) {
    return 1 - 0.25 * t2 * (1 + t2 / 16 * (3 + 1.25 * t2));
  }
  function li(t2) {
    return 0.375 * t2 * (1 + 0.25 * t2 * (1 + 0.46875 * t2));
  }
  function ui(t2) {
    return 0.05859375 * t2 * t2 * (1 + 0.75 * t2);
  }
  function di(t2) {
    return t2 * t2 * t2 * (35 / 3072);
  }
  function _i(t2, e2, s2) {
    var i2 = e2 * s2;
    return t2 / Math.sqrt(1 - i2 * i2);
  }
  function mi(t2) {
    return Math.abs(t2) < l ? t2 : t2 - pt(t2) * Math.PI;
  }
  function pi(t2, e2, s2, i2, r2) {
    var a2, n2;
    a2 = t2 / e2;
    for (var o2 = 0; o2 < 15; o2++)
      if (a2 += n2 = (t2 - (e2 * a2 - s2 * Math.sin(2 * a2) + i2 * Math.sin(4 * a2) - r2 * Math.sin(6 * a2))) / (e2 - 2 * s2 * Math.cos(2 * a2) + 4 * i2 * Math.cos(4 * a2) - 6 * r2 * Math.cos(6 * a2)), Math.abs(n2) <= 1e-10)
        return a2;
    return NaN;
  }
  function fi() {
    this.sphere || (this.e0 = ci(this.es), this.e1 = li(this.es), this.e2 = ui(this.es), this.e3 = di(this.es), this.ml0 = this.a * hi(this.e0, this.e1, this.e2, this.e3, this.lat0));
  }
  function yi(t2) {
    var e2, s2, i2 = t2.x, r2 = t2.y;
    if (i2 = ft(i2 - this.long0), this.sphere)
      e2 = this.a * Math.asin(Math.cos(r2) * Math.sin(i2)), s2 = this.a * (Math.atan2(Math.tan(r2), Math.cos(i2)) - this.lat0);
    else {
      var a2 = Math.sin(r2), n2 = Math.cos(r2), o2 = _i(this.a, this.e, a2), h2 = Math.tan(r2) * Math.tan(r2), c2 = i2 * Math.cos(r2), l2 = c2 * c2, u2 = this.es * n2 * n2 / (1 - this.es);
      e2 = o2 * c2 * (1 - l2 * h2 * (1 / 6 - (8 - h2 + 8 * u2) * l2 / 120)), s2 = this.a * hi(this.e0, this.e1, this.e2, this.e3, r2) - this.ml0 + o2 * a2 / n2 * l2 * (0.5 + (5 - h2 + 6 * u2) * l2 / 24);
    }
    return t2.x = e2 + this.x0, t2.y = s2 + this.y0, t2;
  }
  function gi(t2) {
    t2.x -= this.x0, t2.y -= this.y0;
    var e2, s2, i2 = t2.x / this.a, r2 = t2.y / this.a;
    if (this.sphere) {
      var a2 = r2 + this.lat0;
      e2 = Math.asin(Math.sin(a2) * Math.cos(i2)), s2 = Math.atan2(Math.tan(i2), Math.cos(a2));
    } else {
      var n2 = pi(this.ml0 / this.a + r2, this.e0, this.e1, this.e2, this.e3);
      if (Math.abs(Math.abs(n2) - l) <= m)
        return t2.x = this.long0, t2.y = l, r2 < 0 && (t2.y *= -1), t2;
      var o2 = _i(this.a, this.e, Math.sin(n2)), h2 = o2 * o2 * o2 / this.a / this.a * (1 - this.es), c2 = Math.pow(Math.tan(n2), 2), u2 = i2 * this.a / o2, d2 = u2 * u2;
      e2 = n2 - o2 * Math.tan(n2) / h2 * u2 * u2 * (0.5 - (1 + 3 * c2) * u2 * u2 / 24), s2 = u2 * (1 - d2 * (c2 / 3 + (1 + 3 * c2) * c2 * d2 / 15)) / Math.cos(n2);
    }
    return t2.x = ft(s2 + this.long0), t2.y = mi(e2), t2;
  }
  var Mi = { init: fi, forward: yi, inverse: gi, names: ["Cassini", "Cassini_Soldner", "cass"] };
  function xi(t2, e2) {
    var s2;
    return t2 > 1e-7 ? (1 - t2 * t2) * (e2 / (1 - (s2 = t2 * e2) * s2) - 0.5 / t2 * Math.log((1 - s2) / (1 + s2))) : 2 * e2;
  }
  function wi() {
    var t2, e2 = Math.abs(this.lat0);
    if (Math.abs(e2 - l) < m ? this.mode = this.lat0 < 0 ? this.S_POLE : this.N_POLE : Math.abs(e2) < m ? this.mode = this.EQUIT : this.mode = this.OBLIQ, this.es > 0)
      switch (this.qp = xi(this.e, 1), this.mmf = 0.5 / (1 - this.es), this.apa = Ii(this.es), this.mode) {
        case this.N_POLE:
        case this.S_POLE:
          this.dd = 1;
          break;
        case this.EQUIT:
          this.rq = Math.sqrt(0.5 * this.qp), this.dd = 1 / this.rq, this.xmf = 1, this.ymf = 0.5 * this.qp;
          break;
        case this.OBLIQ:
          this.rq = Math.sqrt(0.5 * this.qp), t2 = Math.sin(this.lat0), this.sinb1 = xi(this.e, t2) / this.qp, this.cosb1 = Math.sqrt(1 - this.sinb1 * this.sinb1), this.dd = Math.cos(this.lat0) / (Math.sqrt(1 - this.es * t2 * t2) * this.rq * this.cosb1), this.ymf = (this.xmf = this.rq) / this.dd, this.xmf *= this.dd;
      }
    else
      this.mode === this.OBLIQ && (this.sinph0 = Math.sin(this.lat0), this.cosph0 = Math.cos(this.lat0));
  }
  function Si(t2) {
    var e2, s2, i2, r2, a2, n2, o2, h2, c2, u2, d2 = t2.x, _2 = t2.y;
    if (d2 = ft(d2 - this.long0), this.sphere) {
      if (a2 = Math.sin(_2), u2 = Math.cos(_2), i2 = Math.cos(d2), this.mode === this.OBLIQ || this.mode === this.EQUIT) {
        if ((s2 = this.mode === this.EQUIT ? 1 + u2 * i2 : 1 + this.sinph0 * a2 + this.cosph0 * u2 * i2) <= m)
          return null;
        e2 = (s2 = Math.sqrt(2 / s2)) * u2 * Math.sin(d2), s2 *= this.mode === this.EQUIT ? a2 : this.cosph0 * a2 - this.sinph0 * u2 * i2;
      } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
        if (this.mode === this.N_POLE && (i2 = -i2), Math.abs(_2 + this.lat0) < m)
          return null;
        s2 = y - 0.5 * _2, e2 = (s2 = 2 * (this.mode === this.S_POLE ? Math.cos(s2) : Math.sin(s2))) * Math.sin(d2), s2 *= i2;
      }
    } else {
      switch (o2 = 0, h2 = 0, c2 = 0, i2 = Math.cos(d2), r2 = Math.sin(d2), a2 = Math.sin(_2), n2 = xi(this.e, a2), this.mode !== this.OBLIQ && this.mode !== this.EQUIT || (o2 = n2 / this.qp, h2 = Math.sqrt(1 - o2 * o2)), this.mode) {
        case this.OBLIQ:
          c2 = 1 + this.sinb1 * o2 + this.cosb1 * h2 * i2;
          break;
        case this.EQUIT:
          c2 = 1 + h2 * i2;
          break;
        case this.N_POLE:
          c2 = l + _2, n2 = this.qp - n2;
          break;
        case this.S_POLE:
          c2 = _2 - l, n2 = this.qp + n2;
      }
      if (Math.abs(c2) < m)
        return null;
      switch (this.mode) {
        case this.OBLIQ:
        case this.EQUIT:
          c2 = Math.sqrt(2 / c2), s2 = this.mode === this.OBLIQ ? this.ymf * c2 * (this.cosb1 * o2 - this.sinb1 * h2 * i2) : (c2 = Math.sqrt(2 / (1 + h2 * i2))) * o2 * this.ymf, e2 = this.xmf * c2 * h2 * r2;
          break;
        case this.N_POLE:
        case this.S_POLE:
          n2 >= 0 ? (e2 = (c2 = Math.sqrt(n2)) * r2, s2 = i2 * (this.mode === this.S_POLE ? c2 : -c2)) : e2 = s2 = 0;
      }
    }
    return t2.x = this.a * e2 + this.x0, t2.y = this.a * s2 + this.y0, t2;
  }
  function Ci(t2) {
    t2.x -= this.x0, t2.y -= this.y0;
    var e2, s2, i2, r2, a2, n2, o2, h2 = t2.x / this.a, c2 = t2.y / this.a;
    if (this.sphere) {
      var u2, d2 = 0, _2 = 0;
      if ((s2 = 0.5 * (u2 = Math.sqrt(h2 * h2 + c2 * c2))) > 1)
        return null;
      switch (s2 = 2 * Math.asin(s2), this.mode !== this.OBLIQ && this.mode !== this.EQUIT || (_2 = Math.sin(s2), d2 = Math.cos(s2)), this.mode) {
        case this.EQUIT:
          s2 = Math.abs(u2) <= m ? 0 : Math.asin(c2 * _2 / u2), h2 *= _2, c2 = d2 * u2;
          break;
        case this.OBLIQ:
          s2 = Math.abs(u2) <= m ? this.lat0 : Math.asin(d2 * this.sinph0 + c2 * _2 * this.cosph0 / u2), h2 *= _2 * this.cosph0, c2 = (d2 - Math.sin(s2) * this.sinph0) * u2;
          break;
        case this.N_POLE:
          c2 = -c2, s2 = l - s2;
          break;
        case this.S_POLE:
          s2 -= l;
      }
      e2 = 0 !== c2 || this.mode !== this.EQUIT && this.mode !== this.OBLIQ ? Math.atan2(h2, c2) : 0;
    } else {
      if (o2 = 0, this.mode === this.OBLIQ || this.mode === this.EQUIT) {
        if (h2 /= this.dd, c2 *= this.dd, (n2 = Math.sqrt(h2 * h2 + c2 * c2)) < m)
          return t2.x = this.long0, t2.y = this.lat0, t2;
        r2 = 2 * Math.asin(0.5 * n2 / this.rq), i2 = Math.cos(r2), h2 *= r2 = Math.sin(r2), this.mode === this.OBLIQ ? (o2 = i2 * this.sinb1 + c2 * r2 * this.cosb1 / n2, a2 = this.qp * o2, c2 = n2 * this.cosb1 * i2 - c2 * this.sinb1 * r2) : (o2 = c2 * r2 / n2, a2 = this.qp * o2, c2 = n2 * i2);
      } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
        if (this.mode === this.N_POLE && (c2 = -c2), !(a2 = h2 * h2 + c2 * c2))
          return t2.x = this.long0, t2.y = this.lat0, t2;
        o2 = 1 - a2 / this.qp, this.mode === this.S_POLE && (o2 = -o2);
      }
      e2 = Math.atan2(h2, c2), s2 = zi(Math.asin(o2), this.apa);
    }
    return t2.x = ft(this.long0 + e2), t2.y = s2, t2;
  }
  var Ei = 0.3333333333333333, Pi = 0.17222222222222222, bi = 0.10257936507936508, Ai = 0.06388888888888888, vi = 0.0664021164021164, Ti = 0.016415012942191543;
  function Ii(t2) {
    var e2, s2 = [];
    return s2[0] = t2 * Ei, e2 = t2 * t2, s2[0] += e2 * Pi, s2[1] = e2 * Ai, e2 *= t2, s2[0] += e2 * bi, s2[1] += e2 * vi, s2[2] = e2 * Ti, s2;
  }
  function zi(t2, e2) {
    var s2 = t2 + t2;
    return t2 + e2[0] * Math.sin(s2) + e2[1] * Math.sin(s2 + s2) + e2[2] * Math.sin(s2 + s2 + s2);
  }
  var Oi = { init: wi, forward: Si, inverse: Ci, names: ["Lambert Azimuthal Equal Area", "Lambert_Azimuthal_Equal_Area", "laea"], S_POLE: 1, N_POLE: 2, EQUIT: 3, OBLIQ: 4 };
  function Ni(t2) {
    return Math.abs(t2) > 1 && (t2 = t2 > 1 ? 1 : -1), Math.asin(t2);
  }
  function Gi() {
    Math.abs(this.lat1 + this.lat2) < m || (this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e3 = Math.sqrt(this.es), this.sin_po = Math.sin(this.lat1), this.cos_po = Math.cos(this.lat1), this.t1 = this.sin_po, this.con = this.sin_po, this.ms1 = mt(this.e3, this.sin_po, this.cos_po), this.qs1 = xi(this.e3, this.sin_po), this.sin_po = Math.sin(this.lat2), this.cos_po = Math.cos(this.lat2), this.t2 = this.sin_po, this.ms2 = mt(this.e3, this.sin_po, this.cos_po), this.qs2 = xi(this.e3, this.sin_po), this.sin_po = Math.sin(this.lat0), this.cos_po = Math.cos(this.lat0), this.t3 = this.sin_po, this.qs0 = xi(this.e3, this.sin_po), Math.abs(this.lat1 - this.lat2) > m ? this.ns0 = (this.ms1 * this.ms1 - this.ms2 * this.ms2) / (this.qs2 - this.qs1) : this.ns0 = this.con, this.c = this.ms1 * this.ms1 + this.ns0 * this.qs1, this.rh = this.a * Math.sqrt(this.c - this.ns0 * this.qs0) / this.ns0);
  }
  function Ri(t2) {
    var e2 = t2.x, s2 = t2.y;
    this.sin_phi = Math.sin(s2), this.cos_phi = Math.cos(s2);
    var i2 = xi(this.e3, this.sin_phi), r2 = this.a * Math.sqrt(this.c - this.ns0 * i2) / this.ns0, a2 = this.ns0 * ft(e2 - this.long0), n2 = r2 * Math.sin(a2) + this.x0, o2 = this.rh - r2 * Math.cos(a2) + this.y0;
    return t2.x = n2, t2.y = o2, t2;
  }
  function Li(t2) {
    var e2, s2, i2, r2, a2, n2;
    return t2.x -= this.x0, t2.y = this.rh - t2.y + this.y0, this.ns0 >= 0 ? (e2 = Math.sqrt(t2.x * t2.x + t2.y * t2.y), i2 = 1) : (e2 = -Math.sqrt(t2.x * t2.x + t2.y * t2.y), i2 = -1), r2 = 0, 0 !== e2 && (r2 = Math.atan2(i2 * t2.x, i2 * t2.y)), i2 = e2 * this.ns0 / this.a, this.sphere ? n2 = Math.asin((this.c - i2 * i2) / (2 * this.ns0)) : (s2 = (this.c - i2 * i2) / this.ns0, n2 = this.phi1z(this.e3, s2)), a2 = ft(r2 / this.ns0 + this.long0), t2.x = a2, t2.y = n2, t2;
  }
  function $i(t2, e2) {
    var s2, i2, r2, a2, n2 = Ni(0.5 * e2);
    if (t2 < m)
      return n2;
    for (var o2 = t2 * t2, h2 = 1; h2 <= 25; h2++)
      if (n2 += a2 = 0.5 * (r2 = 1 - (i2 = t2 * (s2 = Math.sin(n2))) * i2) * r2 / Math.cos(n2) * (e2 / (1 - o2) - s2 / r2 + 0.5 / t2 * Math.log((1 - i2) / (1 + i2))), Math.abs(a2) <= 1e-7)
        return n2;
    return null;
  }
  var Vi = { init: Gi, forward: Ri, inverse: Li, names: ["Albers_Conic_Equal_Area", "Albers_Equal_Area", "Albers", "aea"], phi1z: $i };
  function qi() {
    this.sin_p14 = Math.sin(this.lat0), this.cos_p14 = Math.cos(this.lat0), this.infinity_dist = 1e3 * this.a, this.rc = 1;
  }
  function ji(t2) {
    var e2, s2, i2, r2, a2, n2, o2, h2, c2 = t2.x, l2 = t2.y;
    return i2 = ft(c2 - this.long0), e2 = Math.sin(l2), s2 = Math.cos(l2), r2 = Math.cos(i2), a2 = 1, (n2 = this.sin_p14 * e2 + this.cos_p14 * s2 * r2) > 0 || Math.abs(n2) <= m ? (o2 = this.x0 + this.a * a2 * s2 * Math.sin(i2) / n2, h2 = this.y0 + this.a * a2 * (this.cos_p14 * e2 - this.sin_p14 * s2 * r2) / n2) : (o2 = this.x0 + this.infinity_dist * s2 * Math.sin(i2), h2 = this.y0 + this.infinity_dist * (this.cos_p14 * e2 - this.sin_p14 * s2 * r2)), t2.x = o2, t2.y = h2, t2;
  }
  function Di(t2) {
    var e2, s2, i2, r2, a2, n2;
    return t2.x = (t2.x - this.x0) / this.a, t2.y = (t2.y - this.y0) / this.a, t2.x /= this.k0, t2.y /= this.k0, (e2 = Math.sqrt(t2.x * t2.x + t2.y * t2.y)) ? (r2 = Math.atan2(e2, this.rc), s2 = Math.sin(r2), n2 = Ni((i2 = Math.cos(r2)) * this.sin_p14 + t2.y * s2 * this.cos_p14 / e2), a2 = Math.atan2(t2.x * s2, e2 * this.cos_p14 * i2 - t2.y * this.sin_p14 * s2), a2 = ft(this.long0 + a2)) : (n2 = this.phic0, a2 = 0), t2.x = a2, t2.y = n2, t2;
  }
  var Bi = { init: qi, forward: ji, inverse: Di, names: ["gnom"] };
  function ki(t2, e2) {
    var s2 = 1 - (1 - t2 * t2) / (2 * t2) * Math.log((1 - t2) / (1 + t2));
    if (Math.abs(Math.abs(e2) - s2) < 1e-6)
      return e2 < 0 ? -1 * l : l;
    for (var i2, r2, a2, n2, o2 = Math.asin(0.5 * e2), h2 = 0; h2 < 30; h2++)
      if (r2 = Math.sin(o2), a2 = Math.cos(o2), n2 = t2 * r2, o2 += i2 = Math.pow(1 - n2 * n2, 2) / (2 * a2) * (e2 / (1 - t2 * t2) - r2 / (1 - n2 * n2) + 0.5 / t2 * Math.log((1 - n2) / (1 + n2))), Math.abs(i2) <= 1e-10)
        return o2;
    return NaN;
  }
  function Fi() {
    this.sphere || (this.k0 = mt(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)));
  }
  function Ui(t2) {
    var e2, s2, i2 = t2.x, r2 = t2.y, a2 = ft(i2 - this.long0);
    if (this.sphere)
      e2 = this.x0 + this.a * a2 * Math.cos(this.lat_ts), s2 = this.y0 + this.a * Math.sin(r2) / Math.cos(this.lat_ts);
    else {
      var n2 = xi(this.e, Math.sin(r2));
      e2 = this.x0 + this.a * this.k0 * a2, s2 = this.y0 + this.a * n2 * 0.5 / this.k0;
    }
    return t2.x = e2, t2.y = s2, t2;
  }
  function Wi(t2) {
    var e2, s2;
    return t2.x -= this.x0, t2.y -= this.y0, this.sphere ? (e2 = ft(this.long0 + t2.x / this.a / Math.cos(this.lat_ts)), s2 = Math.asin(t2.y / this.a * Math.cos(this.lat_ts))) : (s2 = ki(this.e, 2 * t2.y * this.k0 / this.a), e2 = ft(this.long0 + t2.x / (this.a * this.k0))), t2.x = e2, t2.y = s2, t2;
  }
  var Yi = { init: Fi, forward: Ui, inverse: Wi, names: ["cea"] };
  function Qi() {
    this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_ts || 0, this.title = this.title || "Equidistant Cylindrical (Plate Carre)", this.rc = Math.cos(this.lat_ts);
  }
  function Xi(t2) {
    var e2 = t2.x, s2 = t2.y, i2 = ft(e2 - this.long0), r2 = mi(s2 - this.lat0);
    return t2.x = this.x0 + this.a * i2 * this.rc, t2.y = this.y0 + this.a * r2, t2;
  }
  function Hi(t2) {
    var e2 = t2.x, s2 = t2.y;
    return t2.x = ft(this.long0 + (e2 - this.x0) / (this.a * this.rc)), t2.y = mi(this.lat0 + (s2 - this.y0) / this.a), t2;
  }
  var Zi = { init: Qi, forward: Xi, inverse: Hi, names: ["Equirectangular", "Equidistant_Cylindrical", "Equidistant_Cylindrical_Spherical", "eqc"] }, Ki = 20;
  function Ji() {
    this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = ci(this.es), this.e1 = li(this.es), this.e2 = ui(this.es), this.e3 = di(this.es), this.ml0 = this.a * hi(this.e0, this.e1, this.e2, this.e3, this.lat0);
  }
  function tr(t2) {
    var e2, s2, i2, r2 = t2.x, a2 = t2.y, n2 = ft(r2 - this.long0);
    if (i2 = n2 * Math.sin(a2), this.sphere)
      Math.abs(a2) <= m ? (e2 = this.a * n2, s2 = -1 * this.a * this.lat0) : (e2 = this.a * Math.sin(i2) / Math.tan(a2), s2 = this.a * (mi(a2 - this.lat0) + (1 - Math.cos(i2)) / Math.tan(a2)));
    else if (Math.abs(a2) <= m)
      e2 = this.a * n2, s2 = -1 * this.ml0;
    else {
      var o2 = _i(this.a, this.e, Math.sin(a2)) / Math.tan(a2);
      e2 = o2 * Math.sin(i2), s2 = this.a * hi(this.e0, this.e1, this.e2, this.e3, a2) - this.ml0 + o2 * (1 - Math.cos(i2));
    }
    return t2.x = e2 + this.x0, t2.y = s2 + this.y0, t2;
  }
  function er(t2) {
    var e2, s2, i2, r2, a2, n2, o2, h2, c2;
    if (i2 = t2.x - this.x0, r2 = t2.y - this.y0, this.sphere)
      if (Math.abs(r2 + this.a * this.lat0) <= m)
        e2 = ft(i2 / this.a + this.long0), s2 = 0;
      else {
        var l2;
        for (n2 = this.lat0 + r2 / this.a, o2 = i2 * i2 / this.a / this.a + n2 * n2, h2 = n2, a2 = Ki; a2; --a2)
          if (h2 += c2 = -1 * (n2 * (h2 * (l2 = Math.tan(h2)) + 1) - h2 - 0.5 * (h2 * h2 + o2) * l2) / ((h2 - n2) / l2 - 1), Math.abs(c2) <= m) {
            s2 = h2;
            break;
          }
        e2 = ft(this.long0 + Math.asin(i2 * Math.tan(h2) / this.a) / Math.sin(s2));
      }
    else if (Math.abs(r2 + this.ml0) <= m)
      s2 = 0, e2 = ft(this.long0 + i2 / this.a);
    else {
      var u2, d2, _2, p2, f2;
      for (n2 = (this.ml0 + r2) / this.a, o2 = i2 * i2 / this.a / this.a + n2 * n2, h2 = n2, a2 = Ki; a2; --a2)
        if (f2 = this.e * Math.sin(h2), u2 = Math.sqrt(1 - f2 * f2) * Math.tan(h2), d2 = this.a * hi(this.e0, this.e1, this.e2, this.e3, h2), _2 = this.e0 - 2 * this.e1 * Math.cos(2 * h2) + 4 * this.e2 * Math.cos(4 * h2) - 6 * this.e3 * Math.cos(6 * h2), h2 -= c2 = (n2 * (u2 * (p2 = d2 / this.a) + 1) - p2 - 0.5 * u2 * (p2 * p2 + o2)) / (this.es * Math.sin(2 * h2) * (p2 * p2 + o2 - 2 * n2 * p2) / (4 * u2) + (n2 - p2) * (u2 * _2 - 2 / Math.sin(2 * h2)) - _2), Math.abs(c2) <= m) {
          s2 = h2;
          break;
        }
      u2 = Math.sqrt(1 - this.es * Math.pow(Math.sin(s2), 2)) * Math.tan(s2), e2 = ft(this.long0 + Math.asin(i2 * u2 / this.a) / Math.sin(s2));
    }
    return t2.x = e2, t2.y = s2, t2;
  }
  var sr = { init: Ji, forward: tr, inverse: er, names: ["Polyconic", "American_Polyconic", "poly"] };
  function ir() {
    this.A = [], this.A[1] = 0.6399175073, this.A[2] = -0.1358797613, this.A[3] = 0.063294409, this.A[4] = -0.02526853, this.A[5] = 0.0117879, this.A[6] = -55161e-7, this.A[7] = 26906e-7, this.A[8] = -1333e-6, this.A[9] = 67e-5, this.A[10] = -34e-5, this.B_re = [], this.B_im = [], this.B_re[1] = 0.7557853228, this.B_im[1] = 0, this.B_re[2] = 0.249204646, this.B_im[2] = 3371507e-9, this.B_re[3] = -1541739e-9, this.B_im[3] = 0.04105856, this.B_re[4] = -0.10162907, this.B_im[4] = 0.01727609, this.B_re[5] = -0.26623489, this.B_im[5] = -0.36249218, this.B_re[6] = -0.6870983, this.B_im[6] = -1.1651967, this.C_re = [], this.C_im = [], this.C_re[1] = 1.3231270439, this.C_im[1] = 0, this.C_re[2] = -0.577245789, this.C_im[2] = -7809598e-9, this.C_re[3] = 0.508307513, this.C_im[3] = -0.112208952, this.C_re[4] = -0.15094762, this.C_im[4] = 0.18200602, this.C_re[5] = 1.01418179, this.C_im[5] = 1.64497696, this.C_re[6] = 1.9660549, this.C_im[6] = 2.5127645, this.D = [], this.D[1] = 1.5627014243, this.D[2] = 0.5185406398, this.D[3] = -0.03333098, this.D[4] = -0.1052906, this.D[5] = -0.0368594, this.D[6] = 7317e-6, this.D[7] = 0.0122, this.D[8] = 394e-5, this.D[9] = -13e-4;
  }
  function rr(t2) {
    var e2, s2 = t2.x, i2 = t2.y - this.lat0, r2 = s2 - this.long0, a2 = i2 / c * 1e-5, n2 = r2, o2 = 1, h2 = 0;
    for (e2 = 1; e2 <= 10; e2++)
      o2 *= a2, h2 += this.A[e2] * o2;
    var l2, u2 = h2, d2 = n2, _2 = 1, m2 = 0, p2 = 0, f2 = 0;
    for (e2 = 1; e2 <= 6; e2++)
      l2 = m2 * u2 + _2 * d2, _2 = _2 * u2 - m2 * d2, m2 = l2, p2 = p2 + this.B_re[e2] * _2 - this.B_im[e2] * m2, f2 = f2 + this.B_im[e2] * _2 + this.B_re[e2] * m2;
    return t2.x = f2 * this.a + this.x0, t2.y = p2 * this.a + this.y0, t2;
  }
  function ar(t2) {
    var e2, s2, i2 = t2.x, r2 = t2.y, a2 = i2 - this.x0, n2 = (r2 - this.y0) / this.a, o2 = a2 / this.a, h2 = 1, l2 = 0, u2 = 0, d2 = 0;
    for (e2 = 1; e2 <= 6; e2++)
      s2 = l2 * n2 + h2 * o2, h2 = h2 * n2 - l2 * o2, l2 = s2, u2 = u2 + this.C_re[e2] * h2 - this.C_im[e2] * l2, d2 = d2 + this.C_im[e2] * h2 + this.C_re[e2] * l2;
    for (var _2 = 0; _2 < this.iterations; _2++) {
      var m2, p2 = u2, f2 = d2, y2 = n2, g2 = o2;
      for (e2 = 2; e2 <= 6; e2++)
        m2 = f2 * u2 + p2 * d2, p2 = p2 * u2 - f2 * d2, f2 = m2, y2 += (e2 - 1) * (this.B_re[e2] * p2 - this.B_im[e2] * f2), g2 += (e2 - 1) * (this.B_im[e2] * p2 + this.B_re[e2] * f2);
      p2 = 1, f2 = 0;
      var M2 = this.B_re[1], x2 = this.B_im[1];
      for (e2 = 2; e2 <= 6; e2++)
        m2 = f2 * u2 + p2 * d2, p2 = p2 * u2 - f2 * d2, f2 = m2, M2 += e2 * (this.B_re[e2] * p2 - this.B_im[e2] * f2), x2 += e2 * (this.B_im[e2] * p2 + this.B_re[e2] * f2);
      var w2 = M2 * M2 + x2 * x2;
      u2 = (y2 * M2 + g2 * x2) / w2, d2 = (g2 * M2 - y2 * x2) / w2;
    }
    var S2 = u2, C2 = d2, E2 = 1, P2 = 0;
    for (e2 = 1; e2 <= 9; e2++)
      E2 *= S2, P2 += this.D[e2] * E2;
    var b2 = this.lat0 + P2 * c * 1e5, A3 = this.long0 + C2;
    return t2.x = A3, t2.y = b2, t2;
  }
  var nr = { init: ir, forward: rr, inverse: ar, names: ["New_Zealand_Map_Grid", "nzmg"] };
  function or() {
  }
  function hr(t2) {
    var e2 = t2.x, s2 = t2.y, i2 = ft(e2 - this.long0), r2 = this.x0 + this.a * i2, a2 = this.y0 + this.a * Math.log(Math.tan(Math.PI / 4 + s2 / 2.5)) * 1.25;
    return t2.x = r2, t2.y = a2, t2;
  }
  function cr(t2) {
    t2.x -= this.x0, t2.y -= this.y0;
    var e2 = ft(this.long0 + t2.x / this.a), s2 = 2.5 * (Math.atan(Math.exp(0.8 * t2.y / this.a)) - Math.PI / 4);
    return t2.x = e2, t2.y = s2, t2;
  }
  var lr = { init: or, forward: hr, inverse: cr, names: ["Miller_Cylindrical", "mill"] }, ur = 20;
  function dr() {
    this.sphere ? (this.n = 1, this.m = 0, this.es = 0, this.C_y = Math.sqrt((this.m + 1) / this.n), this.C_x = this.C_y / (this.m + 1)) : this.en = ns(this.es);
  }
  function _r(t2) {
    var e2, s2, i2 = t2.x, r2 = t2.y;
    if (i2 = ft(i2 - this.long0), this.sphere) {
      if (this.m)
        for (var a2 = this.n * Math.sin(r2), n2 = ur; n2; --n2) {
          var o2 = (this.m * r2 + Math.sin(r2) - a2) / (this.m + Math.cos(r2));
          if (r2 -= o2, Math.abs(o2) < m)
            break;
        }
      else
        r2 = 1 !== this.n ? Math.asin(this.n * Math.sin(r2)) : r2;
      e2 = this.a * this.C_x * i2 * (this.m + Math.cos(r2)), s2 = this.a * this.C_y * r2;
    } else {
      var h2 = Math.sin(r2), c2 = Math.cos(r2);
      s2 = this.a * os(r2, h2, c2, this.en), e2 = this.a * i2 * c2 / Math.sqrt(1 - this.es * h2 * h2);
    }
    return t2.x = e2, t2.y = s2, t2;
  }
  function mr(t2) {
    var e2, s2, i2;
    return t2.x -= this.x0, s2 = t2.x / this.a, t2.y -= this.y0, e2 = t2.y / this.a, this.sphere ? (e2 /= this.C_y, s2 /= this.C_x * (this.m + Math.cos(e2)), this.m ? e2 = Ni((this.m * e2 + Math.sin(e2)) / this.n) : 1 !== this.n && (e2 = Ni(Math.sin(e2) / this.n)), s2 = ft(s2 + this.long0), e2 = mi(e2)) : (e2 = cs(t2.y / this.a, this.es, this.en), (i2 = Math.abs(e2)) < l ? (i2 = Math.sin(e2), s2 = ft(this.long0 + t2.x * Math.sqrt(1 - this.es * i2 * i2) / (this.a * Math.cos(e2)))) : i2 - m < l && (s2 = this.long0)), t2.x = s2, t2.y = e2, t2;
  }
  var pr = { init: dr, forward: _r, inverse: mr, names: ["Sinusoidal", "sinu"] };
  function fr() {
  }
  function yr(t2) {
    for (var e2 = t2.x, s2 = t2.y, i2 = ft(e2 - this.long0), r2 = s2, a2 = Math.PI * Math.sin(s2); ; ) {
      var n2 = -(r2 + Math.sin(r2) - a2) / (1 + Math.cos(r2));
      if (r2 += n2, Math.abs(n2) < m)
        break;
    }
    r2 /= 2, Math.PI / 2 - Math.abs(s2) < m && (i2 = 0);
    var o2 = 0.900316316158 * this.a * i2 * Math.cos(r2) + this.x0, h2 = 1.4142135623731 * this.a * Math.sin(r2) + this.y0;
    return t2.x = o2, t2.y = h2, t2;
  }
  function gr(t2) {
    var e2, s2;
    t2.x -= this.x0, t2.y -= this.y0, s2 = t2.y / (1.4142135623731 * this.a), Math.abs(s2) > 0.999999999999 && (s2 = 0.999999999999), e2 = Math.asin(s2);
    var i2 = ft(this.long0 + t2.x / (0.900316316158 * this.a * Math.cos(e2)));
    i2 < -Math.PI && (i2 = -Math.PI), i2 > Math.PI && (i2 = Math.PI), s2 = (2 * e2 + Math.sin(2 * e2)) / Math.PI, Math.abs(s2) > 1 && (s2 = 1);
    var r2 = Math.asin(s2);
    return t2.x = i2, t2.y = r2, t2;
  }
  var Mr = { init: fr, forward: yr, inverse: gr, names: ["Mollweide", "moll"] };
  function xr() {
    Math.abs(this.lat1 + this.lat2) < m || (this.lat2 = this.lat2 || this.lat1, this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = ci(this.es), this.e1 = li(this.es), this.e2 = ui(this.es), this.e3 = di(this.es), this.sinphi = Math.sin(this.lat1), this.cosphi = Math.cos(this.lat1), this.ms1 = mt(this.e, this.sinphi, this.cosphi), this.ml1 = hi(this.e0, this.e1, this.e2, this.e3, this.lat1), Math.abs(this.lat1 - this.lat2) < m ? this.ns = this.sinphi : (this.sinphi = Math.sin(this.lat2), this.cosphi = Math.cos(this.lat2), this.ms2 = mt(this.e, this.sinphi, this.cosphi), this.ml2 = hi(this.e0, this.e1, this.e2, this.e3, this.lat2), this.ns = (this.ms1 - this.ms2) / (this.ml2 - this.ml1)), this.g = this.ml1 + this.ms1 / this.ns, this.ml0 = hi(this.e0, this.e1, this.e2, this.e3, this.lat0), this.rh = this.a * (this.g - this.ml0));
  }
  function wr(t2) {
    var e2, s2 = t2.x, i2 = t2.y;
    if (this.sphere)
      e2 = this.a * (this.g - i2);
    else {
      var r2 = hi(this.e0, this.e1, this.e2, this.e3, i2);
      e2 = this.a * (this.g - r2);
    }
    var a2 = this.ns * ft(s2 - this.long0), n2 = this.x0 + e2 * Math.sin(a2), o2 = this.y0 + this.rh - e2 * Math.cos(a2);
    return t2.x = n2, t2.y = o2, t2;
  }
  function Sr(t2) {
    var e2, s2, i2, r2;
    t2.x -= this.x0, t2.y = this.rh - t2.y + this.y0, this.ns >= 0 ? (s2 = Math.sqrt(t2.x * t2.x + t2.y * t2.y), e2 = 1) : (s2 = -Math.sqrt(t2.x * t2.x + t2.y * t2.y), e2 = -1);
    var a2 = 0;
    return 0 !== s2 && (a2 = Math.atan2(e2 * t2.x, e2 * t2.y)), this.sphere ? (r2 = ft(this.long0 + a2 / this.ns), i2 = mi(this.g - s2 / this.a), t2.x = r2, t2.y = i2, t2) : (i2 = pi(this.g - s2 / this.a, this.e0, this.e1, this.e2, this.e3), r2 = ft(this.long0 + a2 / this.ns), t2.x = r2, t2.y = i2, t2);
  }
  var Cr = { init: xr, forward: wr, inverse: Sr, names: ["Equidistant_Conic", "eqdc"] };
  function Er() {
    this.R = this.a;
  }
  function Pr(t2) {
    var e2, s2, i2 = t2.x, r2 = t2.y, a2 = ft(i2 - this.long0);
    Math.abs(r2) <= m && (e2 = this.x0 + this.R * a2, s2 = this.y0);
    var n2 = Ni(2 * Math.abs(r2 / Math.PI));
    (Math.abs(a2) <= m || Math.abs(Math.abs(r2) - l) <= m) && (e2 = this.x0, s2 = r2 >= 0 ? this.y0 + Math.PI * this.R * Math.tan(0.5 * n2) : this.y0 + Math.PI * this.R * -Math.tan(0.5 * n2));
    var o2 = 0.5 * Math.abs(Math.PI / a2 - a2 / Math.PI), h2 = o2 * o2, c2 = Math.sin(n2), u2 = Math.cos(n2), d2 = u2 / (c2 + u2 - 1), _2 = d2 * d2, p2 = d2 * (2 / c2 - 1), f2 = p2 * p2, y2 = Math.PI * this.R * (o2 * (d2 - f2) + Math.sqrt(h2 * (d2 - f2) * (d2 - f2) - (f2 + h2) * (_2 - f2))) / (f2 + h2);
    a2 < 0 && (y2 = -y2), e2 = this.x0 + y2;
    var g2 = h2 + d2;
    return y2 = Math.PI * this.R * (p2 * g2 - o2 * Math.sqrt((f2 + h2) * (h2 + 1) - g2 * g2)) / (f2 + h2), s2 = r2 >= 0 ? this.y0 + y2 : this.y0 - y2, t2.x = e2, t2.y = s2, t2;
  }
  function br(t2) {
    var e2, s2, i2, r2, a2, n2, o2, h2, c2, l2, u2, d2;
    return t2.x -= this.x0, t2.y -= this.y0, u2 = Math.PI * this.R, a2 = (i2 = t2.x / u2) * i2 + (r2 = t2.y / u2) * r2, u2 = 3 * (r2 * r2 / (h2 = -2 * (n2 = -Math.abs(r2) * (1 + a2)) + 1 + 2 * r2 * r2 + a2 * a2) + (2 * (o2 = n2 - 2 * r2 * r2 + i2 * i2) * o2 * o2 / h2 / h2 / h2 - 9 * n2 * o2 / h2 / h2) / 27) / (c2 = (n2 - o2 * o2 / 3 / h2) / h2) / (l2 = 2 * Math.sqrt(-c2 / 3)), Math.abs(u2) > 1 && (u2 = u2 >= 0 ? 1 : -1), d2 = Math.acos(u2) / 3, s2 = t2.y >= 0 ? (-l2 * Math.cos(d2 + Math.PI / 3) - o2 / 3 / h2) * Math.PI : -(-l2 * Math.cos(d2 + Math.PI / 3) - o2 / 3 / h2) * Math.PI, e2 = Math.abs(i2) < m ? this.long0 : ft(this.long0 + Math.PI * (a2 - 1 + Math.sqrt(1 + 2 * (i2 * i2 - r2 * r2) + a2 * a2)) / 2 / i2), t2.x = e2, t2.y = s2, t2;
  }
  var Ar, vr = { init: Er, forward: Pr, inverse: br, names: ["Van_der_Grinten_I", "VanDerGrinten", "Van_der_Grinten", "vandg"] }, Tr = { exports: {} };
  function Ir() {
    return Ar || (Ar = 1, function(t2) {
      var e2, s2, i2, r2;
      e2 = function(e3) {
        t2.exports ? t2.exports = e3 : window.geodesic = e3;
      }, (r2 = {}).Constants = {}, r2.Math = {}, r2.Accumulator = {}, (s2 = r2.Constants).WGS84 = { a: 6378137, f: 1 / 298.257223563 }, s2.version = { major: 2, minor: 1, patch: 1 }, s2.version_string = "2.1.1", (i2 = r2.Math).digits = 53, i2.epsilon = Math.pow(0.5, i2.digits - 1), i2.degree = Math.PI / 180, i2.sq = function(t3) {
        return t3 * t3;
      }, i2.hypot = function(t3, e3) {
        return Math.sqrt(t3 * t3 + e3 * e3);
      }, i2.cbrt = Math.cbrt || function(t3) {
        var e3 = Math.pow(Math.abs(t3), 1 / 3);
        return t3 > 0 ? e3 : t3 < 0 ? -e3 : t3;
      }, i2.log1p = Math.log1p || function(t3) {
        var e3 = 1 + t3, s3 = e3 - 1;
        return 0 === s3 ? t3 : t3 * Math.log(e3) / s3;
      }, i2.atanh = Math.atanh || function(t3) {
        var e3 = Math.abs(t3);
        return e3 = i2.log1p(2 * e3 / (1 - e3)) / 2, t3 > 0 ? e3 : t3 < 0 ? -e3 : t3;
      }, i2.copysign = function(t3, e3) {
        return Math.abs(t3) * (e3 < 0 || 0 === e3 && 1 / e3 < 0 ? -1 : 1);
      }, i2.sum = function(t3, e3) {
        var s3 = t3 + e3, i3 = s3 - e3, r3 = s3 - i3;
        return i3 -= t3, { s: s3, t: s3 ? 0 - (i3 + (r3 -= e3)) : s3 };
      }, i2.polyval = function(t3, e3, s3, i3) {
        for (var r3 = t3 < 0 ? 0 : e3[s3++]; --t3 >= 0; )
          r3 = r3 * i3 + e3[s3++];
        return r3;
      }, i2.AngRound = function(t3) {
        var e3 = 1 / 16, s3 = Math.abs(t3);
        return s3 = s3 < e3 ? e3 - (e3 - s3) : s3, i2.copysign(s3, t3);
      }, i2.remainder = function(t3, e3) {
        return (t3 %= e3) < -e3 / 2 ? t3 + e3 : t3 < e3 / 2 ? t3 : t3 - e3;
      }, i2.AngNormalize = function(t3) {
        var e3 = i2.remainder(t3, 360);
        return 180 === Math.abs(e3) ? i2.copysign(180, t3) : e3;
      }, i2.LatFix = function(t3) {
        return Math.abs(t3) > 90 ? NaN : t3;
      }, i2.AngDiff = function(t3, e3) {
        var s3, r3, a2 = i2.sum(i2.remainder(-t3, 360), i2.remainder(e3, 360));
        return s3 = (a2 = i2.sum(i2.remainder(a2.s, 360), a2.t)).s, r3 = a2.t, 0 !== s3 && 180 !== Math.abs(s3) || (s3 = i2.copysign(s3, 0 === r3 ? e3 - t3 : -r3)), { d: s3, e: r3 };
      }, i2.sincosd = function(t3) {
        var e3, s3, r3, a2, n2, o2, h2;
        switch (e3 = t3 % 360, s3 = (e3 -= 90 * (r3 = Math.round(e3 / 90))) * this.degree, a2 = Math.sin(s3), n2 = Math.cos(s3), 45 === Math.abs(e3) ? (n2 = Math.sqrt(0.5), a2 = i2.copysign(n2, s3)) : 30 === Math.abs(e3) && (n2 = Math.sqrt(0.75), a2 = i2.copysign(0.5, s3)), 3 & r3) {
          case 0:
            o2 = a2, h2 = n2;
            break;
          case 1:
            o2 = n2, h2 = -a2;
            break;
          case 2:
            o2 = -a2, h2 = -n2;
            break;
          default:
            o2 = -n2, h2 = a2;
        }
        return h2 += 0, 0 === o2 && (o2 = i2.copysign(o2, t3)), { s: o2, c: h2 };
      }, i2.sincosde = function(t3, e3) {
        var s3, r3, a2, n2, o2, h2, c2;
        switch (s3 = t3 % 360, a2 = Math.round(s3 / 90), r3 = (s3 = i2.AngRound(s3 - 90 * a2 + e3)) * this.degree, n2 = Math.sin(r3), o2 = Math.cos(r3), 45 === Math.abs(s3) ? (o2 = Math.sqrt(0.5), n2 = i2.copysign(o2, r3)) : 30 === Math.abs(s3) && (o2 = Math.sqrt(0.75), n2 = i2.copysign(0.5, r3)), 3 & a2) {
          case 0:
            h2 = n2, c2 = o2;
            break;
          case 1:
            h2 = o2, c2 = -n2;
            break;
          case 2:
            h2 = -n2, c2 = -o2;
            break;
          default:
            h2 = -o2, c2 = n2;
        }
        return c2 += 0, 0 === h2 && (h2 = i2.copysign(h2, t3 + e3)), { s: h2, c: c2 };
      }, i2.atan2d = function(t3, e3) {
        var s3, r3 = 0;
        switch (Math.abs(t3) > Math.abs(e3) && ([t3, e3] = [e3, t3], r3 = 2), i2.copysign(1, e3) < 0 && (e3 = -e3, ++r3), s3 = Math.atan2(t3, e3) / this.degree, r3) {
          case 1:
            s3 = i2.copysign(180, t3) - s3;
            break;
          case 2:
            s3 = 90 - s3;
            break;
          case 3:
            s3 = -90 + s3;
        }
        return s3;
      }, function(t3, e3) {
        t3.Accumulator = function(t4) {
          this.Set(t4);
        }, t3.Accumulator.prototype.Set = function(e4) {
          e4 || (e4 = 0), e4.constructor === t3.Accumulator ? (this._s = e4._s, this._t = e4._t) : (this._s = e4, this._t = 0);
        }, t3.Accumulator.prototype.Add = function(t4) {
          var s3 = e3.sum(t4, this._t), i3 = e3.sum(s3.s, this._s);
          s3 = s3.t, this._s = i3.s, this._t = i3.t, 0 === this._s ? this._s = s3 : this._t += s3;
        }, t3.Accumulator.prototype.Sum = function(e4) {
          var s3;
          return e4 ? ((s3 = new t3.Accumulator(this)).Add(e4), s3._s) : this._s;
        }, t3.Accumulator.prototype.Negate = function() {
          this._s *= -1, this._t *= -1;
        }, t3.Accumulator.prototype.Remainder = function(t4) {
          this._s = e3.remainder(this._s, t4), this.Add(0);
        };
      }(r2.Accumulator, r2.Math), r2.Geodesic = {}, r2.GeodesicLine = {}, r2.PolygonArea = {}, function(t3, e3, s3, i3, r3) {
        var a2, n2, o2, h2, c2, l2, u2, d2, _2, m2, p2, f2 = 6, y2 = f2, g2 = f2, M2 = f2, x2 = M2, w2 = 20, S2 = w2 + i3.digits + 10, C2 = i3.epsilon, E2 = 200 * C2, P2 = Math.sqrt(C2), b2 = C2, A3 = 1e3 * P2, v2 = 0, T2 = 31, I2 = 32640;
        t3.tiny_ = Math.sqrt(Number.MIN_VALUE / Number.EPSILON), t3.nC1_ = f2, t3.nC1p_ = f2, t3.nC2_ = f2, t3.nC3_ = f2, t3.nC4_ = f2, a2 = t3.nC3_ * (t3.nC3_ - 1) / 2, n2 = t3.nC4_ * (t3.nC4_ + 1) / 2, t3.CAP_C1 = 1, t3.CAP_C1p = 2, t3.CAP_C2 = 4, t3.CAP_C3 = 8, t3.CAP_C4 = 16, t3.NONE = 0, t3.ARC = 64, t3.LATITUDE = 128 | v2, t3.LONGITUDE = 256 | t3.CAP_C3, t3.AZIMUTH = 512 | v2, t3.DISTANCE = 1024 | t3.CAP_C1, t3.STANDARD = t3.LATITUDE | t3.LONGITUDE | t3.AZIMUTH | t3.DISTANCE, t3.DISTANCE_IN = 2048 | t3.CAP_C1 | t3.CAP_C1p, t3.REDUCEDLENGTH = 4096 | t3.CAP_C1 | t3.CAP_C2, t3.GEODESICSCALE = 8192 | t3.CAP_C1 | t3.CAP_C2, t3.AREA = 16384 | t3.CAP_C4, t3.ALL = I2 | T2, t3.LONG_UNROLL = 32768, t3.OUT_MASK = I2 | t3.LONG_UNROLL, t3.SinCosSeries = function(t4, e4, s4, i4) {
          var r4 = i4.length, a3 = r4 - (t4 ? 1 : 0), n3 = 2 * (s4 - e4) * (s4 + e4), o3 = 1 & a3 ? i4[--r4] : 0, h3 = 0;
          for (a3 = Math.floor(a3 / 2); a3--; )
            o3 = n3 * (h3 = n3 * o3 - h3 + i4[--r4]) - o3 + i4[--r4];
          return t4 ? 2 * e4 * s4 * o3 : s4 * (o3 - h3);
        }, o2 = function(t4, e4) {
          var s4, r4, a3, n3, o3, h3, c3, l3, u3, d3, _3, m3, p3 = i3.sq(t4), f3 = i3.sq(e4), y3 = (p3 + f3 - 1) / 6;
          return 0 === f3 && y3 <= 0 ? s4 = 0 : (h3 = y3, (o3 = (r4 = p3 * f3 / 4) * (r4 + 2 * (n3 = y3 * (a3 = i3.sq(y3))))) >= 0 ? (c3 = r4 + n3, c3 += c3 < 0 ? -Math.sqrt(o3) : Math.sqrt(o3), h3 += (l3 = i3.cbrt(c3)) + (0 !== l3 ? a3 / l3 : 0)) : (u3 = Math.atan2(Math.sqrt(-o3), -(r4 + n3)), h3 += 2 * y3 * Math.cos(u3 / 3)), d3 = Math.sqrt(i3.sq(h3) + f3), m3 = ((_3 = h3 < 0 ? f3 / (d3 - h3) : h3 + d3) - f3) / (2 * d3), s4 = _3 / (Math.sqrt(_3 + i3.sq(m3)) + m3)), s4;
        }, h2 = [1, 4, 64, 0, 256], t3.A1m1f = function(t4) {
          var e4 = Math.floor(y2 / 2);
          return (i3.polyval(e4, h2, 0, i3.sq(t4)) / h2[e4 + 1] + t4) / (1 - t4);
        }, c2 = [-1, 6, -16, 32, -9, 64, -128, 2048, 9, -16, 768, 3, -5, 512, -7, 1280, -7, 2048], t3.C1f = function(e4, s4) {
          var r4, a3, n3 = i3.sq(e4), o3 = e4, h3 = 0;
          for (r4 = 1; r4 <= t3.nC1_; ++r4)
            a3 = Math.floor((t3.nC1_ - r4) / 2), s4[r4] = o3 * i3.polyval(a3, c2, h3, n3) / c2[h3 + a3 + 1], h3 += a3 + 2, o3 *= e4;
        }, l2 = [205, -432, 768, 1536, 4005, -4736, 3840, 12288, -225, 116, 384, -7173, 2695, 7680, 3467, 7680, 38081, 61440], t3.C1pf = function(e4, s4) {
          var r4, a3, n3 = i3.sq(e4), o3 = e4, h3 = 0;
          for (r4 = 1; r4 <= t3.nC1p_; ++r4)
            a3 = Math.floor((t3.nC1p_ - r4) / 2), s4[r4] = o3 * i3.polyval(a3, l2, h3, n3) / l2[h3 + a3 + 1], h3 += a3 + 2, o3 *= e4;
        }, u2 = [-11, -28, -192, 0, 256], t3.A2m1f = function(t4) {
          var e4 = Math.floor(g2 / 2);
          return (i3.polyval(e4, u2, 0, i3.sq(t4)) / u2[e4 + 1] - t4) / (1 + t4);
        }, d2 = [1, 2, 16, 32, 35, 64, 384, 2048, 15, 80, 768, 7, 35, 512, 63, 1280, 77, 2048], t3.C2f = function(e4, s4) {
          var r4, a3, n3 = i3.sq(e4), o3 = e4, h3 = 0;
          for (r4 = 1; r4 <= t3.nC2_; ++r4)
            a3 = Math.floor((t3.nC2_ - r4) / 2), s4[r4] = o3 * i3.polyval(a3, d2, h3, n3) / d2[h3 + a3 + 1], h3 += a3 + 2, o3 *= e4;
        }, t3.Geodesic = function(t4, e4) {
          if (this.a = t4, this.f = e4, this._f1 = 1 - this.f, this._e2 = this.f * (2 - this.f), this._ep2 = this._e2 / i3.sq(this._f1), this._n = this.f / (2 - this.f), this._b = this.a * this._f1, this._c2 = (i3.sq(this.a) + i3.sq(this._b) * (0 === this._e2 ? 1 : (this._e2 > 0 ? i3.atanh(Math.sqrt(this._e2)) : Math.atan(Math.sqrt(-this._e2))) / Math.sqrt(Math.abs(this._e2)))) / 2, this._etol2 = 0.1 * P2 / Math.sqrt(Math.max(1e-3, Math.abs(this.f)) * Math.min(1, 1 - this.f / 2) / 2), !(isFinite(this.a) && this.a > 0))
            throw new Error("Equatorial radius is not positive");
          if (!(isFinite(this._b) && this._b > 0))
            throw new Error("Polar semi-axis is not positive");
          this._A3x = new Array(x2), this._C3x = new Array(a2), this._C4x = new Array(n2), this.A3coeff(), this.C3coeff(), this.C4coeff();
        }, _2 = [-3, 128, -2, -3, 64, -1, -3, -1, 16, 3, -1, -2, 8, 1, -1, 2, 1, 1], t3.Geodesic.prototype.A3coeff = function() {
          var t4, e4, s4 = 0, r4 = 0;
          for (t4 = M2 - 1; t4 >= 0; --t4)
            e4 = Math.min(M2 - t4 - 1, t4), this._A3x[r4++] = i3.polyval(e4, _2, s4, this._n) / _2[s4 + e4 + 1], s4 += e4 + 2;
        }, m2 = [3, 128, 2, 5, 128, -1, 3, 3, 64, -1, 0, 1, 8, -1, 1, 4, 5, 256, 1, 3, 128, -3, -2, 3, 64, 1, -3, 2, 32, 7, 512, -10, 9, 384, 5, -9, 5, 192, 7, 512, -14, 7, 512, 21, 2560], t3.Geodesic.prototype.C3coeff = function() {
          var e4, s4, r4, a3 = 0, n3 = 0;
          for (e4 = 1; e4 < t3.nC3_; ++e4)
            for (s4 = t3.nC3_ - 1; s4 >= e4; --s4)
              r4 = Math.min(t3.nC3_ - s4 - 1, s4), this._C3x[n3++] = i3.polyval(r4, m2, a3, this._n) / m2[a3 + r4 + 1], a3 += r4 + 2;
        }, p2 = [97, 15015, 1088, 156, 45045, -224, -4784, 1573, 45045, -10656, 14144, -4576, -858, 45045, 64, 624, -4576, 6864, -3003, 15015, 100, 208, 572, 3432, -12012, 30030, 45045, 1, 9009, -2944, 468, 135135, 5792, 1040, -1287, 135135, 5952, -11648, 9152, -2574, 135135, -64, -624, 4576, -6864, 3003, 135135, 8, 10725, 1856, -936, 225225, -8448, 4992, -1144, 225225, -1440, 4160, -4576, 1716, 225225, -136, 63063, 1024, -208, 105105, 3584, -3328, 1144, 315315, -128, 135135, -2560, 832, 405405, 128, 99099], t3.Geodesic.prototype.C4coeff = function() {
          var e4, s4, r4, a3 = 0, n3 = 0;
          for (e4 = 0; e4 < t3.nC4_; ++e4)
            for (s4 = t3.nC4_ - 1; s4 >= e4; --s4)
              r4 = t3.nC4_ - s4 - 1, this._C4x[n3++] = i3.polyval(r4, p2, a3, this._n) / p2[a3 + r4 + 1], a3 += r4 + 2;
        }, t3.Geodesic.prototype.A3f = function(t4) {
          return i3.polyval(x2 - 1, this._A3x, 0, t4);
        }, t3.Geodesic.prototype.C3f = function(e4, s4) {
          var r4, a3, n3 = 1, o3 = 0;
          for (r4 = 1; r4 < t3.nC3_; ++r4)
            a3 = t3.nC3_ - r4 - 1, n3 *= e4, s4[r4] = n3 * i3.polyval(a3, this._C3x, o3, e4), o3 += a3 + 1;
        }, t3.Geodesic.prototype.C4f = function(e4, s4) {
          var r4, a3, n3 = 1, o3 = 0;
          for (r4 = 0; r4 < t3.nC4_; ++r4)
            a3 = t3.nC4_ - r4 - 1, s4[r4] = n3 * i3.polyval(a3, this._C4x, o3, e4), o3 += a3 + 1, n3 *= e4;
        }, t3.Geodesic.prototype.Lengths = function(e4, s4, i4, r4, a3, n3, o3, h3, c3, l3, u3, d3, _3) {
          var m3, p3, f3, y3, g3 = {}, M3 = 0, x3 = 0, w3 = 0, S3 = 0;
          if ((u3 &= t3.OUT_MASK) & (t3.DISTANCE | t3.REDUCEDLENGTH | t3.GEODESICSCALE) && (w3 = t3.A1m1f(e4), t3.C1f(e4, d3), u3 & (t3.REDUCEDLENGTH | t3.GEODESICSCALE) && (S3 = t3.A2m1f(e4), t3.C2f(e4, _3), M3 = w3 - S3, S3 = 1 + S3), w3 = 1 + w3), u3 & t3.DISTANCE)
            m3 = t3.SinCosSeries(true, n3, o3, d3) - t3.SinCosSeries(true, i4, r4, d3), g3.s12b = w3 * (s4 + m3), u3 & (t3.REDUCEDLENGTH | t3.GEODESICSCALE) && (x3 = M3 * s4 + (w3 * m3 - S3 * (t3.SinCosSeries(true, n3, o3, _3) - t3.SinCosSeries(true, i4, r4, _3))));
          else if (u3 & (t3.REDUCEDLENGTH | t3.GEODESICSCALE)) {
            for (p3 = 1; p3 <= t3.nC2_; ++p3)
              _3[p3] = w3 * d3[p3] - S3 * _3[p3];
            x3 = M3 * s4 + (t3.SinCosSeries(true, n3, o3, _3) - t3.SinCosSeries(true, i4, r4, _3));
          }
          return u3 & t3.REDUCEDLENGTH && (g3.m0 = M3, g3.m12b = h3 * (r4 * n3) - a3 * (i4 * o3) - r4 * o3 * x3), u3 & t3.GEODESICSCALE && (f3 = r4 * o3 + i4 * n3, y3 = this._ep2 * (c3 - l3) * (c3 + l3) / (a3 + h3), g3.M12 = f3 + (y3 * n3 - o3 * x3) * i4 / a3, g3.M21 = f3 - (y3 * i4 - r4 * x3) * n3 / h3), g3;
        }, t3.Geodesic.prototype.InverseStart = function(e4, s4, r4, a3, n3, h3, c3, l3, u3, d3, _3) {
          var m3, p3, f3, y3, g3, M3, x3, w3, S3, C3, P3, b3, v3, T3, I3, z2, O2, N2, G2, R2, L2 = {}, $2 = a3 * s4 - n3 * e4, V2 = n3 * s4 + a3 * e4;
          return L2.sig12 = -1, m3 = a3 * s4, m3 += n3 * e4, (p3 = V2 >= 0 && $2 < 0.5 && n3 * c3 < 0.5) ? (y3 = i3.sq(e4 + a3), y3 /= y3 + i3.sq(s4 + n3), L2.dnm = Math.sqrt(1 + this._ep2 * y3), f3 = c3 / (this._f1 * L2.dnm), g3 = Math.sin(f3), M3 = Math.cos(f3)) : (g3 = l3, M3 = u3), L2.salp1 = n3 * g3, L2.calp1 = M3 >= 0 ? $2 + n3 * e4 * i3.sq(g3) / (1 + M3) : m3 - n3 * e4 * i3.sq(g3) / (1 - M3), w3 = i3.hypot(L2.salp1, L2.calp1), S3 = e4 * a3 + s4 * n3 * M3, p3 && w3 < this._etol2 ? (L2.salp2 = s4 * g3, L2.calp2 = $2 - s4 * a3 * (M3 >= 0 ? i3.sq(g3) / (1 + M3) : 1 - M3), x3 = i3.hypot(L2.salp2, L2.calp2), L2.salp2 /= x3, L2.calp2 /= x3, L2.sig12 = Math.atan2(w3, S3)) : Math.abs(this._n) > 0.1 || S3 >= 0 || w3 >= 6 * Math.abs(this._n) * Math.PI * i3.sq(s4) || (R2 = Math.atan2(-l3, -u3), this.f >= 0 ? (T3 = (v3 = i3.sq(e4) * this._ep2) / (2 * (1 + Math.sqrt(1 + v3)) + v3), C3 = R2 / (b3 = this.f * s4 * this.A3f(T3) * Math.PI), P3 = m3 / (b3 * s4)) : (I3 = n3 * s4 - a3 * e4, z2 = Math.atan2(m3, I3), P3 = c3 / (b3 = ((C3 = (O2 = this.Lengths(this._n, Math.PI + z2, e4, -s4, r4, a3, n3, h3, s4, n3, t3.REDUCEDLENGTH, d3, _3)).m12b / (s4 * n3 * O2.m0 * Math.PI) - 1) < -0.01 ? m3 / C3 : -this.f * i3.sq(s4) * Math.PI) / s4)), P3 > -E2 && C3 > -1 - A3 ? this.f >= 0 ? (L2.salp1 = Math.min(1, -C3), L2.calp1 = -Math.sqrt(1 - i3.sq(L2.salp1))) : (L2.calp1 = Math.max(C3 > -E2 ? 0 : -1, C3), L2.salp1 = Math.sqrt(1 - i3.sq(L2.calp1))) : (N2 = o2(C3, P3), G2 = b3 * (this.f >= 0 ? -C3 * N2 / (1 + N2) : -P3 * (1 + N2) / N2), g3 = Math.sin(G2), M3 = -Math.cos(G2), L2.salp1 = n3 * g3, L2.calp1 = m3 - n3 * e4 * i3.sq(g3) / (1 - M3))), L2.salp1 <= 0 ? (L2.salp1 = 1, L2.calp1 = 0) : (x3 = i3.hypot(L2.salp1, L2.calp1), L2.salp1 /= x3, L2.calp1 /= x3), L2;
        }, t3.Geodesic.prototype.Lambda12 = function(e4, s4, r4, a3, n3, o3, h3, c3, l3, u3, d3, _3, m3, p3) {
          var f3, y3, g3, M3, x3, w3, S3, C3, E3, P3, b3, A4, v3, T3 = {};
          return 0 === e4 && 0 === c3 && (c3 = -t3.tiny_), y3 = h3 * s4, g3 = i3.hypot(c3, h3 * e4), T3.ssig1 = e4, M3 = y3 * e4, T3.csig1 = x3 = c3 * s4, f3 = i3.hypot(T3.ssig1, T3.csig1), T3.ssig1 /= f3, T3.csig1 /= f3, T3.salp2 = n3 !== s4 ? y3 / n3 : h3, T3.calp2 = n3 !== s4 || Math.abs(a3) !== -e4 ? Math.sqrt(i3.sq(c3 * s4) + (s4 < -e4 ? (n3 - s4) * (s4 + n3) : (e4 - a3) * (e4 + a3))) / n3 : Math.abs(c3), T3.ssig2 = a3, w3 = y3 * a3, T3.csig2 = S3 = T3.calp2 * n3, f3 = i3.hypot(T3.ssig2, T3.csig2), T3.ssig2 /= f3, T3.csig2 /= f3, T3.sig12 = Math.atan2(Math.max(0, T3.csig1 * T3.ssig2 - T3.ssig1 * T3.csig2), T3.csig1 * T3.csig2 + T3.ssig1 * T3.ssig2), C3 = Math.max(0, x3 * w3 - M3 * S3), E3 = x3 * S3 + M3 * w3, b3 = Math.atan2(C3 * u3 - E3 * l3, E3 * u3 + C3 * l3), A4 = i3.sq(g3) * this._ep2, T3.eps = A4 / (2 * (1 + Math.sqrt(1 + A4)) + A4), this.C3f(T3.eps, p3), P3 = t3.SinCosSeries(true, T3.ssig2, T3.csig2, p3) - t3.SinCosSeries(true, T3.ssig1, T3.csig1, p3), T3.domg12 = -this.f * this.A3f(T3.eps) * y3 * (T3.sig12 + P3), T3.lam12 = b3 + T3.domg12, d3 && (0 === T3.calp2 ? T3.dlam12 = -2 * this._f1 * r4 / e4 : (v3 = this.Lengths(T3.eps, T3.sig12, T3.ssig1, T3.csig1, r4, T3.ssig2, T3.csig2, o3, s4, n3, t3.REDUCEDLENGTH, _3, m3), T3.dlam12 = v3.m12b, T3.dlam12 *= this._f1 / (T3.calp2 * n3))), T3;
        }, t3.Geodesic.prototype.Inverse = function(e4, s4, r4, a3, n3) {
          var o3, h3;
          return n3 || (n3 = t3.STANDARD), n3 === t3.LONG_UNROLL && (n3 |= t3.STANDARD), n3 &= t3.OUT_MASK, h3 = (o3 = this.InverseInt(e4, s4, r4, a3, n3)).vals, n3 & t3.AZIMUTH && (h3.azi1 = i3.atan2d(o3.salp1, o3.calp1), h3.azi2 = i3.atan2d(o3.salp2, o3.calp2)), h3;
        }, t3.Geodesic.prototype.InverseInt = function(e4, s4, r4, a3, n3) {
          var o3, h3, c3, l3, u3, d3, _3, m3, p3, f3, y3, g3, M3, x3, E3, P3, A4, v3, T3, I3, z2, O2, N2, G2, R2, L2, $2, V2, q2, j2, D2, B2, k2, F2, U2, W2, Y2, Q2, X2, H2, Z2, K2, J2, tt2, et2, st2, it2, rt2, at2, nt2, ot2, ht2, ct2, lt2, ut2, dt2, _t2, mt2, pt2, ft2, yt2, gt2, Mt2, xt2, wt2, St2 = {};
          if (St2.lat1 = e4 = i3.LatFix(e4), St2.lat2 = r4 = i3.LatFix(r4), e4 = i3.AngRound(e4), r4 = i3.AngRound(r4), h3 = (o3 = i3.AngDiff(s4, a3)).e, o3 = o3.d, n3 & t3.LONG_UNROLL ? (St2.lon1 = s4, St2.lon2 = s4 + o3 + h3) : (St2.lon1 = i3.AngNormalize(s4), St2.lon2 = i3.AngNormalize(a3)), h3 *= c3 = i3.copysign(1, o3), E3 = (o3 *= c3) * i3.degree, P3 = (l3 = i3.sincosde(o3, h3)).s, A4 = l3.c, h3 = 180 - o3 - h3, (u3 = Math.abs(e4) < Math.abs(r4) || isNaN(r4) ? -1 : 1) < 0 && (c3 *= -1, [r4, e4] = [e4, r4]), e4 *= d3 = i3.copysign(1, -e4), r4 *= d3, l3 = i3.sincosd(e4), _3 = this._f1 * l3.s, m3 = l3.c, _3 /= l3 = i3.hypot(_3, m3), m3 /= l3, m3 = Math.max(t3.tiny_, m3), l3 = i3.sincosd(r4), p3 = this._f1 * l3.s, f3 = l3.c, p3 /= l3 = i3.hypot(p3, f3), f3 /= l3, f3 = Math.max(t3.tiny_, f3), m3 < -_3 ? f3 === m3 && (p3 = i3.copysign(_3, p3)) : Math.abs(p3) === -_3 && (f3 = m3), M3 = Math.sqrt(1 + this._ep2 * i3.sq(_3)), x3 = Math.sqrt(1 + this._ep2 * i3.sq(p3)), N2 = new Array(t3.nC1_ + 1), G2 = new Array(t3.nC2_ + 1), R2 = new Array(t3.nC3_), (L2 = -90 === e4 || 0 === P3) && (I3 = P3, O2 = 0, V2 = _3, q2 = (T3 = A4) * m3, j2 = p3, D2 = (z2 = 1) * f3, v3 = Math.atan2(Math.max(0, q2 * j2 - V2 * D2), q2 * D2 + V2 * j2), y3 = ($2 = this.Lengths(this._n, v3, V2, q2, M3, j2, D2, x3, m3, f3, n3 | t3.DISTANCE | t3.REDUCEDLENGTH, N2, G2)).s12b, g3 = $2.m12b, n3 & t3.GEODESICSCALE && (St2.M12 = $2.M12, St2.M21 = $2.M21), v3 < 1 || g3 >= 0 ? ((v3 < 3 * t3.tiny_ || v3 < C2 && (y3 < 0 || g3 < 0)) && (v3 = g3 = y3 = 0), g3 *= this._b, y3 *= this._b, St2.a12 = v3 / i3.degree) : L2 = false), _t2 = 2, !L2 && 0 === _3 && (this.f <= 0 || h3 >= 180 * this.f))
            T3 = z2 = 0, I3 = O2 = 1, y3 = this.a * E3, v3 = k2 = E3 / this._f1, g3 = this._b * Math.sin(v3), n3 & t3.GEODESICSCALE && (St2.M12 = St2.M21 = Math.cos(v3)), St2.a12 = o3 / this._f1;
          else if (!L2)
            if (v3 = ($2 = this.InverseStart(_3, m3, M3, p3, f3, x3, E3, P3, A4, N2, G2)).sig12, I3 = $2.salp1, T3 = $2.calp1, v3 >= 0)
              O2 = $2.salp2, z2 = $2.calp2, F2 = $2.dnm, y3 = v3 * this._b * F2, g3 = i3.sq(F2) * this._b * Math.sin(v3 / F2), n3 & t3.GEODESICSCALE && (St2.M12 = St2.M21 = Math.cos(v3 / F2)), St2.a12 = v3 / i3.degree, k2 = E3 / (this._f1 * F2);
            else {
              for (U2 = 0, W2 = t3.tiny_, Y2 = 1, Q2 = t3.tiny_, X2 = -1, H2 = false, Z2 = false; K2 = ($2 = this.Lambda12(_3, m3, M3, p3, f3, x3, I3, T3, P3, A4, U2 < w2, N2, G2, R2)).lam12, O2 = $2.salp2, z2 = $2.calp2, v3 = $2.sig12, V2 = $2.ssig1, q2 = $2.csig1, j2 = $2.ssig2, D2 = $2.csig2, B2 = $2.eps, pt2 = $2.domg12, J2 = $2.dlam12, !Z2 && Math.abs(K2) >= (H2 ? 8 : 1) * C2 && U2 != S2; ++U2)
                K2 > 0 && (U2 < w2 || T3 / I3 > X2 / Q2) ? (Q2 = I3, X2 = T3) : K2 < 0 && (U2 < w2 || T3 / I3 < Y2 / W2) && (W2 = I3, Y2 = T3), U2 < w2 && J2 > 0 && (tt2 = -K2 / J2, Math.abs(tt2) < Math.PI && (et2 = Math.sin(tt2), (it2 = I3 * (st2 = Math.cos(tt2)) + T3 * et2) > 0)) ? (T3 = T3 * st2 - I3 * et2, I3 = it2, I3 /= l3 = i3.hypot(I3, T3), T3 /= l3, H2 = Math.abs(K2) <= 16 * C2) : (I3 = (W2 + Q2) / 2, T3 = (Y2 + X2) / 2, I3 /= l3 = i3.hypot(I3, T3), T3 /= l3, H2 = false, Z2 = Math.abs(W2 - I3) + (Y2 - T3) < b2 || Math.abs(I3 - Q2) + (T3 - X2) < b2);
              rt2 = n3 | (n3 & (t3.REDUCEDLENGTH | t3.GEODESICSCALE) ? t3.DISTANCE : t3.NONE), y3 = ($2 = this.Lengths(B2, v3, V2, q2, M3, j2, D2, x3, m3, f3, rt2, N2, G2)).s12b, g3 = $2.m12b, n3 & t3.GEODESICSCALE && (St2.M12 = $2.M12, St2.M21 = $2.M21), g3 *= this._b, y3 *= this._b, St2.a12 = v3 / i3.degree, n3 & t3.AREA && (xt2 = Math.sin(pt2), _t2 = P3 * (wt2 = Math.cos(pt2)) - A4 * xt2, mt2 = A4 * wt2 + P3 * xt2);
            }
          return n3 & t3.DISTANCE && (St2.s12 = 0 + y3), n3 & t3.REDUCEDLENGTH && (St2.m12 = 0 + g3), n3 & t3.AREA && (at2 = I3 * m3, 0 !== (nt2 = i3.hypot(T3, I3 * _3)) && 0 !== at2 ? (V2 = _3, q2 = T3 * m3, j2 = p3, D2 = z2 * f3, B2 = (ht2 = i3.sq(nt2) * this._ep2) / (2 * (1 + Math.sqrt(1 + ht2)) + ht2), ct2 = i3.sq(this.a) * nt2 * at2 * this._e2, V2 /= l3 = i3.hypot(V2, q2), q2 /= l3, j2 /= l3 = i3.hypot(j2, D2), D2 /= l3, lt2 = new Array(t3.nC4_), this.C4f(B2, lt2), ut2 = t3.SinCosSeries(false, V2, q2, lt2), dt2 = t3.SinCosSeries(false, j2, D2, lt2), St2.S12 = ct2 * (dt2 - ut2)) : St2.S12 = 0, L2 || 2 != _t2 || (_t2 = Math.sin(k2), mt2 = Math.cos(k2)), !L2 && mt2 > -0.7071 && p3 - _3 < 1.75 ? (pt2 = 1 + mt2, ft2 = 1 + m3, yt2 = 1 + f3, ot2 = 2 * Math.atan2(_t2 * (_3 * yt2 + p3 * ft2), pt2 * (_3 * p3 + ft2 * yt2))) : (Mt2 = z2 * T3 + O2 * I3, 0 === (gt2 = O2 * T3 - z2 * I3) && Mt2 < 0 && (gt2 = t3.tiny_ * T3, Mt2 = -1), ot2 = Math.atan2(gt2, Mt2)), St2.S12 += this._c2 * ot2, St2.S12 *= u3 * c3 * d3, St2.S12 += 0), u3 < 0 && ([O2, I3] = [I3, O2], [z2, T3] = [T3, z2], n3 & t3.GEODESICSCALE && ([St2.M21, St2.M12] = [St2.M12, St2.M21])), { vals: St2, salp1: I3 *= u3 * c3, calp1: T3 *= u3 * d3, salp2: O2 *= u3 * c3, calp2: z2 *= u3 * d3 };
        }, t3.Geodesic.prototype.GenDirect = function(s4, i4, r4, a3, n3, o3) {
          return o3 ? o3 === t3.LONG_UNROLL && (o3 |= t3.STANDARD) : o3 = t3.STANDARD, a3 || (o3 |= t3.DISTANCE_IN), new e3.GeodesicLine(this, s4, i4, r4, o3).GenPosition(a3, n3, o3);
        }, t3.Geodesic.prototype.Direct = function(t4, e4, s4, i4, r4) {
          return this.GenDirect(t4, e4, s4, false, i4, r4);
        }, t3.Geodesic.prototype.ArcDirect = function(t4, e4, s4, i4, r4) {
          return this.GenDirect(t4, e4, s4, true, i4, r4);
        }, t3.Geodesic.prototype.Line = function(t4, s4, i4, r4) {
          return new e3.GeodesicLine(this, t4, s4, i4, r4);
        }, t3.Geodesic.prototype.DirectLine = function(t4, e4, s4, i4, r4) {
          return this.GenDirectLine(t4, e4, s4, false, i4, r4);
        }, t3.Geodesic.prototype.ArcDirectLine = function(t4, e4, s4, i4, r4) {
          return this.GenDirectLine(t4, e4, s4, true, i4, r4);
        }, t3.Geodesic.prototype.GenDirectLine = function(s4, i4, r4, a3, n3, o3) {
          var h3;
          return o3 || (o3 = t3.STANDARD | t3.DISTANCE_IN), a3 || (o3 |= t3.DISTANCE_IN), (h3 = new e3.GeodesicLine(this, s4, i4, r4, o3)).GenSetDistance(a3, n3), h3;
        }, t3.Geodesic.prototype.InverseLine = function(s4, r4, a3, n3, o3) {
          var h3, c3, l3;
          return o3 || (o3 = t3.STANDARD | t3.DISTANCE_IN), h3 = this.InverseInt(s4, r4, a3, n3, t3.ARC), l3 = i3.atan2d(h3.salp1, h3.calp1), o3 & t3.OUT_MASK & t3.DISTANCE_IN && (o3 |= t3.DISTANCE), (c3 = new e3.GeodesicLine(this, s4, r4, l3, o3, h3.salp1, h3.calp1)).SetArc(h3.vals.a12), c3;
        }, t3.Geodesic.prototype.Polygon = function(t4) {
          return new s3.PolygonArea(this, t4);
        }, t3.WGS84 = new t3.Geodesic(r3.WGS84.a, r3.WGS84.f);
      }(r2.Geodesic, r2.GeodesicLine, r2.PolygonArea, r2.Math, r2.Constants), function(t3, e3, s3) {
        e3.GeodesicLine = function(e4, i3, r3, a2, n2, o2, h2) {
          var c2, l2, u2, d2, _2, m2;
          n2 || (n2 = t3.STANDARD | t3.DISTANCE_IN), this.a = e4.a, this.f = e4.f, this._b = e4._b, this._c2 = e4._c2, this._f1 = e4._f1, this.caps = n2 | t3.LATITUDE | t3.AZIMUTH | t3.LONG_UNROLL, this.lat1 = s3.LatFix(i3), this.lon1 = r3, void 0 === o2 || void 0 === h2 ? (this.azi1 = s3.AngNormalize(a2), c2 = s3.sincosd(s3.AngRound(this.azi1)), this.salp1 = c2.s, this.calp1 = c2.c) : (this.azi1 = a2, this.salp1 = o2, this.calp1 = h2), c2 = s3.sincosd(s3.AngRound(this.lat1)), u2 = this._f1 * c2.s, l2 = c2.c, u2 /= c2 = s3.hypot(u2, l2), l2 /= c2, l2 = Math.max(t3.tiny_, l2), this._dn1 = Math.sqrt(1 + e4._ep2 * s3.sq(u2)), this._salp0 = this.salp1 * l2, this._calp0 = s3.hypot(this.calp1, this.salp1 * u2), this._ssig1 = u2, this._somg1 = this._salp0 * u2, this._csig1 = this._comg1 = 0 !== u2 || 0 !== this.calp1 ? l2 * this.calp1 : 1, c2 = s3.hypot(this._ssig1, this._csig1), this._ssig1 /= c2, this._csig1 /= c2, this._k2 = s3.sq(this._calp0) * e4._ep2, d2 = this._k2 / (2 * (1 + Math.sqrt(1 + this._k2)) + this._k2), this.caps & t3.CAP_C1 && (this._A1m1 = t3.A1m1f(d2), this._C1a = new Array(t3.nC1_ + 1), t3.C1f(d2, this._C1a), this._B11 = t3.SinCosSeries(true, this._ssig1, this._csig1, this._C1a), _2 = Math.sin(this._B11), m2 = Math.cos(this._B11), this._stau1 = this._ssig1 * m2 + this._csig1 * _2, this._ctau1 = this._csig1 * m2 - this._ssig1 * _2), this.caps & t3.CAP_C1p && (this._C1pa = new Array(t3.nC1p_ + 1), t3.C1pf(d2, this._C1pa)), this.caps & t3.CAP_C2 && (this._A2m1 = t3.A2m1f(d2), this._C2a = new Array(t3.nC2_ + 1), t3.C2f(d2, this._C2a), this._B21 = t3.SinCosSeries(true, this._ssig1, this._csig1, this._C2a)), this.caps & t3.CAP_C3 && (this._C3a = new Array(t3.nC3_), e4.C3f(d2, this._C3a), this._A3c = -this.f * this._salp0 * e4.A3f(d2), this._B31 = t3.SinCosSeries(true, this._ssig1, this._csig1, this._C3a)), this.caps & t3.CAP_C4 && (this._C4a = new Array(t3.nC4_), e4.C4f(d2, this._C4a), this._A4 = s3.sq(this.a) * this._calp0 * this._salp0 * e4._e2, this._B41 = t3.SinCosSeries(false, this._ssig1, this._csig1, this._C4a)), this.a13 = this.s13 = NaN;
        }, e3.GeodesicLine.prototype.GenPosition = function(e4, i3, r3) {
          var a2, n2, o2, h2, c2, l2, u2, d2, _2, m2, p2, f2, y2, g2, M2, x2, w2, S2, C2, E2, P2, b2, A3, v2, T2, I2, z2 = {};
          return r3 ? r3 === t3.LONG_UNROLL && (r3 |= t3.STANDARD) : r3 = t3.STANDARD, r3 &= this.caps & t3.OUT_MASK, z2.lat1 = this.lat1, z2.azi1 = this.azi1, z2.lon1 = r3 & t3.LONG_UNROLL ? this.lon1 : s3.AngNormalize(this.lon1), e4 ? z2.a12 = i3 : z2.s12 = i3, e4 || this.caps & t3.DISTANCE_IN & t3.OUT_MASK ? (h2 = 0, c2 = 0, e4 ? (a2 = i3 * s3.degree, n2 = (A3 = s3.sincosd(i3)).s, o2 = A3.c) : (d2 = i3 / (this._b * (1 + this._A1m1)), _2 = Math.sin(d2), m2 = Math.cos(d2), a2 = d2 - ((h2 = -t3.SinCosSeries(true, this._stau1 * m2 + this._ctau1 * _2, this._ctau1 * m2 - this._stau1 * _2, this._C1pa)) - this._B11), n2 = Math.sin(a2), o2 = Math.cos(a2), Math.abs(this.f) > 0.01 && (l2 = this._ssig1 * o2 + this._csig1 * n2, u2 = this._csig1 * o2 - this._ssig1 * n2, h2 = t3.SinCosSeries(true, l2, u2, this._C1a), a2 -= ((1 + this._A1m1) * (a2 + (h2 - this._B11)) - i3 / this._b) / Math.sqrt(1 + this._k2 * s3.sq(l2)), n2 = Math.sin(a2), o2 = Math.cos(a2))), l2 = this._ssig1 * o2 + this._csig1 * n2, u2 = this._csig1 * o2 - this._ssig1 * n2, C2 = Math.sqrt(1 + this._k2 * s3.sq(l2)), r3 & (t3.DISTANCE | t3.REDUCEDLENGTH | t3.GEODESICSCALE) && ((e4 || Math.abs(this.f) > 0.01) && (h2 = t3.SinCosSeries(true, l2, u2, this._C1a)), c2 = (1 + this._A1m1) * (h2 - this._B11)), y2 = this._calp0 * l2, 0 === (g2 = s3.hypot(this._salp0, this._calp0 * u2)) && (g2 = u2 = t3.tiny_), w2 = this._salp0, S2 = this._calp0 * u2, e4 && r3 & t3.DISTANCE && (z2.s12 = this._b * ((1 + this._A1m1) * a2 + c2)), r3 & t3.LONGITUDE && (M2 = this._salp0 * l2, x2 = u2, f2 = s3.copysign(1, this._salp0), p2 = ((r3 & t3.LONG_UNROLL ? f2 * (a2 - (Math.atan2(l2, u2) - Math.atan2(this._ssig1, this._csig1)) + (Math.atan2(f2 * M2, x2) - Math.atan2(f2 * this._somg1, this._comg1))) : Math.atan2(M2 * this._comg1 - x2 * this._somg1, x2 * this._comg1 + M2 * this._somg1)) + this._A3c * (a2 + (t3.SinCosSeries(true, l2, u2, this._C3a) - this._B31))) / s3.degree, z2.lon2 = r3 & t3.LONG_UNROLL ? this.lon1 + p2 : s3.AngNormalize(s3.AngNormalize(this.lon1) + s3.AngNormalize(p2))), r3 & t3.LATITUDE && (z2.lat2 = s3.atan2d(y2, this._f1 * g2)), r3 & t3.AZIMUTH && (z2.azi2 = s3.atan2d(w2, S2)), r3 & (t3.REDUCEDLENGTH | t3.GEODESICSCALE) && (E2 = t3.SinCosSeries(true, l2, u2, this._C2a), P2 = (1 + this._A2m1) * (E2 - this._B21), b2 = (this._A1m1 - this._A2m1) * a2 + (c2 - P2), r3 & t3.REDUCEDLENGTH && (z2.m12 = this._b * (C2 * (this._csig1 * l2) - this._dn1 * (this._ssig1 * u2) - this._csig1 * u2 * b2)), r3 & t3.GEODESICSCALE && (A3 = this._k2 * (l2 - this._ssig1) * (l2 + this._ssig1) / (this._dn1 + C2), z2.M12 = o2 + (A3 * l2 - u2 * b2) * this._ssig1 / this._dn1, z2.M21 = o2 - (A3 * this._ssig1 - this._csig1 * b2) * l2 / C2)), r3 & t3.AREA && (v2 = t3.SinCosSeries(false, l2, u2, this._C4a), 0 === this._calp0 || 0 === this._salp0 ? (T2 = w2 * this.calp1 - S2 * this.salp1, I2 = S2 * this.calp1 + w2 * this.salp1) : (T2 = this._calp0 * this._salp0 * (o2 <= 0 ? this._csig1 * (1 - o2) + n2 * this._ssig1 : n2 * (this._csig1 * n2 / (1 + o2) + this._ssig1)), I2 = s3.sq(this._salp0) + s3.sq(this._calp0) * this._csig1 * u2), z2.S12 = this._c2 * Math.atan2(T2, I2) + this._A4 * (v2 - this._B41)), e4 || (z2.a12 = a2 / s3.degree), z2) : (z2.a12 = NaN, z2);
        }, e3.GeodesicLine.prototype.Position = function(t4, e4) {
          return this.GenPosition(false, t4, e4);
        }, e3.GeodesicLine.prototype.ArcPosition = function(t4, e4) {
          return this.GenPosition(true, t4, e4);
        }, e3.GeodesicLine.prototype.GenSetDistance = function(t4, e4) {
          t4 ? this.SetArc(e4) : this.SetDistance(e4);
        }, e3.GeodesicLine.prototype.SetDistance = function(e4) {
          var s4;
          this.s13 = e4, s4 = this.GenPosition(false, this.s13, t3.ARC), this.a13 = 0 + s4.a12;
        }, e3.GeodesicLine.prototype.SetArc = function(e4) {
          var s4;
          this.a13 = e4, s4 = this.GenPosition(true, this.a13, t3.DISTANCE), this.s13 = 0 + s4.s12;
        };
      }(r2.Geodesic, r2.GeodesicLine, r2.Math), function(t3, e3, s3, i3) {
        var r3, a2, n2, o2;
        r3 = function(t4, e4) {
          var i4 = s3.AngDiff(t4, e4).d;
          return t4 = s3.AngNormalize(t4), e4 = s3.AngNormalize(e4), i4 > 0 && (t4 < 0 && e4 >= 0 || t4 > 0 && 0 === e4) ? 1 : i4 < 0 && t4 >= 0 && e4 < 0 ? -1 : 0;
        }, a2 = function(t4, e4) {
          return (0 <= (e4 %= 720) && e4 < 360 || e4 < -360 ? 0 : 1) - (0 <= (t4 %= 720) && t4 < 360 || t4 < -360 ? 0 : 1);
        }, n2 = function(t4, e4, s4, i4, r4) {
          return t4.Remainder(e4), 1 & s4 && t4.Add((t4.Sum() < 0 ? 1 : -1) * e4 / 2), i4 || t4.Negate(), r4 ? t4.Sum() > e4 / 2 ? t4.Add(-e4) : t4.Sum() <= -e4 / 2 && t4.Add(+e4) : t4.Sum() >= e4 ? t4.Add(-e4) : t4.Sum() < 0 && t4.Add(+e4), 0 + t4.Sum();
        }, o2 = function(t4, e4, i4, r4, a3) {
          return t4 = s3.remainder(t4, e4), 1 & i4 && (t4 += (t4 < 0 ? 1 : -1) * e4 / 2), r4 || (t4 *= -1), a3 ? t4 > e4 / 2 ? t4 -= e4 : t4 <= -e4 / 2 && (t4 += e4) : t4 >= e4 ? t4 -= e4 : t4 < 0 && (t4 += e4), 0 + t4;
        }, t3.PolygonArea = function(t4, s4) {
          this._geod = t4, this.a = this._geod.a, this.f = this._geod.f, this._area0 = 4 * Math.PI * t4._c2, this.polyline = s4 || false, this._mask = e3.LATITUDE | e3.LONGITUDE | e3.DISTANCE | (this.polyline ? e3.NONE : e3.AREA | e3.LONG_UNROLL), this.polyline || (this._areasum = new i3.Accumulator(0)), this._perimetersum = new i3.Accumulator(0), this.Clear();
        }, t3.PolygonArea.prototype.Clear = function() {
          this.num = 0, this._crossings = 0, this.polyline || this._areasum.Set(0), this._perimetersum.Set(0), this._lat0 = this._lon0 = this.lat = this.lon = NaN;
        }, t3.PolygonArea.prototype.AddPoint = function(t4, e4) {
          var s4;
          0 === this.num ? (this._lat0 = this.lat = t4, this._lon0 = this.lon = e4) : (s4 = this._geod.Inverse(this.lat, this.lon, t4, e4, this._mask), this._perimetersum.Add(s4.s12), this.polyline || (this._areasum.Add(s4.S12), this._crossings += r3(this.lon, e4)), this.lat = t4, this.lon = e4), ++this.num;
        }, t3.PolygonArea.prototype.AddEdge = function(t4, e4) {
          var s4;
          this.num && (s4 = this._geod.Direct(this.lat, this.lon, t4, e4, this._mask), this._perimetersum.Add(e4), this.polyline || (this._areasum.Add(s4.S12), this._crossings += a2(this.lon, s4.lon2)), this.lat = s4.lat2, this.lon = s4.lon2), ++this.num;
        }, t3.PolygonArea.prototype.Compute = function(t4, e4) {
          var s4, a3, o3 = { number: this.num };
          return this.num < 2 ? (o3.perimeter = 0, this.polyline || (o3.area = 0), o3) : this.polyline ? (o3.perimeter = this._perimetersum.Sum(), o3) : (s4 = this._geod.Inverse(this.lat, this.lon, this._lat0, this._lon0, this._mask), o3.perimeter = this._perimetersum.Sum(s4.s12), (a3 = new i3.Accumulator(this._areasum)).Add(s4.S12), o3.area = n2(a3, this._area0, this._crossings + r3(this.lon, this._lon0), t4, e4), o3);
        }, t3.PolygonArea.prototype.TestPoint = function(t4, e4, s4, i4) {
          var a3, n3, h2, c2, l2 = { number: this.num + 1 };
          if (0 === this.num)
            return l2.perimeter = 0, this.polyline || (l2.area = 0), l2;
          for (l2.perimeter = this._perimetersum.Sum(), n3 = this.polyline ? 0 : this._areasum.Sum(), h2 = this._crossings, c2 = 0; c2 < (this.polyline ? 1 : 2); ++c2)
            a3 = this._geod.Inverse(0 === c2 ? this.lat : t4, 0 === c2 ? this.lon : e4, 0 !== c2 ? this._lat0 : t4, 0 !== c2 ? this._lon0 : e4, this._mask), l2.perimeter += a3.s12, this.polyline || (n3 += a3.S12, h2 += r3(0 === c2 ? this.lon : e4, 0 !== c2 ? this._lon0 : e4));
          return this.polyline || (l2.area = o2(n3, this._area0, h2, s4, i4)), l2;
        }, t3.PolygonArea.prototype.TestEdge = function(t4, e4, s4, i4) {
          var n3, h2, c2, l2 = { number: this.num ? this.num + 1 : 0 };
          return 0 === this.num || (l2.perimeter = this._perimetersum.Sum() + e4, this.polyline || (h2 = this._areasum.Sum(), c2 = this._crossings, h2 += (n3 = this._geod.Direct(this.lat, this.lon, t4, e4, this._mask)).S12, c2 += a2(this.lon, n3.lon2), c2 += r3(n3.lon2, this._lon0), n3 = this._geod.Inverse(n3.lat2, n3.lon2, this._lat0, this._lon0, this._mask), l2.perimeter += n3.s12, h2 += n3.S12, l2.area = o2(h2, this._area0, c2, s4, i4))), l2;
        };
      }(r2.PolygonArea, r2.Geodesic, r2.Math, r2.Accumulator), e2(r2);
    }(Tr)), Tr.exports;
  }
  var zr = Ir();
  function Or() {
    this.sin_p12 = Math.sin(this.lat0), this.cos_p12 = Math.cos(this.lat0), this.g = new zr.Geodesic.Geodesic(this.a, this.es / (1 + Math.sqrt(1 - this.es)));
  }
  function Nr(t2) {
    var e2, s2, i2, r2, a2, n2, o2, h2, c2, u2, d2, _2, f2, y2, g2, M2 = t2.x, x2 = t2.y, w2 = Math.sin(t2.y), S2 = Math.cos(t2.y), C2 = ft(M2 - this.long0);
    return this.sphere ? Math.abs(this.sin_p12 - 1) <= m ? (t2.x = this.x0 + this.a * (l - x2) * Math.sin(C2), t2.y = this.y0 - this.a * (l - x2) * Math.cos(C2), t2) : Math.abs(this.sin_p12 + 1) <= m ? (t2.x = this.x0 + this.a * (l + x2) * Math.sin(C2), t2.y = this.y0 + this.a * (l + x2) * Math.cos(C2), t2) : (c2 = this.sin_p12 * w2 + this.cos_p12 * S2 * Math.cos(C2), h2 = (o2 = Math.acos(c2)) ? o2 / Math.sin(o2) : 1, t2.x = this.x0 + this.a * h2 * S2 * Math.sin(C2), t2.y = this.y0 + this.a * h2 * (this.cos_p12 * w2 - this.sin_p12 * S2 * Math.cos(C2)), t2) : (e2 = ci(this.es), s2 = li(this.es), i2 = ui(this.es), r2 = di(this.es), Math.abs(this.sin_p12 - 1) <= m ? (a2 = this.a * hi(e2, s2, i2, r2, l), n2 = this.a * hi(e2, s2, i2, r2, x2), t2.x = this.x0 + (a2 - n2) * Math.sin(C2), t2.y = this.y0 - (a2 - n2) * Math.cos(C2), t2) : Math.abs(this.sin_p12 + 1) <= m ? (a2 = this.a * hi(e2, s2, i2, r2, l), n2 = this.a * hi(e2, s2, i2, r2, x2), t2.x = this.x0 + (a2 + n2) * Math.sin(C2), t2.y = this.y0 + (a2 + n2) * Math.cos(C2), t2) : Math.abs(M2) < m && Math.abs(x2 - this.lat0) < m ? (t2.x = t2.y = 0, t2) : (u2 = this.lat0 / p, d2 = this.long0 / p, _2 = x2 / p, f2 = M2 / p, g2 = (y2 = this.g.Inverse(u2, d2, _2, f2, this.g.AZIMUTH)).azi1 * p, t2.x = y2.s12 * Math.sin(g2), t2.y = y2.s12 * Math.cos(g2), t2));
  }
  function Gr(t2) {
    var e2, s2, i2, r2, a2, n2, o2, h2, c2, u2, d2, _2, f2, y2, g2, M2, x2;
    if (t2.x -= this.x0, t2.y -= this.y0, this.sphere) {
      if ((e2 = Math.sqrt(t2.x * t2.x + t2.y * t2.y)) > 2 * l * this.a)
        return;
      return s2 = e2 / this.a, i2 = Math.sin(s2), r2 = Math.cos(s2), a2 = this.long0, Math.abs(e2) <= m ? n2 = this.lat0 : (n2 = Ni(r2 * this.sin_p12 + t2.y * i2 * this.cos_p12 / e2), o2 = Math.abs(this.lat0) - l, a2 = Math.abs(o2) <= m ? this.lat0 >= 0 ? ft(this.long0 + Math.atan2(t2.x, -t2.y)) : ft(this.long0 - Math.atan2(-t2.x, t2.y)) : ft(this.long0 + Math.atan2(t2.x * i2, e2 * this.cos_p12 * r2 - t2.y * this.sin_p12 * i2))), t2.x = a2, t2.y = n2, t2;
    }
    return h2 = ci(this.es), c2 = li(this.es), u2 = ui(this.es), d2 = di(this.es), Math.abs(this.sin_p12 - 1) <= m ? (n2 = pi(((_2 = this.a * hi(h2, c2, u2, d2, l)) - (e2 = Math.sqrt(t2.x * t2.x + t2.y * t2.y))) / this.a, h2, c2, u2, d2), a2 = ft(this.long0 + Math.atan2(t2.x, -1 * t2.y)), t2.x = a2, t2.y = n2, t2) : Math.abs(this.sin_p12 + 1) <= m ? (_2 = this.a * hi(h2, c2, u2, d2, l), n2 = pi(((e2 = Math.sqrt(t2.x * t2.x + t2.y * t2.y)) - _2) / this.a, h2, c2, u2, d2), a2 = ft(this.long0 + Math.atan2(t2.x, t2.y)), t2.x = a2, t2.y = n2, t2) : (f2 = this.lat0 / p, y2 = this.long0 / p, g2 = Math.atan2(t2.x, t2.y) / p, M2 = Math.sqrt(t2.x * t2.x + t2.y * t2.y), x2 = this.g.Direct(f2, y2, g2, M2, this.g.STANDARD), t2.x = x2.lon2 * p, t2.y = x2.lat2 * p, t2);
  }
  var Rr = { init: Or, forward: Nr, inverse: Gr, names: ["Azimuthal_Equidistant", "aeqd"] };
  function Lr() {
    this.sin_p14 = Math.sin(this.lat0), this.cos_p14 = Math.cos(this.lat0);
  }
  function $r(t2) {
    var e2, s2, i2, r2, a2, n2, o2, h2, c2 = t2.x, l2 = t2.y;
    return i2 = ft(c2 - this.long0), e2 = Math.sin(l2), s2 = Math.cos(l2), r2 = Math.cos(i2), a2 = 1, ((n2 = this.sin_p14 * e2 + this.cos_p14 * s2 * r2) > 0 || Math.abs(n2) <= m) && (o2 = this.a * a2 * s2 * Math.sin(i2), h2 = this.y0 + this.a * a2 * (this.cos_p14 * e2 - this.sin_p14 * s2 * r2)), t2.x = o2, t2.y = h2, t2;
  }
  function Vr(t2) {
    var e2, s2, i2, r2, a2, n2, o2;
    return t2.x -= this.x0, t2.y -= this.y0, s2 = Ni((e2 = Math.sqrt(t2.x * t2.x + t2.y * t2.y)) / this.a), i2 = Math.sin(s2), r2 = Math.cos(s2), n2 = this.long0, Math.abs(e2) <= m ? (o2 = this.lat0, t2.x = n2, t2.y = o2, t2) : (o2 = Ni(r2 * this.sin_p14 + t2.y * i2 * this.cos_p14 / e2), a2 = Math.abs(this.lat0) - l, Math.abs(a2) <= m ? (n2 = this.lat0 >= 0 ? ft(this.long0 + Math.atan2(t2.x, -t2.y)) : ft(this.long0 - Math.atan2(-t2.x, t2.y)), t2.x = n2, t2.y = o2, t2) : (n2 = ft(this.long0 + Math.atan2(t2.x * i2, e2 * this.cos_p14 * r2 - t2.y * this.sin_p14 * i2)), t2.x = n2, t2.y = o2, t2));
  }
  var qr = { init: Lr, forward: $r, inverse: Vr, names: ["ortho"] }, jr = { FRONT: 1, RIGHT: 2, BACK: 3, LEFT: 4, TOP: 5, BOTTOM: 6 }, Dr = { AREA_0: 1, AREA_1: 2, AREA_2: 3, AREA_3: 4 };
  function Br() {
    this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_ts || 0, this.title = this.title || "Quadrilateralized Spherical Cube", this.lat0 >= l - y / 2 ? this.face = jr.TOP : this.lat0 <= -(l - y / 2) ? this.face = jr.BOTTOM : Math.abs(this.long0) <= y ? this.face = jr.FRONT : Math.abs(this.long0) <= l + y ? this.face = this.long0 > 0 ? jr.RIGHT : jr.LEFT : this.face = jr.BACK, 0 !== this.es && (this.one_minus_f = 1 - (this.a - this.b) / this.a, this.one_minus_f_squared = this.one_minus_f * this.one_minus_f);
  }
  function kr(t2) {
    var e2, s2, i2, r2, a2, n2, o2 = { x: 0, y: 0 }, h2 = { value: 0 };
    if (t2.x -= this.long0, e2 = 0 !== this.es ? Math.atan(this.one_minus_f_squared * Math.tan(t2.y)) : t2.y, s2 = t2.x, this.face === jr.TOP)
      r2 = l - e2, s2 >= y && s2 <= l + y ? (h2.value = Dr.AREA_0, i2 = s2 - l) : s2 > l + y || s2 <= -(l + y) ? (h2.value = Dr.AREA_1, i2 = s2 > 0 ? s2 - M : s2 + M) : s2 > -(l + y) && s2 <= -y ? (h2.value = Dr.AREA_2, i2 = s2 + l) : (h2.value = Dr.AREA_3, i2 = s2);
    else if (this.face === jr.BOTTOM)
      r2 = l + e2, s2 >= y && s2 <= l + y ? (h2.value = Dr.AREA_0, i2 = -s2 + l) : s2 < y && s2 >= -y ? (h2.value = Dr.AREA_1, i2 = -s2) : s2 < -y && s2 >= -(l + y) ? (h2.value = Dr.AREA_2, i2 = -s2 - l) : (h2.value = Dr.AREA_3, i2 = s2 > 0 ? -s2 + M : -s2 - M);
    else {
      var c2, u2, d2, _2, m2, p2;
      this.face === jr.RIGHT ? s2 = Wr(s2, +l) : this.face === jr.BACK ? s2 = Wr(s2, 3.14159265359) : this.face === jr.LEFT && (s2 = Wr(s2, -l)), _2 = Math.sin(e2), m2 = Math.cos(e2), p2 = Math.sin(s2), c2 = m2 * Math.cos(s2), u2 = m2 * p2, d2 = _2, this.face === jr.FRONT ? i2 = Ur(r2 = Math.acos(c2), d2, u2, h2) : this.face === jr.RIGHT ? i2 = Ur(r2 = Math.acos(u2), d2, -c2, h2) : this.face === jr.BACK ? i2 = Ur(r2 = Math.acos(-c2), d2, -u2, h2) : this.face === jr.LEFT ? i2 = Ur(r2 = Math.acos(-u2), d2, c2, h2) : (r2 = i2 = 0, h2.value = Dr.AREA_0);
    }
    return n2 = Math.atan(12 / M * (i2 + Math.acos(Math.sin(i2) * Math.cos(y)) - l)), a2 = Math.sqrt((1 - Math.cos(r2)) / (Math.cos(n2) * Math.cos(n2)) / (1 - Math.cos(Math.atan(1 / Math.cos(i2))))), h2.value === Dr.AREA_1 ? n2 += l : h2.value === Dr.AREA_2 ? n2 += M : h2.value === Dr.AREA_3 && (n2 += 1.5 * M), o2.x = a2 * Math.cos(n2), o2.y = a2 * Math.sin(n2), o2.x = o2.x * this.a + this.x0, o2.y = o2.y * this.a + this.y0, t2.x = o2.x, t2.y = o2.y, t2;
  }
  function Fr(t2) {
    var e2, s2, i2, r2, a2, n2, o2, h2, c2, u2, d2, _2, m2 = { lam: 0, phi: 0 }, p2 = { value: 0 };
    if (t2.x = (t2.x - this.x0) / this.a, t2.y = (t2.y - this.y0) / this.a, s2 = Math.atan(Math.sqrt(t2.x * t2.x + t2.y * t2.y)), e2 = Math.atan2(t2.y, t2.x), t2.x >= 0 && t2.x >= Math.abs(t2.y) ? p2.value = Dr.AREA_0 : t2.y >= 0 && t2.y >= Math.abs(t2.x) ? (p2.value = Dr.AREA_1, e2 -= l) : t2.x < 0 && -t2.x >= Math.abs(t2.y) ? (p2.value = Dr.AREA_2, e2 = e2 < 0 ? e2 + M : e2 - M) : (p2.value = Dr.AREA_3, e2 += l), c2 = M / 12 * Math.tan(e2), a2 = Math.sin(c2) / (Math.cos(c2) - 1 / Math.sqrt(2)), n2 = Math.atan(a2), (o2 = 1 - (i2 = Math.cos(e2)) * i2 * (r2 = Math.tan(s2)) * r2 * (1 - Math.cos(Math.atan(1 / Math.cos(n2))))) < -1 ? o2 = -1 : o2 > 1 && (o2 = 1), this.face === jr.TOP)
      h2 = Math.acos(o2), m2.phi = l - h2, p2.value === Dr.AREA_0 ? m2.lam = n2 + l : p2.value === Dr.AREA_1 ? m2.lam = n2 < 0 ? n2 + M : n2 - M : p2.value === Dr.AREA_2 ? m2.lam = n2 - l : m2.lam = n2;
    else if (this.face === jr.BOTTOM)
      h2 = Math.acos(o2), m2.phi = h2 - l, p2.value === Dr.AREA_0 ? m2.lam = -n2 + l : p2.value === Dr.AREA_1 ? m2.lam = -n2 : p2.value === Dr.AREA_2 ? m2.lam = -n2 - l : m2.lam = n2 < 0 ? -n2 - M : -n2 + M;
    else {
      var f2, y2, g2;
      c2 = (f2 = o2) * f2, y2 = (c2 += (g2 = c2 >= 1 ? 0 : Math.sqrt(1 - c2) * Math.sin(n2)) * g2) >= 1 ? 0 : Math.sqrt(1 - c2), p2.value === Dr.AREA_1 ? (c2 = y2, y2 = -g2, g2 = c2) : p2.value === Dr.AREA_2 ? (y2 = -y2, g2 = -g2) : p2.value === Dr.AREA_3 && (c2 = y2, y2 = g2, g2 = -c2), this.face === jr.RIGHT ? (c2 = f2, f2 = -y2, y2 = c2) : this.face === jr.BACK ? (f2 = -f2, y2 = -y2) : this.face === jr.LEFT && (c2 = f2, f2 = y2, y2 = -c2), m2.phi = Math.acos(-g2) - l, m2.lam = Math.atan2(y2, f2), this.face === jr.RIGHT ? m2.lam = Wr(m2.lam, -l) : this.face === jr.BACK ? m2.lam = Wr(m2.lam, -3.14159265359) : this.face === jr.LEFT && (m2.lam = Wr(m2.lam, +l));
    }
    return 0 !== this.es && (u2 = m2.phi < 0 ? 1 : 0, d2 = Math.tan(m2.phi), _2 = this.b / Math.sqrt(d2 * d2 + this.one_minus_f_squared), m2.phi = Math.atan(Math.sqrt(this.a * this.a - _2 * _2) / (this.one_minus_f * _2)), u2 && (m2.phi = -m2.phi)), m2.lam += this.long0, t2.x = m2.lam, t2.y = m2.phi, t2;
  }
  function Ur(t2, e2, s2, i2) {
    var r2;
    return t2 < m ? (i2.value = Dr.AREA_0, r2 = 0) : (r2 = Math.atan2(e2, s2), Math.abs(r2) <= y ? i2.value = Dr.AREA_0 : r2 > y && r2 <= l + y ? (i2.value = Dr.AREA_1, r2 -= l) : r2 > l + y || r2 <= -(l + y) ? (i2.value = Dr.AREA_2, r2 = r2 >= 0 ? r2 - M : r2 + M) : (i2.value = Dr.AREA_3, r2 += l)), r2;
  }
  function Wr(t2, e2) {
    var s2 = t2 + e2;
    return s2 < -3.14159265359 ? s2 += g : s2 > 3.14159265359 && (s2 -= g), s2;
  }
  var Yr = { init: Br, forward: kr, inverse: Fr, names: ["Quadrilateralized Spherical Cube", "Quadrilateralized_Spherical_Cube", "qsc"] }, Qr = [[1, 22199e-21, -715515e-10, 31103e-10], [0.9986, -482243e-9, -24897e-9, -13309e-10], [0.9954, -83103e-8, -448605e-10, -986701e-12], [0.99, -135364e-8, -59661e-9, 36777e-10], [0.9822, -167442e-8, -449547e-11, -572411e-11], [0.973, -214868e-8, -903571e-10, 18736e-12], [0.96, -305085e-8, -900761e-10, 164917e-11], [0.9427, -382792e-8, -653386e-10, -26154e-10], [0.9216, -467746e-8, -10457e-8, 481243e-11], [0.8962, -536223e-8, -323831e-10, -543432e-11], [0.8679, -609363e-8, -113898e-9, 332484e-11], [0.835, -698325e-8, -640253e-10, 934959e-12], [0.7986, -755338e-8, -500009e-10, 935324e-12], [0.7597, -798324e-8, -35971e-9, -227626e-11], [0.7186, -851367e-8, -701149e-10, -86303e-10], [0.6732, -986209e-8, -199569e-9, 191974e-10], [0.6213, -0.010418, 883923e-10, 624051e-11], [0.5722, -906601e-8, 182e-6, 624051e-11], [0.5322, -677797e-8, 275608e-9, 624051e-11]], Xr = [[-520417e-23, 0.0124, 121431e-23, -845284e-16], [0.062, 0.0124, -126793e-14, 422642e-15], [0.124, 0.0124, 507171e-14, -160604e-14], [0.186, 0.0123999, -190189e-13, 600152e-14], [0.248, 0.0124002, 710039e-13, -224e-10], [0.31, 0.0123992, -264997e-12, 835986e-13], [0.372, 0.0124029, 988983e-12, -311994e-12], [0.434, 0.0123893, -369093e-11, -435621e-12], [0.4958, 0.0123198, -102252e-10, -345523e-12], [0.5571, 0.0121916, -154081e-10, -582288e-12], [0.6176, 0.0119938, -241424e-10, -525327e-12], [0.6769, 0.011713, -320223e-10, -516405e-12], [0.7346, 0.0113541, -397684e-10, -609052e-12], [0.7903, 0.0109107, -489042e-10, -104739e-11], [0.8435, 0.0103431, -64615e-9, -140374e-14], [0.8936, 969686e-8, -64636e-9, -8547e-9], [0.9394, 840947e-8, -192841e-9, -42106e-10], [0.9761, 616527e-8, -256e-6, -42106e-10], [1, 328947e-8, -319159e-9, -42106e-10]], Hr = 0.8487, Zr = 1.3523, Kr = f / 5, Jr = 1 / Kr, ta = 18, ea = function(t2, e2) {
    return t2[0] + e2 * (t2[1] + e2 * (t2[2] + e2 * t2[3]));
  }, sa = function(t2, e2) {
    return t2[1] + e2 * (2 * t2[2] + 3 * e2 * t2[3]);
  };
  function ia(t2, e2, s2, i2) {
    for (var r2 = e2; i2; --i2) {
      var a2 = t2(r2);
      if (r2 -= a2, Math.abs(a2) < s2)
        break;
    }
    return r2;
  }
  function ra() {
    this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.long0 = this.long0 || 0, this.es = 0, this.title = this.title || "Robinson";
  }
  function aa(t2) {
    var e2 = ft(t2.x - this.long0), s2 = Math.abs(t2.y), i2 = Math.floor(s2 * Kr);
    i2 < 0 ? i2 = 0 : i2 >= ta && (i2 = ta - 1), s2 = f * (s2 - Jr * i2);
    var r2 = { x: ea(Qr[i2], s2) * e2, y: ea(Xr[i2], s2) };
    return t2.y < 0 && (r2.y = -r2.y), r2.x = r2.x * this.a * Hr + this.x0, r2.y = r2.y * this.a * Zr + this.y0, r2;
  }
  function na(t2) {
    var e2 = { x: (t2.x - this.x0) / (this.a * Hr), y: Math.abs(t2.y - this.y0) / (this.a * Zr) };
    if (e2.y >= 1)
      e2.x /= Qr[ta][0], e2.y = t2.y < 0 ? -l : l;
    else {
      var s2 = Math.floor(e2.y * ta);
      for (s2 < 0 ? s2 = 0 : s2 >= ta && (s2 = ta - 1); ; )
        if (Xr[s2][0] > e2.y)
          --s2;
        else {
          if (!(Xr[s2 + 1][0] <= e2.y))
            break;
          ++s2;
        }
      var i2 = Xr[s2], r2 = 5 * (e2.y - i2[0]) / (Xr[s2 + 1][0] - i2[0]);
      r2 = ia(function(t3) {
        return (ea(i2, t3) - e2.y) / sa(i2, t3);
      }, r2, m, 100), e2.x /= ea(Qr[s2], r2), e2.y = (5 * s2 + r2) * p, t2.y < 0 && (e2.y = -e2.y);
    }
    return e2.x = ft(e2.x + this.long0), e2;
  }
  var oa = { init: ra, forward: aa, inverse: na, names: ["Robinson", "robin"] };
  function ha() {
    this.name = "geocent";
  }
  function ca(t2) {
    return ie(t2, this.es, this.a);
  }
  function la(t2) {
    return re(t2, this.es, this.a, this.b);
  }
  var ua = { init: ha, forward: ca, inverse: la, names: ["Geocentric", "geocentric", "geocent", "Geocent"] }, da = { N_POLE: 0, S_POLE: 1, EQUIT: 2, OBLIQ: 3 }, _a = { h: { def: 1e5, num: true }, azi: { def: 0, num: true, degrees: true }, tilt: { def: 0, num: true, degrees: true }, long0: { def: 0, num: true }, lat0: { def: 0, num: true } };
  function ma() {
    if (Object.keys(_a).forEach(function(t3) {
      if (void 0 === this[t3])
        this[t3] = _a[t3].def;
      else {
        if (_a[t3].num && isNaN(this[t3]))
          throw new Error("Invalid parameter value, must be numeric " + t3 + " = " + this[t3]);
        _a[t3].num && (this[t3] = parseFloat(this[t3]));
      }
      _a[t3].degrees && (this[t3] = this[t3] * p);
    }.bind(this)), Math.abs(Math.abs(this.lat0) - l) < m ? this.mode = this.lat0 < 0 ? da.S_POLE : da.N_POLE : Math.abs(this.lat0) < m ? this.mode = da.EQUIT : (this.mode = da.OBLIQ, this.sinph0 = Math.sin(this.lat0), this.cosph0 = Math.cos(this.lat0)), this.pn1 = this.h / this.a, this.pn1 <= 0 || this.pn1 > 1e10)
      throw new Error("Invalid height");
    this.p = 1 + this.pn1, this.rp = 1 / this.p, this.h1 = 1 / this.pn1, this.pfact = (this.p + 1) * this.h1, this.es = 0;
    var t2 = this.tilt, e2 = this.azi;
    this.cg = Math.cos(e2), this.sg = Math.sin(e2), this.cw = Math.cos(t2), this.sw = Math.sin(t2);
  }
  function pa(t2) {
    t2.x -= this.long0;
    var e2, s2, i2, r2, a2 = Math.sin(t2.y), n2 = Math.cos(t2.y), o2 = Math.cos(t2.x);
    switch (this.mode) {
      case da.OBLIQ:
        s2 = this.sinph0 * a2 + this.cosph0 * n2 * o2;
        break;
      case da.EQUIT:
        s2 = n2 * o2;
        break;
      case da.S_POLE:
        s2 = -a2;
        break;
      case da.N_POLE:
        s2 = a2;
    }
    switch (e2 = (s2 = this.pn1 / (this.p - s2)) * n2 * Math.sin(t2.x), this.mode) {
      case da.OBLIQ:
        s2 *= this.cosph0 * a2 - this.sinph0 * n2 * o2;
        break;
      case da.EQUIT:
        s2 *= a2;
        break;
      case da.N_POLE:
        s2 *= -n2 * o2;
        break;
      case da.S_POLE:
        s2 *= n2 * o2;
    }
    return r2 = 1 / ((i2 = s2 * this.cg + e2 * this.sg) * this.sw * this.h1 + this.cw), e2 = (e2 * this.cg - s2 * this.sg) * this.cw * r2, s2 = i2 * r2, t2.x = e2 * this.a, t2.y = s2 * this.a, t2;
  }
  function fa(t2) {
    t2.x /= this.a, t2.y /= this.a;
    var e2, s2, i2, r2 = { x: t2.x, y: t2.y };
    i2 = 1 / (this.pn1 - t2.y * this.sw), e2 = this.pn1 * t2.x * i2, s2 = this.pn1 * t2.y * this.cw * i2, t2.x = e2 * this.cg + s2 * this.sg, t2.y = s2 * this.cg - e2 * this.sg;
    var a2 = ps(t2.x, t2.y);
    if (Math.abs(a2) < m)
      r2.x = 0, r2.y = t2.y;
    else {
      var n2, o2;
      switch (o2 = 1 - a2 * a2 * this.pfact, o2 = (this.p - Math.sqrt(o2)) / (this.pn1 / a2 + a2 / this.pn1), n2 = Math.sqrt(1 - o2 * o2), this.mode) {
        case da.OBLIQ:
          r2.y = Math.asin(n2 * this.sinph0 + t2.y * o2 * this.cosph0 / a2), t2.y = (n2 - this.sinph0 * Math.sin(r2.y)) * a2, t2.x *= o2 * this.cosph0;
          break;
        case da.EQUIT:
          r2.y = Math.asin(t2.y * o2 / a2), t2.y = n2 * a2, t2.x *= o2;
          break;
        case da.N_POLE:
          r2.y = Math.asin(n2), t2.y = -t2.y;
          break;
        case da.S_POLE:
          r2.y = -Math.asin(n2);
      }
      r2.x = Math.atan2(t2.x, t2.y);
    }
    return t2.x = r2.x + this.long0, t2.y = r2.y, t2;
  }
  var ya = { init: ma, forward: pa, inverse: fa, names: ["Tilted_Perspective", "tpers"] };
  function ga() {
    if (this.flip_axis = "x" === this.sweep ? 1 : 0, this.h = Number(this.h), this.radius_g_1 = this.h / this.a, this.radius_g_1 <= 0 || this.radius_g_1 > 1e10)
      throw new Error();
    if (this.radius_g = 1 + this.radius_g_1, this.C = this.radius_g * this.radius_g - 1, 0 !== this.es) {
      var t2 = 1 - this.es, e2 = 1 / t2;
      this.radius_p = Math.sqrt(t2), this.radius_p2 = t2, this.radius_p_inv2 = e2, this.shape = "ellipse";
    } else
      this.radius_p = 1, this.radius_p2 = 1, this.radius_p_inv2 = 1, this.shape = "sphere";
    this.title || (this.title = "Geostationary Satellite View");
  }
  function Ma(t2) {
    var e2, s2, i2, r2, a2 = t2.x, n2 = t2.y;
    if (a2 -= this.long0, "ellipse" === this.shape) {
      n2 = Math.atan(this.radius_p2 * Math.tan(n2));
      var o2 = this.radius_p / ps(this.radius_p * Math.cos(n2), Math.sin(n2));
      if (s2 = o2 * Math.cos(a2) * Math.cos(n2), i2 = o2 * Math.sin(a2) * Math.cos(n2), r2 = o2 * Math.sin(n2), (this.radius_g - s2) * s2 - i2 * i2 - r2 * r2 * this.radius_p_inv2 < 0)
        return t2.x = Number.NaN, t2.y = Number.NaN, t2;
      e2 = this.radius_g - s2, this.flip_axis ? (t2.x = this.radius_g_1 * Math.atan(i2 / ps(r2, e2)), t2.y = this.radius_g_1 * Math.atan(r2 / e2)) : (t2.x = this.radius_g_1 * Math.atan(i2 / e2), t2.y = this.radius_g_1 * Math.atan(r2 / ps(i2, e2)));
    } else
      "sphere" === this.shape && (e2 = Math.cos(n2), s2 = Math.cos(a2) * e2, i2 = Math.sin(a2) * e2, r2 = Math.sin(n2), e2 = this.radius_g - s2, this.flip_axis ? (t2.x = this.radius_g_1 * Math.atan(i2 / ps(r2, e2)), t2.y = this.radius_g_1 * Math.atan(r2 / e2)) : (t2.x = this.radius_g_1 * Math.atan(i2 / e2), t2.y = this.radius_g_1 * Math.atan(r2 / ps(i2, e2))));
    return t2.x = t2.x * this.a, t2.y = t2.y * this.a, t2;
  }
  function xa(t2) {
    var e2, s2, i2, r2, a2 = -1, n2 = 0, o2 = 0;
    if (t2.x = t2.x / this.a, t2.y = t2.y / this.a, "ellipse" === this.shape) {
      this.flip_axis ? (o2 = Math.tan(t2.y / this.radius_g_1), n2 = Math.tan(t2.x / this.radius_g_1) * ps(1, o2)) : (n2 = Math.tan(t2.x / this.radius_g_1), o2 = Math.tan(t2.y / this.radius_g_1) * ps(1, n2));
      var h2 = o2 / this.radius_p;
      if (e2 = n2 * n2 + h2 * h2 + a2 * a2, (i2 = (s2 = 2 * this.radius_g * a2) * s2 - 4 * e2 * this.C) < 0)
        return t2.x = Number.NaN, t2.y = Number.NaN, t2;
      r2 = (-s2 - Math.sqrt(i2)) / (2 * e2), a2 = this.radius_g + r2 * a2, n2 *= r2, o2 *= r2, t2.x = Math.atan2(n2, a2), t2.y = Math.atan(o2 * Math.cos(t2.x) / a2), t2.y = Math.atan(this.radius_p_inv2 * Math.tan(t2.y));
    } else if ("sphere" === this.shape) {
      if (this.flip_axis ? (o2 = Math.tan(t2.y / this.radius_g_1), n2 = Math.tan(t2.x / this.radius_g_1) * Math.sqrt(1 + o2 * o2)) : (n2 = Math.tan(t2.x / this.radius_g_1), o2 = Math.tan(t2.y / this.radius_g_1) * Math.sqrt(1 + n2 * n2)), e2 = n2 * n2 + o2 * o2 + a2 * a2, (i2 = (s2 = 2 * this.radius_g * a2) * s2 - 4 * e2 * this.C) < 0)
        return t2.x = Number.NaN, t2.y = Number.NaN, t2;
      r2 = (-s2 - Math.sqrt(i2)) / (2 * e2), a2 = this.radius_g + r2 * a2, n2 *= r2, o2 *= r2, t2.x = Math.atan2(n2, a2), t2.y = Math.atan(o2 * Math.cos(t2.x) / a2);
    }
    return t2.x = t2.x + this.long0, t2;
  }
  var wa = { init: ga, forward: Ma, inverse: xa, names: ["Geostationary Satellite View", "Geostationary_Satellite", "geos"] }, Sa = 1.340264, Ca = -0.081106, Ea = 893e-6, Pa = 3796e-6, ba = Math.sqrt(3) / 2;
  function Aa() {
    this.es = 0, this.long0 = void 0 !== this.long0 ? this.long0 : 0;
  }
  function va(t2) {
    var e2 = ft(t2.x - this.long0), s2 = t2.y, i2 = Math.asin(ba * Math.sin(s2)), r2 = i2 * i2, a2 = r2 * r2 * r2;
    return t2.x = e2 * Math.cos(i2) / (ba * (Sa + 3 * Ca * r2 + a2 * (7 * Ea + 9 * Pa * r2))), t2.y = i2 * (Sa + Ca * r2 + a2 * (Ea + Pa * r2)), t2.x = this.a * t2.x + this.x0, t2.y = this.a * t2.y + this.y0, t2;
  }
  function Ta(t2) {
    t2.x = (t2.x - this.x0) / this.a, t2.y = (t2.y - this.y0) / this.a;
    var e2, s2, i2, r2, a2 = 1e-9, n2 = 12, o2 = t2.y;
    for (r2 = 0; r2 < n2 && (o2 -= i2 = (o2 * (Sa + Ca * (e2 = o2 * o2) + (s2 = e2 * e2 * e2) * (Ea + Pa * e2)) - t2.y) / (Sa + 3 * Ca * e2 + s2 * (7 * Ea + 9 * Pa * e2)), !(Math.abs(i2) < a2)); ++r2)
      ;
    return s2 = (e2 = o2 * o2) * e2 * e2, t2.x = ba * t2.x * (Sa + 3 * Ca * e2 + s2 * (7 * Ea + 9 * Pa * e2)) / Math.cos(o2), t2.y = Math.asin(Math.sin(o2) / ba), t2.x = ft(t2.x + this.long0), t2;
  }
  var Ia = { init: Aa, forward: va, inverse: Ta, names: ["eqearth", "Equal Earth", "Equal_Earth"] }, za = 1e-10;
  function Oa() {
    var t2;
    if (this.phi1 = this.lat1, Math.abs(this.phi1) < za)
      throw new Error();
    this.es ? (this.en = ns(this.es), this.m1 = os(this.phi1, this.am1 = Math.sin(this.phi1), t2 = Math.cos(this.phi1), this.en), this.am1 = t2 / (Math.sqrt(1 - this.es * this.am1 * this.am1) * this.am1), this.inverse = Ga, this.forward = Na) : (Math.abs(this.phi1) + za >= l ? this.cphi1 = 0 : this.cphi1 = 1 / Math.tan(this.phi1), this.inverse = La, this.forward = Ra);
  }
  function Na(t2) {
    var e2, s2, i2, r2 = ft(t2.x - (this.long0 || 0)), a2 = t2.y;
    return e2 = this.am1 + this.m1 - os(a2, s2 = Math.sin(a2), i2 = Math.cos(a2), this.en), s2 = i2 * r2 / (e2 * Math.sqrt(1 - this.es * s2 * s2)), t2.x = e2 * Math.sin(s2), t2.y = this.am1 - e2 * Math.cos(s2), t2.x = this.a * t2.x + (this.x0 || 0), t2.y = this.a * t2.y + (this.y0 || 0), t2;
  }
  function Ga(t2) {
    var e2, s2, i2, r2;
    if (t2.x = (t2.x - (this.x0 || 0)) / this.a, t2.y = (t2.y - (this.y0 || 0)) / this.a, s2 = ps(t2.x, t2.y = this.am1 - t2.y), r2 = cs(this.am1 + this.m1 - s2, this.es, this.en), (e2 = Math.abs(r2)) < l)
      e2 = Math.sin(r2), i2 = s2 * Math.atan2(t2.x, t2.y) * Math.sqrt(1 - this.es * e2 * e2) / Math.cos(r2);
    else {
      if (!(Math.abs(e2 - l) <= za))
        throw new Error();
      i2 = 0;
    }
    return t2.x = ft(i2 + (this.long0 || 0)), t2.y = mi(r2), t2;
  }
  function Ra(t2) {
    var e2, s2, i2 = ft(t2.x - (this.long0 || 0)), r2 = t2.y;
    return s2 = this.cphi1 + this.phi1 - r2, Math.abs(s2) > za ? (t2.x = s2 * Math.sin(e2 = i2 * Math.cos(r2) / s2), t2.y = this.cphi1 - s2 * Math.cos(e2)) : t2.x = t2.y = 0, t2.x = this.a * t2.x + (this.x0 || 0), t2.y = this.a * t2.y + (this.y0 || 0), t2;
  }
  function La(t2) {
    var e2, s2;
    t2.x = (t2.x - (this.x0 || 0)) / this.a, t2.y = (t2.y - (this.y0 || 0)) / this.a;
    var i2 = ps(t2.x, t2.y = this.cphi1 - t2.y);
    if (s2 = this.cphi1 + this.phi1 - i2, Math.abs(s2) > l)
      throw new Error();
    return e2 = Math.abs(Math.abs(s2) - l) <= za ? 0 : i2 * Math.atan2(t2.x, t2.y) / Math.cos(s2), t2.x = ft(e2 + (this.long0 || 0)), t2.y = mi(s2), t2;
  }
  var $a = { init: Oa, names: ["bonne", "Bonne (Werner lat_1=90)"] };
  function Va(t2) {
    t2.Proj.projections.add(_s), t2.Proj.projections.add(Ps), t2.Proj.projections.add(vs), t2.Proj.projections.add(Vs), t2.Proj.projections.add(ks), t2.Proj.projections.add(Ys), t2.Proj.projections.add(Js), t2.Proj.projections.add(ii), t2.Proj.projections.add(oi), t2.Proj.projections.add(Mi), t2.Proj.projections.add(Oi), t2.Proj.projections.add(Vi), t2.Proj.projections.add(Bi), t2.Proj.projections.add(Yi), t2.Proj.projections.add(Zi), t2.Proj.projections.add(sr), t2.Proj.projections.add(nr), t2.Proj.projections.add(lr), t2.Proj.projections.add(pr), t2.Proj.projections.add(Mr), t2.Proj.projections.add(Cr), t2.Proj.projections.add(vr), t2.Proj.projections.add(Rr), t2.Proj.projections.add(qr), t2.Proj.projections.add(Yr), t2.Proj.projections.add(oa), t2.Proj.projections.add(ua), t2.Proj.projections.add(ya), t2.Proj.projections.add(wa), t2.Proj.projections.add(Ia), t2.Proj.projections.add($a);
  }
  return we.defaultDatum = "WGS84", we.Proj = ee, we.WGS84 = new we.Proj("WGS84"), we.Point = Ye, we.toPoint = _e, we.defs = rt, we.nadgrid = Dt, we.transform = ye, we.mgrs = Ie, we.version = "2.17.0", Va(we), we;
}();
var proj4 = proj4Src.exports;
let globalId = 1;
const _inputArray = new Array(2);
class GenericDefinedProjection extends Projection {
  constructor(t, e, s) {
    super(), t || (t = "custom_" + globalId++), this._name = t, this._parameters = e, proj4.defs(this._name) || proj4.defs(this._name, e), s && s.isBox3 && (this._geoBoundingBox = s);
  }
  projectCoordinate(t, e, s) {
    _inputArray[0] = t.x, _inputArray[1] = t.y;
    const i = this.geoBoundingBox;
    _inputArray[0] < i.min.x && (_inputArray[0] = i.min.x), _inputArray[0] > i.max.x && (_inputArray[0] = i.max.x), _inputArray[1] < i.min.y && (_inputArray[1] = i.min.y), _inputArray[1] > i.max.y && (_inputArray[1] = i.max.y);
    const r = proj4("EPSG:4326", this.name, _inputArray);
    if (e || (e = new Vector3$1()), s) {
      const s2 = this.projectedBoundingBox;
      e.x = extendProjectCoordinate(t.x, r[0], i.max.x, s2.max.x), e.y = extendProjectCoordinate(t.y, r[1], i.max.y, s2.max.y);
    } else
      e.x = r[0], e.y = r[1];
    return e.z = t.z, e;
  }
  unprojectCoordinate(t, e, s) {
    const i = this.projectedBoundingBox;
    _inputArray[0] = t.x, _inputArray[1] = t.y, _inputArray[0] < i.min.x && (_inputArray[0] = i.min.x), _inputArray[0] > i.max.x && (_inputArray[0] = i.max.x), _inputArray[1] < i.min.y && (_inputArray[1] = i.min.y), _inputArray[1] > i.max.y && (_inputArray[1] = i.max.y);
    const r = proj4(this.name, "EPSG:4326", _inputArray);
    if (e || (e = new Vector3$1()), s) {
      const s2 = this.geoBoundingBox;
      e.x = extendUnprojectCoordinate(t.x, r[0], s2.max.x, i.max.x), e.y = extendUnprojectCoordinate(t.y, r[1], s2.max.y, i.max.y);
    } else
      e.x = r[0], e.y = r[1];
    return e.z = t.z, e;
  }
  get name() {
    return this._name;
  }
}
const _cache = {}, projectionDefs = { "EPSG:5070": { parameters: "+proj=aea +lat_0=23 +lon_0=-96 +lat_1=29.5 +lat_2=45.5 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs", projectBoundingBoxMethod: projectBoundingBoxMethods.FOUR_CORNERS_WITH_EQUATOR, geoBoundingBox: [[-172.54, 23.81, 0], [-47.74, 86.46, 0]] }, "EPSG:8857": { parameters: "+proj=eqearth +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs +type=crs", projectBoundingBoxMethod: projectBoundingBoxMethods.FOUR_CORNERS_WITH_EQUATOR } };
for (let t = 1; t <= 60; t++) {
  let e = 6 * (t - 1) - 180, s = 6 * t - 180;
  e -= 12, s += 12, e < -180 && (e = -180), s > 180 && (s = 180), projectionDefs[`EPSG:${32600 + t}`] = { projectBoundingBoxMethod: projectBoundingBoxMethods.FOUR_CORNERS_WITH_EQUATOR, geoBoundingBox: [[e, -80, 0], [s, 84, 0]] }, projectionDefs[`EPSG:${32700 + t}`] = { projectBoundingBoxMethod: projectBoundingBoxMethods.FOUR_CORNERS_WITH_EQUATOR, geoBoundingBox: [[e, -80, 0], [s, 84, 0]] };
}
for (let t = 0; t < 11; t++) {
  let e = t + 13, s = 6 * e - 3, i = 1e6 * e + 5e5;
  projectionDefs[`EPSG:${4491 + t}`] = { parameters: `+proj=tmerc +lat_0=0 +lon_0=${s} +k=1 +x_0=${i} +y_0=0 +ellps=GRS80 +units=m +no_defs +type=crs`, projectBoundingBoxMethod: projectBoundingBoxMethods.FOUR_CORNERS_WITH_EQUATOR, geoBoundingBox: [[s - 3, 3, 0], [s + 3, 54, 0]] }, projectionDefs[`EPSG:${4502 + t}`] = { parameters: `+proj=tmerc +lat_0=0 +lon_0=${s} +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs +type=crs`, projectBoundingBoxMethod: projectBoundingBoxMethods.FOUR_CORNERS_WITH_EQUATOR, geoBoundingBox: [[s - 3, 3, 0], [s + 3, 54, 0]] }, e = 25 + 2 * t, s = 3 * e, i = 1e6 * e + 5e5, projectionDefs["EPSG:" + (4513 + 2 * t)] = { parameters: `+proj=tmerc +lat_0=0 +lon_0=${s} +k=1 +x_0=${i} +y_0=0 +ellps=GRS80 +units=m +no_defs +type=crs`, projectBoundingBoxMethod: projectBoundingBoxMethods.FOUR_CORNERS_WITH_EQUATOR, geoBoundingBox: [[s - 1.5, 3, 0], [s + 1.5, 54, 0]] }, projectionDefs["EPSG:" + (4534 + 2 * t)] = { parameters: `+proj=tmerc +lat_0=0 +lon_0=${s} +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs +type=crs`, projectBoundingBoxMethod: projectBoundingBoxMethods.FOUR_CORNERS_WITH_EQUATOR, geoBoundingBox: [[s - 1.5, 3, 0], [s + 1.5, 54, 0]] }, e = 25 + 2 * t + 1, t < 10 && (s = 3 * e, i = 1e6 * e + 5e5, projectionDefs["EPSG:" + (4513 + 2 * t + 1)] = { parameters: `+proj=tmerc +lat_0=0 +lon_0=${s} +k=1 +x_0=${i} +y_0=0 +ellps=GRS80 +units=m +no_defs +type=crs`, projectBoundingBoxMethod: projectBoundingBoxMethods.FOUR_CORNERS_WITH_EQUATOR, geoBoundingBox: [[s - 1.5, 3, 0], [s + 1.5, 54, 0]] }, projectionDefs["EPSG:" + (4534 + 2 * t + 1)] = { parameters: `+proj=tmerc +lat_0=0 +lon_0=${s} +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs +type=crs`, projectBoundingBoxMethod: projectBoundingBoxMethods.FOUR_CORNERS_WITH_EQUATOR, geoBoundingBox: [[s - 1.5, 3, 0], [s + 1.5, 54, 0]] });
}
const normalizeProjectionName = (t) => "EPSG:900913" === (t = t.toUpperCase().trim()) ? PROJECTION_WEB_MERCATOR : "GLOBE" === t || "ECEF" === t ? PROJECTION_ECEF : t, getProjection = (t) => {
  if (t = normalizeProjectionName(t), !_cache[t])
    switch (t) {
      case PROJECTION_WEB_MERCATOR:
        _cache[t] = new WebMercatorProjection();
        break;
      case PROJECTION_ECEF:
        _cache[t] = new ECEFProjection();
        break;
      case PROJECTION_BD_MERCATOR:
        _cache[t] = new BaiduMercatorProjection();
        break;
      case PROJECTION_GEO:
        _cache[t] = new GeoProjection();
        break;
      case PROJECTION_SCREEN_PIXEL:
        _cache[t] = new ScreenPixelProjection();
        break;
      default:
        let e = null;
        if (projectionDefs[t]) {
          const s = projectionDefs[t];
          let i = null;
          if (s.geoBoundingBox) {
            const t2 = s.geoBoundingBox;
            i = new Box3(new Vector3$1(t2[0][0], t2[0][1], t2[0][2] || 0), new Vector3$1(t2[1][0], t2[1][1], t2[1][2] || 0));
          }
          e = new GenericDefinedProjection(t, s.parameters, i), s.projectBoundingBoxMethod && (e.projectBoundingBoxMethod = s.projectBoundingBoxMethod);
        }
        if (!e)
          throw new Error(`Unsupported projection: ${t}`);
        _cache[t] = e;
    }
  return _cache[t];
}, computeNormals = (t, e = 3, s = 0) => {
  const { vertices: i, indices: r } = t, a = i.length / e, n = new Array(3 * a).fill(0), o = new Array(a).fill(0);
  for (let t2 = 0; t2 < r.length; t2 += 3) {
    const a2 = r[t2], h = r[t2 + 1], c = r[t2 + 2], l = i[a2 * e + s], u = i[a2 * e + s + 1], d = i[a2 * e + s + 2], _ = i[h * e + s] - l, m = i[h * e + s + 1] - u, p = i[h * e + s + 2] - d, f = i[c * e + s] - l, y = i[c * e + s + 1] - u, g = i[c * e + s + 2] - d, M = m * g - p * y, x = p * f - _ * g, w = _ * y - m * f;
    n[3 * a2] += M, n[3 * a2 + 1] += x, n[3 * a2 + 2] += w, o[a2]++, n[3 * h] += M, n[3 * h + 1] += x, n[3 * h + 2] += w, o[h]++, n[3 * c] += M, n[3 * c + 1] += x, n[3 * c + 2] += w, o[c]++;
  }
  for (let t2 = 0; t2 < a; t2++) {
    const e2 = o[t2];
    if (e2 > 0) {
      let s2 = n[3 * t2] / e2, i2 = n[3 * t2 + 1] / e2, r2 = n[3 * t2 + 2] / e2;
      const a2 = Math.sqrt(s2 * s2 + i2 * i2 + r2 * r2);
      if (a2 > 0) {
        const t3 = 1 / a2;
        s2 *= t3, i2 *= t3, r2 *= t3;
      } else
        s2 = 0, i2 = 0, r2 = 1;
      n[3 * t2] = s2, n[3 * t2 + 1] = i2, n[3 * t2 + 2] = r2;
    }
  }
  t.normals = n;
}, createGroundTileMesh = (t, e, s = true) => {
  const { vertices: i, uvs: r, indices: a } = subdivideVertices([-0.5, -0.5, 0, -0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, -0.5, 0], [0, 2, 1, 0, 3, 2], [0, 0, 0, 1, 1, 1, 1, 0], t);
  projectVertices(i, t);
  const n = { vertices: i, uvs: r, indices: a };
  if (e) {
    const t2 = i.length / 3;
    for (const s2 of Object.keys(e)) {
      const i2 = e[s2], r2 = Array.isArray(i2), a2 = r2 ? i2.length : 1, o = [];
      if (r2)
        for (let e2 = 0; e2 < t2; e2++)
          for (let t3 = 0; t3 < a2; t3++)
            o.push(i2[t3]);
      else
        for (let e2 = 0; e2 < t2; e2++)
          o.push(i2);
      n[s2] = o;
    }
  }
  return s && computeNormals(n), n;
}, _pointIn = new Vector3$1(), _pointOut = new Vector3$1(), _vector = new Vector3$1(), _normal = new Vector3$1(), _projectedStart = [0, 0, 0], _projectedEnd = [0, 0, 0], _center = [0, 0, 0];
function sRGBToLinear(t) {
  return t < 0.04045 ? 0.0773993808 * t : Math.pow(0.9478672986 * t + 0.0521327014, 2.4);
}
function getColorArr(t) {
  return [sRGBToLinear((255 & t) / 255), sRGBToLinear((t >> 8 & 255) / 255), sRGBToLinear((t >> 16 & 255) / 255), (t >> 24 & 255) / 255];
}
function getColorRgba(t) {
  return [255 * sRGBToLinear((255 & t) / 255), 255 * sRGBToLinear((t >> 8 & 255) / 255), 255 * sRGBToLinear((t >> 16 & 255) / 255), (t >> 24 & 255) / 255];
}
let ATTACH_SCALE = 1.674581061974957;
const MERCATOR_LENGTH = 200375083427892e-7, POI_TYPE = 3, LINK_TYPE = 4, POLY_TYPE = 7, HREGION_TYPE = 8, GAOQING_ROAD_TYPE = 15, GAOQING_LINE_TYPE = 16, GAOQING_ARROW_TYPE = 18, TEXTURE_TYPE = 19, GAOQING_GRADIENT_TYPE = 20, POINT_STYLE = 0, POINT_TEXT_STYLE = 1, LINE_STYLE = 3, POLYGON_STYLE = 4, POLYGON3D_STYLE = 5;
let POI_ICON_DIR_CENTER = 4;
const LAND_OFFSETZ = -1e-3, LAYER_INDEX_DELTA = 1e-4, DELTA = 1e-5, EARTH_MERCATOR_LENGTH = 2 * MERCATOR_LENGTH, webMercatorTileSizeMap = {};
let currentTileSize = EARTH_MERCATOR_LENGTH;
for (let t = 0; t <= 21; t++)
  webMercatorTileSizeMap[t] = currentTileSize, currentTileSize /= 2;
const bdMercatorTileSizeMap = { 3: 8388608, 5: 4194304, 7: 1048576, 9: 262144, 10: 65536, 12: 32768, 15: 4096, 17: 2048, 19: 512 }, bdTileMaxValue = { 3: 256, 5: 512, 7: 512, 9: 512, 10: 256, 12: 512, 15: 512, 17: 1024, 19: 1024 }, binaryCache = { 0: "00000000", 16: "00010000", 32: "00100000", 48: "00110000", 64: "01000000", 96: "01100000" };
function isVisible(t, e) {
  let s;
  binaryCache[t] || (s = t.toString(2), s.length < 8 && (s = new Array(8 - s.length + 1).join("0") + s), binaryCache[t] = s), s = binaryCache[t];
  const i = e.fetchOptions.startZ;
  let r = e.z;
  return r > 20 && (r = 20), "1" === s[r - i];
}
function getTileMaxValueByZ(t, e) {
  let s = 1;
  return e.sourceProjectionName === PROJECTION_BD_MERCATOR ? s = 100 * bdTileMaxValue[e.fetchOptions.baseZ] : (s = 102400, self.isAttach && (s = 61149.62262814087)), s;
}
function getTileSizeByZ(t, e) {
  const s = e.fetchOptions.baseZ;
  return e.sourceProjectionName === PROJECTION_BD_MERCATOR ? bdMercatorTileSizeMap[s] : webMercatorTileSizeMap[s] * ATTACH_SCALE;
}
function normalizeVertex(t, e, s, i, r = 0, a) {
  return a || (a = t), a[r] = t[r] / (e / 100) - 0.5, a[r + 1] = t[r + 1] / (e / 100) - 0.5, a[r + 2] = t[r + 2], self.isAttach && (a[r] < s && (a[r] = -0.5), a[r] > i && (a[r] = 0.5), a[r + 1] < s && (a[r + 1] = -0.5), a[r + 1] > i && (a[r + 1] = 0.5)), a;
}
function mergePrimitives(t) {
  const e = {};
  if (t.polygons && t.polygons.length > 0 && (e.polygon = mergePolygons(t.polygons)), t.polygonOpacitys && t.polygonOpacitys.length > 0 && (e.polygonOpacity = mergePolygons(t.polygonOpacitys, { isColor4: true })), t.bgs && t.bgs.length > 0 && (e.bg = mergePolygons(t.bgs)), t.lines && t.lines.length > 0) {
    let s = {}, i = {}, r = {}, a = [], n = false, o = false, h = false;
    for (let e2 = 0; e2 < t.lines.length; e2++) {
      const c = t.lines[e2], l = c.fillTextureStyle;
      if (l) {
        const t2 = l.fillTexture, e3 = l.isSingle;
        c.isGaoQing ? (h = true, r[t2] || (r[t2] = []), r[t2].push(c)) : e3 ? (o = true, i[t2] || (i[t2] = []), i[t2].push(c)) : (n = true, s[t2] || (s[t2] = []), s[t2].push(c));
      } else
        a.push(c);
    }
    e.line = mergePolygons(a, { isLine: true, isColor4: true }), n && (e.dashLine = {});
    for (let t2 in s)
      s.hasOwnProperty(t2) && (e.dashLine[t2] = mergePolygons(s[t2], { isLine: true, isColor4: true, isDashLine: true }));
    o && (e.textureLine = {});
    for (let t2 in i)
      i.hasOwnProperty(t2) && (e.textureLine[t2] = mergePolygons(i[t2], { isLine: true, isColor4: true, isDashLine: true, isTextureLine: true }));
    h && (e.gaoqingLine = {});
    for (let t2 in r)
      r.hasOwnProperty(t2) && (e.gaoqingLine[t2] = mergePolygons(r[t2], { isLine: true, isColor4: true, isDashLine: true }));
  }
  return t.polygon3ds && t.polygon3ds.length > 0 && (e.polygon3d = mergePolygons(t.polygon3ds)), t.building3ds && t.building3ds.length > 0 && (e.building3d = mergePolygons(t.building3ds, { isBuilding: true })), t.arrows && t.arrows.length > 0 && (e.arrow = mergePolygons(t.arrows, { isArrow: true })), t.pois && t.pois.length > 0 && (e.poi = t.pois), e;
}
function mergePolygons(t, e = {}) {
  const s = [], i = [];
  let r = null, a = null, n = null, o = null, h = null, c = null, l = null, u = null, d = null, _ = null, m = null, p = null, f = 0, y = 0;
  for (let g = 0; g < t.length; g++)
    if (r = t[g], r.normals || computeNormals(r), a = r.vertices, n = r.normals, o = r.flatNormals, h = r.uvs, c = r.diffs, l = r.indices, u = r.colors, d = r.layerIndices, _ = r.widths, p = r.totalLengths, m = r.heightAndConcaves, l && l.length) {
      for (let t2 = 0, i2 = a.length - 2; t2 < i2; t2 += 3)
        s.push(a[t2], a[t2 + 1], a[t2 + 2]), e.isArrow ? (f = t2 / 3 * 2, s.push(o[t2], o[t2 + 1], o[t2 + 2]), s.push(h[f], h[f + 1]), s.push(c[t2], c[t2 + 1], c[t2 + 2])) : (s.push(n[t2], n[t2 + 1], n[t2 + 2]), e.isColor4 ? (f = t2 / 3 * 4, s.push(u[f], u[f + 1], u[f + 2], u[f + 3])) : s.push(u[t2], u[t2 + 1], u[t2 + 2])), e.isBuilding ? (f = t2 / 3 * 2, s.push(m[f], m[f + 1])) : s.push(d[t2 / 3]), e.isLine && (f = t2 / 3 * 2, s.push(_[t2 / 3]), e.isDashLine && s.push(h[f], h[f + 1]), e.isTextureLine && s.push(p[t2 / 3]));
      for (let t2 = 0, e2 = l.length; t2 < e2; t2++)
        i.push(l[t2] + y);
      y += a.length / 3;
    }
  return { attributes: new Float32Array(s), indices: new Uint32Array(i) };
}
self.addEventListener("message", (t) => {
  const e = t.data, { tileKey: s, type: i } = e;
  "requestTile" === i ? self.handleRequestTile(e) : "changeStyle" === i ? self.handleChangeStyle(e) : "changeIconSetInfo" === i ? self.handleChangeIconSetInfo(e) : "initCoordTransformer" === i ? CoordTransformer.deserialize(e.data) : console.log(e);
}), self.handleRequestTile = async (t) => {
  const { tileKey: e, fetchOptions: s = {}, workerOptions: i, url: r, z: a, sourceProjectionName: n, targetProjectionName: o, id: h } = t;
  t.sourceProjection = getProjection(n), t.targetProjection = getProjection(o);
  const c = o === PROJECTION_WEB_MERCATOR && n === PROJECTION_WEB_MERCATOR || o === PROJECTION_BD_MERCATOR && n === PROJECTION_BD_MERCATOR;
  t.isNormalized = c;
  let l = null, u = 0;
  i && (self.displayOptions = i.displayOptions, self.zIndex = i.height, i.isAttach && (self.isAttach = !!i.isAttach, ATTACH_SCALE = 1));
  try {
    let e2 = await reFetch(r, { responseType: "arraybuffer", ...s }).then((t2) => t2.arrayBuffer());
    const i2 = decodeBlockUnit(e2), a2 = { arrows: [], polygons: [], polygonOpacitys: [], lines: [], polygon3ds: [], building3ds: [], pois: [], bgs: [] };
    u = parseGeoLayers(i2, a2, t), l = mergePrimitives(a2);
  } catch (t2) {
    console.warn(t2), l = {};
  }
  let d = [];
  if (l.polygon && d.push(l.polygon.attributes.buffer, l.polygon.indices.buffer), l.line && d.push(l.line.attributes.buffer, l.line.indices.buffer), l.polygon3d && d.push(l.polygon3d.attributes.buffer, l.polygon3d.indices.buffer), l.building3d && d.push(l.building3d.attributes.buffer, l.building3d.indices.buffer), l.arrow && d.push(l.arrow.attributes.buffer, l.arrow.indices.buffer), l.dashLine) {
    const t2 = Object.keys(l.dashLine);
    for (let e2 = 0; e2 < t2.length; e2++) {
      const s2 = l.dashLine[t2[e2]];
      d.push(s2.attributes.buffer, s2.indices.buffer);
    }
  }
  if (l.textureLine) {
    const t2 = Object.keys(l.textureLine);
    for (let e2 = 0; e2 < t2.length; e2++) {
      const s2 = l.textureLine[t2[e2]];
      d.push(s2.attributes.buffer, s2.indices.buffer);
    }
  }
  if (l.gaoqingLine) {
    const t2 = Object.keys(l.gaoqingLine);
    for (let e2 = 0; e2 < t2.length; e2++) {
      const s2 = l.gaoqingLine[t2[e2]];
      d.push(s2.attributes.buffer, s2.indices.buffer);
    }
  }
  l.maxLayerIndex = u, self.postMessage({ type: "responseTile", tileKey: e, content: l, isNormalized: c, id: h }, d);
};
let layerIndex = 0;
function parseGeoLayers(t, e, s) {
  const i = self.displayOptions || {}, r = false === i.base, a = false === i.link, n = false === i.building, o = false === i.poi, h = true === i.flat, c = t.geolayer, l = e.polygons, u = e.polygonOpacitys, d = e.polygon3ds, _ = e.lines, m = e.building3ds, p = e.pois, f = e.arrows, y = Math.floor(s.useZoom) || s.z;
  let g = 0, M = 0, x = null, w = null, S = null, C = null, E = null;
  layerIndex = 20 * LAYER_INDEX_DELTA;
  const P = s.z < 9 ? getStyleConfig(M, 1522, y, POLYGON_STYLE, s) : getStyleConfig(M, 72, y, POLYGON_STYLE, s);
  !r && P && l.push(createBgPolygon(P, s)), layerIndex += 1 * LAYER_INDEX_DELTA, c.sort((t2, e2) => t2.rank - e2.rank);
  for (const t2 of c) {
    M = t2.catalogType, g = t2.rank;
    const e2 = t2.arrowp;
    if (M === GAOQING_ARROW_TYPE && e2) {
      const e3 = createArrow(t2, y, s);
      e3 && (e3.rank = g, f.push(e3), layerIndex += LAYER_INDEX_DELTA);
      continue;
    }
    const i2 = t2.geoobjectsetSet;
    if (!Array.isArray(i2))
      continue;
    let c2 = [];
    for (const t3 of i2) {
      if (!Array.isArray(t3.geoObjectSet))
        continue;
      if (1522 === t3.styleId && s.z < 9)
        continue;
      let e3 = null;
      if (r || M !== POLY_TYPE && M !== GAOQING_ROAD_TYPE)
        if (a || M !== GAOQING_GRADIENT_TYPE)
          if (a || M !== TEXTURE_TYPE)
            if (a || M !== LINK_TYPE)
              if (M === GAOQING_LINE_TYPE)
                e3 = getStyleConfig(M, t3.styleId, y, LINE_STYLE, s);
              else if (n || M !== HREGION_TYPE) {
                if (!o && M === POI_TYPE) {
                  const i3 = getStyleConfig(M, t3.styleId, y, POINT_STYLE, s), r2 = getStyleConfig(M, t3.styleId, y, POINT_TEXT_STYLE, s);
                  (r2 && 0 !== r2.length || i3 && !(i3.length > 0)) && (e3 = { stylePt: i3, styleText: r2 });
                }
              } else
                e3 = getStyleConfig(M, t3.styleId, y, POLYGON3D_STYLE, s);
            else
              e3 = getStyleConfig(M, t3.styleId, y, LINE_STYLE, s);
          else
            e3 = getStyleConfig(M, t3.styleId, y, LINE_STYLE, s);
        else {
          const i3 = t3.geoObjectSet, r2 = (i3 && i3[0]).gradientStyleId, a2 = getStyleConfig(M, r2[0], y, POLYGON_STYLE, s), n2 = getStyleConfig(M, r2[1], y, POLYGON_STYLE, s);
          a2 && n2 && (e3 = { startPtStyle: a2, endPtStyle: n2 });
        }
      else
        e3 = getStyleConfig(M, t3.styleId, y, POLYGON_STYLE, s);
      if (e3) {
        for (const i3 of t3.geoObjectSet)
          if ((M === POI_TYPE || i3.midPoints && i3.midPoints.length && i3.midPoints.length < 8e3) && isVisible(i3.tracer, s))
            if (r || M !== POLY_TYPE)
              if (M === TEXTURE_TYPE)
                S = createLine(i3, e3.fillColor, e3.fillWidth, { fillTexture: e3.fillTexture, isSingle: true }, s), S && (S.rank = g, _.push(S), layerIndex += LAYER_INDEX_DELTA);
              else if (a || M !== LINK_TYPE)
                if (r || M !== GAOQING_ROAD_TYPE)
                  if (M === GAOQING_LINE_TYPE)
                    S = createLine(i3, e3.fillColor, e3.fillWidth / 8, { isGaoQing: !h, fillTexture: e3.fillTexture, scale: 1.5 }, s), S && (S.isGaoQing = !h, S.rank = g, _.push(S), layerIndex += LAYER_INDEX_DELTA);
                  else if (n || M !== HREGION_TYPE)
                    if (a || M !== GAOQING_GRADIENT_TYPE) {
                      if (!o && M === POI_TYPE) {
                        if (!i3.name)
                          continue;
                        E = createPOI(i3, t3.styleId, s, e3), E && p.push(E);
                      }
                    } else
                      x = createGradientPolygon(i3, e3.startPtStyle, e3.endPtStyle, s), x && (x.rank = g, l.push(x), layerIndex += LAYER_INDEX_DELTA);
                  else
                    C = createBuilding3d(i3, e3.fillTop, e3.fillSide, s), C && (C.rank = g, m.push(C));
                else {
                  if (i3.border && i3.border.length > 0) {
                    c2.push({ geoObject: i3, styleConfig: e3 });
                    continue;
                  }
                  w = createPolygon(i3, e3.color, { isGaoQing: !h }, s), w && (w.rank = g, d.push(w), layerIndex += LAYER_INDEX_DELTA);
                }
              else
                e3.haveBorderLine && e3.borderColor[3] > 0 && !e3.fillTexture && (S = createLine(i3, e3.borderColor, e3.borderWidth / 2, void 0, s), S && (S.rank = g, _.push(S), layerIndex += LAYER_INDEX_DELTA)), S = createLine(i3, e3.fillColor, e3.fillWidth / 2, { fillTexture: e3.fillTexture }, s), S && (S.rank = g, _.push(S), layerIndex += LAYER_INDEX_DELTA);
            else {
              const t4 = e3.color[3] < 1;
              x = createPolygon(i3, e3.color, { isTransparent: t4 }, s), x && (x.rank = g, t4 ? u.push(x) : l.push(x), layerIndex += LAYER_INDEX_DELTA);
            }
      }
    }
    for (let t3 = 0; t3 < c2.length; t3++) {
      const { geoObject: e3, styleConfig: i3 } = c2[t3];
      for (let t4 = 0, r2 = e3.border.length; t4 < r2; t4++) {
        const r3 = e3.border[t4];
        r3.midPoints = e3.midPoints, r3.zvector = e3.zvector;
        const a2 = createLine(r3, i3.borderRgba, i3.borderWidth / 2, { isGaoQing: !h }, s);
        a2 && (a2.rank = g, _.push(a2), layerIndex += LAYER_INDEX_DELTA);
      }
    }
    let P2 = [], b = [];
    for (let t3 = 0; t3 < c2.length; t3++) {
      const { geoObject: e3, styleConfig: i3 } = c2[t3];
      if (w = createPolygon(e3, i3.color, { isGaoQing: !h, borderRgba: i3.borderRgba, isDelay: true }, s), w && w.delayObject) {
        const t4 = w.delayObject, e4 = w.object;
        P2.push(t4), b.push(e4);
      } else
        w && (w.rank = g, d.push(w), layerIndex += LAYER_INDEX_DELTA);
    }
    for (let t3 = 0; t3 < P2.length; t3++) {
      const e3 = P2[t3], s2 = e3.layerIndices;
      for (let t4 = 0; t4 < s2.length; t4++)
        s2[t4] = layerIndex;
      e3.rank = g, d.push(e3), layerIndex += LAYER_INDEX_DELTA;
    }
    for (let t3 = 0; t3 < b.length; t3++) {
      const e3 = b[t3], s2 = e3.layerIndices;
      for (let t4 = 0; t4 < s2.length; t4++)
        s2[t4] = layerIndex;
      e3.rank = g, d.push(e3), layerIndex += LAYER_INDEX_DELTA;
    }
  }
  if (t.labelp && false !== i.poiText) {
    let e2 = t.labelp;
    for (let t2 = 0; t2 < e2.length; t2++) {
      const i2 = e2[t2];
      let r2 = null;
      o || (r2 = getStyleConfig(POI_TYPE, i2.styleId, y, POINT_TEXT_STYLE, s)), r2 && createLabelPoi(p, i2, y, s, r2);
    }
  }
  return layerIndex;
}
function createArrow(t, e, s) {
  const i = t.arrowp, r = parseFeature(i.x), a = s.targetProjection, [n, o, h] = s.targetCenter, c = i.tracer, l = i.zvector, u = 1 / 256, d = -0.5 + u, _ = 0.5 - u;
  let m = getTileMaxValueByZ(s.z, s);
  const p = [], f = [], y = [], g = [], M = [], x = [], w = parseFeature(l, 1);
  let S = [];
  1 === w.length && w[0] ? (S = new Array(r.length), S.fill(w[0])) : S = w;
  for (let t2 = 0; t2 < r.length; t2++)
    r[t2][2] = S[t2] / ATTACH_SCALE;
  for (let t2 = 0, e2 = c.length; t2 < e2; t2++) {
    if (!isVisible(c[t2], s))
      continue;
    const e3 = r[2 * t2], i2 = r[2 * t2 + 1];
    _center[0] = (e3[0] + i2[0]) / 2, _center[1] = (e3[1] + i2[1]) / 2, _center[2] = (e3[2] + i2[2]) / 2;
    const l2 = _center[0] - e3[0], u2 = _center[1] - e3[1];
    _vector.set(l2, u2, 0), _normal.set(-u2, l2, 0);
    const w2 = x.length;
    if (_projectedStart[0] = e3[0], _projectedStart[1] = e3[1], _projectedStart[2] = e3[2], _projectedEnd[0] = i2[0], _projectedEnd[1] = i2[1], _projectedEnd[2] = i2[2], normalizeVertex(_projectedStart, m, d, _), projectVertices(_projectedStart, s, true, false), normalizeVertex(_projectedEnd, m, d, _), projectVertices(_projectedEnd, s, true, false), s.isNormalized) {
      _center[0] = (_projectedEnd[0] + _projectedStart[0]) / 2, _center[1] = (_projectedEnd[1] + _projectedStart[1]) / 2, _center[2] = (_projectedEnd[2] + _projectedStart[2]) / 2;
      const t3 = Math.hypot(_projectedEnd[0] - _projectedStart[0], _projectedEnd[1] - _projectedStart[1]);
      a.getProjectedSurfaceNormal(_vector.fromArray(_projectedStart), _normal), _vector.set(_projectedEnd[0] - _projectedStart[0], _projectedEnd[1] - _projectedStart[1], 0).normalize().multiplyScalar(t3), _normal.crossVectors(_normal, _vector).normalize().multiplyScalar(t3 / 2);
    } else {
      const t3 = Math.hypot(l2, u2);
      _center[0] = (_projectedEnd[0] + _projectedStart[0]) / 2 - n, _center[1] = (_projectedEnd[1] + _projectedStart[1]) / 2 - o, _center[2] = (_projectedEnd[2] + _projectedStart[2]) / 2 - h, a.getProjectedSurfaceNormal(_vector.fromArray(_projectedStart), _normal), _vector.set(_projectedEnd[0] - _projectedStart[0], _projectedEnd[1] - _projectedStart[1], _projectedEnd[2] - _projectedStart[2]).normalize().multiplyScalar(t3), _normal.crossVectors(_normal, _vector).normalize().multiplyScalar(t3 / 2);
    }
    p[p.length] = _center[0], p[p.length] = _center[1], p[p.length] = _center[2], y[y.length] = -_vector.x, y[y.length] = -_vector.y, y[y.length] = -_vector.z, M[M.length] = _normal.x, M[M.length] = _normal.y, M[M.length] = _normal.z, g[g.length] = 0.125, g[g.length] = 0.3125, x[x.length] = layerIndex, p[p.length] = _center[0], p[p.length] = _center[1], p[p.length] = _center[2], y[y.length] = -_vector.x, y[y.length] = -_vector.y, y[y.length] = -_vector.z, M[M.length] = -_normal.x, M[M.length] = -_normal.y, M[M.length] = -_normal.z, g[g.length] = 0.125, g[g.length] = 0.6875, x[x.length] = layerIndex, p[p.length] = _center[0], p[p.length] = _center[1], p[p.length] = _center[2], y[y.length] = _vector.x, y[y.length] = _vector.y, y[y.length] = _vector.z, M[M.length] = _normal.x, M[M.length] = _normal.y, M[M.length] = _normal.z, g[g.length] = 1, g[g.length] = 0.3125, x[x.length] = layerIndex, p[p.length] = _center[0], p[p.length] = _center[1], p[p.length] = _center[2], y[y.length] = _vector.x, y[y.length] = _vector.y, y[y.length] = _vector.z, M[M.length] = -_normal.x, M[M.length] = -_normal.y, M[M.length] = -_normal.z, g[g.length] = 1, g[g.length] = 0.6875, x[x.length] = layerIndex, f[f.length] = w2, f[f.length] = w2 + 1, f[f.length] = w2 + 2, f[f.length] = w2 + 2, f[f.length] = w2 + 1, f[f.length] = w2 + 3;
  }
  return { vertices: p, indices: f, flatNormals: M, instanceRotationMatrices: [], diffs: y, uvs: g, layerIndices: x };
}
function createLine(t, e, s, i = {}, r) {
  var _a;
  const a = t.midPoints, n = t.zvector, o = i.isGaoQing || false, h = i.indexOffset || 0, c = i.fillTexture, l = i.isSingle;
  let u = i.scale || 1;
  if (!a)
    return;
  const d = parseMidPoints(a, LAND_OFFSETZ, r);
  let _, m = null;
  if (o) {
    if (1 === n.length && n[0])
      m = new Array(a.length >> 1), m.fill(n[0]);
    else if (n.length > 1) {
      m = [];
      for (let t2 = h; t2 < n.length; t2++)
        m[t2] = n[t2] || 1;
    }
  }
  c && u > 1 && (_ = getIconInfo(c), _ && _[1] && (u = Math.max(_[1] / 7, 1)));
  let p = 0;
  /guojietianqiaojieti/.test(c) && (p = 0.04), /weidingguojie_guonei/.test(c) && (s *= 1.1);
  for (let t2 = 0; t2 < d.length; t2++)
    m && m[t2] && (d[t2][2] += p + m[t2] / 100 / ATTACH_SCALE);
  projectVertices(d, r, false, false);
  const f = lineToMesh(d, s, r, l, u);
  return f.colors = fillFlatArray(f.vertices.length / 3, [e[0], e[1], e[2], (_a = e[3]) != null ? _a : 1]), f.layerIndices = fillFlatArray(f.vertices.length / 3, [layerIndex]), c && (f.fillTextureStyle = { fillTexture: c, textureInfo: _, isSingle: l ? 1 : 0 }), f;
}
function tileNormalizedPositionToMeter(t, e, s) {
  const [i, r, a, n, o, h] = e.projectedBoundingBox, c = n - i, l = o - r;
  return s.x = i + (t.x + 0.5) * c, s.y = r + (t.y + 0.5) * l, s.z = t.z || 0, s;
}
function createBgPolygon(t, e) {
  const s = t.color;
  return createGroundTileMesh(e, { colors: [s[0], s[1], s[2]], layerIndices: [0] });
}
function getSubDivisionMaxLength(t) {
  if (t.targetProjectionName === t.sourceProjectionName)
    return 0;
  if (t.targetProjectionName === PROJECTION_ECEF)
    return 0.05;
  return 1 / Math.max(2, 16 - t.z);
}
function createPolygon(t, e, s = {}, i) {
  const r = t.midPoints;
  let a = t.indices;
  const n = t.zvector, o = s.isGaoQing || false, h = s.isDelay || false, c = s.isTransparent || false;
  if (!a || !r)
    return;
  const l = [], u = [], d = [], _ = [], m = [];
  let p = [], f = [], y = [], g = [], M = [];
  const x = l.length / 3;
  let w = parseMidPoints(r, 100 * LAND_OFFSETZ, i), S = false, C = false;
  if (o) {
    if (layerIndex += 1 * LAYER_INDEX_DELTA, 1 === n.length && n[0]) {
      S = true, n[0] < 0 && (C = true);
      for (let t2 = 0, e2 = w.length; t2 < e2; t2 += 1)
        w[t2][2] = n[0];
    } else if (n.length > 1) {
      S = true;
      for (let t2 = 0; t2 < n.length; t2++)
        n[t2] < 0 && (C = true), w[t2][2] = Math.max(n[t2], 0);
    }
  } else {
    const t2 = getSubDivisionMaxLength(i);
    if (t2 > 0) {
      const e2 = subdivideMesh(w, a, null, t2), s2 = e2.vertices;
      w = [];
      for (let t3 = 0, e3 = s2.length - 2; t3 < e3; t3 += 3)
        w.push([s2[t3], s2[t3 + 1], s2[t3 + 2]]);
      a = e2.indices;
    }
  }
  let E = null;
  for (let t2 = 0, s2 = w.length; t2 < s2; t2 += 1)
    E = w[t2], l.push(E[0], E[1], E[2]), d.push(0, 0, 1), c ? _.push(e[0], e[1], e[2], e[3] || 1) : _.push(e[0], e[1], e[2]), m.push(layerIndex);
  for (let t2 = 0, e2 = a.length; t2 < e2; t2++)
    u.push(x + a[t2]);
  h || (p = l, f = u, g = _, y = d, M = m);
  let P = S && !C;
  if (S && !C) {
    const t2 = s.borderRgba || e;
    let i2 = h ? 0 : l.length / 3;
    for (let e2 = 0, s2 = w.length; e2 < s2; e2 += 1) {
      E = w[e2];
      let r2 = E[2], a2 = r2 - 280;
      a2 < 0 && (a2 = 0), p.push(E[0], E[1], r2, E[0], E[1], a2), g.push(t2[0], t2[1], t2[2], t2[0], t2[1], t2[2]), M.push(layerIndex, layerIndex);
      let n2 = e2 === s2 - 1 ? 0 : e2 + 1, o2 = E[0], h2 = E[1], c2 = w[n2][0], l2 = w[n2][1], u2 = crossVectors3([0, 0, a2 - r2], [c2 - o2, l2 - h2, 0]);
      u2[0] || u2[1] || u2[2] || (u2 = [d[d.length - 3], d[d.length - 2], d[d.length - 1]]), y.push(u2[0], u2[1], u2[2], u2[0], u2[1], u2[2]);
      let _2 = false;
      o2 === c2 ? (Math.abs(o2 + 0.5) < DELTA || Math.abs(o2 - 0.5) < DELTA) && (_2 = true) : h2 === l2 && (Math.abs(h2 + 0.5) < DELTA || Math.abs(h2 - 0.5) < DELTA) && (_2 = true), _2 || (e2 === s2 - 1 ? f.push(i2 + 2 * e2, i2 + 2 * e2 + 1, i2, i2, i2 + 2 * e2 + 1, i2 + 1) : f.push(i2 + 2 * e2, i2 + 2 * e2 + 1, i2 + 2 * e2 + 2, i2 + 2 * e2 + 2, i2 + 2 * e2 + 1, i2 + 2 * e2 + 3));
    }
  }
  for (let t2 = 0; t2 < l.length; t2 += 3)
    l[t2 + 2] = l[t2 + 2] / 100 / ATTACH_SCALE;
  if (projectVertices(l, i), h && P) {
    for (let t2 = 0; t2 < p.length; t2 += 3)
      p[t2 + 2] = p[t2 + 2] / 100 / ATTACH_SCALE;
    projectVertices(p, i);
    return { delayObject: { vertices: p, indices: f, colors: g, layerIndices: M }, object: { vertices: l, indices: u, colors: _, layerIndices: m } };
  }
  return { vertices: l, indices: u, colors: _, layerIndices: m };
}
function createGradientPolygon(t, e, s, i) {
  const r = t.midPoints;
  let a = t.indices;
  const n = t.zvector, o = t.gradientPos;
  if (!a || !r)
    return;
  let h;
  if (1 === n.length && n[0])
    h = new Array(r.length / 2), h.fill(n[0]);
  else if (n.length > 1) {
    h = [];
    for (let t2 = 0; t2 < n.length; t2++)
      h[t2] = n[t2] || 1;
  }
  const c = [], l = [], u = [], d = [], _ = [], m = c.length / 3;
  let p = parseFeature(r);
  const f = 1 / 256, y = -0.5 + f, g = 0.5 - f;
  let M = getTileMaxValueByZ(i.z, i);
  const x = [o[0] / 100, o[1] / 100], w = [o[2] / 100, o[3] / 100], S = e.color, C = s.color, E = [w[0] - x[0], w[1] - x[1]], P = Math.sqrt(Math.pow(E[0], 2) + Math.pow(E[1], 2));
  for (let t2 = 0, e2 = p.length; t2 < e2; t2++) {
    const e3 = p[t2];
    let s2, i2;
    if (0 === E[0])
      s2 = x[0], i2 = e3[1];
    else {
      const t3 = -((x[0] - e3[0]) * E[0] + (x[1] - e3[1]) * E[1]) / (E[0] * E[0] + E[1] * E[1]);
      s2 = t3 * E[0] + x[0], i2 = t3 * E[1] + x[1];
    }
    let r2 = Math.sqrt(Math.pow(s2 - w[0], 2) + Math.pow(i2 - w[1], 2)) / P;
    x[0] < w[0] && s2 < x[0] || x[0] > w[0] && s2 > x[0] ? r2 = 1 : (x[0] < w[0] && s2 > w[0] || x[0] > w[0] && s2 < w[0]) && (r2 = 0);
    const a2 = r2 * S[0] + (1 - r2) * C[0], n2 = r2 * S[1] + (1 - r2) * C[1], o2 = r2 * S[2] + (1 - r2) * C[2];
    normalizeVertex(e3, M, y, g);
    const l2 = h ? h[t2] / 100 / ATTACH_SCALE : LAND_OFFSETZ;
    c.push(e3[0], e3[1], l2), d.push(a2, n2, o2), u.push(0, 0, 1), _.push(layerIndex);
  }
  for (let t2 = 0, e2 = a.length; t2 < e2; t2++)
    l.push(m + a[t2]);
  return projectVertices(c, i), { vertices: c, indices: l, normals: u, colors: d, layerIndices: _ };
}
function encodeConcave(t, e, s) {
  let i = 0;
  return t && (i |= 1), e && (i |= 2), s && (i |= 4), i;
}
function createBuilding3d(t, e, s, i) {
  const r = t.midPoints, a = t.indices, n = t.altitude / ATTACH_SCALE;
  if (!a || !r)
    return;
  const o = [], h = [], c = [], l = [], u = parseMidPoints(r, n + LAND_OFFSETZ, i);
  let d = null;
  for (let t2 = 0, s2 = u.length; t2 < s2; t2 += 1)
    d = u[t2], o.push(d[0], d[1], d[2]), c.push(e[0], e[1], e[2]), l.push(d[2], encodeConcave(false, false, false));
  for (let t2 = 0, e2 = a.length; t2 < e2; t2++)
    h.push(a[t2]);
  const _ = o.length / 3;
  for (let t2 = 0, e2 = isClosed(u) ? u.length - 1 : u.length; t2 < e2; t2 += 1) {
    let i2 = [u[t2][0], u[t2][1], LAND_OFFSETZ], r2 = [u[t2][0], u[t2][1], u[t2][2]], a2 = t2 + 1;
    t2 === e2 - 1 && (a2 = 0);
    let n2 = [u[a2][0], u[a2][1], LAND_OFFSETZ], d2 = [u[a2][0], u[a2][1], u[a2][2]], m = 0 === t2 ? e2 - 1 : t2 - 1, p = [u[m][0], u[m][1], LAND_OFFSETZ];
    o.push(i2[0], i2[1], i2[2], r2[0], r2[1], r2[2], n2[0], n2[1], n2[2], d2[0], d2[1], d2[2]), c.push(s[0], s[1], s[2], s[0], s[1], s[2], s[0], s[1], s[2], s[0], s[1], s[2]);
    let f = isAOConcaveAngle(p, i2, n2);
    0 === t2 ? l.push(0, encodeConcave(true, f, false), r2[2], encodeConcave(false, f, false)) : l.push(0, encodeConcave(true, f, true), r2[2], encodeConcave(false, f, true), 0, encodeConcave(true, f, false), r2[2], encodeConcave(false, f, false)), t2 === e2 - 1 && (f = isAOConcaveAngle(i2, n2, u[a2 + 1]), l.push(0, encodeConcave(true, f, true), r2[2], encodeConcave(false, f, true)));
    const y = _ + 4 * t2;
    h.push(y, y + 2, y + 3, y, y + 3, y + 1);
  }
  return projectVertices(o, i), { vertices: o, indices: h, colors: c, heightAndConcaves: l };
}
function getIconVertexData(t, e) {
  const s = getIconInfo(t);
  if (!s)
    return null;
  const i = s[0] / 2 * e, r = s[1] / 2 * e, a = Math.round(-i / 2), n = Math.round(-r / 2), o = a + i, h = n + r;
  return { vertex: [a, n, o, n, o, h, a, n, o, h, a, h], texcoord: null, width: i, height: r, iconType: t };
}
function getIconInfo(t) {
  if (!t)
    return null;
  if ("disekong" === t)
    return null;
  let e = self.iconSetInfo[t] || self.iconSetInfo["MapRes/" + t];
  return !e && t && t.charCodeAt(0) >= 48 && t.charCodeAt(0) <= 57 && (e = self.iconSetInfo["_" + t]), e;
}
function convertPOIPosition(t, e, s, i, r) {
  let a = Math.round(t / 100), n = Math.round(e / 100);
  const o = getTileSizeByZ(i.z, i);
  return _pointIn.x = a / o - 0.5, _pointIn.y = n / o - 0.5, _pointIn.z = s || 0, tileNormalizedPositionToMeter(_pointIn, i, _pointOut), i.isNormalized || (i.sourceProjection.unprojectCoordinate(_pointOut, _pointIn), i.sourceCoordType !== i.targetCoordType && CoordTransformer.transform(i.sourceCoordType, i.targetCoordType, _pointIn, _pointIn), i.targetProjection.projectCoordinate(_pointIn, _pointOut)), r[0] = _pointOut.x, r[1] = _pointOut.y, r[2] = _pointOut.z, r;
}
function createPOI(t, e, s, i) {
  const r = i.styleText, a = t.name, n = t.direction, o = s.workerOptions.displayOptions || {};
  let h, c, l = 0, u = 0, d = false;
  const _ = "" !== a && !!r && false !== o.poiText;
  if (i.stylePt) {
    let t2 = (i.stylePt.zoom || 100) / 100;
    h = i.stylePt.icon;
    const e2 = getIconInfo(h);
    d = !(n !== POI_ICON_DIR_CENTER || !_ || !e2), null === h || d ? e2 && (l = e2[0], u = e2[1]) : (c = getIconVertexData(h, t2), c && (l = c.width, u = c.height));
  }
  i = i.styleText;
  let m = [0, 0, 0];
  m = convertPOIPosition(t.posx, t.posy, self.zIndex, s, m);
  let p = null;
  return false !== o.poiIcon && (p = { icon: h, pos: c, size: [l, u], textDrawOnIcon: d }), { position: m, text: t.name, styleId: e, styleConfig: i, iconConfig: p, hasText: _, ...t };
}
function createLabelPoi(t, e, s, i, r) {
  const a = 100 * ATTACH_SCALE;
  let n = e.nameLen || e.name.split("").length;
  if (0 === n)
    return;
  let o = e.zvector, h = e.x, c = e.reverse, l = e.tracer, u = l.length, d = [o[0]], _ = Array.prototype.slice.call(h.slice(0, 2));
  for (let t2 = 2, e2 = 1; t2 < h.length; t2 += 2, e2++)
    _[t2] = _[t2 - 2] + h[t2], _[t2 + 1] = _[t2 - 1] + h[t2 + 1], 1 === o.length ? d[e2] = o[0] : o.length > 1 && (d[e2] = d[e2 - 1] + o[e2]);
  for (let s2 = 0; s2 < u; s2++) {
    let u2 = l[s2], m = c[s2];
    if (!isVisible(u2, i))
      continue;
    let p = s2 * n * 2;
    h = _.slice(p, p + 2 * n);
    let f = 0;
    o.length > 0 && (f = d[s2 * n] / a);
    let y = [0, 0, 0];
    y = convertPOIPosition(h[0], h[1], f + (self.zIndex || 0), i, y);
    let g = h[2 * (n - 1)] - h[0], M = h[2 * (n - 1) + 1] - h[1], x = Math.atan2(-M, -g) + Math.PI;
    1 === m && (x += Math.PI), t.push({ type: "labelp", position: y, text: e.name, rotateZ: x, styleConfig: r, hasText: true, ...e });
  }
}
function parseFeature(t, e) {
  e = e || 2;
  let s = new Array(e).fill(0);
  const i = [];
  for (let r = 0, a = t.length - (e - 1); r < a; r += e) {
    const a2 = [];
    for (let i2 = 0; i2 < e; i2++)
      s[i2] += t[r + i2], a2.push(s[i2] / 100);
    e > 1 ? i.push(a2) : i.push(a2[0]);
  }
  return i;
}
function parseMidPoints(t, e = 0, s) {
  const i = 1 / 256, r = -0.5 + i, a = 0.5 - i;
  let n = getTileMaxValueByZ(s.z, s), o = 0, h = 0, c = 0, l = 0;
  const u = [];
  for (let s2 = 0, i2 = t.length - 1; s2 < i2; s2 += 2)
    o += t[s2], h += t[s2 + 1], c = o / n - 0.5, l = h / n - 0.5, self.isAttach && (c < r && (c = -0.5), c > a && (c = 0.5), l < r && (l = -0.5), l > a && (l = 0.5)), u.push([c, l, e]);
  return u;
}
function getStyleConfig(t, e, s, i = POLYGON_STYLE, r) {
  const a = self.featureStyles[1], n = self.featureStyles[2];
  s += r.workerOptions.styleZoomOffset || 0, i === POINT_TEXT_STYLE && 9 === s && (s = 8);
  let o = a[s][0];
  if (!o)
    return;
  let h, c, l = o[e];
  if (l || i !== POINT_TEXT_STYLE && i !== POLYGON3D_STYLE || (o = a[s + 1] && a[s + 1][0], l = o && o[e]), !l)
    return;
  for (let e2 = 0; e2 < l.length; e2++) {
    if (h = l[e2], self.cachedStyles[`${t}_${i}_${h}`])
      return self.cachedStyles[`${t}_${i}_${h}`];
    if (c = n[i][h], c)
      break;
  }
  if (!c || 0 === c.length)
    return;
  let u = null;
  return i === POLYGON_STYLE ? u = { color: getColorArr(c[0]), borderRgba: getColorArr(c[1]), borderWidth: c[2], borderTexture: c[3], waterStyle: c[5], haloStyle: c[6], textureStyle: c[7], thickRgba: getColorArr(c[8]) } : i === LINE_STYLE ? u = { borderColor: getColorArr(c[0]), fillColor: getColorArr(c[1]), borderWidth: c[2], fillWidth: c[3], borderCap: c[4], fillCap: c[5], haveBorderLine: c[6], haveFillTexture: c[8], fillTexture: c[12] } : i === POLYGON3D_STYLE ? u = { filter: c[0], ratio: c[1], haveBorder: c[2], borderWidth: c[3], borderRgba: getColorArr(c[4]), fillTop: getColorArr(c[5]), fillSide: getColorArr(c[6]) } : i === POINT_TEXT_STYLE ? u = { fontRgba: getColorRgba(c[0]), haloRgba: getColorRgba(c[1]), backRgba: getColorRgba(c[2]), fontSize: c[3], haloSize: c[4], fontWeight: c[5], fontStyle: c[6], density: c[7] } : i === POINT_STYLE && (u = { rank: c[0], ucflag: c[1], icon: c[2], iconType: c[3], nineGG: c[4], density: c[5], zoom: c[6] }), h && (self.cachedStyles[`${t}_${i}_${h}`] = u), u;
}
function crossVectors3(t, e) {
  const s = [];
  return s[0] = t[1] * e[2] - t[2] * e[1], s[1] = t[2] * e[0] - t[0] * e[2], s[2] = t[0] * e[1] - t[1] * e[0], s;
}
self.handleChangeStyle = (t) => {
  self.featureStyles = t.featureStyles, self.cachedStyles = {};
}, self.handleChangeIconSetInfo = (t) => {
  self.iconSetInfo = t.iconSetInfo;
};
