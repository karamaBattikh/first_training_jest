import { renderHook, act } from "@testing-library/react-hooks";

import useToggle from ".";

test("toggleHook", () => {
  const { result } = renderHook(() => useToggle(false));
  expect(result.current[0]).toBeFalsy();
  act(() => result.current[1]());
  expect(result.current[1]).toBeTruthy();
  act(() => result.current[1]());
  expect(result.current[0]).toBeFalsy();
});
