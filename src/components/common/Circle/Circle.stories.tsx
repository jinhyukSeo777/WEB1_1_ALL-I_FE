import type { Meta, StoryObj } from "@storybook/react";
import Circle from "@/components/common/Circle/Circle";

const meta = {
  // 스토리북 경로 - 파일 경로와 동일하게 설정하는 것이 좋을 것 같습니다.
  title: "components/common/Circle/Circle",
  component: Circle,
  parameters: {
    // 스토리북 캔버스에 표시되는 위치
    layout: "centered",
    docs: {
      description: {
        component:
          "이 컴포넌트는 카테고리 리스트에서 보여주는 색상입니다. 원 모양처럼 안 보이지만 원 모양으로 제작되어 있습니다.",
      },
    },
  },
} satisfies Meta<typeof Circle>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    title: "기본 테스트",
    description: "색을 기본으로 아무 값이나 넣어둔 상태입니다.",
  },
  parameters: {
    docs: {
      description: {
        story: "기본 테스트 컴포넌트입니다.",
      },
    },
  },
};
