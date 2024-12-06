import Select from "react-select";
import * as Style from "./GroupSelect.style";
import ProfileImg from "../../ProfileImg/ProfileImg";
import { GroupMember, GroupProps } from "@/types/select.types";
import { useEffect, useState } from "react";
import { getGroupMembers } from "@/apis/groups";
import { GroupMembersResponse } from "@/types/apiResponse.type";

function GroupSelect({
  groupId,
  selectedMembersId,
  onMemberChange,
}: GroupProps) {
  const Options = (props: {
    data: GroupMember;
    innerRef: React.Ref<HTMLDivElement>;
    innerProps: JSX.IntrinsicElements["div"];
    isFocused: boolean;
    isSelected: boolean;
  }) => {
    const { data, innerRef, innerProps, isFocused, isSelected } = props;
    return (
      <Style.Option
        ref={innerRef}
        {...innerProps}
        $isFocused={isFocused}
        $isSelected={isSelected}
      >
        <ProfileImg size="small" src={""} alt={data.nickname} />
        {data.nickname}
      </Style.Option>
    );
  };

  const [groupMembers, setGroupMembers] = useState<GroupMember[]>([]);
  const [selectedMembers, setSelectedMembers] = useState<GroupMember[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!groupId) return;

        const data: GroupMembersResponse = await getGroupMembers(groupId);
        if (data?.data) {
          setGroupMembers(data.data);
          setSelectedMembers(
            data.data.filter((member) =>
              selectedMembersId.includes(member.userId)
            )
          );
        }
      } catch (error) {
        console.error("그룹 멤버 조회 중 오류 발생:", error);
      }
    };

    fetchData();
  }, [groupId, selectedMembersId]);

  return (
    <div>
      <Select
        options={groupMembers}
        isMulti
        value={selectedMembers}
        components={{
          Option: Options,
        }}
        styles={{
          control: Style.customControl,
          valueContainer: Style.customContainer,
          multiValue: Style.custommultiValue,
          multiValueRemove: Style.customMultiValueRemove,
        }}
        placeholder={<Style.Placeholder>그룹원을 선택하세요</Style.Placeholder>}
        onChange={(newValue) =>
          onMemberChange(newValue.map((member) => member.userId))
        }
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
      />
    </div>
  );
}

export default GroupSelect;
