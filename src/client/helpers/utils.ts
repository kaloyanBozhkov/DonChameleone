export const depthAccess = <T extends object>(depth: (string | number)[], obj: T): T => {
  try {
    if (depth.length === 0) return obj
    const latestVal = obj[depth[0] as keyof typeof obj] as T
    return depthAccess(depth.slice(1), latestVal)
  } catch (err) {
    console.error('depthAccess', err)
    return obj
  }
}

export const deleteAtDepth = <T extends object>(
  idx: number,
  depth: (string | number)[],
  obj: T
) => {
  try {
    const resp = depthAccess(depth, obj)
    if (Array.isArray(obj)) {
      ;(resp as T[]).splice(idx, 1)
    } else {
      delete resp[idx as keyof T]
    }
  } catch (err) {
    console.error('deleteAtDepth', err)
  }

  return obj
}
